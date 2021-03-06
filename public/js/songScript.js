
async function songsTable() {

    console.log(fetch("/api/songs"))

    const songs = await fetch("/api/songs");
    console.log(songs)
    const songsData = await songs.json();
    console.log(songsData)

    const artists = await fetch("/api/artist");
    console.log(artists)
    const artistData = await artists.json();
    console.log(artistData)

    const genres = await fetch("/api/genres");
    console.log(genres)
    const genreData = await genres.json();
    console.log(genreData)

    const songTable = document.querySelector(".tableBody");
    console.log(songTable)
    console.log(songsData);
    
    songsData.forEach((item) => {
        const songArtist = artistData[item.artist_id-1].artist_name;
        const songGenre = genreData[item.genre_id-1].genre_name;
        const appendItem = document.createElement('tr');
        appendItem.innerHTML = `<td>${item.song_id}</td><td>${item.song_name}</td><td>${songArtist}</td><td>${songGenre}</td><td>${item.song_duration}</td>`
        songTable.append(appendItem)
    });
}
window.onload = songsTable;
