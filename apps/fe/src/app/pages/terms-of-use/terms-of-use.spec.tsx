import { render } from '@testing-library/react';

import TermsOfUse from './terms-of-use';

describe('TermsOfUse', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TermsOfUse />);
    expect(baseElement).toBeTruthy();
  });
});
