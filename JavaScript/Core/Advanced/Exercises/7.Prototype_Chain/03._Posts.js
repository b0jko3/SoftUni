function posts() {
    class Post {
        constructor(title, content) {
            this.title = title
            this.content = content
        }

        toString() {
            return `Post: ${this.title}
Content: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = likes
            this.dislikes = dislikes
            this.comments = []
            this.rating = likes - dislikes
        }

        addComment(currentComment) {
            this.comments.push(currentComment)
        }

        toString() {
            if(this.comments.length === 0) {
                return `Post: ${this.title}
Content: ${this.content}
Rating: ${this.rating}`
            } else {
                let result = `Post: ${this.title}
Content: ${this.content}
Rating: ${this.rating}
Comments:
`
                for (let i = 0; i < this.comments.length; i++) {
                    if (i === this.comments.length - 1) {
                        result += ` * ${this.comments[i]}`
                    } else {
                        result += ` * ${this.comments[i]}
`
                    }
                }
                return result
            }
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content)
            this.views = views
        }

        view() {
            this.views++
            return this
        }

        toString() {
            return `Post: ${this.title}
Content: ${this.content}
Views: ${this.views}`
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}
