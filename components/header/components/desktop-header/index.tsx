import Link from "next/link";
import { useHeaderData } from "../useHeaderData";
import { Dropdown } from "antd";
import LocaleSwitcher from "@/components/local-switcher/LocaleSwitcher";


export default function DesktopHeader() {
      const { menuItems, socialLinks } = useHeaderData();
    
    return (
        <ul className='hidden ur:flex justify-between items-center'>
            <li className=''>
                <ul className=' flex space-x-4 font-roboto justify-start'>
                    {menuItems.map((item) =>
                        item.href ? (
                            <li key={item.id} className='flex space-x-4 font-roboto' >
                                <Link href={item.href} className="text-lg text-myWhite  hover:scale-110">
                                    {item.name}
                                </Link>
                            </li>
                        ) : (
                            <li key={item.id} className='flex space-x-4 font-roboto'>
                                <Dropdown
                                    menu={{
                                        items: item.submenu?.flatMap((sub) =>
                                            sub.items.map((subItem) => ({
                                                key: subItem.href,
                                                label: <Link style={{ textShadow: 'none' }} href={subItem.href}>{subItem.name}</Link>,
                                            }))
                                        ),
                                    }}
                                >
                                    {item.name}
                                </Dropdown>
                            </li>
                        )
                    )}
                </ul>
            </li>
            <li className='flex items-center space-x-4'>
                <LocaleSwitcher />
                {socialLinks.map((social, index) => (
                    <Link key={index} target='_blank' href={social.href} className='text-xl text-myWhite light-shadow hover:scale-110'>
                        {social.icon}
                    </Link>
                ))}
            </li>
        </ul>
    )
}
