import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card4 from '../Image/tab3.jpg'
import './Card3.css'
import Card5 from '../Image/Maching.png'
import Card6 from '../Image/empty-cart.jpg'
export default function Card3(){
    return(
         <Container>
                <Row>
                    <Col md={3} className='Display-Card mt-5'>
                        <img src={Card4} alt='' className='w-50'/>
                        <h3>Tab</h3>
                        <p>A tablet computer, commonly shortened to tablet, is a mobile device, typically with a mobile operating system and touchscreen display processing circuitry, and a rechargeable battery in a single, thin and flat package</p>
                        <button className='btn btn-dark'>Buy Now</button>
                    </Col>
                    
                    
                       <Col md={3} className='Display-Card mt-5 ms-5'>
                        <img src={Card5} alt='' className='w-25 mb-2'/>
                        <h3>Washing Maching</h3>
                        <p>A tablet computer, commonly shortened to tablet, is a mobile device, typically with a mobile operating system and touchscreen display processing circuitry, and a rechargeable battery in a single, thin and flat package</p>
                        <button className='btn btn-dark'>Buy Now</button>
                    </Col>
                    
                    
                    <Col md={5}>
                        <img src={Card6} alt="" className="w-100 ms-4"/>
                    </Col>
                    
                </Row>
            </Container>
    )
}