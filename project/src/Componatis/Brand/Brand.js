import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import brand1 from '../Brand Images/brand-01.png'
import brand2 from '../Brand Images/brand-02.png'
import brand3 from '../Brand Images/brand-03.png'
import brand4 from '../Brand Images/brand-04.png'
import brand5 from '../Brand Images/brand-05.png'
import brand6 from '../Brand Images/brand-06.png'
import brand7 from '../Brand Images/brand-07.png'
import brand8 from '../Brand Images/brand-08.png'


export default function Brand(){
    return(
        <Container>
            <Row>
                <Col md={3}>
                    <img src={brand1} alt=''/>
                    </Col>
                    
                       <Col md={3}>
                    <img src={brand2} alt=''/>
                    </Col>
                    
                       <Col md={3}>
                    <img src={brand3} alt=''/>
                    </Col>
                    
                       <Col md={3}>
                    <img src={brand4} alt=''/>
                    </Col>
                    
            </Row>
            
                 <Row>
                <Col md={3}>
                    <img src={brand5} alt=''/>
                    </Col>
                    
                       <Col md={3}>
                    <img src={brand6} alt=''/>
                    </Col>
                    
                       <Col md={3}>
                    <img src={brand7} alt=''/>
                    </Col>
                    
                       <Col md={3}>
                    <img src={brand8} alt=''/>
                    </Col>
                    
            </Row>
        </Container>
    )
}