import React from 'react';

function Footer() {
    return ( 
        <footer className='border-top pt-5 pb-3' style={{backgroundColor:"#f8f9fa"}}>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <img src='media/images/logo.svg' alt='Logo' style={{width:"50%"}} />
                        <p className='mt-3'>&copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
                    </div>
                    <div className='col d-flex flex-column'>
                        <p>Company</p>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>About</a>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>Products</a>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>Pricing</a>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>Referral programme</a>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>Careers</a>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>Zerodha.tech</a>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>Press & media</a>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>Zerodha cares (CSR)</a>
                    </div>
                    <div className='col d-flex flex-column'>
                        <p>Support</p>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>Contact</a>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>Support portal</a>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>z-Connect blog</a>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>List of charges</a>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>Downloads & resources</a>
                    </div>
                    <div className='col d-flex flex-column' >
                        <p>Account</p>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>Open an account</a>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>Fund transfer</a>
                        <a href="" className='text-muted' style={{textDecoration:"none", marginBottom:"10px"}}>60 day challenge</a>
                    </div>
                </div>
                <div className='text-muted mt-5' style={{fontSize:"0.8rem"}}>
                    <p>Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
                    INZ000031633 CDSL: Depository services through Zerodha Securities
                    Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
                    through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
                    no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
                    #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                    J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
                    complaints pertaining to securities broking please write to
                    complaints@zerodha.com, for DP related to dp@zerodha.com. Please
                    ensure you carefully read the Risk Disclosure Document as prescribed
                    by SEBI | ICF</p>
                    
                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES
                    portal. Mandatory details for filing complaints on SCORES: Name,
                    PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                    Communication, Speedy redressal of the grievances</p>
                    
                    <p>Investments in securities market are subject to market risks; read
                    all the related documents carefully before investing.</p>
                    
                    <p>"Prevent unauthorised transactions in your account. Update your
                    mobile numbers/email IDs with your stock brokers. Receive
                    information of your transactions directly from Exchange on your
                    mobile/email at the end of the day. Issued in the interest of
                    investors. KYC is one time exercise while dealing in securities
                    markets - once KYC is done through a SEBI registered intermediary
                    (broker, DP, Mutual Fund etc.), you need not undergo the same
                    process again when you approach another intermediary." Dear
                    Investor, if you are subscribing to an IPO, there is no need to
                    issue a cheque. Please write the Bank account number and sign the
                    IPO application form to authorize your bank to make payment in case
                    of allotment. In case of non allotment the funds will remain in your
                    bank account. As a business we don't give stock tips, and have not
                    authorized anyone to trade on behalf of others. If you find anyone
                    claiming to be part of Zerodha and offering such services, please
                    create a ticket here.</p>
                </div>
                <div className='text-center mt-3 d-flex justify-content-center gap-4'>
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>NSE</a>
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>BSE</a>
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>MCX</a>
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>Terms & conditions</a>
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>Policies & procedures</a>
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>Privacy policy</a>
                    <a href="" className='text-muted' style={{textDecoration:"none"}}>Disclosure</a>
                </div>   
            </div>
        </footer>
     );
}

export default Footer;