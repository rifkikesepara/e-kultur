import react from "react";
import genclik from "../pictures/genclikvespor.png"
import kultur from "../pictures/kulturveturizmbakanlık.png"

export default function Footer()
{
    return(
        <footer>
            <img src={genclik} height="120px"/>
            <img src={kultur} height="120px"/>
        </footer>
    )
}