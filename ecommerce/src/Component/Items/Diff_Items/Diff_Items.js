import React from 'react'
import { Link } from 'react-router-dom';
import ItemJSON from "../Item.json";
 import'./Diff_Items.css'
export default function Diff_items() {
  return (
    <>
    <div className='style'>
    <div className="container nav_bg ">
        <div className="row d-flex justify-content-center">
          <div className="col">
            <div className="row d-flex justify-content-center">
            {/* <div className="d-flex justify-content-center ">
             */}

    {/* <div className="col-lg-20 order-1 order-lg-2 header-img w-20 row-lg-20 order-2 order-lg-2">
    <img src="../../../../Images/motivepic.jpg" ClassName="motive"alt='motive'height="500px" width="500px" ></img> 
    </div>  */}
    <h1>ITEMS</h1>
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
    </div>
    </div>
            </div>
          </div>
          {/* </div> */}
          </div>
    </>

  )
}
