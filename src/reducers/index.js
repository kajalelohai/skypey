import { combineReducers } from 'redux';

import user from './user';
import contacts from './contacts';
import activeUserId from './activeUserId';
import messages from './messages';
import typing from './typing';

export default combineReducers({
  user,
  contacts,
  activeUserId,
  messages,
  typing
  //doing this includes a messages fields in the state object as for others also respec.
});
