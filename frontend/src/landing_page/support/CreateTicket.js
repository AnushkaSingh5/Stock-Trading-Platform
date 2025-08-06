import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container p-5'>
            <h3>To create a ticket, select a relevant topic</h3>
            <div className='row mt-5'>
                <div className='col'>
                    <p className='mb-5'><i class="fa-solid fa-circle-plus"></i>&nbsp; Account Opening</p>
                    <div className='d-flex flex-column'>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Online Account opening</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Offline Account opening</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Company, Partnership and HUF Account</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>NRI Account Opening</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Charges at Zerodha</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Getting Started</a>
                    </div>
                </div>
                <div className='col'>
                    <p className='mb-5'><i class="fa-solid fa-user-tie"></i>&nbsp; Your Zerodha Account</p>
                    <div className='d-flex flex-column'>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Login Credentials</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Account Modification and Segment Addition</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>DP ID and Bank details</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Your Profile</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Transfer and conversion of shares</a>
                    </div>
                </div>
                <div className='col'>
                    <p className='mb-5'><i class="fa-solid fa-chart-column"></i>&nbsp; Kite</p>
                    <div className='d-flex flex-column'>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Margin/Leverage, Product and Order types</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Kite Web Mobile</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Trading FAQs</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Corporate Actions</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Sentinel</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Kite API</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Pi and other platforms</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Stockreports+</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>GTT</a>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col'>
                    <p className='mb-5'><i class="fa-solid fa-credit-card"></i>&nbsp; Funds</p>
                    <div className='d-flex flex-column'>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Adding Funds</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Fund Withdrawal</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>eMandates</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Adding Bank Accounts</a>
                    </div>
                </div>
                <div className='col'>
                    <p className='mb-5'><i class="fa-solid fa-circle-notch"></i>&nbsp; Console</p>
                    <div className='d-flex flex-column'>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Reports</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Ledger</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Portfolio</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>60 Day Challenge</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>IPO</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Referral Program</a>
                    </div>
                </div>
                <div className='col'>
                    <p className='mb-5'><i class="fa-solid fa-coins"></i>&nbsp; Coin</p>
                    <div className='d-flex flex-column'>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Understanding Mutual Funds</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>About Coin</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Buying and Selling through Coin</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Starting an SIP</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Managing our Portfolio</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Coin App</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Moving to Coin</a>
                        <a href='' style={{textDecoration:"none", color:"#387ed1", marginBottom:"10px"}}>Government Securities</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;