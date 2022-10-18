import {put, get, deleteMethod} from '../components/utilities/https';

export const getAllMemberList = () => {
    const url = '/memberlist/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_MEMBER_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const getMemberList = (memberlistId) => {
    const url = `/memberlist/getById/${memberlistId}`;
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'GET_ACTIVE_MEMBERLIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}


export const addMemberList = (body) => {
    const url = '/memberlist/add';
    return new Promise((resolve, reject) => {
        const promise = put(url, body);
        promise.then((response) => {
            resolve({
                type: 'SAVE_MEMBER_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const deleteMemberList = (memberlistId) => {
    const url = `/memberlist/delete/${memberlistId}`;
    return new Promise((resolve, reject) => {
        const promise = deleteMethod(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_MEMBER_LIST',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}