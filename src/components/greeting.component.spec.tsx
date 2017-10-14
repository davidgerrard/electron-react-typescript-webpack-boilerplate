import React from 'react';
import * as renderer from 'react-test-renderer';

import Greeting from './greeting.component';

describe('Greeting (Snapshot)', () => {
  it('Greeting renders correct text', () => {
    const component = renderer.create(<Greeting />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
