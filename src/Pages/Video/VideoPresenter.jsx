import React from "react";
import { Link } from "react-router-dom";

export const VideoPresenter = ({
    video,

    videoUpload,
    videoDBUpload
}) => {
    return(
        <div>
            <p>video 업로드 테스트</p>
            <Link to = '/watch'>비디오 테스트 페이지 이동</Link>
            <br />
            <input 
                type = "file"
                onChange={videoUpload}
                accept="video/*"
            />

            <p>video 화면 송출</p>
            {
                video.video && <video src={video.url} controls width="350px" />
            }
            <button onClick={videoDBUpload}>비디오 서버 업로드</button>
        </div>
    )
}