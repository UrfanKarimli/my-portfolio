export  function formatUrl(url: string) {
    if (!url) return ''; 

    if (!url.includes('-') && !url.includes('_')) {
        return url.toUpperCase();
    }
    return url
        .split('-') 
        .map(part => part.split('_').map((word, index) => index === 0
            ? word.charAt(0).toUpperCase() + word.slice(1)
            : word.toLowerCase()
        )
            .join('.') 
        )
        .join('');
}