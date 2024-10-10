import React from "react";

export const WatchPresenter = ({
    video,
}) => {
    return(
        <div>
            <p>비디오 호출 테스트</p>
            <h1>Video Player</h1>
                {video ? (
                    <video controls width="600" src={video}>
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <p>Loading video...</p>
            )}
        </div>
    )
}