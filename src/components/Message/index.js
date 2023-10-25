import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {bool} = this.props
    if (bool === true) {
      return <p>Please Login</p>
    } else {
      return <p>Welcome User</p>
    }
  }
}
export default Message
