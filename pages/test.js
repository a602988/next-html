import React, { useState } from "react";

const Test = () => {
    const [ message, setMessage ] = useState();
    const handlerEvent = async  () => {
        const res = await fetch('/api/web-data');
        const data = await res.json();
        console.log(data);
        setMessage(JSON.stringify(data, {}, 4))
    }
    handlerEvent();
    return (
        <>
            <h1>test {process.env.customKey}</h1>
            <pre>{message}</pre>


        </>
    )
}
export default Test