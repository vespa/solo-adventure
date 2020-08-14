import React from 'react';
import styles from './TextBox.module.scss';

export const TextBox = ({ children, ...rest }) => {
    return (
        <div
            className={`${styles.textbox} ${styles.textbox__regular}`}
            {...{ rest }}
        >
            {children}
        </div>
    );
};

export default TextBox;
