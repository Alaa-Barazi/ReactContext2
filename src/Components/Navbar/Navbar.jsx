import { useContext, useState } from "react";
import { ModeContext } from "../../mode";
import LightPage from "../LightPage/LightPage";
import DarkPage from "../DarkPage/DarkPage";
import './style.css';
export default function Navbar(){
    const {mode,setMode} = useContext(ModeContext);
    const [bgcolor,setBgcolor] = useState("white");
    const handleClick=()=>{
        if(mode === "Dark"){
            setMode("Light")
            setBgcolor("white")
            
           
        }
        else{
            setBgcolor("black")
            setMode("Dark")
        }
    }
    
    return (
        <>
        <div class="topnav" style={{backgroundColor:bgcolor}}>
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <button onClick={()=>handleClick()} style={{float:"right"}}> {mode} </button>

</div>   
{mode==="Light"?<LightPage/> : <DarkPage/>}
        </>
    )
}



   