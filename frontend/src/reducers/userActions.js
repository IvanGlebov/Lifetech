import {fetchWrapper, types} from "./common";


export const doFetchUser = (dispatch) => {
  fetchWrapper(
    dispatch,
    'api/events/list',
    types.USER__FETCH_INFO,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    },
    (res) => {
      return res.status === 'user-fetched-correctly';
    }
  ).then(null)
}