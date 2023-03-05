import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './Fottar.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Fottar(){
return(
    
    <div>
 <Container fluid className="Product-detelis">
        <Row>
        <Col md={6} className="service mt-5">
          <h3>Electornics-Product</h3>
        </Col>
        
        
        
         <Col md={6} className=" mt-5">
              <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success btn-success text-light">Search</Button>
                </Form>
        </Col>
    </Row>
    
    
    <Row>
        <Col md={3} className='text-light text-center bottom-product mt-4'>
            <h3>Product</h3>
            <p>Phone</p>
            <p>Cammera</p>
            <p>TV</p>
            <p>Tab</p>
            <p>Washing Machine</p>
            <p>Watch</p>
            <p>Head App</p>
            <p>Headphone</p>
            <p>Speakar</p>
        </Col>
        
        
        
        
             <Col md={3} className='text-light text-center bottom-product mt-4'>
            <h3>Brand</h3>
            <p>Apple</p>
            <p>Intel</p>
            <p>LG</p>
            <p>Dell</p>
            <p>Cannon</p>
            <p>Bose</p>
            <p>Sandisk</p>
            <p>Asus</p>
        </Col>
        
        
            <Col md={3} className='text-light text-center bottom-product mt-4'>
            <h3>Location</h3>
            <p>Bangladesh</p>
            <p>India</p>
            <p>Pakistan</p>
            <p>South Africa</p>
            <p>Saudi Arba</p>
            <p>Germany</p>
            <p>United States</p>
        </Col>
          <Col md={3} className='text-light text-center bottom-product mt-4'>
            <h3>Online</h3>
            <p>Facebook</p>
            <p>Web Site </p>
            <p>YouTube</p>
            <p>Email</p>
            <p>Linkdin</p>
            <p>Twittor</p>
          
        </Col>
    </Row>
    
 </Container>
        
    </div>
)
}