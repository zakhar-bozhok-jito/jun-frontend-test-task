import React from "react";
import {start} from "./ClientServer";

export function StartButton() {

    return (
        <>
            <button
                style={{
                    width: "50px", height: "40px", borderRadius: "20%"
                }} onClick={() => start()}>
                start
            </button>
        </>
    )
}