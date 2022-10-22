import {put, get, deleteMethod} from '../components/utilities/https';

export const getAllReportExpense = () => {
    const url = '/reportexpense/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_REPORTEXPENSE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const getReportExpense = (expenseId) => {
    const url = `/reportexpense/getById/${expenseId}`;
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'GET_ACTIVE_REPORTEXPENSE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}


export const addReportExpense = (body) => {
    const url = '/reportexpense/add';
    return new Promise((resolve, reject) => {
        const promise = put(url, body);
        promise.then((response) => {
            resolve({
                type: 'SAVE_REPORTEXPENSE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const deleteReportExpense = (expenseId) => {
    const url = `/reportexpense/delete/${expenseId}`;
    return new Promise((resolve, reject) => {
        const promise = deleteMethod(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_REPORTEXPENSE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}