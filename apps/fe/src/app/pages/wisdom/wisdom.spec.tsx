import { render } from '@testing-library/react';

import Wisdom from './wisdom';

describe('Wisdom', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Wisdom />);
    expect(baseElement).toBeTruthy();
  });
});
