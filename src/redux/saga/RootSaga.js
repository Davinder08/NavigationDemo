import {all, fork} from 'redux-saga/effects';

import {getActivity} from './ActivitiesSaga';

export default function* root_saga() {
  yield all([fork(getActivity)]);
}
