import {render} from '@testing-library/react';
import {test} from 'vitest';

import TransApp from './TransApp';

test('renders', () => {
	render(<TransApp />);
});
