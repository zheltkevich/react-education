import React from 'react';
import classes from './AppModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.myModal]

    if (visible) {
        rootClasses.push(classes.opened);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
