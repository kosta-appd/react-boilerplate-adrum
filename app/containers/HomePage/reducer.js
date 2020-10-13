/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_USERNAME, CHANGE_VALUE } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  testValue: ''
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
      case CHANGE_VALUE:
        console.log("Change value: " + action.testValue);
        sendCustomData();
        break;  
    }
  });

const sendCustomData = () => {
  var customEvent = new ADRUM.events.Ajax();
  customEvent.url("https://testurl");
  customEvent.method('POST');
  customEvent.dataObject({data: {msgSent: "msgSent"}});
  customEvent.markSendTime(0);
  customEvent.markFirstByteTime(0);
  customEvent.markRespAvailTime(0);
  customEvent.markRespProcTime(0);
  ADRUM.report(customEvent);
}

export default homeReducer;
