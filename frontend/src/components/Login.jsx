import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const res = await axios.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      if (err.response && err.response.data.errors) {
        const errorMessages = err.response.data.errors.reduce((acc, error) => {
          acc[error.param] = error.msg;
          return acc;
        }, {});
        setErrors(errorMessages);
      } else {
        console.error('Login error:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={onChange}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            required
          />
          {errors.email && (
            <div className='invalid-feedback'>{errors.email}</div>
          )}
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={onChange}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            required
          />
          {errors.password && (
            <div className='invalid-feedback'>{errors.password}</div>
          )}
        </div>
        <button type='submit' className='btn btn-primary' disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
