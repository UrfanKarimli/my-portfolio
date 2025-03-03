

type TAnswer = {
    type: string,
    title?: string,
    content: string,
    language? : string
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
                        content: "React-in müsbət cəhətləri arasında yüksək performans, komponent əsaslı arxitektura, geniş icma dəstəyi və çoxlu resurslar mövcuddur."
                    },
                    {
                        type: "text",
                        content: "Mənfi cəhətləri isə öyrənmə əyrisi (xüsusilə yeni başlayanlar üçün) və layihə miqyası böyüdükcə, daha çox komplekslik yaranmasıdır."
                    }
                ]
            },
            {
                id: 2,
                question: "React context nədir?",
                answer: [
                    {
                        type: "text",
                        content: "React Context, komponentlər arasında məlumat paylaşmaq üçün istifadə olunan bir mexanizmdir."
                    },
                    {
                        type: "text",
                        content: "Bu, xüsusilə 'prop drilling' problemini həll etmək üçün istifadə olunur. Context bir dəfə yaradılıb, istifadə etmək istədiyiniz komponentlərdə verilənləri təmin edir."
                    }
                ]
            },
            {
                id: 3,
                question: "Redux və Redux Toolkit nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Redux, tətbiqdə global state idarə etmək üçün istifadə olunan bir kitabxanadır."
                    },
                    {
                        type: "text",
                        content: "Redux Toolkit isə Redux ilə işləmək üçün daha asan və optimallaşdırılmış bir yoldur, çünki o, `configureStore`, `createSlice` və s. kimi hazır alətlər təqdim edir."
                    }
                ]
            },
            {
                id: 4,
                question: "Virtual DOM nədir və React onu necə istifadə edir?",
                answer: [
                    {
                        type: "text",
                        content: "Virtual DOM, DOM-un yüngül və yaddaşda saxlanan bir nüsxəsidir."
                    },
                    {
                        type: "text",
                        content: "React, Virtual DOM-u istifadə edərək yalnız dəyişən hissələri əsl DOM ilə yeniləyir, bu da tətbiqin performansını artırır."
                    }
                ]
            },
            {
                id: 5,
                question: "React-də funksional komponentlər ilə sinif komponentləri arasındakı fərq nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Funksional komponentlər sadə funksiyalar olaraq yazılır və React 16.8-dən sonra hook-lar istifadə edərək vəziyyəti idarə edə bilir."
                    },
                    {
                        type: "text",
                        content: "Sinif komponentləri isə `class` əsaslıdır və `render()` metodunu istifadə edərək UI göstərir. Funksional komponentlər daha qısa və sadə olduğu üçün ən çox tövsiyə edilir."
                    }
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
                        content: "`useEffect` isə komponentin həyat dövrü ilə əlaqəli yan təsirləri idarə etmək üçün istifadə edilir (məsələn, API çağırışları, DOM manipulyasiyaları və ya digər yan təsirlər)."
                    }
                ]
            },
            {
                id: 7,
                question: "React-də props ilə state arasındakı fərq nədir?",
                answer: [
                    {
                        type: "text",
                        content: "`props`, komponentlərə verilən verilənlərdir və valideyn komponentdən uşağa ötürülür."
                    },
                    {
                        type: "text",
                        content: "`state` isə komponentin öz vəziyyətini təmsil edir və komponent daxilində dəyişdirilə bilər."
                    }
                ]
            },
            {
                id: 8,
                question: "React-də idarə olunan (controlled) və idarə olunmayan (uncontrolled) komponentlər nədir?",
                answer: [
                    {
                        type: "text",
                        content: "İdarə olunan komponentlər, istifadəçi girişi kimi verilənləri React vəziyyətinə bağlayır."
                    },
                    {
                        type: "text",
                        content: "İdarə olunmayan komponentlər isə DOM-dan birbaşa verilənlərə daxil olur və React tərəfindən idarə edilmir."
                    }
                ]
            },
            {
                id: 9,
                question: "React tətbiqini performans üçün necə optimallaşdırardınız?",
                answer: [
                    {
                        type: "text",
                        content: "React tətbiqinin performansını optimallaşdırmaq üçün `React.memo`, `useMemo`, `useCallback`, lazy loading, kode bölünməsi, `shouldComponentUpdate` (sinif komponentlərində) və ya `PureComponent` istifadə edilə bilər."
                    }
                ]
            },
            {
                id: 10,
                question: "useMemo və useCallback hook-ları arasındakı fərq nədir?",
                answer: [
                    {
                        type: "text",
                        content: "`useMemo` qiymətlərin hesablanmasını yaddaşda saxlayır və yalnız asılılıqlar dəyişdikdə yeniləyir."
                    },
                    {
                        type: "text",
                        content: "`useCallback` isə funksiya yaradılmasını yaddaşda saxlayır və yalnız asılılıqlar dəyişdikdə təkrar yaradılır."
                    }
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
                        content: "React Portal, React-in komponentləri müəyyən bir DOM node-a render etməyə imkan verən bir xüsusiyyətdir."
                    },
                    {
                        type: "text",
                        content: "Bu, modal pəncərələr, tooltiplər və ya bildirişlər kimi tətbiqlərdə faydalıdır."
                    }
                ]
            },
            {
                id: 14,
                question: "React Suspense nədir?",
                answer: [
                    {
                        type: "text",
                        content: "React Suspense, asinxron komponentlərin yüklənməsi zamanı yüklənmə vəziyyətini idarə etmək üçün istifadə olunur."
                    },
                    {
                        type: "text",
                        content: "Bu, React komponentləri yüklənənə qədər fallback UI (məsələn, loading spinner) göstərmək üçün istifadə edilir."
                    }
                ]
            },
            {
                id: 15,
                question: "React-də formları necə idarə edirsiniz?",
                answer: [
                    {
                        type: "text",
                        content: "React-də formları idarə etmək üçün `useState` ilə komponentin vəziyyətini izləyə bilərik."
                    },
                    {
                        type: "text",
                        content: "Ayrıca, `useRef` və `useReducer` ilə daha mürəkkəb form idarəetmələri həyata keçirə bilərik. Controlled komponentlər, form verilənlərini React-in state ilə əlaqələndirmək üçün istifadə edilir."
                    }
                ]
            }
        ]
        
    },
    getData() {
        return Promise.resolve(this.questions())
    },
}


