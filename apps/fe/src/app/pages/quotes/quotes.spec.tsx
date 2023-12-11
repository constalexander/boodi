import { render } from '@testing-library/react';

import Quotes from './quotes';

describe('Quotes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Quotes />);
    expect(baseElement).toBeTruthy();
  });
});
