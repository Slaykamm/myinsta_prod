import React from 'react'
import { useParams } from 'react-router-dom'


export default function VkLoginName(props) {
    const params = useParams()
    localStorage.setItem('SLNUserName', params.params)
    const isReadyToAuth = localStorage.getItem('SLNUserName') === params.params
    if (isReadyToAuth) {
        window.location.href = 'http://localhost:3000/'
    }

  return (
    <div>
    </div>
  )
}
