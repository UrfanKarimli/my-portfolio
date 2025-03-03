import { IoMenu } from "react-icons/io5";
import { useHeaderData } from "../useHeaderData";
import { Drawer } from "antd";
import { useState } from "react";
import Link from "next/link";
import LocaleSwitcher from "@/components/local-switcher/LocaleSwitcher";
import { useParams } from "next/navigation";
import { motion } from "framer-motion"
import { FaAngleDown } from "react-icons/fa";



export default function BurgerMenu() {
  const { menuItems, socialLinks } = useHeaderData();
  const [openP, setOpenP] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null)
  const params = useParams()
  const url = params?.params?.[0] || ''

  const handleLinkClick = (id: number) => {
    setExpanded((prevState) => (prevState === id ? null : id))
  }
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
                <h4 onClick={() => setOpenP((prev) => !prev)}>{item.name}</h4>
                {
                  item.submenu?.map((item) => (
                    openP &&
                    <div className='bg-[#dbeafe] flex flex-col ml-3   p-1' key={item.id}>
                      <h4 onClick={() => handleLinkClick(item.id)} style={{ textShadow: 'none' }} className="text-myBlack hover:text-[#ff4e08c0] font-semibold p-1  flex items-center justify-between " >
                        {item.name}
                        <FaAngleDown className={`${expanded === item.id ? "rotate-180": ""}`} />
                      </h4>
                      <motion.div
                        initial={{ height: "0px", }}
                        animate={
                          expanded === item.id
                            ? { height: "auto", }
                            : { height: "0px", }
                        }
                        exit={{ height: "0px", }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden   will-change-[transform,opacity]"
                      >
                        <div className=' flex flex-col ml-3 border-l border-l-myYellow'>
                          {item.items?.map((item) => (
                            <Link
                              onClick={() => { setOpen(false) }}
                              key={item.href}
                              href={item.href}
                              className={`block font-semibold hover:text-[#ff4e08c0] hover:bg-[#fff]  text-sm ${url === item.url ? 'text-myYellow  hover:bg-[#e3f7f4]' : 'text-myGray  '} rounded-md py-1 px-2`}
                              style={{ textShadow: 'none' }}
                            >
                              {item.name}
                            </Link>))}
                        </div>
                      </motion.div>
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
