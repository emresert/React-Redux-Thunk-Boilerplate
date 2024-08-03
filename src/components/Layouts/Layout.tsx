import React, { FC, ReactNode, } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {


    return (
        <>
        
            <div className="main">
                {children}
            </div>

        </>
    );
};

export default Layout;