import Link from "next/link";
import { useHeaderData } from "../useHeaderData";
import { Dropdown } from "antd";
import LocaleSwitcher from "@/components/local-switcher/LocaleSwitcher";
import { FaChevronRight } from "react-icons/fa6";


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
                                    open={true}
                                    overlayClassName="antd-dropdown "
                                    overlayStyle={{
                                        top: "50px",
                                    }}
                                    menu={{
                                        items: item.submenu?.map((sub) => ({
                                            key: sub.id,
                                            label: (
                                                <div className="hover-olan group relative py-[5px] pl-[12px]   hover:bg-[#fff] rounded-md">
                                                    <span style={{ textShadow: 'none' }} className="group-hover:text-[#ff4e08c0] text-myBlack font-semibold flex items-center justify-between">{sub.name} <FaChevronRight  size={12} /></span>
                                                    <div className="visible-olan group-hover:block hidden   pl-4  absolute top-0 left-[99.5px] ">
                                                        <div className="bg-[#dbeafe] py-1 px-1  ">
                                                            {sub.items?.map((subItem) => (
                                                                <span key={subItem.href}>
                                                                    <Link className="hover:text-[#ff4e08c0] hover:bg-[#fff] pl-3  block font-semibold text-sm rounded-md py-1 px-2" style={{ textShadow: 'none' }} href={subItem.href}>
                                                                        {subItem.name} 
                                                                    </Link>
                                                                </span>
                                                            ))}
                                                        </div>

                                                    </div>
                                                </div>
                                            ),
                                        })),
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
