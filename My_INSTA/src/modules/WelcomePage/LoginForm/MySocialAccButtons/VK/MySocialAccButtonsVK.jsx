import React from 'react'
import cl from './MySocialAccButtonsVK.module.css'

export default function MySocialAccButtonsVK() {
  return (
    <a href='http://127.0.0.1:8000/api/auth/vk/login'>
      <img style={{height: '2rem'}} src={require('./vk2.png')} />
    </a>
  )
}
