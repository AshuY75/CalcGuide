/**
 * URL State Utility
 * Encodes/Decodes calculator inputs to URL parameters
 */

export const getUrlParams = () => {
    return new URLSearchParams(window.location.search);
};

export const setUrlParams = (paramsObject) => {
    const params = new URLSearchParams();
    Object.entries(paramsObject).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
            params.set(key, value);
        }
    });
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({ path: newUrl }, '', newUrl);
};

export const parseInitialState = (defaults) => {
    const params = getUrlParams();
    const state = { ...defaults };
    
    Object.keys(defaults).forEach(key => {
        const value = params.get(key);
        if (value !== null) {
            // Convert to number if the default is a number
            state[key] = typeof defaults[key] === 'number' ? Number(value) : value;
        }
    });
    
    return state;
};
