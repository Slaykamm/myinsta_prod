import React from 'react'
import cl from './userVideoControlButtonForm.module.css'
import MyRedButton from '../../../../UI/MyRedButton/MyRedButton';
import MyButton from '../../../../UI/MyButton/MyButton';


function UserVideoControlButtonForm(
    {
        userVideoList,
        listFilesVideosToArchive,
        setListFilesVideosToArchive,
        putToBase,
        setArchiveMode,
        ...props}) {
    

        // ------------Обработка блока кнопок вкл модуля удалить. отменить его. добавить видео и удалить в список. удалить.


        function archiveVideoModeEnable(e) {
            e.preventDefault()
            setArchiveMode(true)
        }

        function cancelArchiveMode(e){
            e.preventDefault();
            setArchiveMode(false)
            setListFilesVideosToArchive([])
            window.location.reload()
        }


        function moveToAchive() {
            var videos = userVideoList

            for (let i = 0; i<listFilesVideosToArchive.length; i++){
                var videos = videos.filter(video => listFilesVideosToArchive[i].id !== video.id)
            }
            listFilesVideosToArchive.forEach(id => {

                const url = '/video'
                const message = {
                    "archived": false,
                }
               putToBase(message, url, id.id)
            })
        }

    return (

        <div className={cl.ControlBtnGroup}>
            <div className={cl.ControlBtnNameContainer}>
                <div className={cl.ArhiveModeBtn}>
                    <MyButton
                        onClick={e => archiveVideoModeEnable(e)}
                    >Пометить на разархивирование</MyButton>
                </div>
                <div className={cl.ArhiveModeBtn}>
                    <MyButton
                        onClick={cancelArchiveMode}
                    >выключить разархивирование</MyButton>
                </div>

                {listFilesVideosToArchive.length > 0 ?
                <div className={cl.MoveArchiveBtn}>
                    <MyButton
                        onClick={moveToAchive}
                    >Разархивировать {listFilesVideosToArchive.length} видео </MyButton>
                </div>
                : <div></div>
                }
                
            </div>
        </div>
    )
}

export default UserVideoControlButtonForm
