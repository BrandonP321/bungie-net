import React, { ReactElement } from 'react'
import './index.scss'

interface Props {
    background: string;
    border: string;
    borderHover: string;
    color: string;
    colorHover?: string;
    style?: any;
    children: string;
}

export default function BorderButton(props: Props): ReactElement {
    return (
        <a
            className={`border-btn bg-${props.background} border-${props.border} border-hover-${props.borderHover} color-${props.color}`}
            style={props.style || {}}>
            {props.children}
        </a>
    )
}
