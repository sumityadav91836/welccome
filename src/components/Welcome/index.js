import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onClickSubscribe = () => {
    this.setState(prevState => ({
      isSubscribed: (prevState.isSubscribed = true),
    }))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Welcome</h1>
        <p className="des">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button className="btn" type="button" onClick={this.onClickSubscribe}>
            Subscribed
          </button>
        ) : (
          <button className="btn" type="button">
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
