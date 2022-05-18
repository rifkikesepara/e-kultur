import react from "react";
import logo from "../pictures/logo.svg"
import searchIcon from "../pictures/search-icon.png"
import menuIcon from "../pictures/menu.png"
import { NavLink } from "react-router-dom";

export default function NavBar()
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









    const[style,setStyle]=react.useState(false)
    const[menu,setMenu]=react.useState(false)
    
    function showSearchbar()
    {
        setStyle(true)
    }

    function unshowSearchbar()
    {
        setStyle(false)
    }

    function showMenu()
    {
        setMenu(true)
    }

    function unshowMenu()
    {
        if(menu===true)
        {

            setMenu(false)
        }
    }

    return(
        <nav className="nav">
        
        
            <div className="logo">
                <img className="logo-icon" src={logo}/>
                <h1 id="logo-text">e-Kültür</h1>

                <form onMouseEnter={showSearchbar}>
                <img src={searchIcon} className="search-icon" onClick={unshowSearchbar}/>
                
                <input className={style? "search-bar-open":"search-bar-close"} 
                type="text" 
                placeholder="Aramak istediğiniz etkinliği yazınız"></input>
                
                </form>
            <div className="menu">
                <h1>Kurumsal</h1>
                <h1>Etkinlikler</h1>
                
            </div>
            </div>
            

           {menu? <div className="form" onMouseOut={unshowMenu}>
                <h1 id="login">Giriş Yap</h1>
                <h1 id="register">Kayıt Ol</h1>
            </div>:windowDimenion.winWidth>600 ?<div className="form" onMouseOut={unshowMenu}>
                <h1 id="login">Giriş Yap</h1>
                <h1 id="register">Kayıt Ol</h1>
            </div>:menu }
                <img id="menu-icon" src={menuIcon} height="40px" onClick={showMenu}/>
        </nav>
    )
}