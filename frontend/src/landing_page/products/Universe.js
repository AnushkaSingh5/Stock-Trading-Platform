import React from 'react';
import {Link} from 'react-router-dom';

function Universe() {
    return ( 
            <div className='container mt-5 text-center p-5'>
                <h1>The Zeodha Universe</h1>
                <p className="mt-4">Extend your trading and investments experience even further with out partner platforms</p>
                <div className='row mt-5'>
                    <div className="col-4 p-3">
                        <img src='media/images/smallcaseLogo.png' style={{width:"60%"}} />
                        <p className='text-muted mt-3'>Thematic Investment platform</p>
                    </div>
                    <div className="col-4 p-3">
                        <img src='media/images/streakLogo.png' style={{width:"60%"}} />
                        <p className='text-muted mt-3'>Algo & strategy platform</p>
                    </div>
                    <div className="col-4 p-3">
                        <img src='media/images/sensibullLogo.svg' style={{width:"60%"}} />
                        <p className='text-muted mt-3'>Options trading platform</p>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className="col-4 p-3">
                        <img src='media/images/zerodhaFundhouse.png' style={{width:"70%"}} />
                        <p className='text-muted mt-3'>Asset management</p>
                    </div>
                    <div className="col-4 p-3">
                        <img src='media/images/goldenpiLogo.png' style={{width:"60%"}} />
                        <p className='text-muted mt-3'>Bonds trading platform</p>
                    </div>
                    <div className="col-4 p-3">
                        <img src='media/images/dittoLogo.png' style={{width:"48%"}}/>
                        <p className='text-muted mt-3'>Insurance</p>
                    </div>
                </div>
                <Link class="nav-link active" to='/signup'>
                    <button className="p-2 btn btn-primary fs-7 mb-5 mt-5" style={{width:"20%", margin:"0 auto"}}>Sign up now</button>
                </Link>
            </div>
     );
}

export default Universe;