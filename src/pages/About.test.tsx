import { render, screen } from '@testing-library/react';

import About from './About';

describe('About', () => {
  test('Renders About', () => {
    render(<About />);
    // screen.debug();
    expect(screen.getByRole('heading').textContent).toBe('tasky');
  });
});
