import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default class HtmlComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: props
		};
	}

	render() {
		return <div className="player_name">{ReactHtmlParser(this.props.name)}</div>;
	}
}
