import React, { Component } from "react";
import Presentation from "./Presentation";

export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            isButton1: false,
            isButton2: false,
        };
    }

    handleStart = () => {
        this.setState({
            isButton1: false,
            isButton2: false,
        })
        this.stopWatch = setInterval(() => {
            if (this.state.hours >= 0 && this.state.hours <= 23) {
                if (this.state.minutes >= 0 && this.state.minutes <= 58) {
                    if (this.state.seconds >= 0 && this.state.seconds <= 58) {
                        this.setState({
                            seconds: this.state.seconds + 1,
                        });
                    } else {
                        if (this.state.seconds === 59) {
                            this.setState({
                                seconds: 0,
                                minutes: this.state.minutes + 1,
                            });
                        }
                    }
                } else {
                    if (this.state.minutes === 59) {
                        this.setState({
                            minutes: 0,
                            seconds: 0,
                            hours: this.state.hours + 1,
                        });
                    }
                }
            } else {
                if (this.state.hours === 24) {
                    alert("Please Reset Stop Watch");
                    clearInterval(this.stopWatch);
                }
            }
        }, 1000);
    };

    handleStop = () => {
        clearInterval(this.stopWatch);
        this.setState({
            isButton1: true,
            isButton2: true,
        })
    };

    handleResume = () => {
        this.setState({
            seconds: this.state.seconds,
            minutes: this.state.minutes,
            hours: this.state.hours,
            isButton1: false,
            isButton2: false,
        });
        this.handleStart();
    };

    handleReset = () => {
        this.setState({
            seconds: 0,
            minutes: 0,
            hours: 0,
            isButton2: false,
        });
        clearInterval(this.stopWatch);
    };

    render() {
        return (
            <div>
                <Presentation
                    details={this.state}
                    handleStart={this.handleStart}
                    handleStop={this.handleStop}
                    handleResume={this.handleResume}
                    handleReset={this.handleReset}
                />
            </div>
        );
    }
}
