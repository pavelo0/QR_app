import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

const links = [
    { to: '/Mono_QR/Generate_QR', label: 'Generate QR' },
    { to: '/Mono_QR/Scan_QR', label: 'Scan QR' },
    { to: '/Mono_QR/Generate_History', label: 'Generate History' },
    { to: '/Mono_QR/Scan_History', label: 'Scan History' },
];

export function NavMenu() {
    const location = useLocation();

    return (
        <nav className="relative flex gap-4 font-medium mx-auto">
            {links.map((link) => {
                const isActive = location.pathname === link.to;

                return (
                    <div key={link.to} className="relative px-3 py-1">
                        {isActive && (
                            <motion.div
                                layoutId="nav-bg"
                                className="absolute inset-0 bg-black rounded-full"
                                transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: 60,
                                }}
                            />
                        )}
                        <Link
                            to={link.to}
                            className={cn(
                                'relative z-10 transition-colors',
                                isActive ? 'text-white' : 'text-black-',
                            )}
                        >
                            {link.label}
                        </Link>
                    </div>
                );
            })}
        </nav>
    );
}
