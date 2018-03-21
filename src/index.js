import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Editor from './editor';

const App = () => {
	return(
		<div
			style={{
				width: 1200,
				height: 800,
				margin: 'auto',
				border: '1px solid #eee'
			}}
		>
			<Editor />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);