export const API_END_POINT = process.env.REACT_APP_API_END_POINT;
export const API_KEY = process.env.REACT_APP_API_KEY;

export const toQueryString = (obj) => {

    const str = [];
    for(const key in obj){
        str.push(encodeURIComponent(key.toString()) + '=' + encodeURIComponent(obj[key].toString()));
    }
    return str.join('&');
};