import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalPortalProps {
    children: React.ReactNode;
}

const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
    const modalRoot = document.getElementById('modal-root');
    const el = document.createElement('div');

    useEffect(() => {
        if (modalRoot) {
            modalRoot.appendChild(el);
            return () => {
                modalRoot.removeChild(el);
            };
        }
    }, [modalRoot, el]);

    return ReactDOM.createPortal(children, el);
};

export default ModalPortal;