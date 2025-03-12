"use client"

export default function WithoutRouting() {
  return (
    <div>
      
      <p className="font-bold text-myBlack text-sm ur:text-xl py-2 "></p>
      <p className="font-bold text-myBlack text-xs ur:text-base py-2 "></p>
      <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '></p>
      <ul className=' list-decimal pl-5 [&>li]:py-[2px]'>
        <li className='text-xs ur:text-sm text-[#000]  '> <strong></strong></li>
      </ul>
    </div>
  )
}
