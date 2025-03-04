
import { ReactNode } from "react"


type TAnswer = {
    type: string,
    header?: string | ReactNode,
    title?: string | ReactNode,
    content: string,
    language?: string,
    lists?: { list: string | ReactNode }[]
}
type TQuestion = {
    id: number
    question: string
    answer: TAnswer[]
}
export const ReactQuestions = {
    questions(): TQuestion[] {
        return [
            {
                id: 1,
                question: "React-ın müsbət və mənfi cəhətləri nədir?",
                answer: [
                    {
                        type: "text",
                        content: "React, frontend inkişafında ən populyar kitabxanalardan biridir. Lakin hər texnologiya kimi onun da üstünlükləri və çatışmazlıqları var."
                    },
                    {
                        type: "text",
                        header: "✅ React-ın Müsbət Cəhətləri (Üstünlükləri)",
                        title: "1. Virtual DOM (Sürətli Performans)",
                        content: "",
                        lists: [
                            {
                                list: "React Virtual DOM istifadə edir, bu da real DOM-a birbaşa müdaxilə etmədən daha səmərəli render etməyə imkan yaradır.",
                            },
                            {
                                list: "Lazım olan hissələr optimallaşdırılmış şəkildə yenilənir və performans artır.",
                            },

                        ]
                    },
                    {
                        type: "text",
                        content: "Misal: Əgər bir div içində sadəcə bir mətn dəyişirsə, React bütün səhifəni deyil, yalnız həmin hissəni yeniləyir."
                    },
                    {
                        type: "text",
                        header: "",
                        title: "2. Komponent əsaslı struktur (Reusability)",
                        content: "",
                        lists: [
                            {
                                list: "React modular və reusable komponentlərdən ibarətdir.",
                            },
                            {
                                list: "UI-ni kiçik hissələrə bölərək təkrar istifadə edilə bilən kodlar yazmağa imkan verir.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal: Bir Button komponentini istənilən yerdə istifadə edə bilərsən",
                        content: `                        
const Button = ({ text }) => <button>{text}</button>;

<Button text="Click Me" />
<Button text="Submit" />
                        `,
                        language: "tsx"
                    },
                    {
                        type: "text",
                        header: "",
                        title: "3. Tək yönlü məlumat axını (One-way Data Binding)",
                        content: "",
                        lists: [
                            {
                                list: "React-də məlumat axını tək yönlüdür, yəni data yalnız yuxarıdan aşağı (parent → child) ötürülür.",
                            },
                            {
                                list: "Bu, dataların idarə edilməsini daha nizamlı və anlaşılan edir.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "",
                        content: `                        
const Parent = () => {
  const message = "Hello from Parent!";
  return <Child text={message} />;
};

const Child = ({ text }) => <p>{text}</p>;
                        `,
                        language: "tsx"
                    },
                    {
                        type: "text",
                        content: "Child komponenti Parent-dan gələn text-i dəyişə bilmir, bu da kodun stabil işləməsinə kömək edir."
                    },
                    {
                        type: "text",
                        header: "",
                        title: "4. Böyük ekosistem və güclü dəstək",
                        content: "",
                        lists: [
                            {
                                list: "React-in arxasında Facebook (Meta) və geniş bir developer icması var.",
                            },
                            {
                                list: " Minlərlə hazır komponentlər və npm paketləri mövcuddur.",
                            },
                            {
                                list: "Mütəmadi yenilənmələr və sənədləşmə mövcuddur.",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "5. Server-Side Rendering (Next.js ilə)",
                        content: "",
                        lists: [
                            {
                                list: "React təkcə SPA (Single Page Application) deyil, həm də SSR (Server-Side Rendering) dəstəkləyir.",
                            },
                            {
                                list: "SEO dostudur, çünki Next.js ilə serverdə əvvəlcədən HTML generasiya etmək mümkündür.",
                            },
                            {
                                list: "Səhifələr daha sürətli yüklənir və Google-da indekslənməsi asanlaşır.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal: Next.js ilə SSR istifadə edərək bir API-dən məlumat çəkmək:",
                        content: `                        
    export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return { props: { posts } };
}
                    `,
                        language: "tsx"
                    },
                    {
                        type: "text",
                        content: "SEO üçün idealdır və daha tez render olunur."
                    }
                    ,
                    {
                        type: "text",
                        header: "",
                        title: "6. Hooks və State Management",
                        content: "",
                        lists: [
                            {
                                list: "React 16.8 versiyasından sonra Hooks (useState, useEffect, useContext və s.) təqdim etdi.",
                            },
                            {
                                list: " Əvvəl Class Component tələb edən funksionallıq indi Function Component-lərdə dəstəklənir.",
                            },
                            {
                                list: "Hooks kodun daha qısa və səliqəli olmasına kömək edir.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "",
                        content: `                        
const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};
                        `,
                        language: "tsx"
                    },
                    {
                        type: "text",
                        content: "Daha sadə və asan oxunan kod yazmağa imkan verir."
                    }
                    ,
                    {
                        type: "text",
                        header: "❌ React-ın Mənfi Cəhətləri (Çatışmazlıqları)",
                        title: "1. Yüksək öyrənmə əyrisi (Steep Learning Curve)",
                        content: "",
                        lists: [
                            {
                                list: "React-in əsas sintaksisi asandır, amma onunla tətbiq qurmaq üçün bir çox əlavə texnologiya öyrənmək lazımdır.",
                            },
                            {
                                list: "React Router, Redux, Zustand, Next.js, GraphQL, TypeScript və s. kimi texnologiyalar öyrənmə prosesini uzadır.",
                            },
                            {
                                list: "Başlanğıcda React öyrənmək asandır, amma böyük bir layihədə state management, routing, server-side rendering və optimallaşdırma kimi mövzular mürəkkəbləşir.",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "2. JSX Sintaksisi (Başlanğıc üçün çətin görünə bilər)",
                        content: "",
                        lists: [
                            {
                                list: "JSX HTML və JavaScript-in qarışığıdır və ənənəvi HTML ilə müqayisədə fərqli görünür.",
                            },
                            {
                                list: "Yeni başlayanlar üçün JSX oxumaq çətin ola bilər.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal:",
                        content: `                        
const element = <h1>Hello, {user.name}!</h1>;
                        `,
                        language: "tsx"
                    },
                    {
                        type: "text",
                        content: "Ənənəvi HTML-lə müqayisədə fərqli olduğu üçün vərdiş etməyə vaxt tələb edir."
                    },
                    {
                        type: "text",
                        header: "",
                        title: "3. SEO problemləri (SPA üçün)",
                        content: "",
                        lists: [
                            {
                                list: "Standart React tətbiqləri SPA (Single Page Application) olaraq işləyir.",
                            },
                            {
                                list: "Google dinamik yüklənən məzmunu düzgün indeksləməyə bilər və SEO baxımından zəif ola bilər.",
                            },
                            {
                                list: "Bu problemi həll etmək üçün Next.js kimi SSR dəstəkləyən çərçivələrdən istifadə etmək lazımdır.",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "4. Tez-tez yenilənmələr və dəyişən ekosistem",
                        content: "",
                        lists: [
                            {
                                list: "React-in ekosistemi tez-tez dəyişir və yenilənir, bu da bəzən köhnə texnologiyaları tez sıradan çıxarır.",
                            },
                            {
                                list: "Əvvəllər Class Components geniş istifadə olunurdu, amma indi Hooks üstünlük təşkil edir.",
                            },
                            {
                                list: "Bu, developer-lərin həmişə yeni texnologiyaları öyrənmək məcburiyyətində qalmasına səbəb olur.",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "5. Təkcə frontend üçün nəzərdə tutulub",
                        content: "",
                        lists: [
                            {
                                list: "React yalnız View (V) hissəsini idarə edir, yəni dataların idarə edilməsi və backend işləri üçün əlavə texnologiyalar lazımdır.",
                            },
                            {
                                list: "Backend işləri üçün Node.js, Express.js, Firebase və ya GraphQL kimi texnologiyalardan istifadə edilməlidir.",
                            },
                        ]
                    },
                    {
                        type: "text",
                        content: ""
                    }
                ]
            },
            {
                id: 2,
                question: "React context nədir?",
                answer: [
                    {
                        type: "text",
                        content: "React Context API, prop drilling problemini həll etmək üçün yaradılmışdır. Bir komponent ağacında məlumatları (state, theme, user məlumatları və s.) bir neçə səviyyə aşağı ötürmək üçün istifadə olunur."
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Problem: Prop Drilling",
                        content: "Əgər bir state əsas komponentdə (App.js) saxlanılırsa və onu bir neçə səviyyə aşağı ötürmək lazımdırsa, hər bir ara komponent bu prop-u ötürməli olur.",

                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal:",
                        content: `                        
const App = () => {
  const [theme, setTheme] = useState("dark");
  return <Parent theme={theme} />;
};

const Parent = ({ theme }) => <Child theme={theme} />;
const Child = ({ theme }) => <p>Theme: {theme}</p>;
                        `,
                        language: "tsx"
                    },
                    {
                        type: "text",
                        header: "",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "➡ Problem: theme prop-u Child komponentinə çatmaq üçün Parent-dən keçməlidir.",
                            },
                            {
                                list: "➡ Həll: Context API ilə aralıq komponentlərə prop ötürmədən birbaşa lazım olan komponentlərə ötürə bilərik.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "React Context Necə İstifadə Olunur?",
                        title: "1. Context Yaradılması (createContext)",
                        content: `                        
import { createContext } from "react";

export const ThemeContext = createContext("light"); // Default dəyər "light"
                        `,
                        language: "tsx"
                    },
                    {
                        type: "code",
                        title: "2. Provider ilə Məlumatın Paylaşılması",
                        content: `                        
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Child from "./Child";

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
};

export default App;
                        `,
                        language: "tsx"
                    },
                    {
                        type: "code",
                        header: "",
                        title: "3. Context-dən Məlumatın İstifadəsi (useContext)",
                        content: `                        
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Child = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Child;
                        `,
                        language: "tsx"
                    },
                    {
                        type: "text",
                        header: "Context-in Üstünlükləri",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "✅ Prop Drilling problemini həll edir.",
                            },
                            {
                                list: "✅ Global state paylaşımını asanlaşdırır.",
                            },
                            {
                                list: "✅ Kod daha təmiz və oxunaqlı olur.",
                            },
                            {
                                list: "✅ Redux və ya Zustand kimi əlavə state management kitabxanalarına ehtiyac olmadan sadə layihələr üçün yetərlidir.",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "Context-in Çatışmazlıqları",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "❌ Böyük layihələrdə hər renderdə bütün Consumer komponentləri yenidən render olunur.",
                            },
                            {
                                list: "❌ Bir neçə fərqli context istifadə olunursa, kod idarəolunmaz hala gələ bilər.",
                            },
                            {
                                list: "❌ Redux, Zustand və ya Recoil kimi optimallaşdırılmış state management kitabxanalarına nisbətən daha az performanslı ola bilər.",
                            },
                        ]
                    },
                ]
            },
            {
                id: 3,
                question: "React Suspense nədir?",
                answer: [
                    {
                        type: "text",
                        content: "React Suspense, komponentlər asinxron məlumatları yükləyərkən (məsələn, API çağırışı zamanı) gözləmə (loading) vəziyyətini idarə etmək üçün istifadə olunan bir mexanizmdir."
                    },
                    {
                        type: "text",
                        header: "",
                        title: "",
                        content: "Əsas məqsədi:",
                        lists: [
                            {
                                list: "✅ Asinxron məlumat yüklənən zaman fallback UI göstərmək",
                            },
                            {
                                list: "✅ Kodun bölünməsi (Code Splitting) ilə performansı artırmaq",
                            },
                            {
                                list: "✅ SSR (Server-Side Rendering) üçün React 18-də təkmilləşdirilmiş dəstək vermək",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Suspense-in Əsas İstifadə Halları",
                        content: "",
                        lists: [
                            {
                                list: "1️⃣ Kodun dinamik yüklənməsi (Lazy Loading)",
                            },
                            {
                                list: "2️⃣ Asinxron məlumat yüklənməsinin idarə olunması (Data Fetching)",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "1️⃣ Lazy Loading ilə Suspense",
                        title: "",
                        content: "React lazy() funksiyası ilə komponentləri dinamik yükləyə bilərik. Bu, tətbiqin ilkin yüklənmə müddətini azaldır.",

                    },
                    {
                        type: "code",
                        header: "",
                        title: "Ənənəvi Yöntəm (Bütün kodlar əvvəlcədən yüklənir)",
                        content: `                        
import Dashboard from "./Dashboard";

const App = () => {
  return <Dashboard />;
};
                        `,
                        language: "tsx"
                    },
                    {
                        type: "text",
                        content: "➡ Bütün kodlar bir anda yükləndiyinə görə böyük tətbiqlərdə performans problemi yarada bilər."
                    },

                    {
                        title: "Lazy Loading ilə Suspense",
                        type: "text",
                        content: "React lazy() və Suspense istifadə edərək, komponenti lazım olduqda yükləyə bilərik."
                    },
                    {
                        type: "code",
                        header: "",
                        title: "",
                        content: `                        
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
};
                        `,
                        language: "tsx"
                    },

                    {
                        type: "text",
                        header: "",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "✅ Yalnız istifadəçi Dashboard səhifəsinə keçəndə yüklənir",
                            },
                            {
                                list: "✅ İlkin yüklənmə müddəti azalır",
                            },
                            {
                                list: "✅ Yükləmə müddətində <p>Loading...</p> göstərilir",
                            },
                        ]
                    },

                    {
                        type: "text",
                        header: "2️⃣ Data Fetching ilə Suspense (React 18)",
                        title: "",
                        content: " React 18-dən sonra Suspense asan məlumat yükləmə (Data Fetching) dəstəyi təqdim edir.",
                    },
                    {
                        type: "text",
                        content: "Amma bu, yalnız React Server Components və ya use hook-u ilə tam effektiv işləyir."
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Asinxron Məlumat Yükləməsi Olmadan (Ənənəvi Yöntəm)",
                        content: `                        
const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  if (!user) return <p>Loading user...</p>;

  return <p>Welcome, {user.name}!</p>;
};
                        `,
                        language: "tsx"
                    },
                    {
                        type: "text",
                        header: "",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "➡ Bu yanaşmada komponent useEffect içində API çağırışı edərək məlumatı yükləyir.",
                            },
                            {
                                list: "➡ Komponent yükləndikdən sonra yenidən render olunur.",
                            },
                        ]
                    },
                    {
                        title: "Suspense ilə Asinxron Yükləmə",
                        type: "text",
                        content: "React 18 və Server Components istifadə edirsinizsə, Suspense ilə məlumatı daha effektiv şəkildə idarə edə bilərsiniz."
                    },

                    {
                        type: "code",
                        header: "",
                        title: "",
                        content: `                        
        import { Suspense } from "react";

const UserProfile = React.lazy(() => import("./UserProfile"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading user data...</p>}>
      <UserProfile />
    </Suspense>
  );
};
                `,
                        language: "tsx"
                    },

                    {
                        type: "text",
                        content: "✅ Məlumat yüklənənə qədər 'Loading user data... 'göstərilir"
                    },
                    {
                        type: "text",
                        content: "✅ Komponent yükləndikdən sonra tam göstərilir"
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Suspense-in Üstünlükləri",
                        content: "",
                        lists: [
                            {
                                list: "✅ Kod bölünməsi (Lazy Loading) ilə performansı artırır",
                            },
                            {
                                list: "✅ Asinxron məlumat yükləməni daha təmiz idarə etməyə imkan verir",
                            },
                            {
                                list: "✅ Server Side Rendering (SSR) ilə daha yaxşı işləyir",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Suspense-in Çatışmazlıqları",
                        content: "",
                        lists: [
                            {
                                list: "❌ Tam məlumat idarəetməsi üçün React Query və ya Zustand kimi alətlərə ehtiyac var",
                            },
                            {
                                list: "❌ SSR-də bəzi məhdudiyyətlər var (yalnız React Server Components üçün tam optimallaşdırılıb)",
                            },
                            {
                                list: "❌ React Query kimi daxili caching və refetching mexanizmi yoxdur",
                            },
                        ]
                    },

                ]
            },
            {
                id: 4,
                question: "Virtual DOM nədir və React onu necə istifadə edir?",
                answer: [
                    {
                        type: "text",
                        content: "Virtual DOM (VDOM), React-in istifadə etdiyi yüngül bir DOM replikasıdır. Brauzerin real DOM-un modifikasiyası yavaş olduğu üçün, React Virtual DOM-dan istifadə edərək performansı artırır."
                    },
                    {
                        type: "text",
                        content: "React, Virtual DOM-u istifadə edərək yalnız dəyişən hissələri əsl DOM ilə yeniləyir, bu da tətbiqin performansını artırır."
                    },
                    {
                        type: "text",
                        header: "React Virtual DOM-u necə istifadə edir?",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "1️⃣ Virtual DOM-un surəti yaradılır → (Yeni dəyişikliklər əvvəlcə burada edilir)",
                            },
                            {
                                list: "2️⃣ Diffing (Müqayisə) Prosesi → (React, əvvəlki və yeni Virtual DOM-u müqayisə edir)",
                            },
                            {
                                list: "3️⃣ Effektiv Güncəlləmə (Reconciliation) → (Yalnız dəyişən hissələr real DOM-a tətbiq olunur)",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "Virtual DOM-un Üstünlükləri",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "✅ Performansı artırır (Real DOM-u birbaşa dəyişdirməkdən daha sürətlidir)",
                            },
                            {
                                list: "✅ Daha az re-render edir (Yalnız dəyişən hissələr yenilənir)",
                            },
                            {
                                list: "✅ Çoxlu dəyişikliklər optimal şəkildə tətbiq olunur",
                            },
                        ]
                    },
                ]
            },
            {
                id: 5,
                question: "React-də funksional komponentlər ilə sinif komponentləri arasındakı fərq nədir?",
                answer: [
                    {
                        type: "text",
                        header: "1️⃣ Funksional Komponentlər",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "Yüngül və sadədir.",
                            },
                            {
                                list: "State və Lifecycle metodları React Hooks ilə idarə olunur (React 16.8-dən sonra).",
                            },
                            {
                                list: "Daha təhlükəsiz və performans baxımından optimallaşdırılmışdır.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Məsələn:",
                        content: `                        
const MyComponent = () => {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
};
                        `,
                        language: "tsx"
                    },
                    {
                        type: "text",
                        header: "2️⃣ Sinif Komponentləri",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "Daha köhnə sintaksisə malikdir və daha çox kod tələb edir.",
                            },
                            {
                                list: "State və Lifecycle metodları sinifin daxilində istifadə olunur.",
                            },
                            {
                                list: "class-based komponentlərdir və this istifadə olunur.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Məsələn:",
                        content: `                        
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}
                        `,
                        language: "tsx"
                    },
                ]
            },
            {
                id: 6,
                question: "React-də useState və useEffect hook-larının məqsədi nədir?",
                answer: [
                    {
                        type: "text",
                        content: "`useState`, komponentdəki vəziyyəti saxlamaq üçün istifadə olunur."
                    },
                    {
                        type: "text",
                        content: "`useEffect` isə render sonrası side effect-ləri idarə etməyə yarayır.."
                    }
                ]
            },
            {
                id: 7,
                question: "React-də props ilə state arasındakı fərq nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Props komponentlər arasında verilən ötürülməsi üçün istifadə olunur və dəyişdirilə bilməz."
                    },
                    {
                        type: "text",
                        content: "State komponentin daxili vəziyyətini idarə etmək üçün istifadə olunur və dəyişdirilə bilər."
                    }
                ]
            },
            {
                id: 8,
                question: "React-də idarə olunan (controlled) və idarə olunmayan (uncontrolled) komponentlər nədir?",
                answer: [
                    {
                        type: "text",
                        header: "İdarə olunan (Controlled) Komponentlər",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "Komponentin vəziyyəti React tərəfindən idarə olunur.",
                            },
                            {
                                list: "Input dəyərləri React state ilə bağlanır və dəyişikliklər onChange ilə izlənir.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Məsələn:",
                        content: `                        
const ControlledComponent = () => {
  const [value, setValue] = useState("");
  
  return (
    <input 
      type="text" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
    />
  );
};
                        `,
                        language: "tsx"
                    },
                    {
                        type: "text",
                        header: "İdarə olunmayan (Uncontrolled) Komponentlər",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "Komponentin vəziyyəti DOM tərəfindən idarə olunur.",
                            },
                            {
                                list: "React ref ilə DOM elementlərinə birbaşa müraciət edilir.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Məsələn:",
                        content: `                        
const UncontrolledComponent = () => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
                        `,
                        language: "tsx"
                    },
                    {
                        type: "text",
                        header: "Qısa Nəticə:",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "İdarə olunan komponentlərdə form dəyərləri React state ilə idarə olunur.",
                            },
                            {
                                list: "İdarə olunmayan komponentlərdə form dəyərləri DOM ilə idarə olunur və React ref ilə əldə edilir.",
                            },
                        ]
                    },
                ]
            },
            {
                id: 9,
                question: "React tətbiqi performans üçün necə optimallaşdırılır?",
                answer: [
                    {
                        type: "text",
                        header: "React tətbiqi performansını optimallaşdırmaq üçün əsas metodlar:",
                        title: "1️⃣ React Memoization (React.memo & useMemo)",
                        content: "",
                        lists: [
                            {
                                list: "React.memo: Komponenti yalnız props dəyişdikdə yenidən render etməyə məcbur edir.",
                            },
                            {
                                list: "useMemo: Hesablama nəticələrini yaddaşda saxlayır və yalnız asılılıqlar dəyişdikdə yenidən hesablanır.",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "2️⃣ Lazy Loading və Code Splitting",
                        content: "",
                        lists: [
                            {
                                list: "React.lazy və Suspense ilə komponentləri lazımlı olduqda yükləmək.",
                            },
                            {
                                list: "React-router ilə route-level code splitting tətbiq etmək.",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "3️⃣ Virtualization (List Optimization)",
                        content: "",
                        lists: [
                            {
                                list: "react-window və react-virtualized ilə böyük listələrdə yalnız ekranda görünən elementləri render etmək.",
                            },

                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "4️⃣ Evitarız Re-rendering (ShouldComponentUpdate & useCallback)",
                        content: "",
                        lists: [
                            {
                                list: "useCallback: Funksiyaların yalnız lazımlı olduqda yenidən yaradılmasını təmin edir.",
                            },
                            {
                                list: "shouldComponentUpdate (sinif komponentləri): Komponenti yalnız lazım olduqda yenidən render edir.",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "5️⃣ Debouncing və Throttling",
                        content: "",
                        lists: [
                            {
                                list: "Debouncing: Əsasən form daxilində istifadə olunur ki, istifadəçi hər basmada əməliyyat baş verməsin.",
                            },
                            {
                                list: "Throttling: Nəzarətli zamanla funksiyaların çağırılmasını təmin edir (məsələn, scroll və resize hadisələri).",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "6️⃣ Avoid Inline Functions və Objects",
                        content: "",
                        lists: [
                            {
                                list: "Inline funksiyalar və obyektlər props olaraq keçirildikdə hər renderda yenidən yaradılır, buna görə də performans itkilərinə səbəb ola bilər.",
                            },

                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "7️⃣ Avoid Unnecessary Re-renders",
                        content: "",
                        lists: [
                            {
                                list: "Komponentlərdə lazımsız renderləri minimuma endirmək üçün React.memo, useCallback, useMemo kimi optimizasiya metodları istifadə edin.",
                            },

                        ]
                    },
                    {
                        type: "text",
                        header: "Qısa Nəticə:",
                        content: "React tətbiqində performansı artırmaq üçün memoization, lazy loading, re-rendering idarəsi və virtualization kimi metodlardan istifadə edin. 🚀",

                    },
                ]
            },
            {
                id: 10,
                question: "useMemo və useCallback hook-ları arasındakı fərq nədir?",
                answer: [
                    {
                        type: "text",
                        header: "1️⃣ useMemo",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "Əsas məqsəd: Hesablama nəticələrini yaddaşda saxlayır və yalnız asılılıqlar dəyişdikdə yenidən hesablayır.",
                            },
                            {
                                list: "İstifadə halları: Mürəkkəb hesablamaları optimallaşdırmaq üçün istifadə olunur.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Məsələn:",
                        content: `                        
const expensiveCalculation = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
                        `,
                        language: "tsx"
                    },
                    {
                        type: "text",
                        header: "2️⃣ useCallback",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "Əsas məqsəd: Funksiyaları yalnız asılılıqlar dəyişdikdə yenidən yaratmaq.",
                            },
                            {
                                list: "İstifadə halları: Funksiya referansının dəyişməsini istəmədiyiniz zaman istifadə olunur (məsələn, React.memo ilə komponentləri optimallaşdırmaq).",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Məsələn:",
                        content: `                        
const handleClick = useCallback(() => {
  console.log('Clicked!');
}, []);
                        `,
                        language: "tsx"
                    },
                ]
            },
            {
                id: 11,
                question: "React-də lifecycle metodları və onların hook ekvivalentləri hansılardır?",
                answer: [
                    {
                        type: "text",
                        content: "Sinif komponentlərində lifecycle metodları `componentDidMount`, `componentDidUpdate`, və `componentWillUnmount` kimi olur."
                    },
                    {
                        type: "text",
                        content: "Bu metodların hook ekvivalentləri isə `useEffect` ilə yerinə yetirilir."
                    }
                ]
            },
            {
                id: 12,
                question: "React-də Prop Drilling nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Prop Drilling, bir komponentin props vasitəsilə məlumatları çox sayda komponentə ötürməsini izah edir."
                    },
                    {
                        type: "text",
                        content: "Bu, komponentlər arasındakı əlaqənin çoxalmasına və kodun idarə edilməsinin çətinləşməsinə səbəb ola bilər."
                    }
                ]
            },
            {
                id: 13,
                question: "React Portal nədir?",
                answer: [
                    {
                        type: "text",
                        header: "React Portal Nədir?",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "React Portal DOM ağacında bir komponenti başqa bir yerə (yuxarıda və ya xaricdəki bir yerə) render etməyə imkan verir.",
                            },
                            {
                                list: "Bu, xüsusilə modallar, tooltip-lər və bildirişlər kimi uyuşmaz DOM yerləri üçün faydalıdır.",
                            },
                            {
                                list: "ReactDOM.createPortal() metodu ilə yaradılır.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Məsələn:",
                        content: `                        
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('modal-root')  // Modalın render ediləcəyi DOM elementi
  );
};
                        `,
                        language: "tsx"
                    },
                    {    header: "Qısa Nəticə:",
                        type: "text",
                        content: "React Portal komponentləri DOM ağacının digər hissələrinə render etməyə imkan verir, buna görə də UI elementlərini asanlıqla idarə edə bilərsiniz."
                    },
                   
                ]
            },
            // {
            //     id: 14,
            //     question: "React Suspense nədir?",
            //     answer: [
            //         {
            //             type: "text",
            //             content: "React Suspense, asinxron komponentlərin yüklənməsi zamanı yüklənmə vəziyyətini idarə etmək üçün istifadə olunur."
            //         },
            //         {
            //             type: "text",
            //             content: "Bu, React komponentləri yüklənənə qədər fallback UI (məsələn, loading spinner) göstərmək üçün istifadə edilir."
            //         }
            //     ]
            // }
        ]

    },
    getData() {
        return Promise.resolve(this.questions())
    },
}


