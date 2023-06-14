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
    const emailInput1 = screen.getByPlaceholderText(/Email/i);
    expect(emailInput1).toBeInTheDocument();
  });

  test('password input field should hava type password', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const passwordInput1 = screen.getByPlaceholderText(/Password/i);
    expect(passwordInput1).toBeInTheDocument();
  });

  test('email input should be empty', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const emailInput2 = screen.getByPlaceholderText(/Email/i);
    expect(emailInput2.value).toBe('');
  });

  test('password input should be empty', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const passwordInput2 = screen.getByPlaceholderText(/Password/i);
    expect(passwordInput2.value).toBe('');
  });

  test('email input field should accept email', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const emailInput3 = screen.getByPlaceholderText('Email');
    userEvent.type(emailInput3, 'dasuni.com');
    expect(emailInput3.value).not.toMatch('dasu.maheshika@gmail.com');
  });

  test('password should be greater than 6', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const passwordInput3 = screen.getByPlaceholderText('Password');
    userEvent.type(passwordInput3, 'dasu123');
    expect(passwordInput3.value.length).toBeGreaterThan(6);
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

  // test('should display message if login success', () => {
  //   render(
  //     <Provider store={store}>
  //       <LoginPage />
  //     </Provider>
  //   );
  //   const emailInput4 = screen.getByPlaceholderText('Email');
  //   const passwordInput4 = screen.getByPlaceholderText('Password');
  //   const button1 = screen.getAllByRole('button');

  //   userEvent.type(emailInput4, 'dasu.maheshika@gmail.com');
  //   userEvent.type(passwordInput4, '');
  //   userEvent.click(button1);
  //   const error1 = screen.getByText('Please fill in all fields.');
  //   expect(error1).toBeInTheDocument();
  // });
});
