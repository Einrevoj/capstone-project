import {put, get, deleteMethod} from '../components/utilities/https';

export const getAllReportExpense = () => {
    const url = '/report-expense/getAll';
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_EXPENSE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const getReportExpense = (expenseId) => {
    const url = `/report-expense/getById/${expenseId}`;
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'GET_ACTIVE_EXPENSE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}


export const addReportExpense = (body) => {
    const url = '/report-expense/add';
    return new Promise((resolve, reject) => {
        const promise = put(url, body);
        promise.then((response) => {
            resolve({
                type: 'SAVE_EXPENSE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const deleteReportExpense = (expenseId) => {
    const url = `/report-expense/delete/${expenseId}`;
    return new Promise((resolve, reject) => {
        const promise = deleteMethod(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_EXPENSE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}