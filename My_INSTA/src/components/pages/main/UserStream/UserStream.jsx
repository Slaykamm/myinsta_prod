import React from 'react'
import { NavLink } from 'react-router-dom'
import cl from './UserStream.module.css'


export default function UserStream({
    lastVideosForUser,
    ...props
}) {
  return (
    <div className={cl.userListVideo}>
        <p className={cl.userStreamTitle}>Свежие видео для Вас</p>
        {lastVideosForUser.map(videoFile => 
            <div key={videoFile.id}>
                <div className={cl.InnerBlock}>
            <NavLink to={`/video/${videoFile.id}`}>
                <img src={videoFile.image} alt='videoFileForUserStream'/>
            </NavLink>
            </div>

            <div className={cl.InnerText}>
                <h5><span>Название: </span>{videoFile.title}</h5>
            </div>
            </div>
        )}
    </div>
  )
}
