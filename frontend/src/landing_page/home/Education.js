import React from 'react';

function Education() {
    return ( 
        <div className="container mb-5 mt-5">
            <div className="row">
                <div className="col-6 p-5 ">
                    <img src='media/images/education.svg' />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h2 className='mb-5'>Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right-long"></i></a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;