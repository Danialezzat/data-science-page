import React from 'react';
import './FooterStyle.css';
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='col solution'>
                <h6>Solution</h6>
                <ul>
                    <li><Link to='/' className='link'>Marketing</Link></li>
                    <li><Link to='/' className='link'>Analytics</Link></li>
                    <li><Link to='/' className='link'>Comerce</Link></li>
                    <li><Link to='/' className='link'>Insights</Link></li>
                </ul>
            </div>
            <div className='col support'>
                <h6>Support</h6>
                <ul>
                    <li><Link to='/' className='link'>Pricing</Link></li>
                    <li><Link to='/' className='link'>Documentation</Link></li>
                    <li><Link to='/' className='link'>Guides</Link></li>
                    <li><Link to='/' className='link'>API Status</Link></li>
                </ul>
            </div>
            <div className='col company'>
                <h6>Company</h6>
                <ul>
                    <li><Link to='/' className='link'>About</Link></li>
                    <li><Link to='/' className='link'>Blog</Link></li>
                    <li><Link to='/' className='link'>Jobs</Link></li>
                    <li><Link to='/' className='link'>Press</Link></li>
                </ul>
            </div>
            <div className='col legal'>
                <h6>Legal</h6>
                <ul>
                    <li><Link to='/' className='link'>Claim</Link></li>
                    <li><Link to='/' className='link'>Privacy</Link></li>
                    <li><Link to='/' className='link'>ookeis</Link></li>
                    <li><Link to='/' className='link'>Terms</Link></li>
                </ul>
            </div>

            <div className='col-subscribe'>
                <h6>Subscribe to our newsletter</h6>
                <p>The latest news, articles, and resourses send to your inbox weekly.</p>
                <div className='subscribe'>
                    <input type='email' placeholder='enter your email...' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className='content'>
                <div className='rights'>
                    <p>&copy; workflow , Inc. All rights reserved.</p>
                </div>
                <div>
                    <FaFacebook size={20} style={{color:'#d3d3d3', marginRight: '10px'}}/>
                    <FaInstagram size={20} style={{color:'#d3d3d3', marginRight: '10px'}}/>
                    <FaTwitter size={20} style={{color:'#d3d3d3', marginRight: '10px'}}/>
                    <FaGithub size={20} style={{color:'#d3d3d3', marginRight: '10px'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer