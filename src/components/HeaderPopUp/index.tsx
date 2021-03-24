import React, { ReactElement } from 'react'
import './index.scss'

// const Option = () => null;

interface Props {
    children?: any;
}

export default function HeaderPopUp({ children }: Props): ReactElement {
    const options = React.Children.map(children, child => {
        if (child.type.displayName === 'Option') {
            return (
                <a className={`pop-up-option${child.props.hasBottomBorder ? ' border-bottom' : ''}`} href={child.url}>
                    <small>{child.props.smallTitle || ''}</small>
                    <p>{child.props.title}</p>
                </a>
            )
        } else if (child.type.displayName === 'CustomOption') {
            return (
                child.props.children
            )
        }

    });

    return (
        <div className='header-pop-up'>
            {options}
        </div>
    )
}

const Option = ({ children }: any) => children
Option.displayName = 'Option';
HeaderPopUp.Option = Option;

const CustomOption = ({ children }: any) => children
CustomOption.displayName = 'CustomOption';
HeaderPopUp.CustomOption = CustomOption;

// const findByType = (children: any, component: any) => {
//     const result = [];

//     const type = [component.displayName] || [component.name];

//     React.Children.forEach(children, child => {
//         const childType = child && child.type && (child.type.displayName || child.type.name);
//         if (type.includes(childType)) {
//             result.push(child);
//         }
//     })
// }