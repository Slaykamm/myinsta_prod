import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams, Navigate, History } from 'react-router-dom'


export default function VkLogin(props) {

    const navigate = useNavigate()
    const params = useParams()

    const [tok, setTok] = useState('')

    console.log('params', params)
    const accessCode = params.params.slice(6,24)
    console.log('accessCode ', accessCode)
    const codeParams = {
        'code': accessCode
    }

    useEffect(()=>{
        axios.post('http://127.0.0.1:8000/api/vk/connect', codeParams)
        .then(res => {
            console.log('put to storage', res.data.key)
            localStorage.setItem('SLNToken', 'Token ' + res.data.key)
            setTok(res.data.key)

        })
        .catch(err => console.log('error', err))
    }, [accessCode])
    
     useEffect(()=> {
        window.location.href = 'http://127.0.0.1:8000/api/auth/vk/login/retrieve/'
        //return navigate('http://127.0.0.1:8000/api/auth/vk/login/retrieve/')
     }, [tok])


  return (
    <div>
    </div>
  )
}
