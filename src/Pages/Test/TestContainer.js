import React, { useEffect, useState } from "react";
import { TestPresenter } from "./TestPresenter";

const TestContainer = () => {
    const [name, setName] = useState('')
    const [names, setNames] = useState([])

    const Submit = async() => {
        const result = await fetch('http://localhost:3000/test', {
            method: 'post',
            headers: {
                'Content-Type' : 'application/json',
                Accept: 'application/json',
                mode: 'no-cors',
                'Access-Control-Allow-Origin':'*',
            },
            body : JSON.stringify({
                name : name,
            })
        })

        if (result.status === 200) {
            console.log('백 연결 테스트 성공')
        } else {
            console.log(result)
        }
    }

    useEffect(() => {
        (
            async () => {
                const result = await fetch('http://localhost:3000/test2', {
                    method: 'get',
                    headers: {
                        'Content-Type' : 'application/json',
                        Accept: 'application/json',
                        mode: 'no-cors',
                        'Access-Control-Allow-Origin':'*',
                    }
                })
                const name_data = await result.json()
                console.log(name_data.data[0].name)
            
                if (result.status === 200) {
                    console.log('백 연결 테스트 성공222')
                    setNames(name_data.data)
                } else {
                    console.log(result)
                }
            }
        )();
    }, [])

    return(
        <TestPresenter 
            setName = {setName}
            names = {names}

            Submit = {Submit}
        />
    )
}

export default TestContainer;