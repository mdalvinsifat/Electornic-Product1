import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from '../Image/blog-1.png'
import './Card1.css'



export default function Card1(){
    return(
<div>
    <Container>
        <Row className='mt-4'>
            <Col md={6} >
                <img src={Card}alt=''/>
            </Col>
            
              <Col md={6} className="path mt-4" >
               <h3> Spical Sale Your Family</h3>
               <p>
                   Electronic devices can convert A.C. power into D.C. power which has various uses like charging storage batteries, electroplating, etc., with great ease as well as efficiency. A weak signal can be strengthened through the process of amplification and this process can be very easily achieved by electronic devices.
               </p>
               
               <button className='btn btn-primary'>Product</button>
               
            </Col>
        </Row>
        </Container>
</div>
    )
}