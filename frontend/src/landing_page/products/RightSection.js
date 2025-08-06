import React from 'react';

function RightSection({image, title, description, learnmore}) {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-6 p-5' style={{marginTop:"12%"}}>
                    <h1>{title}</h1>
                    <p className='text-muted'>{description}</p>
                    <a href={learnmore} style={{textDecoration:"none"}}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-6 p-5'>
                    <img src={image} style={{width:"110%"}} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;