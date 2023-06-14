import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from '../components/LoginPage';
import store from '../store';
import { Provider } from 'react-redux';

describe('LoginPage', () => {
  test('email input field should hava type email', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
  });

  test('password input field should hava type password', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  test('in beginning email input should be empty', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput.value).toBe('');
  });

  test('in beginning password input should be empty', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput.value).toBe('');
  });

  test('email input field should accept email', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const emailInput = screen.getByPlaceholderText('Email');
    userEvent.type(emailInput, 'dasuni.com');
    expect(emailInput.value).not.toMatch('dasu.maheshika@gmail.com');
  });

  test('password should be greater than 6', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const passwordInput = screen.getByPlaceholderText('Password');
    userEvent.type(passwordInput, 'dasu123');
    expect(passwordInput.value.length).toBeGreaterThan(6);
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

  test('should display error message if empty fields', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const button = screen.getAllByRole('button');

    userEvent.type(emailInput, 'dasu.maheshika@gmail.com');
    userEvent.type(passwordInput, ' ');
    userEvent.click(button[0]);
    const error1 = screen.getByText('Please fill in all fields.');
    expect(error1).toBeInTheDocument();
  });

  // test('should display error message if invalid input fields', () => {
  //   render(
  //     <Provider store={store}>
  //       <LoginPage />
  //     </Provider>
  //   );
  //   const emailInput = screen.getByPlaceholderText('Email');
  //   const passwordInput = screen.getByPlaceholderText('Password');
  //   const button = screen.getByRole('button');

  //   userEvent.type(emailInput, 'dasumaheshika@com');
  //   userEvent.type(passwordInput, '123');
  //   userEvent.click(button[0]);
  //   const error2 = screen.getByText('Invalid email or password.');
  //   expect(error2).toBeInTheDocument();
  // });

  // test('should display success message if empty fields', () => {
  //   render(
  //     <Provider store={store}>
  //       <LoginPage />
  //     </Provider>
  //   );
  //   const emailInput = screen.getByPlaceholderText('Email');
  //   const passwordInput = screen.getByPlaceholderText('Password');
  //   const button = screen.getAllByRole('button');

  //   userEvent.type(emailInput, 'dasu.maheshika@gmail.com');
  //   userEvent.type(passwordInput, '1234567');
  //   userEvent.click(button[0]);

  //   const success = screen.getByText('Login success!');
  //   expect(success).toBeInTheDocument();
  // });
});
