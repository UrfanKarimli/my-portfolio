import { useTranslations } from "next-intl";

export const useQuestionsLinks = () => {
  const t = useTranslations("header");

    const interviewTopics = [
        { name: 'HTML', url: 'html', href: '/questions/html' },
        { name: 'CSS', url: 'css', href: '/questions/css' },
        { name: 'JavaScript', url: 'java-script', href: '/questions/java-script' },
        { name: 'TypeScript', url: 'type-script', href: '/questions/type-script' },
        { name: 'React.js', url: 'react_js', href: '/questions/react_js' },
        { name: 'Next.js', url: 'next_js', href: '/questions/next_js' },
        { name: t("general"), url: 'general', href: '/questions/general' }
    ];
  return {interviewTopics}
}
