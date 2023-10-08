import { render, screen } from '@testing-library/react';
import ImageDetail from '../ImageDetail';

test('renders the ImageDetail component', () => {
	render(<ImageDetail />);

	expect(screen.getAllBy('')).not.toBeNull()
})
