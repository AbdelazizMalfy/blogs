import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts())
        const userIds = _.uniq(_.map(getState().postReducer,'userId'))
        userIds.forEach( id => dispatch(fetchUser(id)))

    }
}




export const fetchPosts = () => {
    return async (dispatch) =>{
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type:"FETCH_POSTS", payload:response.data })
    };
};


export const fetchUser = (userId) => {
    return async (dispatch) =>{
        const response = await jsonPlaceHolder.get(`/users/${userId}`);
        dispatch({type:"FETCH_USER", payload:response.data })
    };
};