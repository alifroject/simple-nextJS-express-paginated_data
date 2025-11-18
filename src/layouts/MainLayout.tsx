import React from "react";
import { Outlet } from "react-router-dom";

type AdminLayoutProps = {
    children?: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <main className="flex-1">
                    {children || <Outlet />}
                </main>
            </div>
        </>
    )
}

export default AdminLayout;