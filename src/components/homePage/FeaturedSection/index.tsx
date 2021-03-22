import React, { ReactElement } from 'react'
import './index.scss'
import SectionTab from '../../SectionTab'

interface Props {

}

export default function FeaturedSection({ }: Props): ReactElement {
    return (
        <section className='featured-section'>
            <SectionTab>FEATURED</SectionTab>
            <div className='flex-items'>
                <div className='flex-item large chosen-season'>
                    <div className='backdrop-overlay'></div>
                    <div className='content'>
                        <div className='divider'></div>
                        <p>SEASON OF THE CHOSEN</p>
                    </div>
                </div>
                <div className='flex-item small update'>
                    <div className='backdrop-overlay'></div>
                    <div className='content'>
                        <div className='divider'></div>
                        <p>DESTINY 2021 UPDATE: THE ROAD TO THE WITCH QUEEN</p>
                    </div>
                </div>
                <div className='flex-item small play-for-free'>
                    <div className='backdrop-overlay'></div>
                    <div className='content'>
                        <div className='divider'></div>
                        <p>PLAY FOR FREE</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
