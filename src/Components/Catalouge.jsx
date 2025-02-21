import React from "react";
import "./Catalouge.css"


export default function Catalouge({ data}) {
    return (
        <div className="catalougeCard">
            <div className="food-card">
                <img src={data.image} alt="" className="food-card-image" />
                <div className="food-card-content">
                    <h2 className="food-card-title">{data.name}</h2>
                    <p className="food-card-description">{data.description}</p>
                    <div className="food-card-rating">
                        <span>Rating: {data.rating} {data.stars}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}