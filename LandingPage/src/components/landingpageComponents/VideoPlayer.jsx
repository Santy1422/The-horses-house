import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import screenfull from 'screenfull';
import styles from "../../styles/Landing.module.css"

const VideoPlayer = () => {
    const [isPaused, setIsPaused] = useState(true)
    const [isSeeking, setIsSeeking] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [hasStarted, setHasStarted] = useState(false)
    const [progressBar, setProgressBar] = useState(0)
    const [volume, setVolume] = useState(0.8)
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        if (video) {
            video.setState({
                pip: false,
                playing: false,
                controls: false,
                light: false,
                volume: 0.8,
                muted: false,
                played: 0,
                loaded: 0,
                duration: 0,
                playbackRate: 1.0,
                loop: false
            })
        }
    }, [])

    const handleStart = () => {
        setHasStarted(true)
        setIsPaused(false)
    }

    const togglePlay = () => {
        setIsPaused(!isPaused)
    }

    const toggleFullscreen = () => {
        screenfull.toggle(document.getElementById('video-player'))
        setIsFullscreen(!isFullscreen)
    };


    const handleProgress = (state) => {

        if (!isSeeking) {
            setProgressBar(state.played * 100)
        }
    }

    const handleSeekMouseDown = e => {
        setIsSeeking(true)
    }

    const handleSeekChange = e => {
        const value = parseFloat(e.target.value / 100);
        setProgressBar(e.target.value);

        if (videoRef.current && videoRef.current.player) {
            videoRef.current.player.seekTo(value, 'fraction');
        }
    }

    const handleSeekMouseUp = e => {
        setIsSeeking(false)
    }

    const handleVolumeChange = (e) => {
        setVolume(e.target.value)
    }
 
    const handleEnded = () => {
        setHasStarted(false)
        setIsPaused(true)
        setProgressBar(0)

    }

    return (
        <div id="video-player" className={`relative mx-auto w-full max-w-[1216px] ${styles["video-player"]}`}>
            {/* Start Button */}

            {
                !hasStarted &&

                <button onClick={handleStart} className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10 backdrop-blur-lg rounded-[50%]'>
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="_Play button" filter="url(#filter0_b_1830_125377)">
                            <path id="Button" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80ZM33.75 54.6721L56.25 42.096C57.9167 41.1645 57.9167 38.8355 56.25 37.904L33.75 25.3279C32.0833 24.3963 30 25.5608 30 27.4239L30 52.5761C30 54.4392 32.0833 55.6037 33.75 54.6721Z" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_b_1830_125377" x="-16" y="-16" width="112" height="112" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1830_125377" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1830_125377" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </button>
            }

            {/* Controls */}

            {
                hasStarted &&
                // Play Pause
                <div className={`w-full absolute bottom-0 left-0 z-10 px-4 py-2 flex gap-2 items-center justify-between bg-indigo-950 `}>
                    <button className='' onClick={togglePlay}>
                        {
                            isPaused ?

                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Play">
                                        <path id="Play_2" d="M2.20001 2.86327C2.20001 1.61155 3.57254 0.844595 4.63857 1.50061L12.9857 6.63731C14.001 7.26209 14.001 8.73784 12.9857 9.36262L4.63857 14.4993C3.57254 15.1553 2.20001 14.3884 2.20001 13.1367V2.86327Z" fill="white" />
                                    </g>
                                </svg>

                                :

                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Pause">
                                        <g id="Pause_2">
                                            <path d="M2.20001 2.5C2.20001 2.22386 2.42387 2 2.70001 2H5.20001C5.47615 2 5.70001 2.22386 5.70001 2.5V13.5C5.70001 13.7761 5.47615 14 5.20001 14H2.70001C2.42387 14 2.20001 13.7761 2.20001 13.5V2.5Z" fill="white" />
                                            <path d="M10.2 2.5C10.2 2.22386 10.4239 2 10.7 2H13.2C13.4762 2 13.7 2.22386 13.7 2.5V13.5C13.7 13.7761 13.4762 14 13.2 14H10.7C10.4239 14 10.2 13.7761 10.2 13.5V2.5Z" fill="white" />
                                        </g>
                                    </g>
                                </svg>
                        }
                    </button>

                    {/* Progress bar */}
                    
                    <input className={`${styles['custom-range']}`} type="range"
                        min="0"
                        max="100"
                        step="0.1"
                        onMouseDown={(e) => handleSeekMouseDown(e)}
                        onChange={(e) => handleSeekChange(e)}
                        onMouseUp={(e) => handleSeekMouseUp(e)}
                        value={progressBar}
                    />

                    {/* Volume */}

                    <input className={`${styles['custom-volume']} w-full max-w-[10%]`} type='range' 
                        min={0} 
                        max={1} 
                        step='0.01' 
                        value={volume} 
                        onChange={handleVolumeChange} />

                    <button className='text-white' onClick={toggleFullscreen}>
                        {
                            isFullscreen ?
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="compress" d="M19 7H15.5C13.958 7 13 6.042 13 4.5V1C13 0.448 13.447 0 14 0C14.553 0 15 0.448 15 1V4.5C15 4.949 15.052 5 15.5 5H19C19.553 5 20 5.448 20 6C20 6.552 19.553 7 19 7ZM7 4.5V1C7 0.448 6.553 0 6 0C5.447 0 5 0.448 5 1V4.5C5 4.949 4.948 5 4.5 5H1C0.447 5 0 5.448 0 6C0 6.552 0.447 7 1 7H4.5C6.042 7 7 6.042 7 4.5ZM7 19V15.5C7 13.958 6.042 13 4.5 13H1C0.447 13 0 13.448 0 14C0 14.552 0.447 15 1 15H4.5C4.948 15 5 15.051 5 15.5V19C5 19.552 5.447 20 6 20C6.553 20 7 19.552 7 19ZM15 19V15.5C15 15.051 15.052 15 15.5 15H19C19.553 15 20 14.552 20 14C20 13.448 19.553 13 19 13H15.5C13.958 13 13 13.958 13 15.5V19C13 19.552 13.447 20 14 20C14.553 20 15 19.552 15 19Z" fill="#fff" />
                                </svg>
                                :
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="expand" d="M20 2.5V6C20 6.552 19.553 7 19 7C18.447 7 18 6.552 18 6V2.5C18 2.051 17.948 2 17.5 2H14C13.447 2 13 1.552 13 1C13 0.448 13.447 0 14 0H17.5C19.042 0 20 0.958 20 2.5ZM6 0H2.5C0.958 0 0 0.958 0 2.5V6C0 6.552 0.447 7 1 7C1.553 7 2 6.552 2 6V2.5C2 2.051 2.052 2 2.5 2H6C6.553 2 7 1.552 7 1C7 0.448 6.553 0 6 0ZM6 18H2.5C2.052 18 2 17.949 2 17.5V14C2 13.448 1.553 13 1 13C0.447 13 0 13.448 0 14V17.5C0 19.042 0.958 20 2.5 20H6C6.553 20 7 19.552 7 19C7 18.448 6.553 18 6 18ZM19 13C18.447 13 18 13.448 18 14V17.5C18 17.949 17.948 18 17.5 18H14C13.447 18 13 18.448 13 19C13 19.552 13.447 20 14 20H17.5C19.042 20 20 19.042 20 17.5V14C20 13.448 19.553 13 19 13Z" fill="#fff" />
                                </svg>
                        }
                    </button>
                </div>

            }


            {/* Video */}
            <ReactPlayer
                className={`${styles["react-player"]}`}
                ref={videoRef}
                url={'https://vimeo.com/888742128?share=copy'}
                // url={'https://vimeo.com/880512222'}
                controls={false}
                playing={!isPaused}
                volume={volume}
                onProgress={(state) => { handleProgress(state) }}
                onDuration={(duration) => { videoRef.current?.setState({ duration: duration }) }}
                onEnded={handleEnded}
            />
        </div>
    )
}

export default VideoPlayer