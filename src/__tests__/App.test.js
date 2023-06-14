import { render, screen } from '@testing-library/react';
import App from '../../src/App';
import store from '../store';
import { Provider } from 'react-redux';

test('render LoginPage component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const loginPageComponent = screen.getByTestId('login-component');
  expect(loginPageComponent).toBeInTheDocument();
});
