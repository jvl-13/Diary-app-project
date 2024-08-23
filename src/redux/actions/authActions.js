import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8000/api/login', {
      email,
      password,
    });

    if (response.data.success) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: response.data.user, token: response.data.accessToken },
      });
    } else {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: { error: response.data.msg },
      });
    }
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: { error: error.response.data.msg || 'Login failed. Please try again.' },
    });
  }
};

// redux/actions/authActions.js

export const loginSuccess = (data) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: data,
    };
  };
  
  export const loginFailure = (error) => {
    return {
      type: 'LOGIN_FAILURE',
      payload: error,
    };
  };
  
