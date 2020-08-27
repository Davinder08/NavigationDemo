import {combineReducers} from 'redux';
import * as constants from '../../utils/Constants';

import ActivitiesReducer from './ActivitiesReducer';

const appReducer = combineReducers({
  ActivitiesReducer,
});

export default RootReducer = (state, action) => {
  if (action.type == constants.LOG_OUT_FROM_APP) {
    state = undefined;
  }

  return appReducer(state, action);
};
