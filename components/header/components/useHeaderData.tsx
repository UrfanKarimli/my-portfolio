import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";

import { useTranslations } from 'next-intl';

export function useHeaderData() {
  const t = useTranslations("header");

  const menuItems = [
    { name: t("home"), href: '/' },
    { name: t("about"), href: '/about' },
    { name: t("questions"), href: '/interview/html' },
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
