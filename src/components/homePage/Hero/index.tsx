import React, { ReactElement, useEffect, useState } from 'react'
import './index.scss';

interface Props {
    
}

export default function Hero({}: Props): ReactElement {
    return (
        <div className='home-hero'>
            <div className='background-wrapper'>
                <div className='image'></div>
                <video autoPlay loop muted>
                    <source
                        src='https://www.bungie.net/pubassets/pkgs/143/143741/bnet_beyond_light_bnet_launch_header.mp4?cv=3983621215&av=1521438542'
                        type='video/mp4'/>
                </video>
            </div>
            <div className='hero-content'>
               <div className='title-img'></div>
               <div className='divider'></div>
               <h2>WIELD THE DARKNESS.</h2>
            </div>
        </div>
    )
}
