import { FiExternalLink } from "react-icons/fi";

export default function Banner() {
    return (
        <section id='home'>
            <div
                className='  h-[90vh] w-full bg-no-repeat  bg-center bg-cover'>
                <div className="container w-full h-full flex items-center">
                    <div className=' flex flex-col gap-2'>
                        <h2 className=' text-[45px] font-light leading-none  text-[#f5f5f5] font-roboto text-shadow'>Hello I`am</h2>
                        <h1 className=' text-[80px] font-normal leading-none  text-[#f5f5f5] font-roboto text-shadow'>Urfan Karimli</h1>
                        <h2 className=' text-[45px] font-light leading-none  text-[#f5f5f5] font-roboto text-shadow'>Front-end Developer</h2>
                        <a className=' mt-8  text-[26px] border border-[#1b1b1b] bg-[#1B1B1B] hover:bg-white hover:text-[#1b1b1b] py-1 px-3 text-white w-min flex items-center gap-2 rounded-lg ' href=""> Resume <FiExternalLink /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
