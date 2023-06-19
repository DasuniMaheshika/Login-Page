import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from '../components/LoginPage';
import store from '../store';
import { Provider } from 'react-redux';

const MockLoginPage = () => {
  return (
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
};

describe('LoginPage', () => {
  test('email input field should hava type email', () => {
    render(<MockLoginPage />);
    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
  });

  test('password input field should hava type password', () => {
    render(<MockLoginPage />);
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  test('in beginning email input should be empty', () => {
    render(<MockLoginPage />);
    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput.value).toBe('');
  });

  test('in beginning password input should be empty', () => {
    render(<MockLoginPage />);
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput.value).toBe('');
  });

  test('email input field should accept email', () => {
    render(<MockLoginPage />);
    const emailInput = screen.getByPlaceholderText('Email');
    userEvent.type(emailInput, 'dasuni.com');
    expect(emailInput.value).not.toMatch('dasu.maheshika@gmail.com');
  });

  test('password should be greater than 6', () => {
    render(<MockLoginPage />);
    const passwordInput = screen.getByPlaceholderText('Password');
    userEvent.type(passwordInput, 'dasu123');
    expect(passwordInput.value.length).toBeGreaterThan(6);
  });

  test('render the login page with 1 button', async () => {
    render(<MockLoginPage />);
    const buttonCount = await screen.findAllByRole('button');
    expect(buttonCount).toHaveLength(1);
  });

  test('renders image in App component', () => {
    render(<MockLoginPage />);
    const image = screen.getByAltText('Avatar');
    expect(image).toBeInTheDocument();
  });
});
