import { Link, useLocation } from "react-router-dom";

type SidebarMobileProps = {
    isOpen?: boolean;
    onClose?: () => void;
}

const SidebarMobile = ({ isOpen, onClose }: SidebarMobileProps) => {
    const location = useLocation();

    const menu = [
        { icon: "🏠", label: "Dashboard", path: "/dashboard" },
        { icon: "📄", label: "Users", path: "/users" },
        { icon: "⚙️", label: "Products", path: "/products" },
    ];

    return (
        <div
            className={`fixed bottom-0 left-0 w-full h-full bg-white text-black 
  transition-all duration-300 overflow-hidden 
  ${isOpen ? "translate-y-0" : "translate-y-full"}`}
        >

            <div className="px-6 py-6">
                <h2 className="text-xl font-semibold mb-6">Menu</h2>

                <ul className="space-y-3">
                    {menu.map((item) => (
                        <li key={item.path}>
                            <Link
                                onClick={onClose}
                                to={item.path}
                                className={`flex items-center justify-between px-4 py-2 rounded-lg transition-colors
                
                                ${location.pathname.startsWith(item.path)
                                        ? "bg-neutral-200"
                                        : "hover:bg-neutral-100"
                                    }`

                                }
                            >
                                <span className="font-medium">{item.label}</span>
                                <span className="text-xl">{item.icon}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SidebarMobile;
