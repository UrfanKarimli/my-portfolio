import { IoMenu } from "react-icons/io5";
import { useHeaderData } from "../useHeaderData";
import { Drawer } from "antd";
import { useState } from "react";
import Link from "next/link";
import LocaleSwitcher from "@/components/local-switcher/LocaleSwitcher";
import { useParams } from "next/navigation";

export default function BurgerMenu() {
  const { menuItems, socialLinks } = useHeaderData();
  const [openP, setOpenP] = useState(false);
  const [open, setOpen] = useState(false);
  const params = useParams()
  const url = params?.params?.[0] || ''

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className='flex justify-between items-center ur:hidden'>
      <button onClick={showDrawer}>
        <IoMenu className='text-2xl text-myWhite ' />
      </button>
      <Drawer width={200} onClose={onClose} open={open} className='ant-drawer-content'>
        <ul className='flex flex-col items-center space-y-4'>
          {menuItems.map((item) =>
            item.href ? (
              <li onClick={() => { setOpen(false) }} key={item.id}>
                <Link href={item.href} className="font-semibold text-myWhite">
                  {item.name}
                </Link>
              </li>
            ) : (
              <div className=' flex flex-col' key={item.id}>
                <h4 >{item.name}</h4>
                {
                  item.submenu?.map((item) => (
                    <div className='bg-myWhite flex flex-col ml-3 gap-2 border border-myYellow rounded-md p-1' key={item.id}>
                      <h4 onClick={() => setOpenP((prev) => !prev)} style={{ textShadow: 'none' }} className="text-myBlack font-semibold p-1 border-b border-b-myYellow" >{item.name}</h4>

                      {
                        openP && (<div className=' flex flex-col ml-3'>
                          {item.items.map((item) => (
                            <Link
                              onClick={() => { setOpen(false) }}
                              key={item.href}
                              href={item.href}
                              className={`block font-semibold text-sm ${url === item.url ? 'text-myYellow hover:text-[#ff4e08c0] hover:bg-[#e3f7f4]' : 'text-myGray hover:text-myBlack hover:bg-[#eff3f3]'} rounded-md py-1 px-2`}
                              style={{ textShadow: 'none' }}
                            >
                              {item.name}
                            </Link>))}
                        </div>)
                      }

                    </div>
                  ))
                }
              </div>
            )
          )}
          <li>
            <LocaleSwitcher />
          </li>
          {socialLinks.map((social, index) => (
            <li key={index}>
              <Link target='_blank' href={social.href} className='text-xl text-myWhite light-shadow hover:scale-110'>
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  )
}
