import React, { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DynamicBreadcrumbs from '../components/DynamicBreadcrumbs'
import SeoHead from '../components/SeoHead'
import { SEO_CONFIG } from '../routes/seoConfig'

// Loading Fallback for Lazy Loaded Routes
const PageLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
)

export default function MainLayout() {
    const location = useLocation()
    const config = SEO_CONFIG[location.pathname]

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
            <Header />

            <main className="flex-grow pt-[72px]">
                <SeoHead />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <DynamicBreadcrumbs />
                    
                    {/* Automated Page Header Section */}
                    {config?.h1 && (
                        <div className="mb-8 mt-6">
                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
                                {config.h1}
                            </h1>
                            {config.lastUpdated && (
                                <p className="text-sm text-slate-500 font-medium flex items-center gap-2 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Last Updated: {new Date(config.lastUpdated).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </p>
                            )}
                        </div>
                    )}

                    <Suspense fallback={<PageLoader />}>
                        <Outlet />
                    </Suspense>
                </div>
            </main>

            <Footer />
        </div>
    )
}
