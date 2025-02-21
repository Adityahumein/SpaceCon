import React from "react";
import "./ExploreBtn.css"

export default function ExploreBtn(){
    return(
        <div class="btn">
                    <button id="reserve-btn" type="button">
                        <strong>EXPLORE MORE</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>
                        <div id="glow">
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </button>
                </div>
    )
}