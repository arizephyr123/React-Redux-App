import axios from 'axios';

//actionsCreaters by default are syncronous
//must do async actions first before returning the action object
//async through redux-thunk
 

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

//lets us dispatch that we are starting api call
export const fetchAdvices = () => {
return(dispatch) => {
    dispatch ({ type:'START_FETCHING' })
    axios
    .get('https://api.adviceslip.com/advice')
    .then(res => {
        console.log("API- res.data",res.data);
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data})})
    .catch(err => { 
        console.log(err);
        dispatch({ type: 'FETCH_FAILURE', payload: err.response})});
}
}
//if action creator returns function will stop because error if any action 


//thunk = middleware function that will intercept anything returned from action creaters
//middleware function has access to: next function, action dispached, entire store

// const thunk = next => action => store => {
//  if (typeof action ==='object'){
//      next(action); //forward action untouched
//  } else if (typeof action === 'function'){
//      action(store.dispatch) //stop the action and call the function Q: why??
//  }
// }