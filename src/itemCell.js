import './itemCell.css';
import d1 from "./img/douszne1.jpg";
import d2 from "./img/douszne2.jpg";
import d3 from "./img/douszne3.avif";
import d4 from "./img/douszne4.png";
import d5 from "./img/douszne5.jfif";
import n1 from "./img/nauszne1.webp";
import n2 from "./img/nauszne2.webp";
import n3 from "./img/nauszne3.png";
import n4 from "./img/nauszne4.avif";

function ItemCell(props){
    const imageSelect = () =>{
        switch(props.product.nr){
            case 1:
                return <img src={d1}/>
            case 2:
                return <img src={d2}/>
            case 3:
                return <img src={n1}/>
            case 4:
                return <img src={n2}/>
            case 5:
                return <img src={n3}/>
            case 6:
                return <img src={d3}/>
            case 7:
                return <img src={n4}/>
            case 8:
                return <img src={d4}/>
            case 9:
                return <img src={d5}/>
        }
    }
    return(
        <div id="itemCell">
            { imageSelect() }
            <h3>{props.product.name}</h3>
            <p className={props.product.ratings > 2.5 ? "goodRating" : "badRating"}>★ {props.product.ratings}</p>
            <p>{props.product.desc}</p>
            <div className="buyButton">
                <p>{props.product.price}.00 zł</p>
                <button>BUY NOW</button>
            </div>
        </div>
    );
}

export default ItemCell;