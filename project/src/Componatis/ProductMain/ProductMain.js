import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img from '../image-card/keybord.jpg'
import img1 from '../image-card/keybord1.jpg'
import img2 from '../image-card/keybord2.jpg'
import img3 from '../image-card/keybord3.jpg'
import img4 from '../image-card/laptop.jpg'
import img5 from '../image-card/laptop1.jpg'
import img6 from '../image-card/laptop2.jpg'
import img7 from '../image-card/laptop3.jpg'
import img8 from '../image-card/microphon.jpg'
import img9 from '../image-card/microphon1.jpg'
import img10 from '../image-card/microphon2.jpg'
import img11 from '../image-card/microphone3.jpg'
import img12 from '../image-card/mobile.jpg'
import img13 from '../image-card/mobile1.jpg'
import img14 from '../image-card/mobile2.jpg'
import img15 from '../image-card/mobile3.jpg'
import img16 from '../image-card/tv.jpg'
import img17 from '../image-card/tv1.jpg'
import img18 from '../image-card/tv2.jpg'
import img19 from '../image-card/tv3.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductMain(){
  return(
    <div>
      
      <Container>
        
        {/* Card 1  */}
        <Row>
          <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} class="img-fluid w-100 mt-5" />
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
          
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1}  class="img-fluid w-75 mt-5" />
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
          
          
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} class="img-fluid w-100 mt-5"/>
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
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} class="img-fluid w-100 mt-4"/>
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
        
        
        
        {/* Card 2 
         */}
    <Row>
          <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img4} class="img-fluid w-100 mt-5" />
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
          
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img5}  class="img-fluid w-100 mt-5" />
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
          
          
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img6} class="img-fluid w-75 mt-5"/>
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
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img7} class="img-fluid w-100 mt-4"/>
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
        
        
        
       <Container>
               {/* Card 3
         */}
    <Row>
          <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img8} class="img-fluid w-50 mt-5" />
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
          
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img9}  class="img-fluid w-50 mt-5" />
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
          
          
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img10} class="img-fluid w-50 mt-5"/>
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
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img11} class="img-fluid w-75 mt-4"/>
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
        
       </Container>
        <Container>
        
              {/* Card 4
         */}
    <Row>
          <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img12} class="img-fluid w-50 mt-5" />
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
          
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img13}  class="img-fluid w-25 mt-5" />
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
          
          
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img14} class="img-fluid w-50 mt-5"/>
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
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img15} class="img-fluid w-25 mt-4"/>
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
       git remote add origin https://github.com/mdalvinsifat/Electornics-Product.git
        </Container>
         
              {/* Card 4
         */}-u origin main
         <Container>
    <Row>
          <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img16} class="img-fluid w-50 mt-5" />
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
          
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img17}  class="img-fluid w-25 mt-5" />
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
          
          
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img18} class="img-fluid w-50 mt-5"/>
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
          
          
                 <Col md={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img19} class="img-fluid w-25 mt-4"/>
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
        
        
        
        
        
        
        </Container>
        
        
      </Container>
    </div>
  )
}