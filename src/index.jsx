// @flow strict

import {render} from 'preact';

import ErrorBoundary from './ErrorBoundary';
import TransApp from './trans/TransApp';
import './index.css';
import {hareConsoleText} from './util/hareConsoleText';

// Start
console.log(hareConsoleText);

const container = document.getElementById('root');
if (container == null) {
	throw new Error('App root container is missing');
}

render(
	<ErrorBoundary>
		<TransApp />
	</ErrorBoundary>,
	container
);
