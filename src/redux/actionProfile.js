import {put, get, deleteMethod} from '../components/utilities/https';

export const getAllProfile = () => {
    const url = '/profile/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_PROFILE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const getProfile = (memberId) => {
    const url = `/profile/getById/${memberId}`;
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'GET_ACTIVE_PROFILE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}


export const addProfile = (body) => {
    const url = '/profile/add';
    return new Promise((resolve, reject) => {
        const promise = put(url, body);
        promise.then((response) => {
            resolve({
                type: 'SAVE_PROFILE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const deleteProfile = (memberId) => {
    const url = `/profile/delete/${memberId}`;
    return new Promise((resolve, reject) => {
        const promise = deleteMethod(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_PROFILE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}