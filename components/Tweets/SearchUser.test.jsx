import React from 'react';
import { render, screen, fireEvent, waitFor } from './../../utils/test-utils';

import SearchUser from './SearchUser.jsx';

describe('search input tests', () => {
  test('calls the onChange callback handler', () => {
    const onChange = jest.fn();

    render(<SearchUser />);
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('');
    fireEvent.change(input, {
      target: { value: 'nextofficial' },
    });
    expect(input.value).toBe('nextofficial');
    waitFor(() => expect(onChange).toHaveBeenCalledTimes(1));
  });
});
