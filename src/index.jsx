// @flow strict

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

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

const root = createRoot(container);
root.render(
	<StrictMode>
		<ErrorBoundary>
			<TransApp />
		</ErrorBoundary>
	</StrictMode>
);
