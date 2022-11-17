import React from 'react'
import ItemJSON from "../Item.json";
import { useParams } from 'react-router-dom';



export default function Single_Items() {
    let{itemName,company}=useParams(); 
    console.log("value through useParams in single_items:",itemName,company);
    let itemObj =ItemJSON.electronic_items.find((data)=>data.item_name===itemName);
    console.log("Item Object:",itemObj);
    let SingleItem= itemObj.sub_items.find((data)=>data.company===company);
    console.log("SingleItem:",SingleItem);
  return (
    <div>Single_item</div>
  )
}

