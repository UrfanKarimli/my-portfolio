import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";

import { useTranslations } from 'next-intl';

export function useHeaderData() {
  const t = useTranslations("header");


  const menuItems = [
    {
      id: 1,
      name: t("home"),
      href: '/'
    },
    {
      id: 2,
      name: t("about"),
      href: '/about'
    },
    {
      id: 3,
      name: <div  className="no-shadow text-base font-bold ur:font-normal ur:bg-myBlack p-[2px] pl-1 rounded-md text-myWhite cursor-pointer">
        {t("knowledge")}
        <span
          
          className="ml-px font-bold bg-[#ffa31a] text-myBlack px-[2px] py-px rounded-sm leading-normal">
          {t("hub")}
        </span>
      </div>,
      submenu: [
        {
          id: 1,
          name: t("questions"),
          items: [
            { name: 'HTML', url: 'html', href: '/questions/html', },
            { name: 'CSS', url: 'css', href: '/questions/css', },
            { name: 'JavaScript',url: 'java-script', href: '/questions/java-script', },
            { name: 'TypeScript',url: 'type-script', href: '/questions/type-script', },
            { name: 'React.js',url: 'react_js', href: '/questions/react_js', },
            { name: 'Next.js',url: 'next_js', href: '/questions/next_js', },
            { name: t("general"), url: 'general', href: '/questions/general', }
          ]
        },
        {
          id: 2,
          name: t("techs"),
          items: [
            { name: t("pwa"), url: 'pwa', href: '/technologyes/pwa', },
            { name: t("intl"), url: 'technologyes', href: '/technologyes/internationalization/app-router/with-routing', },
            { name: t("motions"), url: 'motions', href: '/technologyes/motions/framer-motions', },

          ]
        }
      ]
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/UrfanKarimli' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/%C3%BCrfan-k%C9%99rimli/' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/karimli_urfan/' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/994997564177' },
    { icon: <GoMail />, href: 'mailto:urfankarim@gmail.com' },
  ];

  return { menuItems, socialLinks };
}
