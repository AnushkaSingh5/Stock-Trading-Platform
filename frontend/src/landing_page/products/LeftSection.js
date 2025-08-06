import React from 'react';

function LeftSection({image, title, description, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-6 p-4'>
                    <img src={image} style={{width:"90%"}} />
                </div>
                <div className='col-6 p-5'>
                    <h1>{title}</h1>
                    <p className='text-muted'>{description}</p>
                    <div className='d-flex gap-5'>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='mt-4 d-flex gap-4'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore}><img src='media/images/appstoreBadge.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;