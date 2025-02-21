import React from "react"
import "./Menu.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuImageSlider from "./MenuImageSlider";
import Catalouge from "./Catalouge";
import { catalougeData } from "../assets/catalougeData";
import ExploreBtn from "./ExploreBtn";


export default function Menu(){
    const data = [];
    catalougeData.map((obj)=>{
        data.push(obj);
    })
    return(
        <div className="ground">
            <div className="menuSlider">
            <MenuImageSlider className="menuImageSlider"/>
            </div>
            <div className="options">
                <Catalouge  className="catalouge" data ={data[0]}/>
                <Catalouge  className="catalouge" data ={data[1]}/>
                <Catalouge  className="catalouge" data ={data[2]}/>
                <Catalouge  className="catalouge" data ={data[3]}/>
                <Catalouge className="catalouge"  data ={data[4]}/>
                <Catalouge className="catalouge"  data ={data[5]}/>
                <Catalouge className="catalouge"  data ={data[6]}/>
                <Catalouge className="catalouge"  data ={data[7]}/>
                <Catalouge className="catalouge"  data ={data[8]}/>
                <Catalouge className="catalouge"  data ={data[9]}/>
                <Catalouge className="catalouge"  data ={data[10]}/>
                <Catalouge className="catalouge"  data ={data[11]}/>
            </div>
            <ExploreBtn/>
        </div>
    )
}