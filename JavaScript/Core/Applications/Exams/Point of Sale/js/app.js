$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', getWelcomePage);
        this.get('index.html', getWelcomePage);

        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPass = ctx.params.repeatPass;

            if (!/^[A-Za-z0-9]{5,}$/.test(username)) {
                notify.showError('Username should be at least 5 characters long');
            } else if (!/^[A-Za-z0-9]{1,}$/.test(password)) {
                notify.showError('Password should be at least 1 characters long');
            } else if (repeatPass !== password) {
                notify.showError('Passwords must match!');
            } else {
                auth.register(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('User registration successful!');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
        });

        this.post('#/login', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if (!/^[A-Za-z0-9]{5,}$/.test(username)) {
                notify.showError('Username should be at least 5 characters long');
            } else if (!/^[A-Za-z0-9]{1,}$/.test(password)) {
                notify.showError('Password should be at least 1 characters long');
            } else if (username === '' || password === '') {
                notify.showError('All fields should be filled!');
            } else {
                auth.login(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('Login successful.');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
        });
        this.get('#/logout', (ctx) => {
            auth.logout()
                .then(() => {
                    sessionStorage.clear();
                    ctx.redirect('#/home');
                })
                .catch(notify.handleError);
        });

        this.get('#/catalog', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
                const endpoint = 'posts?query={}&sort={"_kmd.ect": -1}';
            
                remote.get('appdata', endpoint, 'kinvey')
                .then((posts) => {
                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.posts = posts;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                    }).then(function () {
                        this.partial('./templates/create-receipt-view.hbs');
                    })
                })
                .catch(notify.handleError);
        });

        

        function getWelcomePage(ctx) {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                }).then(function () {
                    this.partial('./templates/welcome-section.hbs');
                })
            } else {
                ctx.redirect('#/catalog');
            }

        }
    });

    app.run();
});