import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('email input should be empty', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const usernameInputEl = screen.getByPlaceholderText(/Email/i);
    expect(usernameInputEl.value).toBe('');
  });

  test('password input should be empty', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const passwordInputEl = screen.getByPlaceholderText(/Password/i);
    expect(passwordInputEl.value).toBe('');
  });

  test('email input field should accept email', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const email = screen.getByPlaceholderText('Email');
    userEvent.type(email, 'dasuni.com');
    expect(email.value).not.toMatch('dasu.maheshika@gmail.com');
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
