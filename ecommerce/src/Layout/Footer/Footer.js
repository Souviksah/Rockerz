import React from 'react'
import { Button,Row,Col, Container } from 'react-bootstrap'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import { IoLogoTwitter} from 'react-icons/io'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import { Form } from 'react-bootstrap'

  
  
export default function Footer() {
  return (
    <>
    <footer className='W-100 bg-light text-centre'>
      <p> @ 2022 Rockerz.All Rights Reserved | Terms & Condition</p>
     
        <Container>
        
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Email Address"
              className="me-2"
              aria-label="Search"
              
            />
            <Button variant="outline-success">Subscribe</Button>
          </Form>
          
      <Button><AiFillFacebook/></Button> <Button><BsInstagram/></Button> <Button><IoLogoTwitter/></Button> <Button><AiFillYoutube/></Button> <Button><AiFillLinkedin/></Button>
     
      </Container>
      
          
    </footer>
    </>
  )
}
