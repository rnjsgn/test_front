import React, { useState } from "react";
import { VideoPresenter } from "./VideoPresenter";

const VideoContainer = () => {
    const [video, setVideo] = useState({});
    const [selectedFile, setSelectedFile] = useState(null); // 업로드할 파일을 저장

    // 비디오 파일 선택 및 로컬 URL 생성
    const videoUpload = async(e) => {
        const file = e.target.files[0];
        const videoType = file.type.includes('video');

        setVideo({
            url: URL.createObjectURL(file),
            video: videoType,
        });

        setSelectedFile(file); // 선택한 파일을 상태로 저장
        console.log(videoType);
    };

    // 비디오 파일을 서버로 업로드
    const videoDBUpload = async() => {
        if (!selectedFile) {
            alert('업로드할 파일을 먼저 선택하세요.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile); // 선택한 파일을 FormData에 추가

        try {
            const response = await fetch('http://localhost:3000/video/upload', {
                method: 'POST',
                body: formData,
            });

            console.log(response)

            if (response.ok) {
                const result = await response.json();
                console.log('비디오 업로드 성공:', result);
                alert('비디오 업로드 성공!');
            } else {
                console.error('비디오 업로드 실패');
                alert('비디오 업로드 실패');
            }
        } catch (error) {
            console.error('업로드 중 오류 발생:', error);
            alert('업로드 중 오류 발생');
        }
    };

    return (
        <VideoPresenter
            video={video}
            videoUpload={videoUpload}
            videoDBUpload={videoDBUpload} // 서버 업로드 함수를 Presenter로 전달
        />
    );
};

export default VideoContainer;
