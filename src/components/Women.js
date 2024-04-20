import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { women } from './Womendata';

const Women = () => {
  const {id} = useParams();
    const [value, setValue]=useState([])
  
   const getdata = async()=>{
     let data = await axios.get('dress').then((result)=>setValue(result.data))
   }
    useEffect(()=>{
      getdata();
    },[])
    
  return (
    <div className='container'>
    <div className='row'>
    {
        women.map((x)=>{
            return(
                <div className='col-lg-3 my-2 '>
<div className="card " style={{width: '18rem'}}>
<Link to={`/women/${x.id}`}> <img src={x.imageUrl} className="card-img-top img-wrapper " alt="..." /></Link>
  <div className="card-body ">
    <h5 className="card-title">{x.title.slice(0,20)}...</h5>
    <p className="card-text">{x.description.slice(0,50)}...</p>
    <a href="#" className="btn btn-primary">Add to Cart</a>
  </div>
</div>

                </div>
            )
        })
    }
    </div>
    <hr></hr>

    <div className="newletter-subscribe-container">
    <div className="newletter-subscribe">
      <div id="boxes-normal" className="newletter-container">
        <div style={{}} id="dialog-normal" className="window">
          <div className="box">
            <div className="newletter-title module-title">
              <h2>Newsletter</h2>
              <h3 className="sub-title">Be the first to hear about new styles and offers and see how you’ve helped.</h3>
            </div>
            <div className="box-content newleter-content">
              <div id="frm_subscribe-normal">
                <form name="subscribe" id="subscribe-normal">
                  <span className="required">*</span><span>Email</span><input type="text" defaultValue name="subscribe_email" id="subscribe_email-normal" placeholder="Email" fdprocessedid="byo81" />
                  <input type="hidden" defaultValue name="subscribe_name" id="subscribe_name-normal" />
                  <a onclick="email_subscribe()"><i className="pe-7s-mail" /></a>
                </form>
              </div>{/* /#frm_subscribe */}
              <div id="notification-normal" />
            </div>{/* /.box-content */}
          </div>
        </div>	
      </div>
    </div>
  </div>
  <div className="middle-footer row">
    <div className="col-sm-3">
      <h3 className="footer-title">Information</h3>
      <ul className="list-unstyled">
        <li><a href="http://highsportswear.com.pk/about_us">About Us</a></li>
        <li><a href="http://highsportswear.com.pk/delivery">Delivery Information</a></li>
        <li><a href="http://highsportswear.com.pk/privacy">Privacy Policy</a></li>
        <li><a href="http://highsportswear.com.pk/terms">Terms &amp; Conditions</a></li>
        <li><a href="http://highsportswear.com.pk/gallery">Gallery</a></li>
        <li><a href="http://highsportswear.com.pk/index.php?route=information/contact">Contact Us</a></li>
      </ul>
    </div>
    <div className="col-sm-3">
      <h3 className="footer-title">Our Categories</h3>
      <ul className="list-unstyled">
        <li><a href="http://highsportswear.com.pk/sports-wear">Sports wear</a></li>
        <li><a href="http://highsportswear.com.pk/casual-wear">Casual wear</a></li>
        <li><a href="http://highsportswear.com.pk/fitness-wear">Fitness wear</a></li>
        <li><a href="http://highsportswear.com.pk/bavarian-wear">Bavarian wear</a></li>
        <li><a href="http://highsportswear.com.pk/fight-wear">Fight wear</a></li>
        <li><a href="http://highsportswear.com.pk/accessories">Accessories</a></li>
      </ul>
    </div>
    <div className="col-sm-2 position-4-socialfooter">
      <div id="cmsblock-23" className="cmsblock">
        <div className="description">																																																		<div className="footer-social-icons">
            <h2 className="footer-title">find us on</h2>
            <ul>
              <li>
                <a className="facebook social-icon" href="https://www.facebook.com/Highsports786/" title="Facebook" target="_blank">
                  <i className="fa fa-facebook" />Facebook
                </a>
              </li>
              <li>
                <a className="twitter social-icon" href="https://twitter.com/highsports786" title="Twitter" target="_blank">
                  <i className="fa fa-twitter" />Twitter
                </a>
              </li>
              <li>
                <a className="rss social-icon" href="https://www.linkedin.com/company/highsportswear/" title="Instagram" target="_blank">
                  <i className="fa fa-instagram" />Instagram
                </a>
              </li>
              <li>
                <a className="google-plus social-icon" href="https://plus.google.com/106197219149413738251" title="Google-plus" target="_blank">
                  <i className="fa fa-google-plus" />Google+
                </a>
              </li>
              <li>
                <a className="linkedin social-icon" href="https://www.linkedin.com/company/highsportswear" target="_blank"><i className="fa fa-linkedin" />				Linkedin			</a>
              </li>
              <li>
                <a className="google-plus social-icon" href="#" title="Pinterest" target="_blank">
                  <i className="fa fa-pinterest" />Pinterest
                </a>
              </li>		
            </ul>
          </div>																																													</div>
      </div>
    </div>
    <div className="col-sm-4 position-4-statictags">
      <div id="cmsblock-22" className="cmsblock">
        <div className="description">																																																																																										<div className="about-static">
            <div className="image-logo">
              <a href="index.php">
                
              </a>
            </div>
            <div className="text-content" style={{marginTop: 20}}>
              <ul className="info-contact">
                <li>Noul More, Wazirabad Road ,51310&nbsp; Sialkot Pakistan</li>
                <li>Email: <span>info@highsportswear.com.pk</span></li>
                <li>Tel: <span>+92 52 3257273</span></li>
                <li>Mobile: <span>+92 331 3241500</span></li></ul>
            </div>
          </div>																																																																																	</div>
      </div>
    </div>
  </div>
<hr></hr>
<div className="bottom-footer">
  <div className="container">
    <p className="text_powered"> AI Sportswear. All rights reserved.</p>	
    <div className="payment-method">{/*a href="#"><img src="image/payment/payment.png" alt="image payment"></a*/}</div>
    <div id="back-top" style={{display: 'block'}}><i className="fa fa-angle-double-up" /></div>
  </div>
</div>
  
    </div>
  )
}

export default Women