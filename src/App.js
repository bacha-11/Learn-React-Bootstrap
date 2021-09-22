import './App.css';
import { Button, Col, Row } from 'react-bootstrap';



function App() {
  return (
    <div className="App mx-0">
      <Row className="">
        <Button as={Col} variant="primary" >Click Me</Button>
        <Button as={Col} variant="success" className="mx-2" >Click Me</Button>
        <Button as={Col} variant="secondary" >Click Me</Button>
        <Button as={Col} className="mine mx-2">Click Me</Button>
      </Row>
    </div>
  );
}

export default App;
