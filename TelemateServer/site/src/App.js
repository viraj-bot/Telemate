import React from 'react'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Speech from 'react-speech'

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


class App extends React.Component {

    state = { details: [], query: "" };
    componentDidMount() {
        let data;
        axios.get("http://localhost:8000/")
            .then((res) => {
                data = res.data
                this.setState({ details: data })
            })
            .catch(() => {
            })
    }

    handleinput = (e) => {
        this.state.query = e.target.value
        this.setState({
            [e.target.query]: e.target.value,
        });
    };

    handlesubmit = (e) => {
        e.preventDefault()
        this.setState({ query: "" })
        this.state.details.push({ query: this.state.query, response: "" })
        console.log("details 1 = ", this.state.details)
        this.setState({
            details: this.state.details,
        });
        axios.post("http://localhost:8000/", {
            query: this.state.query,
        }).then((res) => {
            console.log(res.data)
            this.state.details[this.state.details.length - 1].response = res.data.response
            this.setState({
                details: this.state.details,
            });

        })
            .catch(() => {
            })
    };
    speak=(e)=>
    {
         React.render(
    <Speech text="Welcome to react speech" />,
    document.getElementById('node')
  );
    }

    render() {
        return (
            <>
                <div id="node"></div>
                <div className="bg"></div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <div className="logo">
                                    <a href="https://github.com/Telemate/Telemate" target="_blank">
                                        <img src="https://i.ibb.co/D5Rb5Gg/robot.png" alt="robot" />
                                    </a>
                                    <a href="https://github.com/Telemate/Telemate" target="_blank">
                                        Telemate
                                    </a
                                    >
                                </div>
                            </li>
                        </ul>
                        <div className="h_line">
                            <hr />
                        </div>
                        <ul>
                            <li><span className="v_line">|</span></li>

                            <li>
                                <span className="first_element"><a href="home#">Home</a></span>
                            </li>

                            <li><a href="Features#">Features</a></li>
                            <li>
                                <span className="themes"
                                >Themes
                                    <div className="submenu">
                                        <ul>
                                            <li><a href="#High-tech">High-tech</a></li>
                                            <li><a href="#Jarvis">Jarvis</a></li>
                                            <li><a href="#Veronica">Veronica</a></li>
                                            <li><a href="#Friday">Friday</a></li>
                                        </ul>
                                    </div>
                                </span>
                            </li>

                            <li><a href="About us#">About us</a></li>

                            <li><a href="Contact us#">Contact us</a></li>
                        </ul>
                    </nav>
                </header>

                <div id="chat-panel">
                    <div className="msger">
                        {this.state.details.map((detail) => (
                            <div>
                                <main className="msger-chat">
                                    {String((detail.query)).length !== 0 ?
                                        <div className="msg right-msg">
                                            <div className="msg-img" id="man-image"></div>
                                            <div className="msg-bubble">
                                                <div className="msg-info">
                                                    <div className="msg-info-name">Me</div>
                                                    <div className="msg-info-time">{new Date().getDate() + "/" + new Date().getMonth()
                                                        + "/" + new Date().getFullYear() + " @ "
                                                        + new Date().getHours() + ":"
                                                        + new Date().getMinutes() + ":" + new Date().getSeconds()}</div>
                                                </div>
                                                <div className="msg-text">
                                                    {detail.query}
                                                </div>
                                            </div>
                                        </div>
                                        : ""
                                          }
                                    {String((detail.response)) !== "" ?
                                        <div className="msg left-msg">
                                            <div className="msg-img" id="bot-image"></div>
                                            <div className="msg-bubble">
                                                <div className="msg-info">
                                                    <div className="msg-info-name">Telemate</div>
                                                    <div className="msg-info-time">
                                                        {new Date().getDate() + "/" + new Date().getMonth()
                                                            + "/" + new Date().getFullYear() + " @ "
                                                            + new Date().getHours() + ":"
                                                            + new Date().getMinutes() + ":" + new Date().getSeconds()}</div>
                                                </div>
                                                <div className="msg-text">
                                                    {detail.response}
                                                </div>
                                            </div>
                                        </div>
                                        : <div className="row examples">
                                            <div className="col-3">
                                                <div className="snippet" data-title=".dot-falling">
                                                    <div className="stage">
                                                        <div className="dot-falling"></div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                </main>
                            </div>
                        ))}
                    </div>

                    <form className="msger-inputarea" onSubmit={this.handlesubmit}>
                        <input
                            type="text"
                            className="msger-input"
                            placeholder="Enter your message..."
                            onChange={this.handleinput}
                            id="query-field"

                        />
                        <img type="submit" className="enter" onClick={this.handlesubmit} name="search"
                            src="https://i.ibb.co/QKRjgbZ/enter.png"
                            alt="search" />
                        <img onClick="" id="mic"
                            src="https://i.ibb.co/PrxxXSD/mic-off.png"
                            alt="mic" />
                    </form>
                </div>
            </>
        );
    }





}
{/* function Dictaphone() {
    console.log("hello there how are you")
    SpeechRecognition.startListening
    // const { transcript, resetTranscript } = useSpeechRecognition()
    // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    //     return null
    // }
    // console.log({ transcript })
    // return (
    //     transcript
    // )
    return("hello")
} */}
export default App
