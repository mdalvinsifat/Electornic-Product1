
import Carousel from 'react-bootstrap/Carousel'
import Banner1 from '../Images/main-banner.png'
import Banner2 from '../Images/main-banner-1-.png'
import Banner3 from '../Images/catbanner-04.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Carousels.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Images1 from '../Images/catbanner-01.jpg'
import Images2 from '../Images/catbanner-02.jpg'

export default function Carousels(){
    
    return(
  
  <Container fluid>
    <Row className='mt-5'>
      
      <Col md={6}>
        <Carousel>
      <Carousel.Item className='Color '>
           <Row>
          <Col md={6} className='mt-5'>
                 <h1>Shopping</h1>
            <h3>Special Sale</h3>
            <p>Happy Your Family</p>
            <Button className='btn btn-info'>About Product</Button>
          </Col>

          <Col md={6} className='mt-5'>
               <img
          className="d-block w-100"
          src={Banner1}
          alt="Third slide"
        />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item className="Color">
         <Row>
          <Col md={6} className='mt-5'>
                 <h1>Shopping</h1>
            <h3>Special Sale</h3>
            <p>Happy Your Family</p>
                 <Button className='btn btn-info'>About Product</Button>
          </Col>

          <Col md={6} className='mt-5'>
               <img
          className="d-block w-100"
          src={Banner2}
          alt="Third slide"
        />
          </Col>
        </Row>

      </Carousel.Item>
      <Carousel.Item className='Color'>
        <Row>
          <Col md={6} className='mt-5'>
                 <h1>Shopping</h1>
            <h3>Special Sale</h3>
            <p>Happy Your Family</p>
                 <Button className='btn btn-info'>About Product</Button>
          </Col>

          <Col md={6} className='mt-5'>
               <img
          className="d-block w-100"
          src={Banner3}
          alt="Third slide"
        />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
        
        
      </Col>
      
      
      
      
      
    <Col md={6}>
      <Row>
        <Col md={6}>
            <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={Images1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          
          </Col>
          
            <Col md={6}>
            <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={Images2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          
          </Col>
      </Row>
      
    </Col>
      
    </Row>
  </Container>
    
    

    )
}