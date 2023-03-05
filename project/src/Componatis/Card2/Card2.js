import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import image1 from '../Image/watch.jpg'
import image2 from '../Image/homeapp.jpg'
import image3 from '../Image/headphone.jpg'


export default function Card2(){
    return(
        <div>
            <Container fluid className="mt-3">
                
                <Row>
            
                        <Col md={4}>
                          <div className='Design-Card'>
                     <img src={image1} alt=''/>
                     <h3>Headphone</h3>
                     <h5>Price:$50</h5>
                     <p>Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an ..</p>
                     <button className='btn btn-info'>Buy Now</button>
             </div>
                 </Col>
                 
                 <Col md={4}>
        <div className="Design-Card mt-5">
                         <img src={image2} alt=''/>
                     <h3>Head App</h3>
                    <p>
                        Con l'arrivo dei nuovi farmaci contro l'emicrania (anticorpi monoclonali contro CGRP), HeadApp! aiuta ad individuare i candidati per le nuove terapie attraverso una concreta analisi dei dati 
                    </p>
                    <button className="btn btn-info">Buy Now</button>
        </div>
                 </Col>
                 
                 
                  <Col md={4}>
        <div className="Design-Card mt-5">
                         <img src={image3} alt=''/>
                     <h3>Head App</h3>
                    <p>
                        Con l'arrivo dei nuovi farmaci contro l'emicrania (anticorpi monoclonali contro CGRP), HeadApp! aiuta ad individuare i candidati per le nuove terapie attraverso una concreta analisi dei dati 
                    </p>
                    <button className="btn btn-info">Buy Now</button>
        </div>
                 </Col>
                    
                </Row>
            </Container>
        </div>
    )
}