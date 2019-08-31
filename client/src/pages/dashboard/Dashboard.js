import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Dashboard.css";
import Card from "../../components/Card";
import Title from "../../components/Title";
import getUser from "../../utils/api";
import API from "../../utils/pitchApi";
import PitchContainer from "../../components/PitchContainer"

class Dashboard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      title: "",
      description: "",
      date: {},
      url: "",
      titlesAndDescriptions: []
    }
  }

  componentDidMount(){
    console.log(this.props);
    getUser().then ( response => {
        console.log(response.data);
        if(response.data.user) {
          this.setState({
            username: response.data.user.username
          });
        }
    
    }

    )
  }

  handleChange = (event) => {
    this.setState({
        title: event.target.value,
        // description: event.target.value
    }); 
}

handleChange2 = (event) => {
    this.setState({ 
        // title: event.target.value,
        description: event.target.value
    });
}

handleSubmit = (event) => {
    // alert('A name was submitted: ' + this.state.title);
    event.preventDefault();
    this.setState({
        title: event.target.value,
        description: event.target.value,
        titlesAndDescriptions: [...this.state.titlesAndDescriptions].concat({title: this.state.title, description: this.state.description, upVote: 0, downVote: 0})
    })
    const userInput = {
      title: this.state.title,
      description:this.state.description,
      username:this.state.username
    };
    console.log(userInput)
    API.savePitch(userInput);
}

// //this is the code that needs to be finished 
// handleUpVote = (event) => {
//   console.log(event.target);
//   const arrayIndex = parseInt(event.target.getAttribute("data-index"))
//   const newtitlesAndDescriptions = this.state.titlesAndDescriptions
//   newtitlesAndDescriptions[arrayIndex] = this.state.titlesAndDescriptions
//   this.setState({

//   })

// }

pitchContainer = (props) => {
    let titleLength = Object.keys(this.state.title).value;
    let descriptionLength = Object.keys(this.state.description).value;
}


  render() {
    return (
        <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                <strong>
                  <i className="fa fa-user" /> Welcome <h1 style={{fontWeight:"bolder", fontSize: "64px", color:"blue"}}>{this.state.username}</h1>
                </strong>
              </h1>
            </Jumbotron>
          </Col>    
        </Row>
       
        <br></br><br></br><br></br>
      </Container>
      
    );
  }
}

export default Dashboard;
