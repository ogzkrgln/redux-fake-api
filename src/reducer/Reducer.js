import {SET_LOADER, SET_FILTER,SET_DATA} from './../actions/Actions';


const initialState = {
    isLoaded:true,
    items: [],
}


const ApiRecuder = function (state=initialState,action) {
    switch (action.type) {
        case SET_LOADER:
            return ({...state,isLoaded:action.payload});
        case SET_FILTER:
            return ({...state,});
        case SET_DATA:
            return ({...state,items:action.payload})
      default:
          return state;
    }

}

export default ApiRecuder
