import React, { useState } from 'react';
import {
    Card,
    Button,
    Divider
} from '@heroui/react';

import { FaExpeditedssl, FaHome, FaUser, FaUserTag } from 'react-icons/fa';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('dashboard');

    const menuItems = [
        {
            key: 'dashboard',
            label: 'Dashboard',
            icon: <FaHome />
        },
        {
            key: 'users',
            label: 'Utilisateurs',
            icon: <FaUser />
        },
        {
            key: 'settings',
            label: 'Paramètres',
            icon: <FaUserTag />
        }
    ];

    return (
        <Card className="h-screen w-64 p-4">
            <div className="mb-6">
                <h2 className="text-xl font-bold">Admin Panel</h2>
            </div>

            <Divider />

            <nav className="mt-4 space-y-2">
                {menuItems.map((item) => (
                    <Button
                        key={item.key}
                        fullWidth
                        variant={activeItem === item.key ? 'solid' : 'light'}
                        color="primary"
                        startContent={item.icon}
                        onClick={() => setActiveItem(item.key)}
                    >
                        {item.label}
                    </Button>
                ))}
            </nav>

            <div className="mt-auto">
                <Divider className="my-4" />
                <Button
                    fullWidth
                    color="danger"
                    variant="light"
                    startContent={<FaExpeditedssl />}
                >
                    Déconnexion
                </Button>
            </div>
        </Card>
    );
};

export default Sidebar;