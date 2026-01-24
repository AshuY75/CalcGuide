import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Loading Fallback for Lazy Loaded Routes
const PageLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
)

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
            <Header />

            {/* Main Content Area */}
            <main className="flex-grow pt-[72px]"> {/* Offset for fixed header if needed, or just standard flow */}
                <Suspense fallback={<PageLoader />}>
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </div>
    )
}
