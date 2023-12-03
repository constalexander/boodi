import { render } from '@testing-library/react';

import SignInSignUp from './example';

describe('SignInSignUp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignInSignUp />);
    expect(baseElement).toBeTruthy();
  });
});
