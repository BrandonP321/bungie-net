import React, { ReactElement } from 'react'
import FeaturedSection from '../../components/homePage/FeaturedSection';
import Hero from '../../components/homePage/Hero';
import MainHeader from '../../components/MainHeader';
import './index.scss';

export default function Home(): ReactElement {
    return (
        <>
            <MainHeader />
            <div className='home-page'>
                <Hero />
                <div className='main-content'>
                    <FeaturedSection />
                </div>
            </div>
        </>
    )
}
