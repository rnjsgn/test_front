import React, { useEffect, useState } from "react";
import { WatchPresenter } from "./WatchPresenter";

const WatchContainer = () => {
    const [video, setVideo] = useState(null);
    const [filename, setFilename] = useState('test.mp4'); // 서버에서 가져올 파일 이름

    // 서버에서 비디오 파일 가져오기
    const fetchVideo = async () => {
        try {
            const response = await fetch(`http://localhost:3000/video/video/${filename}`, {
                method: 'GET',
                headers: {
                    'Range': 'bytes=0-',  // Range 헤더 설정
                },
            });

            // console.log(response.blob())
            setVideo(await response.url)

            // if (!response.ok) {
            //     throw new Error("비디오 파일을 불러오는 중 오류 발생");
            // }

            // const videoUrl = URL.createObjectURL(await response.blob());
            
            // setVideo(videoUrl); // 가져온 비디오 URL을 state에 저장

        } catch (error) {
            console.error("비디오 파일을 불러오는 중 오류:", error);
        }
    };

    useEffect(() => {
        fetchVideo(); // 컴포넌트가 마운트될 때 비디오 파일 불러오기
    }, [filename]);

    return(
        <WatchPresenter 
            video = {video}
        />
    )
}

export default WatchContainer;