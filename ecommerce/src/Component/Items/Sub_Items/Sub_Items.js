import React from 'react'
import { useParams,Link } from 'react-router-dom'
import ItemJSON from "../Item.json";
import{Card,Button, Container,Row} from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function Sub_items() {
    let {itemName}=useParams();
    console.log("Fetched by useParams in sub items:",itemName);
    let itemObj= ItemJSON.electronic_items.find((data)=> data.item_name ===itemName);
    console.log("Item Object:",itemObj);
  
    
  return (
    <>
    <Container>
      
      <h1> itemName:{itemObj.item_name}</h1>
      <Row xxl={4} xl={3} lg={3} mb={3} sm={2}>
      {itemObj.sub_items.map((subItem)=>{
        return( 
          <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"../../../Images/pic1.webp"}   />
      
      <Card.Body>
        <Card.Title>{subItem.company}</Card.Title>
        <Card.Text>
         {subItem.price}
        </Card.Text>
        <Link to={`/item/${itemObj.item_name}/${subItem.company}`}>
        <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"../../../Images/Air.webp"} />
      <Card.Body>
        <Card.Title>{subItem.company}</Card.Title>
        <Card.Text>
         {subItem.price}
        </Card.Text>
        <Link to={`/item/${itemObj.item_name}/${subItem.company}`}>
        <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"../../../Images/pic 6.webp"} />
      <Card.Body>
        <Card.Title>{subItem.company}</Card.Title>
        <Card.Text>
         {subItem.price}
        </Card.Text>
        <Link to={`/item/${itemObj.item_name}/${subItem.company}`}>
        <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card> 

    </Col>
    

        )
})}
      </Row>

</Container>
</>
  )



    
}
