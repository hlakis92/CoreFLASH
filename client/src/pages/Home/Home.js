import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
//import image to span across page but does not work
import studyCoffree from "../Home/images/studyCoffree.jpeg";
import "./Home.css";
import getUser from "../../utils/api";
import Card from "../../components/Card"
import Title from "../../components/Title"


class Home extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      id: ""
    }
  }
  
  componentDidMount(){
    console.log(this.props);
    getUser().then ( response => {
        console.log(response.data);
        if(response.data.user) {
          this.setState({
            username: response.data.user.username,
            id: response.data.user._id
          });
        }
        
    }

    )
  }

  handleJoinButton = name => {
    console.log(`name = ${name}, userid= ${this.state.id}`);
  };

  render() {
    return (
        <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron> 
              <h1>
                <strong>
                  <i className="fa fa-user-md" /> Login or Signup to begin your studies!
                </strong>
              </h1>
            </Jumbotron>
          </Col>    
        </Row>
        <Row>
            <Col size="md-12">
                <Title style={{textAlign:"center"}}>Our goals for You!</Title>
            </Col>
        </Row>
        <Row>
        <Col size="md-2">
        </Col>
            <Col size="md-8">
                <p style={{textAlign:"center",fontSize: 30}}>CoreFLASH is a personalized, digital tutoring platform focusing on Radiology curriculum. </p>
                <p style={{textAlign:"center",fontSize: 30}}>We strive to help students learn in ways most effective to them, and on their own terms, so they can be confident in their preparation of intensive exams.We've created content and resources approved by experts – speciﬁcally, in the field of radiology to curb your pre and post exam anxiety.</p>
            </Col>
            <Col size="md-2">
        </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
            <Col size="md-12"><div style={{margin:"10%;",backgroundImage:studyCoffree}}>
              <img src={studyCoffree} /> 
              
              </div>
            </Col>
        </Row>
        <br></br><br></br>        
        <Row>

            <Col size="md-12">
                <Title style={{textAlign:"center"}}>Categories specifically catered to your learning!</Title>
            </Col>
        </Row>
        <Row>
        
            <Col size="md-2"></Col>
            <Col size="md-2">
            <Card
                name="Fluoroscopy"
                description="including upper GI and barium enema"
                image="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?cs=srgb&dl=check-up-dentist-doctors-1170979.jpg&fm=jpg"
              />
            </Col>
            <Col size="md-2">
                <Card
                name="Mammography"
                description="find breast tumors and cancer"
                image="https://images.pexels.com/photos/2182972/pexels-photo-2182972.jpeg?cs=srgb&dl=doctor-explaining-explanation-2182972.jpg&fm=jpg"
              />
            </Col>
            <Col size="md-2">
                <Card
                name="Ultrasound"
                description="organs and structures inside the body"
                image="https://images.pexels.com/photos/1464822/pexels-photo-1464822.jpeg?cs=srgb&dl=abdomen-adult-anticipation-1464822.jpg&fm=jpg"
              />
            </Col>

            <Col size="md-2">
                <Card
                name="Computed tomography"
                description="computerized axial tomography (CAT) scan, including CT angiography"
                image="https://images.pexels.com/photos/721166/pexels-photo-721166.jpeg?cs=srgb&dl=backbone-blur-check-721166.jpg&fm=jpg"
              />
            </Col>

            <Col size="md-2"></Col>

        
        </Row>
        
      </Container>
      
    );
  }
}

export default Home;
