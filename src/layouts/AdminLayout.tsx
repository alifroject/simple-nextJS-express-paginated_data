import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type AdminLayoutProps = {
    children?: React.ReactNode;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);


    return (
        <>
            <div className="flex">
                <div className="hidden md:block">

                    <Sidebar isOpen={isSidebarOpen} />
                </div>

                {/* Right section */}
                <div className="flex-1 min-h-screen bg-gray-100">

                    {/* Top Navbar */}
                    <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

                    {/* Page Content */}
                    <main className="p-6">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
