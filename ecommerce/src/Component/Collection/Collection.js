import React from 'react'
import { Card,Button } from 'react-bootstrap';


const Collection =()=> {
  return (
    <>
    <div className="my-5">
      <h1 className='tab-conter'>Collections</h1>
    </div>
    <div className='container-fluid mb-5'>
      <div className='row'>
        <div className='col-10 mx-auto'>
          <div className='row gy-4'>
            <div className='col-md-4 col-10 mx-auto'>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src={"../../../Images/pic1.webp"} />
      <Card.Body>
        <Card.Title>AIRDOPS</Card.Title>
        <Card.Text>
          Tune in now
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
            <div className='col-md-4 col-10 mx-auto'>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"../../../Images/pic 5.webp"} />
      <Card.Body>
        <Card.Title>STONE</Card.Title>
        <Card.Text>
         Start the party
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
            <div className='col-md-4 col-10 mx-auto'>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"../../../Images/pic 6.webp"} />
      <Card.Body>
        <Card.Title>AAVANTE</Card.Title>
        <Card.Text>
          Gets your now
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
            <div className='col-md-4 col-10 mx-auto'>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"../../../Images/pic 7.webp"} />
      <Card.Body>
        <Card.Title>TRebel</Card.Title>
        <Card.Text>
        Colors Galore
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
            <div className='col-md-4 col-10 mx-auto'>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"../../../Images/pic 8.webp"} />
      <Card.Body>
        <Card.Title>DATA CABLE</Card.Title>
        <Card.Text>
         Connect now
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
            <div className='col-md-4 col-10 mx-auto'>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"../../../Images/pic 9.webp"} />
      <Card.Body>
        <Card.Title>Headset</Card.Title>
        <Card.Text>
          Grab now
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Collection;