// @flow

import {render} from '@testing-library/preact';
import {test} from 'vitest';

import TransApp from './TransApp';

test('renders', () => {
	render(<TransApp />);
});
