import { render } from '@testing-library/react';

import ToolsPage from './tools-page';

describe('ToolsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToolsPage />);
    expect(baseElement).toBeTruthy();
  });
});
