import React from 'react';

function Brokerage() {
    return ( 
        <div className='container border-top mb-5 p-5'>
            <div className='row text-center mt-5 mb-3'>
                <div className='col-8 mx-auto'>
                    <a href='' style={{textDecoration:"none", color:"#387ed1"}}><h4>Bokerage calculator</h4></a>
                    <div className="text-start px-5">
                        <ul className="text-muted mt-3" style={{lineHeight:"1.8", fontSize:"15px"}}>
                            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                            GST per order.</li>
                            <li>Digital contract notes will be sent via e-mail.</li>
                            <li>Physical copies of contract notes, if required, shall be charged
                            ₹20 per contract note. Courier charges apply.</li>
                            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                            equity (whichever is lower).</li>
                            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity
                            (whichever is lower).</li>
                            <li>If the account is in debit balance, any order placed will be
                            charged ₹40 per executed order instead of ₹20 per executed order.</li>
                        </ul>
                    </div>
                </div>
                <div className='col-4'>
                    <a href='' style={{textDecoration:"none", color:"#387ed1"}}><h4>List of charges</h4></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;