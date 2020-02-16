import {
    CHANGE_SEARCH_FIELD,
    FEETCH_ROBOTS_FAILED,
    FEETCH_ROBOTS_PENDING,
    FEETCH_ROBOTS_SUCCESS,
} from './constants.js';


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const fetchRobots = () => (dispatch) => {
    dispatch({type: FEETCH_ROBOTS_PENDING});
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => dispatch({type: FEETCH_ROBOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({type: FEETCH_ROBOTS_FAILED, payload: error}))
} 