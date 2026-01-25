
/**
 * Auto-discovers all article metadata from files in the pages/learn directory.
 * This ensures strict Single Source of Truth - the article file itself.
 */
export function getAllArticles() {
    // 1. Import all modules in pages/learn ending in .jsx
    const modules = import.meta.glob('../pages/learn/*.jsx', { eager: true });

    // 2. Extract metadata
    const articles = Object.entries(modules)
        .map(([path, module]) => {
            // Skip LearnHome.jsx or other utility files that are not articles
            if (path.includes('LearnHome.jsx')) return null;
            if (!module.metadata) return null;

            return {
                ...module.metadata,
                id: path // Use file path as unique ID if needed
            };
        })
        .filter(Boolean); // Remove nulls

    // 3. Sort by Date (Latest First)
    return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
}
