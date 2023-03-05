
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardimg from '../Image/acc.jpg'
import Button from 'react-bootstrap/Button';
import Cardimg2 from '../Image/camera.jpg'
import Cardimg3 from '../Image/laptop.jpg'
import Cardimg4 from '../Image/speaker.jpg'
import Cardimg5 from '../Image/tv.jpg'
import Cardimg6 from '../Image/tab3.jpg'
import './CardSmail.css'
export default function CardSmail(){
    
   
    return(
        <div>
            <Container fluid>
                <Row className='mt-3 '>

                 
                 
                  <Col md={4}>
                          <div className='Design-Card'>
                     <img src={Cardimg} alt=''/>
                     <h3>Headphone</h3>
                     <h5>Price:$50</h5>
                     <p>Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an ..</p>
                     <Button className='btn btn-info'>Buy Now</Button>
             </div>
                 </Col>
                 
                 
                 
                  <Col md={4}>
                          <div className='Design-Card ms-3'>
                     <img src={Cardimg2} alt=''/>
                     <h3>Headphone</h3>
                     <h5>Price:$50</h5>
                     <p>Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an ..</p>
                     <Button className='btn btn-info'>Buy Now</Button>
             </div>
                 </Col>
                 
                 
                  <Col md={4}>
                          <div className='Design-Card'>
                     <img src={Cardimg3} alt=''/>
                     <h3>Headphone</h3>
                     <h5>Price:$50</h5>
                     <p>Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an ..</p>
                     <Button className='btn btn-info'>Buy Now</Button>
             </div>
                 </Col>
                 
            
                </Row>
            </Container>
            
            
            
            
            
              <Container fluid>
                <Row className='mt-5'>

                 
                 
                  <Col md={4}>
                          <div className='Design-Card'>
                     <img src={Cardimg6} alt='' className='w-25'/>
                     <h3>Headphone</h3>
                     <h5>Price:$50</h5>
                     <p>Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an ..</p>
                     <Button className='btn btn-info'>Buy Now</Button>
             </div>
                 </Col>
                 
                 
                  <Col md={4}>
                          <div className='Design-Card ms-3'>
                     <img src={Cardimg4} alt=''/>
                     <h3>Headphone</h3>
                     <h5>Price:$50</h5>
                     <p>Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an ..</p>
                     <Button className='btn btn-info'>Buy Now</Button>
             </div>
                 </Col>
                 
                 
                  <Col md={4}>
                          <div className='Design-Card'>
                     <img src={Cardimg5} alt=''/>
                     <h3>Headphone</h3>
                     <h5>Price:$50</h5>
                     <p>Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an ..</p>
                     <Button className='btn btn-info'>Buy Now</Button>
             </div>
                 </Col>
                 
            
                </Row>
            </Container>
        </div>
     
    )
}