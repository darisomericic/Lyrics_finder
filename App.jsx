import style from './lyrics.module.css'
import note from './note.png'
import { useState } from 'react'
import axios from 'axios'




// komponenter for lista
const Lyrics = () => { 
    const [artist, setArtist] = useState('') // komponent for artist
    const [sang, setSang] = useState ('') // komponent for sang
    const [lyrics, setLyrics] = useState ('') // komponent for lyrics

  
    function searchLyrics() { // funksjonen for å finne lyrics 
        if (artist === "" || sang === "") { // løkke for når man skriver artist og sang
            return; // etter at man han skrevet artist og en sang så returneres lyrics
        } //else if (artist === sang) { 
            //alert('Skriv en gyldig sang')
            //window.location.reload('./App.jsx')
        //}

        axios.get(`https://api.lyrics.ovh/v1/${artist}/${sang}`) // axios kaller til lyrics 
        .then(res => { // når responsen kommer
            setLyrics(res.data.lyrics); // Lyrics settes til data som er hentet fra API


       // const showLyrics = setTimeout(function () {
            //window.clearTimeout(showLyrics)
           // window.location.reload('./App.jsx')

       // }, 5000)
        });

       
    }




    return (
        <section className={style.container}>
            <div>
            <h1 className={style.header}><img src={note}/>Find lyrics to your favourite song! <img src={note}/></h1>
            <form action="">
            <input type="search" value={artist} onChange={e => setArtist(e.target.value)} className={style.search} placeholder='Enter artist name...' />
            <input type="search" value={sang} onChange={e => setSang(e.target.value)} className={style.search} placeholder='Enter song name...' />
            <button type="button" className={style.button} onClick={() => searchLyrics()}>Search</button>
            </form>
           
            <pre><h1>Lyrics:</h1> {lyrics}</pre>
            </div>
        </section>
    )
}

export default Lyrics 