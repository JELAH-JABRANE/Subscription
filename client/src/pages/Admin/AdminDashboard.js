import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidbare/Sidebar'

export const AdminDashboard = () => {
    return (
        <div className="flex">
        <Sidebar />
        <main className="ml-64 flex-1">
            <Header />
            {/* Your main content here */}
        </main>
    </div>
    )
}
