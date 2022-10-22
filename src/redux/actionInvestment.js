import {put, get, deleteMethod} from '../components/utilities/https';

export const getAllInvestment = () => {
    const url = '/investment/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_INVESTMENT',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const getInvestment = (investmentId) => {
    const url = `/investment/getById/${investmentId}`;
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'GET_ACTIVE_INVESTMENT',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}


export const addInvestment = (body) => {
    const url = '/investment/add';
    return new Promise((resolve, reject) => {
        const promise = put(url, body);
        promise.then((response) => {
            resolve({
                type: 'SAVE_INVESTMENT',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const deleteInvestment = (investmentId) => {
    const url = `/investment/delete/${investmentId}`;
    return new Promise((resolve, reject) => {
        const promise = deleteMethod(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_INVESTMENT',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}