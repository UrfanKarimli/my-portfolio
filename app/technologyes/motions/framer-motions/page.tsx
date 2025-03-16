"use client"

import CodeBlock from '@/components/code-block'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function FramerPage() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const inView1 = useInView(ref1)
    const inView2 = useInView(ref2)
    const inView3 = useInView(ref3)
    const inView4 = useInView(ref4)
    const inView5 = useInView(ref5)
    const inView6 = useInView(ref6)
    return (
        <div>
            <p className="font-bold text-myBlack text-sm ur:text-xl py-1 ">Framer Motion</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Framer Motion React üçün güclü və asan istifadə olunan animasiya kitabxanasıdır. Aşağıda onun əsas metodları, xüsusiyyətləri və animasiya atributları haqqında yazmışam.</p>
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">İlk öncə paketi yükləyirik</p>
            <CodeBlock language={'bash'} code={`npm install framer-motion`} />
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">İstifadəsi</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Framer Motion, HTML elementlərini və React komponentlərini animasiya etmək üçün motion obyektindən istifadə edir.</p>
            <CodeBlock language={'tsx'} code={`import { motion } from "framer-motion";

<motion.div animate={{ opacity: 1 }} />;`} />
            <p className="font-bold text-myBlack text-sm ur:text-xl py-2 ">Atributları</p>

            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">1. animate</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Elementin hansı vəziyyətə keçəcəyini təyin edir.</p>
            <CodeBlock language={'tsx'} code={`<motion.div animate={{ x: 100, opacity: 1 }} />;`} />
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">2. initial</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Başlanğıc vəziyyəti müəyyən edir</p>
            <CodeBlock language={'tsx'} code={`<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />;`} />
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">3. exit</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Komponent DOM-dan çıxanda tətbiq ediləcək animasiyanı müəyyən edir. AnimatePresence ilə birlikdə istifadə olunur.</p>
            <CodeBlock language={'tsx'} code={`import { AnimatePresence, motion } from "framer-motion";

<AnimatePresence>
  {isVisible && (
    <motion.div exit={{ opacity: 0 }} />
  )}
</AnimatePresence>;`} />
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">4. transition</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Keçid animasiyalarını idarə edir. Müxtəlif növləri var:</p>
            <ul className='text-xs ur:text-sm text-[#000] list-disc pl-5 [&>li]:py-[2px]'>
                <li > <strong> duration -</strong>Animasiyanın müddətini təyin edir.</li>
                <li > <strong> ease -</strong>	Hərəkət effektini təyin edir (easeIn, easeOut, linear, easeInOut).</li>
                <li > <strong> type -</strong>	Hərəkət növünü təyin edir (tween, spring, inertia).</li>
                <li > <strong> damping -</strong>	spring animasiyasında titrəməni azaldır.</li>
                <li > <strong> stiffness -</strong>spring animasiyasında sərtliyi tənzimləyir.</li>
                <li > <strong> mass -</strong>	spring animasiyasında obyektin kütləsini müəyyən edir.</li>
                <li > <strong> velocity -</strong>	Animasiyanın başlanğıc sürətini təyin edir.</li>
                <li > <strong> bounce -</strong> Geri sıçrama effektini tənzimləyir (spring üçün).</li>
                <li > <strong> repeat -</strong> 	Animasiyanın neçə dəfə təkrarlanacağını təyin edir.</li>
                <li > <strong> repeatType -</strong> 	Təkrarlanma növünü müəyyən edir (loop, mirror, reverse).</li>
                <li > <strong> delay -</strong>	Animasiyanın başlamasını gecikdirir.</li>
            </ul>
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">5. whileHover & whileTap</p>
            <ul className='text-xs ur:text-sm text-[#000] list-disc pl-5 [&>li]:py-[2px]'>
                <li > <strong>whileHover -</strong>elementin üzərinə gələndə animasiya yaradır.</li>
                <li > <strong>whileTap -</strong>kliklənəndə animasiya edir.</li>
            </ul>
            <CodeBlock language={'tsx'} code={`<motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} />;`} />

            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">6. drag</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Elementin sürüklənməsinə imkan verir.</p>

            <ul className='text-xs ur:text-sm text-[#000] list-disc pl-5 [&>li]:py-[2px]'>
                <li > <strong>dragConstraints  -</strong>sürükləmə sahəsini məhdudlaşdırır.</li>
                <li > <strong>dragElastic  -</strong>elastiklik səviyyəsini tənzimləyir.</li>
            </ul>
            <CodeBlock language={'tsx'} code={`<motion.div drag dragConstraints={{ left: -100, right: 100 }} />;`} />
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">7. variants</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Bir neçə animasiya vəziyyətini təyin etmək üçün istifadə olunur.</p>
            <CodeBlock language={'tsx'} code={`const boxVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

<motion.div initial="hidden" animate="visible" variants={boxVariants} />;`} />
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">8. layout</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Elementin ölçüsü və mövqeyi dəyişdikdə avtomatik animasiya yaradır.</p>
            <CodeBlock language={'tsx'} code={`<motion.div layout />;`} />
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">9. keyframes</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Bir neçə vəziyyət arasında animasiya keçidi yaradır.</p>
            <CodeBlock language={'tsx'} code={`<motion.div
  animate={{ x: [0, 100, 50, 200] }}
  transition={{ duration: 2 }}
/>;`} />

            <p className="font-bold text-myBlack text-sm ur:text-xl py-2 ">Animasiya Atributları</p>
            <p>Animasiya atributları <code>animate</code> propu içində yazılan atributlardırlar. Aşağıda onların siyahısını yazıram.</p>
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">1. Transformasiya Dəyərləri</p>
<ul className='text-xs ur:text-sm text-[#000] list-disc pl-5 [&>li]:py-[2px]'>
  <li ><strong>x-</strong>Üfüqi (X oxu) istiqamətdə hərəkət.</li>
  <li ><strong>y-</strong>Şaquli (Y oxu) istiqamətdə hərəkət.</li>
  <li ><strong>z-</strong>Dərinlik (Z oxu) istiqamətdə hərəkət.</li>
  <li ><strong>rotate-</strong>Fırlanma (dərəcə ilə).</li>
  <li ><strong>rotateX-</strong>X oxu ətrafında fırlanma.</li>
  <li ><strong>rotateY-</strong>Y oxu ətrafında fırlanma.</li>
  <li ><strong>rotateZ-</strong>Z oxu ətrafında fırlanma.</li>
  <li ><strong>scale-</strong>Elementin ölçüsünü dəyişdirir (məsələn, `scale: 1.5`).</li>
  <li ><strong>scaleX-</strong>X oxu üzrə miqyaslama.</li>
  <li ><strong>scaleY-</strong>Y oxu üzrə miqyaslama.</li>
  <li ><strong>scaleZ-</strong>Z oxu üzrə miqyaslama.</li>
  <li ><strong>skewX-</strong>X oxu üzrə əyilmə.</li>
  <li ><strong>skewY-</strong>Y oxu üzrə əyilmə.</li>
  <li ><strong>perspective-</strong>3D transformasiyalar üçün perspektiv dəyəri.</li>
</ul>

<p className="font-bold text-myBlack text-xs ur:text-base py-1 ">2. CSS Xüsusiyyətləri</p>
<ul className='text-xs ur:text-sm text-[#000] list-disc pl-5 [&>li]:py-[2px]'>
  <li ><strong>opacity-</strong>Şəffaflıq (0 ilə 1 arasında).</li>
  <li ><strong>backgroundColor-</strong>Arxa plan rəngi.</li>
  <li ><strong>color-</strong>Mətn rəngi.</li>
  <li ><strong>width-</strong>En.</li>
  <li ><strong>height-</strong>Hündürlük.</li>
  <li ><strong>top-</strong>Üst məsafə.</li>
  <li ><strong>left-</strong>Sol məsafə.</li>
  <li ><strong>right-</strong>Sağ məsafə.</li>
  <li ><strong>bottom-</strong>Alt məsafə.</li>
  <li ><strong>borderRadius-</strong>Elementin künc radiusu.</li>
  <li ><strong>borderWidth-</strong>Çərçivə qalınlığı.</li>
  <li ><strong>borderColor-</strong>Çərçivə rəngi.</li>
  <li ><strong>boxShadow-</strong>Kölgə effekti.</li>
  <li ><strong>fontSize-</strong>Mətn ölçüsü.</li>
  <li ><strong>letterSpacing-</strong>Mətn aralığı.</li>
  <li ><strong>lineHeight-</strong>Sətir hündürlüyü.</li>
  <li ><strong>textShadow-</strong>Mətn kölgəsi.</li>
  <li ><strong>clipPath-</strong>Elementin kəsilmiş forması.</li>
  <li ><strong>filter-</strong>Filtr effekti (məsələn, `blur`, `brightness`).</li>
  <li ><strong>backdropFilter-</strong>Arxa plan filtr effekti.</li>
  <li ><strong>backgroundImage-</strong>Arxa plan şəkli.</li>
  <li ><strong>backgroundPosition-</strong>Arxa planın mövqeyi.</li>
  <li ><strong>backgroundSize-</strong>Arxa planın ölçüsü.</li>
  <li ><strong>backgroundRepeat-</strong>Arxa planın təkrarı.</li>
  <li ><strong>backgroundClip-</strong>Arxa planın kəsimi.</li>
  <li ><strong>backgroundBlendMode-</strong>Arxa plan qarışdırma rejimi.</li>
  <li ><strong>outline-</strong>Xarici xətt.</li>
  <li ><strong>outlineOffset-</strong>Xarici xəttin ofseti.</li>
  <li ><strong>overflow-</strong>Taşma davranışı.</li>
  <li ><strong>overflowX-</strong>Üfüqi taşma.</li>
  <li ><strong>overflowY-</strong>Şaquli taşma.</li>
  <li ><strong>visibility-</strong>Görünmə (məsələn, `visible`, `hidden`).</li>
  <li ><strong>zIndex-</strong>Z oxu indeksi.</li>
  <li ><strong>flex-</strong>Flex dəyəri.</li>
  <li ><strong>flexGrow-</strong>Flex böyüməsi.</li>
  <li ><strong>flexShrink-</strong>Flex kiçilməsi.</li>
  <li ><strong>flexBasis-</strong>Flex əsası.</li>
  <li ><strong>gridGap-</strong>Grid aralığı.</li>
  <li ><strong>gridColumnGap-</strong>Grid sütun aralığı.</li>
  <li ><strong>gridRowGap-</strong>Grid sıra aralığı.</li>
  <li ><strong>gridTemplateColumns-</strong>Grid sütun şablonu.</li>
  <li ><strong>gridTemplateRows-</strong>Grid sıra şablonu.</li>
  <li ><strong>gridColumn-</strong>Grid sütunu.</li>
  <li ><strong>gridRow-</strong>Grid sırası.</li>
  <li ><strong>gap-</strong>Boşluq (CSS Grid və ya Flexbox üçün).</li>
  <li ><strong>alignItems-</strong>Flex/Grid üçün elementlərin düzülüşü.</li>
  <li ><strong>justifyContent-</strong>Flex/Grid üçün məzmunun düzülüşü.</li>
  <li ><strong>alignSelf-</strong>Fərdi elementin düzülüşü.</li>
  <li ><strong>justifySelf-</strong>Fərdi elementin məzmun düzülüşü.</li>
  <li ><strong>order-</strong>Flex/Grid üçün sıra.</li>
  <li ><strong>transformOrigin-</strong>Transformasiya mərkəzi.</li>
</ul>

<p className="font-bold text-myBlack text-xs ur:text-base py-1 ">3. SVG Xüsusiyyətləri</p>
<ul className='text-xs ur:text-sm text-[#000] list-disc pl-5 [&>li]:py-[2px]'>
  <li ><strong>pathLength-</strong>SVG path uzunluğu.</li>
  <li ><strong>pathOffset-</strong>SVG path ofseti.</li>
  <li ><strong>pathSpacing-</strong>SVG path aralığı.</li>
  <li ><strong>fill-</strong>SVG doldurma rəngi.</li>
  <li ><strong>stroke-</strong>SVG xətt rəngi.</li>
  <li ><strong>strokeWidth-</strong>SVG xətt qalınlığı.</li>
  <li ><strong>strokeDasharray-</strong>SVG xətt nöqtəli xətt effekti.</li>
  <li ><strong>strokeDashoffset-</strong>SVG xətt ofseti.</li>
  <li ><strong>strokeLinecap-</strong>SVG xətt başlığı.</li>
  <li ><strong>strokeLinejoin-</strong>SVG xətt birləşmə növü.</li>
</ul>

<p className="font-bold text-myBlack text-xs ur:text-base py-1 ">4. Keyframe Animasiyaları</p>
<ul className='text-xs ur:text-sm text-[#000] list-disc pl-5 [&>li]:py-[2px]'>
<li className="text-xs ur:text-sm text-[#000]">
  <strong>[] (Massiv)-</strong> Keyframe animasiyaları üçün istifadə olunur. 
  Məsələn: {"`animate={{ x: [0, 100, 0], opacity: [1, 0.5, 1] }}`"}.
</li>
</ul>

<p className="font-bold text-myBlack text-xs ur:text-base py-1 ">5. Fizika Əsaslı Animasiyalar</p>
<ul className='text-xs ur:text-sm text-[#000] list-disc pl-5 [&>li]:py-[2px]'>
  <li ><strong>type: &quot;spring&quot;-</strong>Fizika əsaslı animasiya.</li>
  <li ><strong>type: &quot;tween&quot;-</strong>Əvvəlcədən təyin edilmiş animasiya.</li>
  <li ><strong>type: &quot;inertia&quot;-</strong>Ətalət əsaslı animasiya.</li>
</ul>

<p className="font-bold text-myBlack text-xs ur:text-base py-1 ">6. Digər Xüsusiyyətlər</p>
<ul className='text-xs ur:text-sm text-[#000] list-disc pl-5 [&>li]:py-[2px]'>
  <li ><strong>transition-</strong>Animasiya tənzimləmələri (məsələn, `duration`, `delay`, `ease`).</li>
  <li ><strong>variants-</strong>Animasiya variantları.</li>
  <li ><strong>layout-</strong>Layout dəyişiklikləri üçün animasiya.</li>
  <li ><strong>drag-</strong>Sürükləmə animasiyası.</li>
  <li ><strong>whileHover-</strong>Hover zamanı animasiya.</li>
  <li ><strong>whileTap-</strong>Klik zamanı animasiya.</li>
  <li ><strong>whileFocus-</strong>Fokus zamanı animasiya.</li>
  <li ><strong>whileDrag-</strong>Sürükləmə zamanı animasiya.</li>
  <li ><strong>exit-</strong>Komponent DOM-dan çıxanda animasiya.</li>
</ul>
<p className="font-bold text-myBlack text-sm ur:text-xl py-2 ">Bu Atributların Bəzilərinə Aid Kod Nümunələri</p>

            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '><strong className='text-sm ur:text-base '>QEYD:</strong> Elementlərin üzərindən keçdikdən sonra əvvəlki vəziyyətinə qayıtması üçün
                React <code>useRef</code> və Motion <code>useInView</code> istifadə edəcəm.</p>
            <p className=' text-xs font-semibold  ur:text-sm text-[#000]  text-justify '>Misal:</p>
            <CodeBlock language={'tsx'} code={`import { motion, useInView } from 'framer-motion' 
import { useRef } from 'react' 

// Framer Motion kitabxanasından 'motion' və 'useInView' hook-u, React-dən 'useRef' import edilir.

export default function Framer() { 
    const ref2 = useRef(null)
    // 'ref2' adlı referans yaradılır və başlanğıcda 'null' olur.

    const inView2 = useInView(ref2)
    // 'inView2' dəyişəni 'useInView' hook-u ilə təyin edilir və 'ref2' referansına bağlıdır.
    // 'inView2' dəyişəni 'true' olarsa, element görünən sahədədir, 'false' olarsa görünmür.

    return (
            <motion.div
                ref={ref2}
                // 'motion.div' elementi yaradılır və 'ref2' ona verilir ki, görünən sahədə olub-olmaması yoxlanılsın.
                initial={{  opacity: 0, }}
                animate={inView2 ? { opacity: 1,} : { opacity: 0,}}
                // Animasiya şərti ilə idarə olunur:
                // - Əgər 'inView2' true olarsa (element görünən sahədədirsə), opacity: 1, olur (normal vəziyyət).
                // - Əgər 'inView2' false olarsa (element görünən sahədə deyilsə), opacity: 0, olur (görünməz vəziyyət).
                transition={{ duration: 1 }}
                // Animasiya 1 saniyə ərzində tamamlanır.
                viewport={{ once: false }}
                // 'once: false' parametri təyin edilir ki, element hər dəfə görünən sahəyə girəndə animasiya yenidən işə düşsün.
            >
                <div className='bg-myYellow h-10 w-10 flex items-center justify-center'>
                    Qutu
                </div>
            </motion.div>
    )
}`} />
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">1. x,y</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>	X və Y oxunda hərəkət</p>
            <CodeBlock language={'tsx'} code={`<motion.div
    ref={ref1}
    initial={{ x: 300}} 
    animate={inView1 ? { x: 0} : { x: 300}}
    transition={{ duration: 0.8, delay: 0.5 }}
    viewport={{ once: false }}
    >
</motion.div>`} />
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '><strong>QEYD:</strong> Bu komponent ilk olaraq <code>300 pixel</code> sağda olacaq və hərəkət edib öz yerinə gələcək. Əgər <code>x:-300</code> yazsaq o zamanda ilkin olaraq <code>300 pixel</code> solda olacaq. <mark>x</mark> əvəzinə <mark>y</mark> yazsaq o zamanda yuxarı və aşağı hərəkət edəcək.</p>
            <div ref={ref1} className=' flex justify-around '>
                <motion.div
                    initial={{ x: -300 }}
                    animate={inView1 ? { x: 0 } : { x: -300 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    <div className=" bg-myYellow h-10 w-10 ur:h-20 ur:w-20 flex items-center justify-center text-[8px] text-white">x to right</div>
                </motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    animate={inView1 ? { y: 0 } : { y: 100 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    <div className=" bg-myYellow h-10 w-10 ur:h-20 ur:w-20 flex items-center justify-center text-[8px] text-white">y to up</div>
                </motion.div>
                <motion.div
                    initial={{ y: -100 }}
                    animate={inView1 ? { y: 0 } : { y: -100 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    <div className=" bg-myYellow h-10 w-10 ur:h-20 ur:w-20 flex items-center justify-center text-[8px] text-white">y to down</div>
                </motion.div>
                <motion.div
                    initial={{ x: 300 }}
                    animate={inView1 ? { x: 0 } : { x: 300 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    <div className=" bg-myYellow h-10 w-10 ur:h-20 ur:w-20 flex items-center justify-center text-[8px] text-white">x to left</div>
                </motion.div>
            </div>
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">2. opacity</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Şəffaflıq dəyişimi</p>
            <CodeBlock language={'tsx'} code={`<motion.div
    ref={ref2}
    initial={{ opacity: 0}} 
    animate={inView2 ? {  opacity: 1} : {  opacity: 0}}
    transition={{ duration: 0.8, delay: 0.5 }}
    viewport={{ once: false }}
    >
</motion.div>`} />
            <div className=' flex items-center justify-center'>
                <motion.div
                    ref={ref2}
                    initial={{ opacity: 0 }}
                    animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: false }}
                >
                    <div className=" bg-myYellow h-10 w-10 ur:h-20 ur:w-20 flex items-center justify-center text-[8px] text-white">opacity</div>
                </motion.div>
            </div>

            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">3. scale</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Ölçü böyüdüb-küçültmə</p>
            <CodeBlock language={'tsx'} code={`<motion.div
    ref={ref3}
    initial={{scale: 0.5, opacity: 0}} 
    animate={inView3 ? { scale: 1, opacity: 1} : { scale: 0.5, opacity: 0}}
    transition={{ duration: 0.8, delay: 0.5 }}
    viewport={{ once: false }}
    >
</motion.div>`} />
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '><strong>QEYD:</strong> Məsləhətdir ki, bəzi atributlarla eyni zamanda <mark> opacity </mark> də istifadə olunsun. Bu animasiyaya daha yaxşı görünüş veririr.</p>
            <div className=' flex items-center justify-center'>
                <motion.div
                    ref={ref3}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={inView3 ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: false }}
                >
                    <div className=" bg-myYellow h-10 w-10 ur:h-20 ur:w-20 flex items-center justify-center text-[8px] text-white">scale</div>
                </motion.div>
            </div>
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">4. rotate</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Dönmə</p>
            <CodeBlock language={'tsx'} code={`<motion.div
    ref={ref4}
    initial={{ rotate: 90 }} 
    animate={inView4 ? {  rotate: 0 } : {  rotate: 90 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    viewport={{ once: false }}
    >
</motion.div>`} />
            <div className=' flex items-center justify-center'>
                <motion.div
                    ref={ref4}
                    initial={{ rotate: 90 }}
                    animate={inView4 ? { rotate: 0 } : { rotate: 90 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: false }}
                >
                    <div className=" bg-myYellow h-10 w-10 ur:h-20 ur:w-20 flex items-center justify-center text-[8px] text-white">rotate</div>
                </motion.div>
            </div>
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">5. rotateX, rotateY, rotateZ</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>X, Y və Z Oxları Ətrafında Dönmə</p>
            <CodeBlock language={'tsx'} code={`<motion.div
    ref={ref5}
    initial={{ rotateX: 180 }} 
    animate={inView5 ? {  rotateX: 0 } : {  rotateX: 180 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    viewport={{ once: false }}
    >
</motion.div>`} />
            <div ref={ref5} className=' flex items-center justify-around'>
                <motion.div

                    initial={{ rotateY: 180 }}
                    animate={inView5 ? { rotateY: 0 } : { rotateY: 180 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: false }}
                >
                    <div className=" bg-myYellow h-10 w-10 ur:h-20 ur:w-20 flex items-center justify-center text-[8px] text-white">rotateY</div>
                </motion.div>
                <motion.div

                    initial={{ rotateZ: 180 }}
                    animate={inView5 ? { rotateZ: 0 } : { rotateZ: 180 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: false }}
                >
                    <div className=" bg-myYellow h-10 w-10 ur:h-20 ur:w-20 flex items-center justify-center text-[8px] text-white">rotateZ</div>
                </motion.div>
                <motion.div

                    initial={{ rotateX: 180 }}
                    animate={inView5 ? { rotateX: 0 } : { rotateX: 180 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: false }}
                >
                    <div className=" bg-myYellow h-10 w-10 ur:h-20 ur:w-20 flex items-center justify-center text-[8px] text-white">rotateX</div>
                </motion.div>
            </div>

            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">6. skew</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>İstiqlaflı dönmə</p>
            <CodeBlock language={'tsx'} code={`<motion.div
    ref={ref6}
    initial={{ skew: 0}} 
    animate={inView6 ? {  skew: 45} : {  skew: 0}}
    transition={{ duration: 0.8, delay: 0.5 }}
    viewport={{ once: false }}
    >
</motion.div>`} />
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '><strong>QEYD:</strong> <mark>skewX</mark> və <mark>skewY</mark> özəllikləri də mövcuddur.</p>
            <div className=' flex items-center justify-center'>
                <motion.div
                    ref={ref6}
                    initial={{ skew: 45 }}
                    animate={inView6 ? { skew: 0 } : { skew: 45 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: false }}
                >
                    <div className=" bg-myYellow h-10 w-10 ur:h-20 ur:w-20 flex items-center justify-center text-[8px] text-white">skew</div>
                </motion.div>
            </div>
            <p className="font-bold text-myBlack text-xs ur:text-base py-1 ">7. clipPath</p>
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '>Şəklin görünmə sahəsini dəyişmək</p>
            <CodeBlock language={'tsx'} code={`
    <motion.div
      style={{
        width: 200,
        height: 200,
        backgroundColor: "tomato",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
      initial={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />                `} />
            <p className=' text-xs inline ur:text-sm text-[#000]  text-justify py-1 '><strong>QEYD:</strong> clipPath <mark>circle()</mark>, <mark>ellipse()</mark>, <mark>inset()</mark>, <mark>polygon()</mark> və <mark>path()</mark> dəyərlər qəbul edir.</p>
        </div>
    )
}
