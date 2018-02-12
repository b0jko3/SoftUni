function nowPlaying([trackName, artistName, duration]) {
    let result = `Now Playing: ${artistName} - ${trackName} [${duration}]`

    console.log(result)
}

nowPlaying(['Number One', 'Nelly', '4:09'])
//Now Playing: Nelly – Number One [4:09]
