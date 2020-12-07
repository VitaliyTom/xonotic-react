import React, { Component } from 'react';

export default class Server extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = (e) => {
		let foo = Array.from(document.querySelectorAll('button'));
		const wrapperSpinner = document.querySelector('.wrapper_spinner');
		const loading = document.querySelector('.loading');
		const wrapperShadow = document.querySelector('.wrapper_shadow');
		wrapperSpinner.classList.remove('deActive');
		wrapperSpinner.classList.add('active');
		loading.classList.add('active');
		wrapperShadow.classList.add('active');
		for (let i = 0; i < foo.length; i++) {
			foo[i].classList.remove('active');
		}
		e.currentTarget.classList.add('active');
		this.props.changeUrl(e.target.value);
	};

	render() {
		return (
			<React.Fragment>
				<div className="change_server">
					<button
						className="btn server_one active"
						onClick={this.handleClick}
						value="https://dpmaster.deathmask.net/?game=xonotic&showplayers=1&json=1&server=89.163.144.234:26000"
					>
						TheRegulars Instagib
					</button>
				</div>
				<div className="change_server">
					<button
						className="btn server_two"
						onClick={this.handleClick}
						value="https://dpmaster.deathmask.net/?game=xonotic&showplayers=1&json=1&server=89.163.144.234:26001"
					>
						TheRegulars Votable
					</button>
				</div>

				<div className="change_server">
					<button
						className="btn server_three"
						onClick={this.handleClick}
						value="https://dpmaster.deathmask.net/?game=xonotic&showplayers=1&json=1&server=88.198.227.103:26000"
					>
						Relaxed Running
					</button>
				</div>
			</React.Fragment>
		);
	}
}
