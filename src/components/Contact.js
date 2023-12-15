import React from 'react';
import './ContactStyles.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact'>
        <div className='container'>
            <div className='col-1'>
                <div className='content'>
                    <div>
                        <h2>Get in touch</h2>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    <div className='address'>
                        <p>742 Evergreen Terrace</p>
                        <p>Springfield, OR 12345</p>
                    </div>
                    <div className='icons'>
                        <FaPhone style={{marginRight: '1rem'}} />
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <div className='icons'>
                        <FaEnvelope style={{marginRight: '1rem'}} />
                        <p>this@example.com</p>
                    </div>
                    <div className='careers'>
                        <p>Looking for careers<span>View all job opening.</span></p>
                    </div>
                </div>
            </div>
            <div className='col-2'>
                <form action=''>
                    <input type='text' placeholder='full name...' />
                    <input type='email' placeholder='email...' />
                    <input type='password' placeholder='password...' />
                    <textarea name='Message' placeholder='Message' cols='30' rows='10' ></textarea>
                    <div className='checkbox'>
                        <input type='checkbox' />
                        <p>By checking this box, youagree to the <span>Privacy policy</span> and <span>Cookies policy</span>.</p>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact