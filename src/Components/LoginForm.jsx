import React, { useState } from 'react';
import styled from 'styled-components';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [visible, setVisible] = useState(true);
  const handleclick = () => {
    setVisible(!visible);
  };

  const validateForm = () => {
    const { email, password } = formValues;
    let isValid = true;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    let newErrors = {
      email: '',
      password: '',
    };

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (password.length <= 7) {
      newErrors.password = 'Password must be greater than 7 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('User successfully Login.');
    }
  };

  return (
    <>
      <Wrapper>
        <form onSubmit={handleSubmit}>
        <input
          data-testid="email-id"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formValues.email}
          onChange={handleChange}
          style={{ border:" 5px bold", borderRadius: '6px' }}
        />
        <p data-testid="email-error-id" className="error">{errors.email}</p>
          <div className="password-container">
            <input
              data-testid="password-id"
              type={visible ? 'password' : 'text'}
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              style={{ border: "2px solid", borderRadius: '6px' }}
            />
            <div className='eye-icon'>{visible ? <EyeOff onClick={handleclick} /> : <Eye onClick={handleclick} />}</div>
          </div>

          <p data-testid="password-error-id" className="error">{errors.password}</p>
          <button type="submit">Log In</button>
          <p>Don't have an account?<Link to="/">Click Here</Link></p>
        </form>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 30px 500px;
  padding: 50px 20px;
  border: none;
  font-family: sans-serif;
  background-color: #ecf0f1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 8px 12px;
    font-size: 18px;
    margin-bottom: 6px;
    width: clamp(400px, 60%, 400px);
  }

  .password-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .eye-icon {
    position: absolute;
    right: 25px;
    cursor: pointer;
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    margin-top: 22px;

    &:hover {
      opacity: 0.8;
    }
  }

  .error {
    margin: 0 0 24px 0;
    color: red;
  }
`;

export default LoginForm;
