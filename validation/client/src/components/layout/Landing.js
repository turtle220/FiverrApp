import React, { Component } from "react";
import Header from '../image/header.svg';
import Footer from '../image/footer.svg';
import Premiere from '../image/premiere.svg';
import Envato from '../image/envato.svg';
import Fiverr from '../image/fiverr.svg';
import Navbar from './Navbar'
import './index.css'

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <img src={Header} className="header_image" alt='' />
        <div style={{paddingTop: '5%'}}>
          <div style={{ width: '90%', display: 'flex'}}>
            <div style={{width:'30%'}}></div>
            <div>
              <h1 style={{fontWeight: 'bold'}}>PREMIERE PRO</h1>
            </div>
          </div>
          <div>
            <img src={Premiere} alt='' className="card" />
          </div>
          <div style={{width: '75%', backgroundColor: '#FF9100', display: 'flex'}}>
            <div style={{width:'36%'}}></div>
            <div>
              <h2 style={{lineBreak: 'anywhere', maxWidth: '100%', padding: '6% 0% 0px', marginTop: '-4.5%', paddingBottom: 0, textAlign: 'left'}}>
              Adobe's video editing software<br></br>
              Creative tools with integration<br></br>
              This is just the very beginning<br></br>
              The only limit, your imagination
              </h2>
            </div>
          </div>
        </div>

        <div style={{paddingTop: '5%'}}>
          <div style={{ width: '90%', display: 'flex'}}>
            <div style={{width: '80%', justifyContent: 'flex-end', textAlign: 'right'}}>
              <h1 style={{fontWeight: 'bold'}}>FIVERR</h1>
            </div>
          </div>
          <div>
            <img style={{right:'5%'}} src={Fiverr} alt='' className="card" />
          </div>
          <div style={{width: '76%', backgroundColor: '#FF9100', display: 'flex', float: 'right'}}>
            <div style={{width: '67%'}}>
              <h2 style={{ lineBreak: 'anywhere', maxWidth: '95%', padding: '8% 0% 0px', marginTop: '-4.5%', paddingBottom: 0, textAlign: 'right'}}>
              Don't just idly dream, take action<br></br>
              Freelance services for the daring<br></br>
              One-stop shop for all your needs<br></br>
              Over 100,000 professional sellers
              </h2>
            </div>
          </div>
        </div>

        <div style={{paddingTop: '20%', paddingBottom: '5%'}}>
          <div style={{ width: '90%', display: 'flex'}}>
            <div style={{width:'30%'}}></div>
            <div>
              <h1 style={{fontWeight: 'bold'}}>ENVATO</h1>
            </div>
          </div>
          <div>
            <img src={Envato} alt='' className="card" />
          </div>
          <div style={{width: '75%', backgroundColor: '#FF9100', display: 'flex'}}>
            <div style={{width:'35%'}}></div>
            <div>
              <h2 style={{ lineBreak: 'anywhere', maxWidth: '100%', padding: '6% 0% 0px', marginTop: '-4.5%', paddingBottom: 0, textAlign: 'left'}}>
              Unlimited downloads of stock videos<br></br>
              Royalty-free music, photos, graphics<br></br>
              We'll handle the content, you create<br></br>
              The creative subscription you need
              </h2>
            </div>
          </div>
        </div>
        <div style={{backgroundImage: `url(${Footer})`, height: '770px', paddingTop: '10%'}} >
          {/* <img src={Footer} className="Footer_image" /> */}
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <buutton style={{width: '30%', padding:'2%', border: '8px solid white', borderRadius: '16px', color: 'white', textAlign: 'center', cursor: 'pointer'}}>
              <a style={{fontSize: '35px', textDecoration: 'none', color: 'white', width: '100%'}}>
                PRIVACY POLICY
              </a>
            </buutton>
            <div style={{width: '10%'}}></div>
            <buutton style={{width: '30%', padding:'2%', border: '8px solid white', borderRadius: '16px', color: 'white', textAlign: 'center', cursor: 'pointer'}}>
              <a style={{fontSize: '35px', textDecoration: 'none', color: 'white', cursor: 'pointer', width: '100%'}}>
                TaC
              </a>
            </buutton>
          </div>
          <div style={{paddingTop: '1%', justifyContent: 'center'}}>
            <p style={{color: 'white', fontSize: '30px', textAlign: 'center', fontWeight: 'bold'}}>© 2020 All rights reserved.</p>
          </div>
          <div style={{ justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%'}}>
            <p style={{textAlign: 'center', color: 'white', fontSize: '30px'}}>
              This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by Facebook in any way.
              FACEBOOK is a trademark of FACEBOOK, Inc.
              Affiliate Disclosure: I am an independent affiliate. I am not a paid employee. I may receive commission if you click a link or button on this page and choose to purchase something. You can rest assured I will only share things I believe in and will truly be of value to you.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
