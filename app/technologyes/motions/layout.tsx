
export default function MotionsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className=" p-4  no-shadow   ">
            <div className="bg-myWhite rounded-lg overflow-hidden">
                <p className="font-bold text-myBlack text-sm ur:text-xl py-2 "> Front End Developmentdə Motion Alətləri </p>
                <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Frontend inkişafında motion (hərəkət) alətləri, veb sayt və tətbiqlərdə animasiyalar və keçidlər yaratmaq üçün istifadə olunur. Bunlar istifadəçi təcrübəsini yaxşılaşdırmağa, interaktivliyi artırmağa və vizual təsiri gücləndirməyə kömək edir. Aşağıda ən məşhur frontend motion alətlərini tapa bilərsən:</p>
                <ul className=' list-decimal pl-5 [&>li]:py-[2px]'>
                    <li className='text-xs ur:text-sm text-[#000]  '> <strong>CSS Animations & Transitions</strong></li>
                    <li className='text-xs ur:text-sm text-[#000]  '> <a target="_blank" href="https://animate.style/"><strong>Animate.css</strong></a></li>
                    <li className='text-xs ur:text-sm text-[#000]  '> <strong>GSAP (GreenSock Animation Platform)</strong></li>
                    <li className='text-xs ur:text-sm text-[#000]  '> <strong>Framer Motion (React üçün)</strong></li>
                    <li className='text-xs ur:text-sm text-[#000]  '> <strong>Lottie (JSON-based animasiyalar)</strong></li>
                    <li className='text-xs ur:text-sm text-[#000]  '> <strong>Motion One (Modern Web Animations)</strong></li>
                    <li className='text-xs ur:text-sm text-[#000]  '> <strong>React Spring</strong></li>
                </ul>
                <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>və s.</p>

             
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
