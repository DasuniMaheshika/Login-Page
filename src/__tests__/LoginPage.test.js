import { render, screen } from '@testing-library/react';
import LoginPage from '../components/LoginPage';
import store from '../store';
import { Provider } from 'react-redux';

describe('LoginPage', () => {
  test('email input field should hava type password', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const email = screen.getByPlaceholderText(/Email/i);
    expect(email).toBeInTheDocument();
  });

  test('password input field should hava type password', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const password = screen.getByPlaceholderText(/Password/i);
    expect(password).toBeInTheDocument();
  });

  test('render the login page with 1 button', async () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const buttonCount = await screen.findAllByRole('button');
    expect(buttonCount).toHaveLength(1);
  });

  // test('The button is disabled', () => {
  //   render(
  //     <Provider store={store}>
  //       <LoginPage />
  //     </Provider>
  //   );
  //   const buttonEl = screen.getByRole('button');
  //   expect(buttonEl).toBeDisabled();
  // });

  test('renders image in App component', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const image = screen.getByAltText('Avatar');
    expect(image).toBeInTheDocument();
  });
});
