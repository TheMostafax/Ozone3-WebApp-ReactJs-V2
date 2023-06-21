import React, { useEffect } from "react";
import { preLoaderAnim } from "../animation";
import './PreLoader.css'
const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);
    return ( <div className = "preloader" >
        <div className = "texts-container" >
        <span> Welcome </span> <span> Ozone3 </span> <span> Studio </span> </div > </div>
    );
};

export default PreLoader;