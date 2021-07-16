import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  
  movePosition = (e) => {
    this.refs.hello.scrollIntoView(); 
  }
  
  render() {
    return (
      <div className='navbar-fixed'>
        <Link
          to='/'
          style={{
            fontFamily: 'monospace'
          }}
          onClick={(e)=>this.movePosition(e)}
          className='col s5 brand-logo center black-text'>
          <p
            style={{
              color: 'white',
              fontSize: '53px',
              textAlign: 'right',
              paddingRight: '3%'
            }}>
            <span style={{ color: '#FF9100' }}>P</span>ERMIERE{' '}
            <span style={{ color: '#FF9100' }}>F</span>IVERR{' '}
            <span style={{ color: '#FF9100' }}>E</span>NVATO
          </p>
        </Link>
      </div>
    )
  }
}

export default Navbar
