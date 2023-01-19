// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
import { UsersState } from '../app/pages/HomePage/Features/Users/slice/types';

export interface RootState {
  users: UsersState;
}
