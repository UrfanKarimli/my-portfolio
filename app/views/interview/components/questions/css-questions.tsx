

type TAnswer = {
    type: string,
    content: string,
    language? : string
}
type TQuestion = {
    id: number
    question: string
    answer: TAnswer[]
}
export const CssQuestions = {
    questions(): TQuestion[] {
        return [
            {
                id: 1,
                question: "Flexbox və Grid arasındakı fərqlər nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Flexbox və Grid hər ikisi CSS layout metodlarıdır, amma fərqli məqsədlər üçün istifadə olunur..."
                    },
                    {
                        type: "code",
                        content: "/* Flexbox example */\n.container { display: flex; justify-content: center; align-items: center; }\n\n/* Grid example */\n.container { display: grid; grid-template-columns: repeat(3, 1fr); }",
                        language: "css"
                    }
                ]
            },
            {
                id: 2,
                question: "CSS specifity nə edir?",
                answer: [
                    {
                        type: "text",
                        content: "CSS specifity, stil qaydalarının tətbiqini müəyyən edən bir metoddur..."
                    }
                ]
            },
            {
                id: 3,
                question: "Pseudo class nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Pseudo class, bir elementin müəyyən bir vəziyyətinə tətbiq edilən bir CSS xüsusiyyətidir..."
                    },
                    {
                        type: "code",
                        content: "a:hover { color: red; }\nbutton:focus { outline: none; }",
                        language: "css"
                    }
                ]
            },
            {
                id: 4,
                question: "Pseudo element nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Pseudo elementlər, elementlərin müəyyən hissələrini seçmək üçün istifadə edilir..."
                    },
                    {
                        type: "code",
                        content: "p::before { content: 'Start: '; font-weight: bold; }\ndiv::after { content: ' End'; color: blue; }",
                        language: "css"
                    }
                ]
            },
            {
                id: 5,
                question: "CSS Clamp() funksiyası nədir?",
                answer: [
                    {
                        type: "text",
                        content: "CSS `clamp()` funksiyası, bir dəyəri müəyyən bir aralıqda tutmaq üçün istifadə edilir..."
                    },
                    {
                        type: "code",
                        content: "h1 { font-size: clamp(1rem, 5vw, 3rem); }",
                        language: "css"
                    }
                ]
            },
            {
                id: 6,
                question: "Clip-path nədir?",
                answer: [
                    {
                        type: "text",
                        content: "CSS `clip-path` xüsusiyyəti, bir elementin görünüşünü müəyyən bir formada kəsməyə imkan verir..."
                    },
                    {
                        type: "code",
                        content: ".circle { clip-path: circle(50%); }",
                        language: "css"
                    }
                ]
            },
            {
                id: 7,
                question: "CSS-də em və rem vahidləri arasındakı fərq nədir?",
                answer: [
                    {
                        type: "text",
                        content: "`em` və `rem` hər ikisi nisbətə əsaslanan vahidlərdir, amma fərqlidir..."
                    }
                ]
            },
            {
                id: 8,
                question: "CSS Box Model nədir və onun komponentlərini izah edin?",
                answer: [
                    {
                        type: "text",
                        content: "CSS Box Model, hər bir HTML elementini dörd əsas komponentə bölür..."
                    }
                ]
            },
            {
                id: 9,
                question: "Media queries nədir və layihədə necə istifadə olunur?",
                answer: [
                    {
                        type: "text",
                        content: "CSS Media Queries, fərqli cihaz ölçüləri və xüsusiyyətləri üçün üslubları tənzimləməyə imkan verir..."
                    },
                    {
                        type: "code",
                        content: "@media (max-width: 768px) {\n  .menu { display: none; }\n  .hamburger { display: block; }\n}",
                        language: "css"
                    }
                ]
            },
            {
                id: 10,
                question: "Relative, absolute, fixed və sticky position arasındakı fərqlər.",
                answer: [
                    {
                        type: "text",
                        content: "`relative` elementin normal axınında qalır, amma onun mövqeyi nisbətən təyin edilir..."
                    },
                    {
                        type: "code",
                        content: "/* Relative positioning */\n.relative { position: relative; left: 20px; }\n\n/* Absolute positioning */\n.absolute { position: absolute; top: 10px; right: 10px; }\n\n/* Fixed positioning */\n.fixed { position: fixed; bottom: 0; }\n\n/* Sticky positioning */\n.sticky { position: sticky; top: 0; }",
                        language: "css"
                    }
                ]
            },
            {
                id: 11,
                question: "CSS-də responsiv naviqasiya panelini necə tətbiq edərdiniz?",
                answer: [
                    {
                        type: "text",
                        content: "Responsiv naviqasiya paneli yaratmaq üçün Flexbox və ya Grid istifadə edərək naviqasiya elementlərini uyğun şəkildə yerləşdirə bilərsiniz..."
                    },
                    {
                        type: "code",
                        content: "@media (max-width: 768px) {\n  .nav { display: none; }\n  .hamburger { display: block; }\n}",
                        language: "css"
                    }
                ]
            },
            {
                id: 12,
                question: "CSS-də `!important` nədir?",
                answer: [
                    {
                        type: "text",
                        content: "CSS `!important`, bir stil qaydasının digər qaydalara nisbətən daha yüksək prioritetə sahib olmasını təmin edir..."
                    }
                ]
            },
            {
                id: 13,
                question: "CSS-də `display` xüsusiyyəti nədir?",
                answer: [
                    {
                        type: "text",
                        content: "CSS `display` xüsusiyyəti, bir elementin necə göstəriləcəyini və necə davranacağını müəyyən edir..."
                    },
                    {
                        type: "code",
                        content: "/* Block display */\ndiv { display: block; }\n\n/* Inline display */\nspan { display: inline; }\n\n/* Flex display */\n.container { display: flex; }",
                        language: "css"
                    }
                ]
            },
            {
                id: 14,
                question: "CSS-də `transition` nədir?",
                answer: [
                    {
                        type: "text",
                        content: "CSS `transition`, bir elementin bir dəyərdən digərinə keçməsini asanlaşdırır və animasiya yaratmağa imkan verir..."
                    },
                    {
                        type: "code",
                        content: "button { transition: background-color 0.3s ease; }\nbutton:hover { background-color: blue; }",
                        language: "css"
                    }
                ]
            },
            {
                id: 15,
                question: "CSS-də `z-index` nədir?",
                answer: [
                    {
                        type: "text",
                        content: "CSS `z-index` xüsusiyyəti, elementlərin yığın sırasını tənzimləyir..."
                    },
                    {
                        type: "code",
                        content: "/* Higher z-index means element is on top */\n.box { position: absolute; z-index: 10; }\n.box2 { position: absolute; z-index: 5; }",
                        language: "css"
                    }
                ]
            }
        ];
        
        
    },
    getData() {
        return Promise.resolve(this.questions())
    },
}


