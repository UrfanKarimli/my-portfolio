export function formatUrl(url: string) {

    switch (url) {
        case 'css':
            return 'CSS ilə bağlı suallar';
        case 'html':
            return 'HTML ilə bağlı suallar';
        case 'java-script':
            return 'JavaScript ilə bağlı suallar';
        case 'next_js':
            return 'Next.js ilə bağlı suallar';
        case 'react_js':
            return 'React.js ilə bağlı suallar';
        case 'type-script':
            return 'TypeScript ilə bağlı suallar';
        case 'general':
            return 'Ümumi Front-End ilə bağlı suallar';
        case 'css':
            return 'CSS ilə bağlı suallar';
        default:
            return "Səhv linkə keçid etdin"
    }
}
