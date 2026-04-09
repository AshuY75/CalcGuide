import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../routes/paths';
import { SEO_CONFIG } from '../routes/seoConfig';
import { BreadcrumbSchema } from './SchemaGenerator';

const DynamicBreadcrumbs = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const breadcrumbs = useMemo(() => {
        if (pathname === '/') return [];

        const pathParts = pathname.split('/').filter(Boolean);
        const crumbs = [
            { name: 'Home', url: '/' }
        ];

        let currentPath = '';
        pathParts.forEach((part, index) => {
            currentPath += `/${part}`;
            const fullPath = `${currentPath}/`;
            
            // Try to find the title in SEO_CONFIG or format the slug
            const config = SEO_CONFIG[fullPath] || SEO_CONFIG[currentPath];
            let name = '';
            
            if (config && config.h1) {
                name = config.h1.split('(')[0].trim(); // Get the main part of H1
            } else if (config && config.title) {
                name = config.title.split('-')[0].trim();
            } else {
                // Fallback: capitalize slug
                name = part.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            }

            crumbs.push({
                name: name,
                url: fullPath,
                isLast: index === pathParts.length - 1
            });
        });

        return crumbs;
    }, [pathname]);

    if (breadcrumbs.length === 0) return null;

    return (
        <>
            <BreadcrumbSchema items={breadcrumbs} />
            <nav className="text-sm text-slate-500 mb-4 flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
                {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={crumb.url}>
                        {index > 0 && <span className="text-slate-400">›</span>}
                        {crumb.isLast ? (
                            <span className="text-slate-900 font-medium" aria-current="page">
                                {crumb.name}
                            </span>
                        ) : (
                            <Link 
                                to={crumb.url} 
                                className="hover:text-blue-600 transition-colors"
                            >
                                {crumb.name}
                            </Link>
                        )}
                    </React.Fragment>
                ))}
            </nav>
        </>
    );
};

export default DynamicBreadcrumbs;
