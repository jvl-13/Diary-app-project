import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Thêm các reducers khác của bạn ở đây
});

export default rootReducer;
