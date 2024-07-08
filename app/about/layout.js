import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <nav>Mission | Vision</nav>
            {children}
        </div>
    );
};

export default layout;