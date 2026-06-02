import React from "react";
import './ProductCard.css';
import Btn from "./button";

function Card(){


    return(
        <div className="main">
            <div className="product">
                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-DQ8426-107_1.jpg?rnd=20200526195200&tr=w-1536"/>
                <h2>Nike Air Jordan 1</h2>
                <Btn />
            </div>

            <div className="product">
                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-DQ8426-107_1.jpg?rnd=20200526195200&tr=w-1536"/>
                <h2>Nike Air Jordan 2</h2>
                <Btn />
            </div>

            <div className="product">
                <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-DQ8426-107_1.jpg?rnd=20200526195200&tr=w-1536"/>
                <h2>Nike Air Jordan 3</h2>
                <Btn />
            </div>
        </div>
    )
}

export default Card