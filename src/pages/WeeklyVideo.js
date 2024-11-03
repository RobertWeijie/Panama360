import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext'; // 导入 useTheme
import '../styles/WeeklyVideo.css';
import ScrollToTopButton from '../components/ScrollToTopButton'; // 引入 ScrollToTopButton

function WeeklyVideo() {
    const { isDarkMode, toggleDarkMode } = useTheme(); // 使用主题上下文

    const allVideos = [
        {
            id: 1,
            title: "En Camino",
            description: "En Camino",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_1/hqdefault.jpg",
            date: "2024",
            //url: "https://www.youtube.com/watch?v=VIDEO_ID_1",
        },
        /*
        {
            id: 2,
            title: "视频标题 2",
            description: "这是视频 2 的描述。",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_2/hqdefault.jpg",
            date: "2023-10-08",
            url: "https://www.youtube.com/watch?v=VIDEO_ID_2",
        },
        {
            id: 3,
            title: "视频标题 3",
            description: "这是视频 3 的描述。",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_3/hqdefault.jpg",
            date: "2023-10-15",
            url: "https://www.youtube.com/watch?v=VIDEO_ID_3",
        },
        {
            id: 4,
            title: "视频标题 4",
            description: "这是视频 4 的描述。",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_4/hqdefault.jpg",
            date: "2023-10-22",
            url: "https://www.youtube.com/watch?v=VIDEO_ID_4",
        },
        {
            id: 5,
            title: "视频标题 5",
            description: "这是视频 5 的描述。",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_5/hqdefault.jpg",
            date: "2023-10-29",
            url: "https://www.youtube.com/watch?v=VIDEO_ID_5",
        },
        {
            id: 6,
            title: "视频标题 6",
            description: "这是视频 6 的描述。",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_6/hqdefault.jpg",
            date: "2023-11-05",
            url: "https://www.youtube.com/watch?v=VIDEO_ID_6",
        },
        {
            id: 7,
            title: "视频标题 7",
            description: "这是视频 7 的描述。",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_7/hqdefault.jpg",
            date: "2023-11-12",
            url: "https://www.youtube.com/watch?v=VIDEO_ID_7",
        },
        {
            id: 8,
            title: "视频标题 8",
            description: "这是视频 8 的描述。",
            thumbnail: "https://img.youtube.com/vi/VIDEO_ID_8/hqdefault.jpg",
            date: "2023-11-19",
            url: "https://www.youtube.com/watch?v=VIDEO_ID_8",
        }, */
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 4;

    // 计算当前页面的视频
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = allVideos.slice(indexOfFirstVideo, indexOfLastVideo);

    // 计算总页数
    const totalPages = Math.ceil(allVideos.length / videosPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className={`weekly-video-container ${isDarkMode ? 'dark' : ''}`}>
            <h1>Compartir videos semanalmente</h1>
            <div className="video-grid">
                {currentVideos.map(video => (
                    <div key={video.id} className="video-card">
                        <div className="thumbnail-container">
                            <a href={video.url} target="_blank" rel="noopener noreferrer">
                                <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                                <div className="play-button">
                                    <i className="fas fa-play"></i>
                                </div>
                            </a>
                        </div>
                        <div className="video-info">
                            <h2>{video.title}</h2>
                            <p className="date">{video.date}</p>
                            <p className="description">{video.description}</p>
                            <a href={video.url} target="_blank" rel="noopener noreferrer" className="watch-button">Ver</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>En la página anterior</button>
                <span> {currentPage} Paginas / {totalPages} Paginas</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Siguiente página</button>
            </div>
            <button className="toggle-mode" onClick={toggleDarkMode}>
                {isDarkMode ? 'Cambiar al modo brillante' : 'Cambiar al modo oscuro'}
            </button>
            <ScrollToTopButton /> {/* 添加 ScrollToTopButton */}
        </div>
    );
}

export default WeeklyVideo;