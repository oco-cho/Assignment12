class Jukebox {
    constructor(albums) {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.title} by ${this.artist}. The album has been played ${this.played} times.`;
    }
}

/***************************MY CODE***************************/

const arr = [['Wyclef Jean', 'Wyclef Jean Presents the Carnival'], ['Pink Martini', 'Hey Eugene!'], ['Cake','Fashion Nugget'], ['Flogging Molly', 'Drunken Lullabies'], ['Rancid', '...And Out Come the Wolves'], ['Nirvana', 'Nevermind']];

var jbox = new Jukebox();

let myArr = [];
for (let i = 0; i < arr.length; i++) {
    myArr[i] = new Album(arr[i][0], arr[i][1]);
    jbox.addAlbum(myArr[i]);
}

window.addEventListener('load', () => {
    document.getElementById('btn-show').addEventListener('click', () => {
        document.getElementById('favoriteAlbum').innerHTML = jbox.favoriteAlbum();
    });

    document.getElementById('btn-play').addEventListener('click', () => {
       switch (document.getElementById('music').value) {
            case 'Wyclef Jean':
               myArr[0].play();
               break;
            case 'Pink Martini':
                myArr[1].play();
                break;
            case 'Cake':
               myArr[2].play();
               break;
            case 'Flogging Molly':
               myArr[3].play();
               break;
            case 'Rancid':
               myArr[4].play();
               break;
            case 'Nirvana':
               myArr[5].play();
               break;
       }
       document.getElementById('music').value = '';
    });
});