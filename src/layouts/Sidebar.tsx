import { Link, useLocation } from "react-router-dom";

type SidebarProps = {
    isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
    const location = useLocation();
    const menu = [
        { icon: "🏠", label: "Dashboard", path: "/dashboard" },
        { icon: "📄", label: "Users", path: "/users" },
        { icon: "⚙️", label: "Products", path: "/products" },
    ];

    return (
        <>
            <aside className={`bg-gray-800 text-white h-screen transition-width duration-300 ${isOpen ? "w-64" : "w-20"
                }`}>
                <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
                <ul className="space-y-3">
                    {menu.map((item) =>
                        <>
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`block py-2 px-3 rounded-md ${location.pathname.startsWith(item.path)
                                        ? "bg-gray-700"
                                        : "hover:bg-gray-800"
                                        }`}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    {isOpen && <span className="font-medium">{item.label}</span>}
                                </Link>
                            </li>
                        </>
                    )
                    }
                </ul>
            </aside>
        </>
    )
};

export default Sidebar;