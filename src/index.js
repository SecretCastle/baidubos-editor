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
			<Editor
				
				endpoint={'https://fog-pub-cfz.gz.bcebos.com'}
				bucket={'fog-pub-cfz'}
				type={'cfz-editor'}
				uptokenurl={'https://cnapitest.fogcloud.io/get_bos_sign/?fog_token=ut 16094aae6bf09f16f6a1617b5869f0a0078f170a'}
			/>
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);