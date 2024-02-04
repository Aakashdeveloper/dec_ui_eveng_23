import axios from 'axios';

import {
    LATEST_NEWS
} from '../redux/newsData/actionType';

const baseUrl = "http://localhost:9800";

export const getLatestNews = () => {
    return dispatch => {
        dispatch({
            type:LATEST_NEWS,
            payload:{data:[]}
        })

        return axios.get(`${baseUrl}/articles?_end=3`)
        .then((response) => {
            const respData = response.data;
            dispatch({
                type:'LATEST_NEWS',
                payload:{data:respData}
            })
        })
    }

}