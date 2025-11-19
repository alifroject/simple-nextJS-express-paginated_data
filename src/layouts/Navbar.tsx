// src/components/Navbar.jsx
import { useState } from "react";

type NavbarProps = {
    toggleSidebar: () => void;
}

//icons
import { Menu } from "@mui/icons-material";

export default function Navbar({ toggleSidebar }: NavbarProps) {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-primary text-white shadow-soft">
            <nav className="max-w-container  mx-auto px-6 md:py-4 py-6 flex items-center justify-between">


                <div className="hidden md:block text-white cursor-pointer" onClick={toggleSidebar}>
                    <Menu fontSize="large" />
                </div>

                <div className="flex items-center gap-4 ml-auto">
                    <div className="hidden md:block relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            {/* Circle Profile */}
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg font-semibold">
                                U
                            </div>

                            {/* Name */}
                            <span className="font-medium">
                                Username
                            </span>
                        </button>

                        {/* Dropdown */}
                        {open && (
                            <div className="absolute right-0 mt-3 w-40 bg-white text-neutral-800 shadow-strong rounded-lg py-2">
                                <button className="w-full px-4 py-2 text-left hover:bg-neutral-100 transition-base">
                                    Profile
                                </button>
                                <button className="w-full px-4 py-2 text-left hover:bg-neutral-100 transition-base">
                                    Settings
                                </button>
                                <button className="w-full px-4 py-2 text-left hover:bg-neutral-100 transition-base">
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="block md:hidden text-white cursor-pointer">
                        <Menu fontSize="large" />
                    </div>
                </div>


            </nav>
        </header>
    );
}
