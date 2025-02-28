

type TQuestion = {
    id: number
    question: string
    answer: string
}
export const NextQuestions = {
    questions(): TQuestion[] {
        return [
            {
                id: 1,
                question: "Next.js nədir?",
                answer: "Next.js, React əsaslı, server-tərəfli renderləmə (SSR) və statik sayt generasiyası (SSG) kimi xüsusiyyətləri olan bir framework-dur. O, istifadəçilərə mükəmməl SEO dəstəyi, performans optimallaşdırmaları və asan routing imkanı təqdim edir."
            },
            {
                id: 2,
                question: "Next.js-də Server-Side Rendering (SSR) nədir?",
                answer: "Server-Side Rendering (SSR), səhifənin serverdə render olunaraq istifadəçiyə göndərilməsi prosesidir. Next.js SSR-i dəstəkləyir və hər səhifə üçün bu rendering üsulunu tək-tək seçə bilərsiniz."
            },
            {
                id: 3,
                question: "Next.js-də Static Site Generation (SSG) nədir?",
                answer: "Static Site Generation (SSG), səhifənin build zamanı statik olaraq render olunması prosesidir. Bu, saytın daha sürətli yüklənməsi üçün yaxşıdır və Next.js-də bu xüsusiyyətin dəstəyi mövcuddur."
            },
            {
                id: 4,
                question: "Next.js-də getServerSideProps nə edir?",
                answer: "`getServerSideProps`, SSR (Server-Side Rendering) ilə məlumatları serverdən əldə etmək üçün istifadə olunan bir Next.js funksiyasıdır. Bu funksiya yalnız serverdə çağırılır və hər bir istəkdə serverdən verilənlər alınır."
            },
            {
                id: 5,
                question: "Next.js-də getStaticProps nə edir?",
                answer: "`getStaticProps`, SSG (Static Site Generation) üçün istifadə olunur. Bu funksiya səhifə build zamanı verilənləri əldə etmək üçün çağırılır və səhifə statik olaraq yığılır, istifadəçiyə sürətli bir şəkildə təqdim olunur."
            },
            {
                id: 6,
                question: "Next.js-də getStaticPaths nədir?",
                answer: "`getStaticPaths`, dinamik olaraq yaradılan səhifələrin SSG ilə statik şəkildə yığılması üçün istifadə olunur. Bu funksiya, hansı yolların (paths) əvvəlcədən build edilməsi lazım olduğunu göstərir."
            },
            {
                id: 7,
                question: "Next.js-də API routes nədir?",
                answer: "API routes, server tərəfli əməliyyatları yerinə yetirmək üçün Next.js-in təqdim etdiyi xüsusiyyətdir. Bu yollarla serverdə API-lar yaratmaq və işlətmək mümkündür. Bu xüsusiyyət, müstəqil backend serverinə ehtiyac olmadan API-lar qurmağa imkan verir."
            },
            {
                id: 8,
                question: "Next.js-də Dynamic Routing necə işləyir?",
                answer: "Next.js-də dinamik routing, fayl sisteminə əsaslanır. Bir səhifənin dinamik olması üçün adətən fayl adında köşə mötərizələri (`[]`) istifadə olunur, məsələn `pages/post/[id].js`. Bu, dinamik olaraq URL parametrləri ilə əlaqələndirilmiş səhifə yaradır."
            },
            {
                id: 9,
                question: "Next.js-də Image optimization nədir?",
                answer: "Next.js-in Image komponenti (`next/image`), şəkilləri avtomatik olaraq optimallaşdırır. Bu, şəkilləri fərqli ölçülərdə yükləyərək səhifə performansını artırır. Bu komponent, görüntü ölçüsünü və formatını avtomatik tənzimləyərək daha sürətli yükləmə təmin edir."
            },
            {
                id: 10,
                question: "Next.js-də Link komponenti nə edir?",
                answer: "`Link` komponenti, səhifələr arasında müştəri tərəfli yönləndirmə üçün istifadə olunur. Bu komponent React router ilə müqayisədə daha sürətli yönləndirmə təmin edir, çünki səhifə yüklənərkən yalnız lazımlı dəyişikliklər edilir."
            },
            {
                id: 11,
                question: "Next.js-də _app.js və _document.js nədir?",
                answer: "`_app.js`, Next.js-də hər səhifəyə tətbiq edilən əsas komponentdir. Burada tətbiqin ümumi layout-u və state idarəetmələri yerləşir. `_document.js` isə HTML sənədinin başlanğıc strukturunu (head, body) dəyişdirmək üçün istifadə olunur."
            },
            {
                id: 12,
                question: "Next.js-də middleware nədir?",
                answer: "Next.js middleware, müəyyən bir səhifəyə daxil olmadan əvvəl server tərəfində işləyən kodlardır. Bu, istifadəçilər üçün doğrulama, yönləndirmə və ya digər əməliyyatları yerinə yetirmək üçün istifadə olunur."
            },
            {
                id: 13,
                question: "Next.js-də Layouts nədir?",
                answer: "Layouts, tətbiqin müxtəlif hissələri üçün ümumi strukturu təmin edən komponentlərdir. Next.js-də, bir səhifə üçün layout quraraq təkrarlanan strukturu sadələşdirə bilərsiniz."
            },
            {
                id: 14,
                question: "Next.js-də SEO necə optimallaşdırılır?",
                answer: "Next.js-də SEO optimallaşdırılması üçün səhifələrdə `head` komponenti (`next/head`) istifadə edilə bilər. Bu, səhifənin başlıq etiketi, meta məlumatları və digər SEO üçün vacib etiketləri dəyişdirməyə imkan verir. Həmçinin SSR və SSG vasitəsilə səhifə yükünü sürətləndirərək SEO performansını artırmaq mümkündür."
            },
            {
                id: 15,
                question: "Next.js-də Error Boundary necə işləyir?",
                answer: "Next.js, `Error Boundary` ilə səhifələrdəki səhvləri idarə etmək üçün xüsusi bir mexanizm təqdim edir. Bu mexanizm səhifə çökdükdə istifadəçiyə səhv mesajı göstərməyə və səhifəni bərpa etməyə imkan verir."
            }
        ]
    },
    getData() {
        return Promise.resolve(this.questions())
    },
}


