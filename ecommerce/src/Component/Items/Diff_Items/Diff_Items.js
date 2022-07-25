import React from 'react'
import { Link } from 'react-router-dom';
import ItemJSON from "../Item.json";
// import'./Diff_items.css'
export default function Diff_items() {
  return (
    <>
    <img src="../../../../Images/motivepic.jpg" alt='background-img'height="600px" width="1500px"></img>
    <h1>Diff_items</h1>
    <ul>
        {ItemJSON.electronic_items.map((itemObj)=>(
            <li key={itemObj.item_id}>
            <div className="items">
                <h3>{itemObj.item_name}</h3>
                <p>{itemObj.item_desc}</p>
                {/* <Link to="/sub_item"> */}
                <Link to={`/sub_item/${itemObj.item_name}`}>
                <button>click on view Sub_items</button>
                </Link>
            </div>
            </li>
        ))}
    </ul>
    </>

  )
}
