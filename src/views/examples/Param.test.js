import { render } from '@testing-library/react';
import Param from './Param';

test('Renders param component', () => {
  render(<Param />);
  expect(<Param />).toMatchSnapshot();
})