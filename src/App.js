import React,{Component} from 'react';
import './App.css';
// import {flatten,times} from 'loadash';
import {Container,Row,Col} from 'react-bootstrap';

class App extends Component{
  render(){
    const NUMBER_OF_PARA = 5;
    var paragraphs = [];
    var index = 0
    while(index < NUMBER_OF_PARA){
      paragraphs.push(<p key={index}> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>);
      index ++;
    }
    var sidebar = (
      <div>
        <ul>
          <li>Home</li>
          <li>Regions</li>
          <li>AboutUS</li>
        </ul>
      </div>
    );
    return (
      <div className="App">
      <div className="header">
        <div className="header-text"><center><code>Welcome to Voters Dairy</code></center></div>
      </div>
      <div className="app-container">
        <Container>
          <Row>
            <Col lg={2}>
            {sidebar}
            </Col>
            <Col lg={10}>{paragraphs.map(para=>para)}</Col>
          </Row>
        </Container>
      </div>
    </div>
    );
  }
}
export default App;
