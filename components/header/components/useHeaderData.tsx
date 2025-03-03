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
      name: <div style={{ textShadow: 'none' }} className="text-base font-bold ur:font-normal ur:bg-myBlack p-[2px] pl-1 rounded-md text-myWhite cursor-pointer">
        {t("knowledge")}
        <span
          style={{ textShadow: 'none' }}
          className="ml-px font-bold bg-[#ffa31a] text-myBlack px-[2px] py-px rounded-sm leading-normal">
          {t("hub")}
        </span>
      </div>,
      submenu: [
        {
          id: 1,
          name: t("questions"),
          items: [
            { name: 'HTML', url: 'html', href: '/knowledge-hub/html', },
            { name: 'CSS', url: 'css', href: '/knowledge-hub/css', },
            { name: 'JavaScript',url: 'java-script', href: '/knowledge-hub/java-script', },
            { name: 'TypeScript',url: 'type-script', href: '/knowledge-hub/type-script', },
            { name: 'React.js',url: 'react_js', href: '/knowledge-hub/react_js', },
            { name: 'Next.js',url: 'next_js', href: '/knowledge-hub/next_js', },
            // { name: 'General',url: 'general', href: '/knowledge-hub/general', }
          ]
        },
        // {
        //   id: 2,
        //   name: "test",
        //   items: []
        // }
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
