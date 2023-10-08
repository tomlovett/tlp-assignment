import { render, screen } from '@testing-library/react';
import Index from '../Index';

test('renders the Index component', () => {
	render(<Index />);

	expect(screen.getAllBy('')).not.toBeNull()
})
