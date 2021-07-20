import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  
  render() {
    return (
      <div className='navbar-fixed' style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Link
          to='/#PERMIERE'
          style={{
            fontFamily: 'monospace'
          }}
          onClick={() => window.location.replace("/#PERMIERE")}
          className='col s5 brand-logo center black-text'>
          <p
            style={{
              color: 'white',
              fontSize: '53px',
              textAlign: 'right',
              paddingRight: '3%'
            }}>
            <span style={{ color: '#FF9100' }}>P</span>ERMIERE{' '}
          </p>
        </Link>
        <div style={{width: '2%'}}></div>
        <Link
          to='/'
          style={{
            fontFamily: 'monospace'
          }}
          onClick={() => window.location.replace("/#FIVERR")}
          className='col s5 brand-logo center black-text'>
          <p
            style={{
              color: 'white',
              fontSize: '53px',
              textAlign: 'right',
              paddingRight: '3%'
            }}>
            <span style={{ color: '#FF9100' }}>F</span>IVERR{' '}
          </p>
        </Link>
        <div style={{width: '2%'}}></div>
        <Link
          to='/'
          style={{
            fontFamily: 'monospace', paddingRight: '3%'
          }}
          onClick={() => window.location.replace("/#ENVATO")}
          className='col s5 brand-logo center black-text'>
          <p
            style={{
              color: 'white',
              fontSize: '53px',
              textAlign: 'right',
              paddingRight: '3%'
            }}>
            <span style={{ color: '#FF9100' }}>E</span>NVATO
          </p>
        </Link>
      </div>
    )
  }
}

export default Navbar
