import { TQuestion } from "../../types"

export const NextQuestions = {
    questions(): TQuestion[] {
        return [
            {
                id: 1,
                question: "Next.js nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Next.js, React əsaslı, server-tərəfli renderləmə (SSR) və statik sayt generasiyası (SSG) kimi xüsusiyyətləri olan bir framework-dur. O, istifadəçilərə mükəmməl SEO dəstəyi, performans optimallaşdırmaları və asan routing imkanı təqdim edir."
                    }
                ]
            },
            {
                id: 2,
                question: "Next.js-də Server-Side Rendering (SSR) nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Server-Side Rendering (SSR), səhifənin serverdə render olunaraq istifadəçiyə göndərilməsi prosesidir. Next.js SSR-i dəstəkləyir və hər səhifə üçün bu rendering üsulunu tək-tək seçə bilərsiniz."
                        , lists: [
                            {
                                list: "Hər səhifə tələbi üçün serverdə render edilir.",
                            },
                            {
                                list: "Dinamik məzmun üçün idealdır.",
                            },
                            {
                                list: "SEO optimallaşdırması üçün faydalıdır.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal",
                        content: `export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
}

export default function Page({ data }) {
  return <div>{data.title}</div>;
}                       `,
                        language: "tsx"
                    },
                ]
            },
            {
                id: 3,
                question: "Next.js-də Static Site Generation (SSG) nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Static Site Generation (SSG), səhifənin build zamanı statik olaraq render olunması prosesidir. Bu, saytın daha sürətli yüklənməsi üçün yaxşıdır və Next.js-də bu xüsusiyyətin dəstəyi mövcuddur."
                        , lists: [
                            {
                                list: "Səhifələr build zamanı statik olaraq yaradılır.",
                            },
                            {
                                list: "Çox sürətlidir və SEO üçün idealdır.",
                            },
                        ]
                    }
                    ,
                    {
                        type: "code",
                        header: "",
                        title: "Misal",
                        content: `export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
}                        `,
                        language: "tsx"
                    },
                ]
            },
            {
                id: 4,
                question: "Next.js-də getServerSideProps nə edir?",
                answer: [
                    {
                        type: "text",
                        content: "`getServerSideProps`, SSR (Server-Side Rendering) ilə məlumatları serverdən əldə etmək üçün istifadə olunan bir Next.js funksiyasıdır. Bu funksiya yalnız serverdə çağırılır və hər bir istəkdə serverdən verilənlər alınır."
                    },
                    {
                        type: "text",
                        header: "İstifadə Qaydası",
                        content: "getServerSideProps yalnız səhifələrdə (pages/ qovluğundakı komponentlərdə) işləyir. Komponentlərdə (components/ qovluğunda) istifadə edilə bilməz!"
                    },
                    {
                        type: "code",
                        title: "Misal: API-dən məlumat çəkmək",
                        content: `export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: { posts }, // Səhifəyə göndərilən məlumatlar
  };
}

export default function PostsPage({ posts }) {
  return (
    <div>
      <h1>Bloq Yazıları</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}                        `,
                        language: "tsx"
                    },
                ]
            },
            {
                id: 5,
                question: "Next.js-də getStaticProps nə edir?",
                answer: [
                    {
                        type: "text",
                        content: "`getStaticProps`, SSG (Static Site Generation) üçün istifadə olunur. Bu funksiya səhifə build zamanı verilənləri əldə etmək üçün çağırılır və səhifə statik olaraq yığılır, istifadəçiyə sürətli bir şəkildə təqdim olunur."
                    }
                ]
            },
            {
                id: 6,
                question: "Next.js-də getStaticPaths nədir?",
                answer: [
                    {
                        type: "text",
                        content: "`getStaticPaths`, dinamik olaraq yaradılan səhifələrin SSG ilə statik şəkildə yığılması üçün istifadə olunur. Bu funksiya, hansı yolların (paths) əvvəlcədən build edilməsi lazım olduğunu göstərir."
                    }
                ]
            },
            {
                id: 7,
                question: "Next.js-də API routes nədir?",
                answer: [
                    {
                        type: "text",
                        content: "API routes, server tərəfli əməliyyatları yerinə yetirmək üçün Next.js-in təqdim etdiyi xüsusiyyətdir. Bu yollarla serverdə API-lar yaratmaq və işlətmək mümkündür. Bu xüsusiyyət, müstəqil backend serverinə ehtiyac olmadan API-lar qurmağa imkan verir."
                    },
                    {
                        type: "text",
                        title: "Əsas Xüsusiyyətlər",
                        content: "",
                        lists: [
                            {
                                list: "Serverdə işləyir (Frontend koduna daxil olmur)",
                            },
                            {
                                list: "Node.js mühitində çalışır",
                            },
                            {
                                list: "Middleware, autentifikasiya və verilənlər bazası sorğuları üçün uyğundur",
                            },
                            {
                                list: "Birbaşa frontend-də fetch və ya useSWR ilə istifadə edilə bilər",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Sadə API Route Misalı",
                        content: `export default function handler(req, res) {
  res.status(200).json({ message: "Salam, Next.js API!" });
}                        `,
                        language: "tsx"
                    },
                ]
            },
            {
                id: 8,
                question: "Next.js-də Dynamic Routing necə işləyir?",
                answer: [
                    {
                        type: "text",
                        content: "Next.js-də dinamik routing, fayl sisteminə əsaslanır. Bir səhifənin dinamik olması üçün adətən fayl adında kvadrat mötərizələri (`[]`) istifadə olunur, məsələn `pages/post/[id].js`. Bu, dinamik olaraq URL parametrləri ilə əlaqələndirilmiş səhifə yaradır."
                    },
                    {
                        type: "code",
                        title: <p className=" font-normal"> <code>pages/posts/[id].js → [id]</code> dəyərlərinə uyğun səhifə yaradacaq.</p>,
                        content: `import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // URL-dən 'id' parametrini alırıq

  return <h1>Məhsul ID: {id}</h1>;
}`,
                        language: "tsx"
                    },
                ]
            },
            {
                id: 9,
                question: "Next.js-də Image optimization nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Next.js-in Image komponenti (`next/image`), şəkilləri avtomatik olaraq optimallaşdırır. Bu, şəkilləri fərqli ölçülərdə yükləyərək səhifə performansını artırır. Bu komponent, görüntü ölçüsünü və formatını avtomatik tənzimləyərək daha sürətli yükləmə təmin edir."
                    },
                    {
                        type: "text",
                        header: "",
                        title: <p> <code>next/image</code> nə üçün istifadə olunur?</p>,
                        content: "",
                        lists: [
                            {
                                list: " Lazy Loading – Şəkillər yalnız görünən zaman yüklənir.",
                            },
                            {
                                list: "Automatic Resizing – Fərqli cihazlara uyğun ölçülər yaradır.",
                            },
                            {
                                list: "Automatic Format Conversion – WebP kimi daha səmərəli formatlara çevirir.",
                            },
                            {
                                list: "CDN və Cache dəstəyi – Şəkilləri optimal yolla saxlayır və sürətləndirir.",
                            },
                            {
                                list: "Blur Placeholder – Şəkil yüklənənə qədər bulanıq versiya göstərir.",
                            },
                        ]
                    },
                ]
            },
            {
                id: 10,
                question: "Next.js-də Link komponenti nə edir?",
                answer: [
                    {
                        type: "text",
                        content: "`Link` komponenti, səhifələr arasında müştəri tərəfli yönləndirmə üçün istifadə olunur. Bu komponent React router ilə müqayisədə daha sürətli yönləndirmə təmin edir, çünki səhifə yüklənərkən yalnız lazımlı dəyişikliklər edilir.O, saytı yeniləmədən (client-side navigation) səhifə keçidlərini mümkün edir və performansı artırır."
                    },
                    {
                        type: "text",
                        header: "Özəllikləri",
                        content: "",
                        lists: [
                            {
                                list: "replace Prop-u ilə Tarixçəni Dəyişdirmək",
                            },
                            {
                                list: "scroll Prop-u ilə Səhifənin Yuxarı Qaytarılmasını Bağlamaq",
                            },
                            {
                                list: "Custom Component Dəstəyi (as və passHref)",
                            },
                           
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: <p className=" font-normal">Əgər custom komponent a istifadə edirsənsə, passHref prop-u ilə href keçməlisən:Burada passHref istifadə olunmasa, a tag-ı href atributu almaya bilər.</p>,
                        content: `<Link href="/contact" passHref>
  <a>Bizimlə əlaqə</a>
</Link>`,
                        language: "tsx"
                    },
                    {
                        type: "code",
                        header: "as Prop-u ilə Daha Gözəl URL-lər",
                        title: <p className=" font-normal">Əgər URL-ləri SEO dostu etmək istəyirsənsə, as prop-u istifadə edə bilərsən.</p>,
                        content: `<Link href="/product/[id]" as="/product/42">
  Məhsul 42
</Link>
                        `,
                        language: "tsx"
                    },
                    {
                        type: "text",
                        content: "Bu kod /product/42 URL-nə keçid edəcək, amma Next.js pages/product/[id].js faylını istifadə edəcək."
                    }
                ]
            },
            {
                id: 11,
                question: "Next.js-də _app.js və _document.js nədir?",
                answer: [
                    {
                        type: "text",
                        content: "`_app.js`, Next.js-də hər səhifəyə tətbiq edilən əsas komponentdir. Burada tətbiqin ümumi layout-u və state idarəetmələri yerləşir. `_document.js` isə HTML sənədinin başlanğıc strukturunu (head, body) dəyişdirmək üçün istifadə olunur."
                    }
                ]
            },
            {
                id: 12,
                question: "Next.js-də middleware nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Next.js middleware, müəyyən bir səhifəyə daxil olmadan əvvəl server tərəfində işləyən kodlardır. Bu, istifadəçilər üçün doğrulama, yönləndirmə və ya digər əməliyyatları yerinə yetirmək üçün istifadə olunur."
                    }
                ]
            },
            {
                id: 13,
                question: "Next.js-də Layouts nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Layouts, tətbiqin müxtəlif hissələri üçün ümumi strukturu təmin edən komponentlərdir. Next.js-də, bir səhifə üçün layout quraraq təkrarlanan strukturu sadələşdirə bilərsiniz."
                    }
                ]
            },
            {
                id: 14,
                question: "Next.js-də SEO necə optimallaşdırılır?",
                answer: [
                    {
                        type: "text",
                        content: "Next.js-də SEO optimallaşdırılması üçün səhifələrdə `head` komponenti (`next/head`) istifadə edilə bilər. Bu, səhifənin başlıq etiketi, meta məlumatları və digər SEO üçün vacib etiketləri dəyişdirməyə imkan verir. Həmçinin SSR və SSG vasitəsilə səhifə yükünü sürətləndirərək SEO performansını artırmaq mümkündür."
                    }
                ]
            },
            {
                id: 15,
                question: "Next.js-də Error Boundary necə işləyir?",
                answer: [
                    {
                        type: "text",
                        content: "Next.js, `Error Boundary` ilə səhifələrdəki səhvləri idarə etmək üçün xüsusi bir mexanizm təqdim edir. Bu mexanizm səhifə çökdükdə istifadəçiyə səhv mesajı göstərməyə və səhifəni bərpa etməyə imkan verir."
                    }
                ]
            }
        ];

    },
    getData() {
        return Promise.resolve(this.questions())
    },
}


