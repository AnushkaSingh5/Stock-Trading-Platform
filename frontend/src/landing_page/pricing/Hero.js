import React from 'react';

function Hero() {
    return ( 
        <div className='container mb-5'>
            <div className='row border-bottom text-center p-5'>
                <h1>Pricing</h1>
                <p className="text-muted mt-4">Free equity investments and flat ₹20 tradey and F&O trades</p>
            </div>
            <div className='row text-center p-5 mt-3'>
                <div className="col">
                    <img src='media/images/pricing0.svg' />
                    <h3>Free equity delivery</h3>
                    <p className='mt-3 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹
                    0 brokerage.</p>
                </div>
                <div className="col">
                    <img src='media/images/intradayTrades.svg' />
                    <h3>Intraday and F&O trades</h3>
                    <p className='mt-3 text-muted'>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
                    intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className="col">
                    <img src='media/images/pricing0.svg' />
                    <h3>Free equity delivery</h3>
                    <p className='mt-3 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0
                    commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;