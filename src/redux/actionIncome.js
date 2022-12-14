import {put, get, deleteMethod} from '../components/utilities/https';

export const getAllReportIncome = () => {
    const url = '/report-income/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_INCOME',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const getReportIncome = (incomeId) => {
    const url = `/report-income/getById/${incomeId}`;
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'GET_ACTIVE_INCOME',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}


export const addReportIncome = (body) => {
    const url = '/report-income/add';
    return new Promise((resolve, reject) => {
        const promise = put(url, body);
        promise.then((response) => {
            resolve({
                type: 'SAVE_INCOME',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const deleteReportIncome = (incomeId) => {
    const url = `/report-income/delete/${incomeId}`;
    return new Promise((resolve, reject) => {
        const promise = deleteMethod(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_INCOME',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}