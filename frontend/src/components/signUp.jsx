import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await axios.post('/auth/signup', {
        username,
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const errorMessages = error.response.data.errors.reduce((acc, err) => {
          acc[err.param] = err.msg;
          return acc;
        }, {});
        setErrors(errorMessages);
      } else {
        console.error('Signup error:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='signup-container'>
      <h2>Signup Here!</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Username:</label>
          <input
            type='text'
            value={username}
            onChange={handleUsernameChange}
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            required
          />
          {errors.username && (
            <div className='invalid-feedback'>{errors.username}</div>
          )}
        </div>
        <div className='form-group'>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={handleEmailChange}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            required
          />
          {errors.email && (
            <div className='invalid-feedback'>{errors.email}</div>
          )}
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            required
          />
          {errors.password && (
            <div className='invalid-feedback'>{errors.password}</div>
          )}
        </div>
        <button type='submit' className='btn btn-primary' disabled={loading}>
          {loading ? 'Signing up...' : 'Signup'}
        </button>

        <button>
          <Link to={'/'}>Home</Link>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
