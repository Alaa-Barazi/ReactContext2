import { createContext, useState } from "react";
import LightPage from "./Components/LightPage/LightPage";
import DarkPage from "./Components/DarkPage/DarkPage";

export const ModeContext = createContext();

export function ModeProvider(props){
    
    const [mode,setMode]=useState("Light");
    // const updateMode=()=>{
    //    if(mode=="make Night"){
    //     setMode("make Light");
    //    <DarkPage/>
        
        
    //    }
    //    else{
    //     setMode("make Night");
        
    //     <LightPage/>
    //    }
    // }
    
    return (
        <ModeContext.Provider value={{mode,setMode}}>
           {props.children}
        </ModeContext.Provider>
    );
}