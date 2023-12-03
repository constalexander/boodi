import { render } from '@testing-library/react';

import CookiePolicy from './cookie-policy';

describe('CookiePolicy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CookiePolicy />);
    expect(baseElement).toBeTruthy();
  });
});
