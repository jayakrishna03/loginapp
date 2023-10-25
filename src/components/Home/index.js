import {Component} from 'react'

import './index.css'

import Log from './components/Login'

import Logout from './components/Logout'

import Message from './components/Message'

class Home extends Component {
  state = {value: true}
  Log = () => {
    const {value} = this.state
    if (value === true) {
      this.setState({value: false})
    } else {
      this.setState({value: true})
    }
  }

  render() {
    const {value} = this.state
    let para
    if (value === true) {
      para = <Login />
    } else {
      para = <Logout />
    }
    return (
      <div>
        <div className="container">
          <Message bool={value} />
          {para}
        </div>
      </div>
    )
  }
}

export default Home
