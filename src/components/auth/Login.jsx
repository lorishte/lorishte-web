import React from 'react';

import authService from '../../services/auth/authService';

import Notifications from '../common/notifications/Notifications';

class Login extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	};

	login = (e) => {
		e.preventDefault();

		let {username, password} = this.state;

		if (username.trim() === '') {
			this.notifications.showMessage('invalid username');
			return;
		}

		if (password.trim() === '') {
			this.notifications.showMessage('invalid password');
			return;
		}

		if (sessionStorage.getItem('authtoken')) {
			authService
				.logout() // To logout anonymous user
				.then(() => {
					authService.clearSession();
					this.makeLoginRequest();
				});

			return
		}

		this.makeLoginRequest();

	};

	makeLoginRequest = () => {
		authService.login(this.state)
			.then(res => {
				authService.saveSession(res);
				this.clearForm();
				this.notifications.showMessage('logged in as: ' + res.username);

				let path = '/';
				if (authService.checkUser()) {path = '/admin/projects-list'}

				setTimeout(() => {
					this.props.history.push(path);
				}, 2000)

			})
			.catch(err => {
				this.notifications.showMessage(err.responseJSON.description);
			});
	};

	clearForm = () => {
		this.setState({username: '', password: ''});
	};

	render () {

		return (
			<div id="login" className="container">
				<Notifications onRef={ref => (this.notifications = ref)} language='bg'/>

				<h1>Login</h1>

				<form method="post" onSubmit={this.login}>

					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input type="text"
						       name="username"
						       value={this.state.username}
						       className="form-control"
						       id="username"
						       placeholder="Username"
						       onChange={this.handleChange}/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password"
						       name="password"
						       value={this.state.password}
						       className="form-control"
						       id="password"
						       placeholder="Password"
						       onChange={this.handleChange}/>
					</div>

					<button className="btn btn-primary" type="submit">Login</button>
				</form>
			</div>
		);
	}
}

export default Login;