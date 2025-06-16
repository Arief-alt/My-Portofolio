import React from 'react';

const BouncingMouse = () => {
    return (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
            <img
                src="/assets/icons/mouse.png"
                alt="Scroll indicator mouse"
                className="size-14 animate-bounce"
                style={{
                    animationDuration: '2s',
                    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)'
                }}
            />
        </div>
    );
};

export default BouncingMouse;