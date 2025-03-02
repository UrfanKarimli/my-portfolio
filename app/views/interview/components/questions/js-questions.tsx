
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

export const JSQuestions = {
    questions(): TQuestion[] {
        return [
            { 
                id: 1, 
                question: "JavaScript necə işləyir?", 
                answer: [
                    {
                        type: "text",
                        content: "JavaScript, bir müştəri tərəfli skript dili olaraq veb brauzerlərdə işləyir. O, birbaşa interpretasiya olunur və tək iplikli (single-threaded) olaraq çalışır."
                    }
                ]
            },
            { 
                id: 2, 
                question: "JavaScript-in digər dillərdən fərqi nədir?", 
                answer: [
                    {
                        type: "text",
                        content: "JavaScript interpretasiya olunan və dinamik tiplənən bir dildir. O, əsasən veb brauzerlərdə işləmək üçün nəzərdə tutulmuşdur və prototip əsaslı obyekt yönlü proqramlaşdırma dəstəyinə malikdir."
                    }
                ]
            },
            { 
                id: 3, 
                question: "Prototype-based OOP nədir?", 
                answer: [
                    {
                        type: "text",
                        content: "Prototype-based OOP, obyektlərin digər obyektlərdən miras alındığı və prototiplər vasitəsilə davranışların təyin edildiyi bir obyekt yönlü proqramlaşdırma modelidir."
                    }
                ]
            },
            { 
                id: 4, 
                question: "Class-based OOP nədir və arxada nəyə çevrilir?", 
                answer: [
                    {
                        type: "text",
                        content: "Class-based OOP, obyektləri siniflər əsasında yaradan proqramlaşdırma modelidir. JavaScript-də isə class ifadələri əslində funksiya konstrukturlarına və prototiplərə çevrilir."
                    }
                ]
            },
            { 
                id: 5, 
                question: "Pass by Value və Pass by Reference nədir?", 
                answer: [
                    {
                        type: "text",
                        content: "Pass by Value zamanı dəyişənin kopyası ötürülür, orijinal dəyişən təsirlənmir. Pass by Reference isə obyektin referansını ötürür, dəyişiklik orijinal obyektə təsir edir."
                    }
                ]
            },
            { 
                id: 6, 
                question: "Pure function nədir?", 
                answer: [
                    {
                        type: "text",
                        content: "Pure function, eyni giriş üçün həmişə eyni çıxışı verən və xarici dəyişənlərə təsir etməyən funksiyadır."
                    }
                ]
            },
            { 
                id: 7, 
                question: "High-order function nədir? Misal verə bilərsiniz?", 
                answer: [
                    {
                        type: "text",
                        content: "High-order function, başqa funksiyaları arqument kimi qəbul edən və ya nəticə olaraq funksiya qaytaran funksiyadır. Məsələn, `map`, `filter`, `reduce` kimi metodlar high-order function-dır."
                    }
                ]
            },
            { 
                id: 8, 
                question: "Closure nədir? Misal ilə izah edin?", 
                answer: [
                    {
                        type: "text",
                        content: "Closure, bir funksiyanın öz lexical scope-dakı dəyişənlərə çıxış edə bilməsi xüsusiyyətidir."
                    },
                    {
                        type: "code",
                        content: "```js\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\nconst increment = outer();\nconsole.log(increment()); // 1\nconsole.log(increment()); // 2\n```"
                    }
                ]
            },
            { 
                id: 9, 
                question: "Heap və Stack yaddaşı nədir?", 
                answer: [
                    {
                        type: "text",
                        content: "Heap, dinamik olaraq ayrılan yaddaş sahəsidir, Stack isə funksiya çağırışları və lokal dəyişənlər üçün istifadə olunan yaddaş sahəsidir."
                    }
                ]
            },
            { 
                id: 10, 
                question: "Call stack nədir?", 
                answer: [
                    {
                        type: "text",
                        content: "Call stack, JavaScript-in funksiyaları icra etməsi üçün istifadə etdiyi bir verilənlər strukturudur. Funksiyalar çağırıldıqda stack-ə əlavə olunur və icra bitdikdə çıxarılır."
                    }
                ]
            },
            { 
                id: 11, 
                question: "Var, let və const arasındakı fərq nədir?", 
                answer: [
                    {
                        type: "text",
                        content: "var funksional scope-a malikdir, let və const isə blok scope-a malikdir. const dəyişməzdir, let dəyişə bilər."
                    }
                ]
            },
            { 
                id: 12, 
                question: "JavaScript-də this açar sözü necə işləyir?", 
                answer: [
                    {
                        type: "text",
                        content: "`this`, çağırış kontekstinə əsasən dəyişir. Obyekt daxilində `this` obyektin özünə işarə edir, ancaq arrow function-larda `this` lexical kontekstdən gəlir."
                    }
                ]
            },
            { 
                id: 13, 
                question: "Sinxron və asinxron JavaScript arasındakı fərq nədir?", 
                answer: [
                    {
                        type: "text",
                        content: "Sinxron JavaScript tək bir xətt üzrə icra olunur, asinxron JavaScript isə Callback, Promise və async/await istifadə edərək əməliyyatları paralel şəkildə idarə edə bilər."
                    }
                ]
            },
            { 
                id: 14, 
                question: "Promise nədir və məqsədi nədir?", 
                answer: [
                    {
                        type: "text",
                        content: "Promise, asinxron əməliyyatların nəticəsini gözləmək üçün istifadə olunan obyekt strukturdur."
                    }
                ]
            },
            { 
                id: 15, 
                question: "JavaScript-də event delegasiyası necə işləyir?", 
                answer: [
                    {
                        type: "text",
                        content: "Event delegasiyası, hadisələrin bir valideyn elementi üzərindən idarə edilməsinə imkan yaradır."
                    }
                ]
            },
            { 
                id: 16, 
                question: "Function declaration, expression və İİFE arasındakı fərqlər.", 
                answer: [
                    {
                        type: "text",
                        content: "Declaration hoisting edir, Expression etməz. İİFE isə dərhal icra olunan ifadədir."
                    }
                ]
            },
            { 
                id: 17, 
                question: "Arrow functions nədir və adi funksiyalardan nə ilə fərqlənir?", 
                answer: [
                    {
                        type: "text",
                        content: "Arrow functions daha qısa sintaksislidir və `this` dəyərini lexical kontekstdən alır."
                    }
                ]
            },
            { 
                id: 18, 
                question: "JavaScript-də forEach və map metodları arasındakı fərq nədir?", 
                answer: [
                    {
                        type: "text",
                        content: "forEach dəyişiklik etmir, map isə yeni array qaytarır."
                    }
                ]
            },
            { 
                id: 19, 
                question: "DRY, KISS və YAGNI prinsipləri nədir?", 
                answer: [
                    {
                        type: "text",
                        content: "Bunlar proqramlaşdırmada kodun sadə və təkrarlanmaz olmasını təmin edən prinsiplərdir."
                    }
                ]
            },
            { 
                id: 20, 
                question: "Generation function nədir?", 
                answer: [
                    {
                        type: "text",
                        content: "Generator funksiyalar `yield` açar sözü ilə icranı dayandırıb davam etdirə bilən funksiyalardır."
                    }
                ]
            },
            { 
                id: 21, 
                question: "AJAX nədir və necə işləyir?", 
                answer: [
                    {
                        type: "text",
                        content: "AJAX, səhifəni yeniləmədən serverdən asinxron məlumat almağa imkan verən texnologiyadır."
                    }
                ]
            },
            { 
                id: 22, 
                question: "__proto__ necə işləyir?", 
                answer: [
                    {
                        type: "text",
                        content: "__proto__, obyektin prototipini göstərən referansdır."
                    }
                ]
            },
            { 
                id: 23, 
                question: "Prototype nədir?", 
                answer: [
                    {
                        type: "text",
                        content: "Prototype, JavaScript obyektlərinin miras aldığı xüsusiyyətləri saxlayan obyektdir."
                    }
                ]
            },
            { 
                id: 24, 
                question: "Protosu olmayan obyekt necə yaranır?", 
                answer: [
                    {
                        type: "text",
                        content: "`Object.create(null)` istifadə edərək protosuz obyekt yaratmaq mümkündür."
                    }
                ]
            }
        ]
        
    },
    getData() {
        return Promise.resolve(this.questions())
    },
}

