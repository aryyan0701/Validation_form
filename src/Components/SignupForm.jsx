import React, { useState } from 'react';
import styled from 'styled-components';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const[visible, setVisible]=useState(true)
  const handleclick=()=>{
      setVisible(!visible)
  }

  const[visible2,setVisible2]=useState(true)
  const handleclick2=()=>{
    setVisible2(!visible2)
  }
  const validateForm = () => {


    const { firstName, lastName, email, password, confirmPassword } = formValues;
    let isValid = true;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    let newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!firstName.length) {
      newErrors.firstName = 'First name cannot be empty';
      isValid = false;
    }

    if (!lastName.length) {
      newErrors.lastName = 'Last name cannot be empty';
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (password.length <= 7) {
      newErrors.password = 'Password must be greater than 7 characters';
      isValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;  
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully');
    }
  };

  return (
  <>
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="first-name-id"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formValues.firstName}
          onChange={handleChange}
          style={{ border:" 5px bold", borderRadius: '6px' }}
        />
        <p data-testid="first-name-error-id" className="error">{errors.firstName}</p>
        <input
          data-testid="last-name-id"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formValues.lastName}
          onChange={handleChange}
          style={{ border:" 5px bold", borderRadius: '6px' }}
        />
        <p data-testid="last-name-error-id" className="error">{errors.lastName}</p>
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
          type={visible?'password':'text'}
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
          style={{ border:" 5px bold", borderRadius: '6px' }}
        />
        <div className='eye-icon'>{visible?<EyeOff onClick={handleclick}/>:<Eye onClick={handleclick}/>}</div>
        </div>

        <p data-testid="password-error-id" className="error">{errors.password}</p>
        <div className="password-container">
        <input
          data-testid="confirm-password-id"
          type={visible2?'password':'text'}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formValues.confirmPassword}
          onChange={handleChange}
          style={{ border:" 5px bold", borderRadius: '6px' }}
        />
         <div className='eye-icon'>{visible2?<EyeOff onClick={handleclick2}/>:<Eye onClick={handleclick2}/>}</div>
         </div>
        <p data-testid="confirm-password-error-id" className="error">{errors.confirmPassword}</p>
        <button type="submit">Sign Up</button>
        <p>Already have an account?<Link to="/login">Click Here</Link></p>
      </form>
    </Wrapper>

  </>
    
  );
};

export default SignUpForm;

const Wrapper = styled.div`
  margin: 20px 500px;
  padding:40px 20px;
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
    width: clamp(400px, 60%, 400px)

  }

  .password-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .eye-icon {
    position: absolute;
    right:25px; 
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