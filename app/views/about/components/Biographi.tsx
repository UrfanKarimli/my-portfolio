import Image from 'next/image'
import React from 'react'

export default function Biographi() {
    return (
        <div className='relative w-full bg-myWhite flex flex-col-reverse items-center ur:flex-row ur:items-start justify-between p-6  my-10  border border-myBlack rounded-2xl'>
            <div className=' basis-[60%] flex flex-col  gap-5'>
                <h2 className='text-myBlack text-2xl md:text-[40px]  font-semibold leading-none text-center'>About me</h2>
                <p className=' text-myBlack hidden'>
                    Salam, mən Ürfan Kərimli. Frontend Development sahəsində 1 ildən artıq iş təcrübəsinə sahibəm. Həm ofis
                    şəraitində, həm də freelancer olaraq çalışmışam. İş təcrübəm əsasən React.js və Next.js üzərində olsa da,
                    digər JavaScript kitabxanaları ilə də kod yaza bilirəm. Ehtiyac olduqda istənilən texnologiyanı qısa müddətdə
                    öyrənmək qabiliyyətinə malikəm. İstənilən iş mühitinə tez uyğunlaşmaq, komandada effektiv işləmək və liderlik bacarıqlarına sahibəm.
                </p>
                <p className='text-sm sm:text-base text-myBlack '>
                    Hello, I am Urfan Karimli. I have over a year of experience in Frontend Development. I have worked both in an
                    office environment and as a freelancer. My expertise is primarily in React.js and Next.js, but I can also code
                    using other JavaScript libraries. I have the ability to quickly learn any necessary technology when needed.
                    I possess strong adaptability to different work environments, effective teamwork skills, and leadership abilities.
                </p>
            </div>
            <div className=' md:basis-[30%] rounded-full ur:rounded-md overflow-hidden'>
                <a href={`https://github.com/UrfanKarimli`} target='_blank' className=' ur:h-[300px] w-full  overflow-hidden'>
                    <Image src={'/me.jpeg'} alt="" width={400} height={335} className='w-[150px] h-[150px]  ur:w-full ur:h-[300px] object-cover object-top scale-125 transition transform duration-300 ease-in-out hover:scale-100' />
                </a>
            </div>
            <div className='absolute  top-0 -right-3 -z-10 h-[103%] w-[100.9%] rounded-3xl pt-[2px] pl-[2px] rounded-br-3xl bg-black   xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] '>

            </div>
        </div>
    )
}
