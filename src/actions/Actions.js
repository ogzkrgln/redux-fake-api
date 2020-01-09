export const REQUEST_POST = 'REQUEST_POST';
export const SET_FILTER = 'SEL_FILTER';
export const SET_DATA = 'SET_DATA';
export const SET_LOADER = 'SET_LOADER';


export function setLoader(data) {
    return {type:SET_LOADER,payload:data}
}
export function setFilter (newFilter) {
    return {type:SET_FILTER,activeFilter:newFilter}
}
export function setData (data) {
    return {type:SET_DATA,payload:data}
}
