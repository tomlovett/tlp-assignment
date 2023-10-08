import { render, screen } from '@testing-library/react';
import ImagesIndex from '../ImagesIndex';

test('renders the ImagesIndex component', () => {
	render(<ImagesIndex />);

	expect(screen.getAllBy('')).not.toBeNull()
})
