import react from "react";
import React from "react";
import image from "../pictures/search-icon.png"
import arrow from "../pictures/right-arrow.png"
import { render } from "@testing-library/react";

export default function SlideShow(props)
{
    const [event,sentEvent]=react.useState({
        name:"Etgar Keret İmza Günü",
        info:"Ortadoğu'nun en parlak yıldızı olarak anılan yazar, 18 Mayıs Çarşamba günü saat 17.00'de başlayacak imza gününde okurlarıyla buluşacak.",
        image:"etgar-keret-imza-gunu.jpg",
        location:"İstanbul",
        date:"18-05-2022",
        alt:"etgar"
        })

    const[randomNumber,setRandomNumber]=react.useState(0)
    const [slideAnimation,setSlideAnimation]=react.useState("etkinlik-left")
    const [slideAnimationInfo,setSlideAnimationInfo]=react.useState("information-slide")

    function base()
    {
        setSlideAnimation("etkinlik-base")
        console.log("merhba")
    }

    function baseInfo()
    {
        setSlideAnimationInfo("information")
    }

    function leftSlide()
    {
        const randomNumber=Math.floor(Math.random()*(props.events.length-1))
        const url=props.events[randomNumber].resim
        const name=props.events[randomNumber].name
        const aciklama=props.events[randomNumber].bilgilendirme_yazi
        const locate=props.events[randomNumber].sehir
        const trh=props.events[randomNumber].date
        const expl=props.events[randomNumber].alt
        sentEvent(prevMeme=>({
            name:name,
            image:url,
            info:aciklama,
            location:locate,
            date:trh,
            alt:expl
        }))
        setRandomNumber(randomNumber)
        console.log(url)
        setSlideAnimation("etkinlik-left")
        setSlideAnimationInfo("information-slide")
        console.log(slideAnimation)
       
    }

    function rightSlide()
    {
        const randomNumber=Math.floor(Math.random()*(props.events.length-1))
        const url=props.events[randomNumber].resim
        const name=props.events[randomNumber].name
        const aciklama=props.events[randomNumber].bilgilendirme_yazi
        const locate=props.events[randomNumber].sehir
        const trh=props.events[randomNumber].date
        const expl=props.events[randomNumber].alt
        sentEvent(prevMeme=>({
            name:name,
            image:url,
            info:aciklama,
            location:locate,
            date:trh,
            alt:expl
        }))
        setRandomNumber(randomNumber)
        console.log(url)
        setSlideAnimation("etkinlik-right")
        setSlideAnimationInfo("information-slide")
        console.log(slideAnimation)
        
    }

    
   

    return(
        <div className="slide-container">
            
            <div className="yazi">
            <h1>YAKINDA</h1>
            </div>
            <div className="image">
                <img id="flip" src={arrow} height="20px" onClick={leftSlide} />
                    <div className={slideAnimationInfo} onAnimationEnd={baseInfo}>
                        <img onAnimationEnd={base} className={slideAnimation} src={`${process.env.PUBLIC_URL}/pictures/${event.image}`} alt={event.alt}/>
                        <h1 id="information-text">{event.name}
                        <h1>{event.info}</h1>
                        <div className="important">
                            <h1>{event.location}</h1>
                            <h1>{event.date}</h1>
                        </div>
                        </h1>
                </div>
                <img id="arrow" src={arrow} height="20px" onClick={rightSlide} />
            </div>
      </div>
    )
}