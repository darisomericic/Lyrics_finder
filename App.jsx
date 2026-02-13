import style from './lyrics.module.css'
import note from './note.png'
import { useState } from 'react'
import axios from 'axios'




// komponenter for lista
const Lyrics = () => { 
    const [artist, setArtist] = useState('') // komponent for artist 
    const [sang, setSang] = useState ('') // komponent for sang
    const [lyrics, setLyrics] = useState ('') // komponent for lyrics

  
    function searchLyrics() { 
        if (!artist || !sang) {
            alert('Vennligst fyll inn begge felter')
            return;
        }
      



        axios.get(`https://lrclib.net/api/get?artist_name=${encodeURIComponent(artist)}&track_name=${encodeURIComponent(sang)}`) // axios kaller til lyrics 
        .then(response => { // når responsen kommer
            setLyrics(response.data.plainLyrics); // Lyrics settes til data som er hentet fra API
        })

        .catch(error => {
            alert('Feil artist eller sangnavn.')
        });

       
    }




    return (
        <section className={style.container}>
            <div>
            <h1 className={style.header}>Find lyrics to your favourite song! </h1>
            <form action="">
            <input type="search" value={artist} onChange={e => setArtist(e.target.value)} className={style.search} placeholder='Enter artist name...' required />
            <input type="search" value={sang} onChange={e => setSang(e.target.value)} className={style.search} placeholder='Enter song name...' required />
            <button type="button" className={style.button} onClick={() => searchLyrics()}>Search</button>
            </form>
           
            <pre className={style.lyricsBox}>
                <b>{lyrics}</b>
            </pre>
            </div>
        </section>
    )
}

export default Lyrics 