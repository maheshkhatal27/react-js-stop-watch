import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {currentTimeInSecond: 0, isTimerRunning: false}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  incrementTime = () => {
    this.setState(prevState => ({
      currentTimeInSecond: prevState.currentTimeInSecond + 1,
    }))
  }

  getMinutes = () => {
    const {currentTimeInSecond} = this.state
    const mins = Math.floor(currentTimeInSecond / 60)
    if (mins < 10) {
      return `0${mins}`
    }
    return mins
  }

  getSeconds = () => {
    const {currentTimeInSecond} = this.state
    const secs = Math.floor(currentTimeInSecond % 60)
    if (secs < 10) {
      return `0${secs}`
    }
    return secs
  }

  onClickStart = () => {
    this.intervalId = setInterval(this.incrementTime, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickStop = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  onClickReset = () => {
    clearInterval(this.intervalId)
    this.setState({
      currentTimeInSecond: 0,
      isTimerRunning: false,
    })
  }

  render() {
    const {isTimerRunning} = this.state

    const displayTime = `${this.getMinutes()}:${this.getSeconds()}`
    console.log(displayTime)
    return (
      <div className="stopwatch-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-setting-container">
          <div className="clock-and-timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="clock-img"
              alt="stopwatch"
            />
            <p className="timer">Timer</p>
          </div>
          <h1 className="display-timer">{displayTime}</h1>
          <div className="timer-buttons-container">
            <button
              className="button green"
              type="button"
              onClick={this.onClickStart}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              className="button red"
              type="button"
              onClick={this.onClickStop}
            >
              Stop
            </button>
            <button
              className="button orange"
              type="button"
              onClick={this.onClickReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
