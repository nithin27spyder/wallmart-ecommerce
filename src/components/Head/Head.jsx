
import React from 'react';
import './head.css';

const Head = () => {
  return (
    <>
    <section className='head'>
        <div className='container d-flex'>
            <div className='left-row'>
                <i className='ri-phone-fill'></i>
                <label> +1234567890</label>
                <i className='ri-mail-fill'></i>
                <label> support@wallmart.com</label>
            </div>
            <div className='right-row' style={{marginLeft:"500px"}}>
                <i className='ri-map-pin-fill'></i>
                <label>Location</label>
                
                    <i className='ri-money-dollar-circle-line'></i>
                    <label>Dollar(US)</label>
                        <label>EN<i class="ri-arrow-drop-down-line"></i></label>
                    
                </div>
            
        </div>

    </section>
    </>
  );
};

export default Head;