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
    soal(credentials){
        const token = localStorage.getItem('token')
        const headers = {Authorization: `Bearer ${token}`}
        return Api().post('soal', credentials, {headers})
    },
    koreksi(credentials){
        const token = localStorage.getItem('token')
        const headers = {Authorization: `Bearer ${token}`}
        return Api().post('koreksi_nilai', credentials, {headers})
    },
    getIdentitas(){
        const token = localStorage.getItem('token')
        const headers = {Authorization: `Bearer ${token}`}
        return Api().get('identitas',{headers})
    }
}
    
