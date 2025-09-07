import axios from "axios"

function SendData(params) {
    axios.post(`https://ferrariback.onrender.com/create/user`, params)

}

export default SendData