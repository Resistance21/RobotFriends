import {
    CHANGE_SEARCH_FIELD,
    FEETCH_ROBOTS_FAILED,
    FEETCH_ROBOTS_PENDING,
    FEETCH_ROBOTS_SUCCESS,
} from './constants.js';

const insitalStateSearch ={
    searchField: '',
}

export const searchRobots = (state = insitalStateSearch, action ={}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const initialStateRobots ={
    isPending: true,
    failed: false,
    robots: [],
    error: '',
}

export const fetchRobots = (state = initialStateRobots, action = {}) => {
    switch(action.type){
        case FEETCH_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case FEETCH_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false});
        case FEETCH_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false, failed: true});
        default:
            return state;
    }
}