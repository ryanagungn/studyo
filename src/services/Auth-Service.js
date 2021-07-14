import Api from './Api'

export default{
    register (credentials){
        return Api().post('akun', credentials)
    },
    login (credentials){
        return Api().post('login', credentials)
    },
    changePassword(data){
        const token = localStorage.getItem('token')
        const headers = {Authorization: `Bearer ${token}`}
        return Api().patch('change-password', data, {headers})
    },
    changeData(credentials){
        const token = localStorage.getItem('token')
        const headers = {Authorization: `Bearer ${token}`}
        return Api().post('change-data', credentials, {headers})
    },
    test(credentials){
        return Api().post('test', credentials)
    },
    soal(){
        const token = localStorage.getItem('token')
        const headers = {Authorization: `Bearer ${token}`}
        return Api().get('soal', {headers})
    }
}
    
