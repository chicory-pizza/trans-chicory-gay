// @flow

import {fireEvent, render, screen, waitFor} from '@testing-library/preact';
import {expect, test} from 'vitest';

import TransApp from './TransApp';

test('renders', () => {
	render(<TransApp />);
});

test('increases the counter when the hare is clicked', async () => {
	render(<TransApp />);

	for (let i = 1; i <= 5; i += 1) {
		fireEvent.click(screen.getByLabelText('Trans Chicory'));
	}

	await waitFor(() => {
		expect(screen.getByTestId('counter').textContent).toEqual('5');
	});
});
