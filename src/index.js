import React from 'react';
import ReactDOM from 'react-dom';

import Content from './components/content/content';

import './index.css';

const App = () => {
	return (
		<div className="app">
			<h1>Xonotic</h1>
			<Content />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
