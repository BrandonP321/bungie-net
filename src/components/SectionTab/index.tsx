import React, { ReactElement } from 'react'
import './index.scss'

interface Props {
    children: string;
}

export default function SectionTab({ children }: Props): ReactElement {
    return (
        <div className='section-tab'>
            <div className='line'></div>
            <div className='section-name'>{children}</div>
        </div>
    )
}
