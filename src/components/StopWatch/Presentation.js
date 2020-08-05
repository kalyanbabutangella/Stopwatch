import React from "react";
import { Button } from "antd";
import Time from "../../assets/time.png";

function Presentation(props) {
    const { details, handleStart, handleStop, handleReset, handleResume } = props;
    console.log(details);
    return (
        <div className="stopWatch_Screen">
            <img src={Time} alt="" className="stopWatch_image" />
            <div className="stopWatch_Timer">
                <b>{details.hours < 10 ? `0${details.hours}` : details.hours}</b>
                <b>:{details.minutes < 10 ? `0${details.minutes}` : details.minutes}</b>
                <b>:{details.seconds < 10 ? `0${details.seconds}` : details.seconds}</b>
                <br />
                {details.hours === 0 &&
                    details.minutes === 0 &&
                    details.seconds === 0 ? (
                        <Button type="primary" onClick={handleStart}>
                            START
                        </Button>
                    ) : (
                        details.isButton1 ? <Button type="primary" danger onClick={handleReset}>
                            RESET
                        </Button> : <Button type="primary" danger onClick={handleStop}>
                                STOP
                        </Button>
                    )}{" "}
                {details.isButton2 ? (
                    <Button type="primary" onClick={handleResume}>
                        RESUME
                    </Button>
                ) : <Button type="primary" danger onClick={handleReset}>
                        RESET
                        </Button>}
            </div>
        </div>
    );
}

export default Presentation;
