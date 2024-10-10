import React from "react";
import { Link } from "react-router-dom";

export const TestPresenter = ({
    setName,
    names,

    Submit
}) => {
    return(
        <div>
            <Link to = '/video'>비디오 테스트 이동</Link>
            <p>test 페이지입니다.</p>
            <input
                placeholder="이름 입력"
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={Submit}
            >확인</button>

            {
                names.map((name, idx) => (
                    <p key={idx}>{name.name}</p>
                ))
            }
        </div>
    )
}