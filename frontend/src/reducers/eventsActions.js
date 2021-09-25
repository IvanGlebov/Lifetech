import {fetchWrapper, types} from "./common";


export const doFetchEvents = (dispatch) => {
  fetchWrapper(
    dispatch,
    'api/events/list',
    types.EVENTS__FETCH_INFO,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    },
    (res) => {
      return res.status === 'events-fetched-correctly';
    }
  ).then(null)
}