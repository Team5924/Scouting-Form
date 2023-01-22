import { useState, useEffect } from "react"
import QRCode from "react-qr-code"

export default function Summary(props) {

    if (props.data != undefined) {
        return (
            <>
            <h1 className="phase-title">SUMMARY</h1>
            <div className="form">
                <div className="centerbox">
                    <QRCode
                        value={props.data}
                        style={{ width: "100vw" }}
                    />
                </div>
            </div>
        </>
        )
    } else {
        return (
            <>

            </>
        )
    }
}