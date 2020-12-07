import React, { Component } from 'react';

import './chat.css';

export default class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = (e) => {
		const chat = document.querySelector('.chat');
		const chatWrapper = document.querySelector('.chat_wrapper');
		chatWrapper.classList.toggle('active');
		chat.classList.toggle('active');
		e.currentTarget.classList.toggle('active');
	};

	render() {
		const chat = document.querySelector('.chat');
		const chatWrapper = document.querySelector('.chat_wrapper');
		return (
			<div
				className={
					chatWrapper === null ? (
						'chat_wrapper'
					) : chatWrapper.classList.value.includes('active') ? (
						'chat_wrapper active'
					) : (
						'chat_wrapper'
					)
				}
			>
				<p
					className={
						chat === null ? (
							'btn_chat'
						) : chat.classList.value.includes('active') ? (
							'btn_chat active'
						) : (
							'btn_chat'
						)
					}
					onClick={this.handleClick}
				>
					Chat
				</p>
				<iframe
					className="chat"
					src="https://webchat.quakenet.org/?channels=theregulars&uio=OT10cnVlJjExPTMxf2"
				/>
			</div>
		);
	}
}
