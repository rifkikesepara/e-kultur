import React from "react";
import NavBar from "./components/NavBar";
import SlideShow from "./components/SlideShow";
import logovideo from "./pictures/logosonson.mp4"
import data from "./json-file"
import react from "react";
import Footer from "./components/Footer";

export default function App()
{
  const [windowDimenion, detectHW] = react.useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  react.useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])







  const[style,setStyle]=React.useState(true)

  const events=data.data
  
  function showMainPage()
    {
        setStyle(false)
    }


    // const texts=events.map(item=>{
    //   return(
    //     <SlideShow name={item.name} image={item.resim}/>
    //   )
    // })

  return(
    <div className="container">
      {style&windowDimenion.winWidth>600?
            <div className="video">
              <video src={logovideo} playsInline muted autoPlay onClick={showMainPage}></video>
            </div>:style?<div className="main-page">
      <NavBar/>
      <SlideShow events={events}/>
      </div>
      :style}

      {!style&&
      <div className="main-page">
      <NavBar/>
      <SlideShow events={events}/>
      <Footer/>
      </div>}
    </div> 
  )
}