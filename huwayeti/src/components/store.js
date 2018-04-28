import {combineReducers, createStore, applyMiddleware} from 'redux';
import {combineForms, createForms } from 'react-redux-form';
  
  const initialUserState = {
    word_one: '',
    word_two: '',
    word_three: '',
    word_four: '',
    word_five: '',
    public_key: '',
  };
  
  // If you want your entire store to have the form state...
  const store = createStore(combineForms({
    user: initialUserState,
  }));
  
  export default store;
  