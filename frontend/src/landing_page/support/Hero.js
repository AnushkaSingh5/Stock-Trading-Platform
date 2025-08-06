import React from 'react';

function Hero() {
    return ( 
        <header style={{backgroundColor:"#387ed1", color:"white"}}>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-2'>
                        <h6 style={{fontSize:"22px"}}>Support Portal</h6>
                    </div>
                    <div className='col-8'></div>
                    <div className='col-2'>
                        <p style={{fontSize:"18px", textDecoration:"underline"}}>Track Tickets</p>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-5'>
                        <p style={{fontSize:"25px"}}>Search for and answer or browse help topics to create a ticket</p>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" style={{height:"65px", fontSize:'14px'}} placeholder="Eg: how do I activate F&O, why is my order getting rejected..." aria-label="Username" />
                        </div>
                        <a href="" style={{color:"#fff"}}>Track account opening</a>&nbsp;&nbsp;&nbsp;
                        <a href="" style={{color:"#fff"}}>Track segment activation</a>&nbsp;&nbsp;&nbsp;
                        <a href="" style={{color:"#fff"}}>Intraday margins</a>&nbsp;&nbsp;&nbsp;
                        <a href="" style={{color:"#fff"}}>Kite user manual</a>&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className='col-2'></div>
                    <div className='col-5'>
                        <p style={{fontSize:"25px"}}>Featured</p>
                        <div style={{lineHeight:"2.5", fontSize:"15px"}}>
                            <ol>
                                <li><a href="" style={{textDecoration:"underline", color:"#fff"}}>Current Takeovers and Delisting - January 2024</a></li>
                                <li><a href="" style={{textDecoration:"underline", color:"#fff"}}>Latest Intraday leverages - MIS & CO</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default Hero;