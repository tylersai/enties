export const API_END_POINT = process.env.REACT_APP_API_END_POINT;
export const API_KEY = process.env.REACT_APP_API_KEY;
export const POSTER_PATH = process.env.REACT_APP_POSTER_PATH;
export const POSTER_PATH_FULL = process.env.REACT_APP_POSTER_PATH_FULL;

export const toQueryString = (obj) => {

    const str = [];
    for(const key in obj){
        str.push(encodeURIComponent(key.toString()) + '=' + encodeURIComponent(obj[key].toString()));
    }
    return str.join('&');
};