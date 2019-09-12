import React, { Component } from 'react'
import "./SignUp.css";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from '../../components/Jumbotron';
import { cpus } from 'os';

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			shouldRedirectHome: false

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		console.log('sign-up-form, username: ');
		console.log(this.state.username);
		//console.log(this.state.password)
		//request to server here
		axios.post('/user/signup', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log("This is the response" + response.data)
				console.log(response)
				if (response.data) {
					console.log('successful signup')
					axios.post('/user/login', {
						username: this.state.username,
						password: this.state.password
					})
						.then(response => {
							console.log("This is the response" + response.data)
							console.log(response)
							if (response.data) {
								console.log('successful Login')
								this.setState({
									shouldRedirectHome: true
								})
							} else {
								alert('Sign-up error')
								console.log('Sign-up error');

							}
						}).catch(error => {
							alert('Sign up error')
							console.log('Sign up server error: ')
							console.log(error);
						})

				} else {
					alert('Sign-up error')
					console.log('Sign-up error');

				}
			}).catch(error => {
				console.log('Sign up error: ')
				console.log(error);
			})
	}
	render() {
		if (this.state.shouldRedirectHome) {
			return <Redirect to="/dashboard" />;
		}
		return (
			<Container className="formSection">

				<Row>
					<Col size="md-12" className="topRow"></Col>
				</Row>

				<Row>
					<Col size="md-4"></Col>
					<Col size="md-4" >
						<br></br><br></br>
						<Jumbotron>
							<Row>
							<Col size="md-12" >
							<div className="SignupForm">
								<form className="form-horizontal">
									
									<div className="form-group">
										<div className="">
											<label className="form-label" htmlFor="username">Username:</label>
										</div>
										<div className="">
											<input className="form-input"
												type="text"
												id="input-example-1"
												placeholder="Name"
												name="username"
												value={this.state.username}
												onChange={this.handleChange}
											/>
											{console.log(this.state)}
										</div>
									</div>
									
									<div className="form-group">
										<div className="">
											<label className="form-label" htmlFor="password">Password: </label>
										</div>
										<div className="">
											<input className="form-input"
												placeholder="Password"
												type="password"
												name="password"
												value={this.state.password}
												onChange={this.handleChange}
											/>
										</div>
									</div>
									
									<div className="form-group ">
										<div className=""></div>
										<button className="btn btn-primary" onClick={this.handleSubmit}>Sign up</button>
									</div>
								</form>
							</div>
							</Col>
							</Row>
						</Jumbotron>
					</Col>
				</Row>

				<Row>
					<Col size="md-12" className="topRow"></Col>
				</Row>

			</Container>
		)
	}
}

export default SignUp;
