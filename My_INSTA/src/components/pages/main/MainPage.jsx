import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Menu from '../../../modules/Menu/Menu';
import { connect } from  'react-redux';
import { getVideoPreviewsAPI } from '../../../API/getPreviewAPI'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react';
import { useEffect } from 'react';
import { filterQuery } from '../../../services/filterQuery';
import VideoContainer from './VideoContainer/VideoContainer';
import { map, reverse, sortBy } from 'lodash';
import cl from './MainPage.module.css'
import { NavLink } from 'react-router-dom';


const _MainPage = (props) => {

const [listFiles, setListFiles] = useState()




//TODO какгохо хрена надо 2 раза дергать
useEffect(()=>{
    props.getPreviewAPI()

},[])

useEffect(()=>{
    setListFiles(props.videoPreviews.filter(({archived}) => archived !== true))
},[props.videoPreviews])


const lastVideosForUser = reverse(sortBy(listFiles, ['create_at']))
//const filterArchived = sortedStream.filter(({archived}) => archived !== true)

// Блок фильтрации роликов//////////////////////////////////////////
const [searchQuery, setSearchQuery] = useState('')
function checkTheInput(event){
    setSearchQuery(event.target.value)
}

const filteredVideo=filterQuery(listFiles, searchQuery)



// ВСЕ

 
    return (
        <div>

            <div>
                <Header/>
                {/* <Menu 
                    value={searchQuery}
                    onChange={checkTheInput}
                    placeholder='Поиск в названиях'
                /> */}
                <Menu
                    value={searchQuery}
                    onChange={checkTheInput}
                    placeholder='Поиск в названиях'
                />

<div className={cl.userListVideo}>
                    <p className={cl.userStreamTitle}>Последние видео для Вас</p>
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
             
                <VideoContainer
                listFiles={listFiles}
                filteredVideo={filteredVideo}
                lastVideosForUser={lastVideosForUser}
                />
                <Footer/>
            </div>
        </div>
    );
};

const MainPage = React.memo(_MainPage)

export default connect(
    // mapStateToProps
    state => ({
        videoPreviews: state.getPreview

    }),

    //mapDispatchToProps
    dispatch => ({
        getPreviewAPI: () =>{
            dispatch(getVideoPreviewsAPI())
        },
        
    })

)(MainPage); 