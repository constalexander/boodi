import { render } from '@testing-library/react';

import PastMessages from './past-messages';

describe('PastMessages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PastMessages />);
    expect(baseElement).toBeTruthy();
  });
});
