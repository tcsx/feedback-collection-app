import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  console.log(res);
  // const res = await fetch('/api/current_user', {
  //   credentials: 'include'  
  // }).then(res => res.json()).catch(error => console.log("error: " + error));
  dispatch({ type: FETCH_USER, payload: res});
}; 


export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);
  console.log(res);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
