
type TAnswer = {
    type: string,
    header?: string,
    title?: string,
    content: string,
    language?: string,
    lists?: { list: string }[]
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
                        header: "JavaScript Necə İşləyir?",
                        title: "JavaScript-in İşləmə Prosesi",
                        content: "JavaScript təfsir olunan (interpreted) və tək yivli (single-threaded) bir proqramlaşdırma dilidir. O, əsasən veb səhifələrdə interaktivlik yaratmaq üçün istifadə olunur. JavaScript mühərriki kodu aşağıdakı mərhələlərlə icra edir:",
                        lists: [
                            {
                                list: "1. Parsing (Təhlil etmə) – JavaScript kodunu tokenlərə bölür və AST (Abstract Syntax Tree) adlı bir struktur yaradır."
                            },
                            {
                                list: "2. Compilation (Kompilyasiya) – JIT (Just-In-Time) texnologiyasından istifadə edərək, kodu sürətli şəkildə maşın dilinə çevirir."
                            },
                            {
                                list: "3. Execution (İcra etmə) – Kod icra edilir və nəticə qaytarılır."
                            }
                        ]
                    },
                    {
                        type: "text",
                        title: "Call Stack və Event Loop",
                        content: "JavaScript tək yivli (single-threaded) bir dildir, yəni eyni anda yalnız bir əməliyyatı icra edir.",
                        lists: [
                            {
                                list: "- Call Stack (Zəng Yığını) – JavaScript-in funksiyaları icra etdiyi əsas yerdir. Funksiya çağırıldıqda stack-ə əlavə olunur və icra bitdikdə çıxarılır."
                            },
                            {
                                list: "- Web API (Veb API-lər) – Brauzerə aid olan API-lərdir (məsələn, setTimeout, fetch, DOM manipulyasiyası və s.)."
                            },
                            {
                                list: "- Callback Queue (Gözləmə növbəsi) – Asinxron funksiyalar buraya göndərilir və Event Loop vasitəsilə Call Stack boşaldıqda icraya daxil edilir."
                            },
                            {
                                list: "- Event Loop (Hadisə Döngüsü) – Call Stack boş olduqda, gözləmə növbəsindəki funksiyaları icraya göndərir."
                            }
                        ]
                    },
                    {
                        type: "code",
                        title: "Event Loop Misalı",
                        content: "console.log(\"1\");\n\nsetTimeout(() => {\n  console.log(\"2\");\n}, 0);\n\nconsole.log(\"3\");",
                        language: "javascript"
                    },
                    {
                        type: "text",
                        title: "Asinxron JavaScript",
                        content: "JavaScript-də asinxron işləmə metodları:",
                        lists: [
                            {
                                list: "- Callbacks – Funksiyanı başqa funksiyaya arqument kimi ötürmək."
                            },
                            {
                                list: "- Promises – Asinxron əməliyyatları daha yaxşı idarə etmək üçün (.then, .catch)."
                            },
                            {
                                list: "- Async/Await – Promiseləri daha oxunaqlı hala gətirən sintaksis."
                            }
                        ]
                    },
                    {
                        type: "code",
                        title: "Fetch API ilə Asinxron Məlumat Almaq",
                        content: "async function getData() {\n  const response = await fetch(\"https://jsonplaceholder.typicode.com/todos/1\");\n  const data = await response.json();\n  console.log(data);\n}\n\ngetData();",
                        language: "javascript"
                    },
                    {
                        type: "text",
                        title: "JavaScript-in Xüsusiyyətləri",
                        content: "✅ Dinamik dillərdən biridir – Məlumat tipləri avtomatik müəyyən olunur.",
                        lists: [
                            {
                                list: "✅ Zəif tipli dildir – Məlumat tipləri çevrilə bilər (\"5\" + 2 = \"52\" kimi)."
                            },
                            {
                                list: "✅ Prototip əsaslı obyekt yönlüdür – Class yerinə prototiplərdən istifadə edir."
                            },
                            {
                                list: "✅ Əsasən veb üçün istifadə olunur, amma Node.js ilə server tərəfdə də işləyir."
                            }
                        ]
                    }
                ]

            },
            {
                id: 2,
                question: "JavaScript-in digər dillərdən fərqi nədir?",
                answer: [
                    {
                        type: "text",
                        header: "JavaScript-in Digər Dillərdən Fərqi",
                        title: "JavaScript-in Xüsusiyyətləri və Fərqləri",
                        content: "JavaScript digər proqramlaşdırma dillərindən fərqli xüsusiyyətlərə sahibdir. Aşağıda bu fərqlərin bəzilərini təqdim edirik:",
                        lists: [
                            {
                                list: "1. Dinamik Tipli Dil – JavaScript-də dəyişənlərin tipi avtomatik olaraq müəyyən edilir. Məsələn, bir dəyişən əvvəlcə string ola bilər, sonra isə number ola bilər."
                            },
                            {
                                list: "2. Tək Yivli (Single-Threaded) – JavaScript tək yivli işləyir, yəni eyni anda yalnız bir əməliyyat icra edilir. Buna baxmayaraq, asinxron işləmə mexanizması (event loop) ilə effektiv işləyir."
                            },
                            {
                                list: "3. Prototip Əsaslı Obyekt Yönlü – JavaScript obyekt yönlü dil olsa da, class-lar yerinə prototiplərdən istifadə edir."
                            },
                            {
                                list: "4. İnterpreted (Təfsir Olunmuş) Dil – JavaScript kompilyasiya edilmir, ancaq işlədilən mühit tərəfindən təfsir olunur (interpretation)."
                            },
                            {
                                list: "5. Browser Tərəfindən İcranın Əsas Olması – JavaScript əsasən veb tətbiqləri üçün istifadə olunur və brauzer tərəfindən işlədilir."
                            },
                            {
                                list: "6. Təhlükəsiz və İzolyasiya Edilmiş Mühit – JavaScript-in brauzer mühitində işləyərkən təhlükəsizlik məqsədilə çoxlu izolyasiya qaydaları mövcuddur, məsələn, CORS (Cross-Origin Resource Sharing)."
                            },
                            {
                                list: "7. Asinxron Kod İcraatı – JavaScript asinxron kod icrasını dəstəkləyir. Məsələn, `setTimeout`, `Promises` və `async/await` ilə asinxron əməliyyatları idarə edir."
                            },
                            {
                                list: "8. Event-Driven (Hadisə Yönlü) – JavaScript hadisə yönlü proqramlaşdırmanı dəstəkləyir, yəni istifadəçinin hərəkətləri (kliklər, hərəkətlər və s.) əsasında əməliyyatları yerinə yetirir."
                            }
                        ]
                    }
                ]

            },
            {
                id: 3,
                question: "Prototype-based OOP nədir?",
                answer: [
                    {
                        type: "text",
                        header: "Prototype-based OOP",
                        title: "Prototip Əsaslı Obyekt Yönümlü Proqramlaşdırma",
                        content: "Prototip əsaslı obyekt yönümlü proqramlaşdırma, JavaScript-in əsas obyekt yönümlü proqramlaşdırma anlayışıdır. Bu yanaşmada, obyektlər bir-birindən prototiplər vasitəsilə miras alır. JavaScript-də bir obyektin özünün prototipi olur və bu prototip digər obyektlərdən xüsusiyyətləri və metodları miras alır.",
                        lists: [
                            {
                                list: "1. Prototip: Hər JavaScript obyektinin özünə məxsus prototipi vardır. Bu prototip digər obyektlərdən metodlar və xüsusiyyətlər alır."
                            },
                            {
                                list: "2. Miras: Bir obyekt başqa bir obyektin metod və xüsusiyyətlərini prototip vasitəsilə miras alır. Bu, klass əsaslı proqramlaşdırmadan fərqli olaraq `class` deyil, obyektlər üzərində işləyir."
                            },
                            {
                                list: "3. `prototype` Xüsusiyyəti: JavaScript-də hər bir obyektin `prototype` adlı xüsusiyyəti olur. Obyektin `prototype`-u başqa obyektin metodlarını və xüsusiyyətlərini təmsil edir."
                            },
                            {
                                list: "4. Funksiya Obyektlərinin Prototipləri: JavaScript-də funksiya da bir obyekt olaraq qəbul edilir və ona da prototip əlavə edilə bilər. Bu funksiya obyektinin `prototype` xüsusiyyəti onun yaratdığı obyektlərin prototipini təmsil edir."
                            },
                            {
                                list: "5. `Object.create()` metodu: Bu metod, yeni obyekt yaratmaq üçün istifadə edilir və həmin obyektin prototipi müəyyən edilir."
                            },
                            {
                                list: "6. Prototipin Zəncirvari Strukturu: Obyektin prototipi başqa obyektin prototipi ilə əlaqəlidir. Bu əlaqə prototip zənciri adlanır. Əgər bir obyektin özündə axtarılan xüsusiyyət və ya metod tapılmasa, prototip zənciri vasitəsilə daha yuxarı səviyyələrə baxılır."
                            }
                        ]
                    }
                ]

            },
            {
                id: 4,
                question: "Class-based OOP nədir və arxada nəyə çevrilir?",
                answer: [
                    {
                        type: "text",
                        header: "",
                        title: "",
                        content: "Class-based Object-Oriented Programming (Class Əsaslı Obyekt Yönümlü Proqramlaşdırma) obyektləri yaratmaq üçün siniflərdən istifadə edən bir proqramlaşdırma modelidir. Siniflər, obyektləri yaratmaq və onlara metodlar təyin etmək üçün şablon rolunu oynayır. JavaScript-də siniflər, ES6 (ECMAScript 2015) versiyası ilə təqdim edilmiş və daha oxunaqlı bir sintaksis təmin edir. Lakin JavaScript-in daxili iş prinsipi hər zaman prototip əsaslı olub, siniflər yalnız bu mexanizmi daha asan istifadə etməyə imkan verir.",
                        lists: [
                            {
                                list: "Class-based OOP obyektləri siniflər vasitəsilə yaradır.",
                            },
                            {
                                list: "Siniflər şablon rolunu oynayır və obyektlər onlardan yaradılır.",
                            },
                            {
                                list: "JavaScript-də siniflər prototiplərlə işləyir, yalnız sintaksis sadələşdirilir.",
                            },
                            {
                                list: "Hər bir obyektin prototipi var və obyektlər bu prototiplərdən metodları miras alır.",
                            }
                        ]
                    },
                    {
                        type: "code",
                        title: "Class-based OOP nümunəsi",
                        content: "const Animal = class {\n" +
                            "    constructor(name) {\n" +
                            "        this.name = name;\n" +
                            "    }\n\n" +
                            "    speak() {\n" +
                            "        console.log(`${this.name} makes a noise.`);\n" +
                            "    }\n" +
                            "};\n\n" +
                            "const dog = new Animal('Dog');\n" +
                            "dog.speak(); // Dog makes a noise.",
                        language: "javascript"
                    },
                    {
                        type: "code",
                        title: "Prototip əsaslı OOP nümunəsi (Class-sız)",
                        content: "function Animal(name) {\n" +
                            "    this.name = name;\n" +
                            "}\n\n" +
                            "Animal.prototype.speak = function() {\n" +
                            "    console.log(`${this.name} makes a noise.`);\n" +
                            "};\n\n" +
                            "const dog = new Animal('Dog');\n" +
                            "dog.speak(); // Dog makes a noise.",
                        language: "javascript"
                    }
                ]
            },
            {
                id: 5,
                question: "Pass by Value və Pass by Reference nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Pass by Value və Pass by Reference funksiyalar və metodlar vasitəsilə dəyişənlərin necə ötürülməsini açıqlayır. İki konsepsiyanın fərqləri belədir:",
                    },
                    {
                        type: "text",
                        title: "1. Pass by Value:",
                        content: "",
                        lists: [
                            {
                                list: "Bu zaman bir dəyişən bir funksiya və ya metod vasitəsilə ötürüldüyündə, dəyişənin dəyəri birbaşa funksiyaya ötürülür.",
                            },
                            {
                                list: "Funksiya daxilində həmin dəyişən üzərində edilən dəyişikliklər orijinal dəyişəni təhlükəsiz şəkildə dəyişdirmir.",
                            },
                            {
                                list: "Əsasən primitive (əsas) verilən tipli dəyişənlərdə (məsələn, number, string, boolean və s.) istifadə olunur.",
                            }
                        ]
                    },
                    {
                        type: "code",
                        title: "Misal",
                        content: `let a = 5;

function modifyValue(x) {
  x = 10;
}

modifyValue(a);
console.log(a);  // 5 - dəyişmir
`,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        title: "2. Pass by Reference:",
                        content: "",
                        lists: [
                            {
                                list: "Bu zaman dəyişən bir funksiya və ya metod vasitəsilə ötürüldüyündə, dəyişənin yaddaşdakı yeri (referansı) ötürülür.",
                            },
                            {
                                list: "Funksiya daxilində həmin dəyişən üzərində edilən dəyişikliklər orijinal dəyişəni dəyişdirir.",
                            },
                            {
                                list: "Əsasən obje və ya array kimi mürəkkəb verilən tipləri üçün istifadə olunur.",
                            }
                        ]
                    },
                    {
                        type: "code",
                        title: "Misal",
                        content: `let obj = { name: "John" };

function modifyReference(o) {
  o.name = "Alice";
}

modifyReference(obj);
console.log(obj.name);  // Alice - dəyişir
`,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        content: "Yəni, Pass by Value-də dəyər, Pass by Reference-də isə yaddaş ünvanı ötürülür."
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
                    },
                    {
                        type: "text",
                        content: "Pure function-nun üstünlükləri arasında test etməyin asan olması və yan təsirlərin olmaması, yəni proqramın daha predictabl (təxmin edilə bilən) olması yer alır. Bu cür funksiyalar çox zaman referensial olaraq dəyişməz (referential transparency) olur."
                    },
                    {
                        type: "code",
                        title: "Məsələn:",
                        content: `
 function add(a, b) {
  return a + b;
}
                        `,
                        language: "javascript"
                    },

                ]
            },
            {
                id: 7,
                question: "High-order function nədir? ",
                answer: [
                    {
                        type: "text",
                        content: "High-order function, başqa funksiyaları arqument kimi qəbul edən və ya nəticə olaraq funksiya qaytaran funksiyadır. Məsələn, `map`, `filter`, `reduce` kimi metodlar high-order function-dır."
                    },
                    {
                        type: "text",
                        content: "Bu cür funksiyalar, funksiyaların daha yüksək səviyyədə işlədilməsi və çevik kod yazılması üçün istifadə olunur."
                    },
                    {
                        type: "code",
                        title: "Misal:",
                        content: `
// High-order function misalı
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

// Bu funksiyanı istifadə edirik
const multiplyBy2 = multiplier(2); // Faktor olaraq 2 qəbul edirik
console.log(multiplyBy2(5)); // Çıxış: 10

const multiplyBy3 = multiplier(3); // Faktor olaraq 3 qəbul edirik
console.log(multiplyBy3(5)); // Çıxış: 15
`,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        content: `Bu nümunədə, multiplier funksiyası bir high-order function-dur, çünki başqa bir funksiyanı qaytarır. multiplyBy2 və multiplyBy3 isə multiplier funksiyasından qaytarılmış yeni funksiyalardır.

Belə funksiyalar proqramın daha modul və təkrar istifadə edilə bilən hissələrə ayrılmasına kömək edir.`
                    }
                ]
            },
            {
                id: 8,
                question: "Closure nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Closure, bir funksiyanın öz lexical scope-dakı dəyişənlərə çıxış edə bilməsi xüsusiyyətidir."
                    },
                    {
                        type: "code",
                        content: `\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\nconst increment = outer();\nconsole.log(increment()); // 1\nconsole.log(increment()); // 2\n`,
                    language: "javascript"
                    }
                ]
            },
            {
                id: 9,
                question: "Heap və Stack yaddaşı nədir?",
                answer: [
                    {
                        type: "text",
                        header: "Heap və Stack Yaddaşı Haqqında Ümumi Məlumat",
                        title: "Heap və Stack Yaddaşı Fərqi",
                        content: "Heap və Stack yaddaşı, proqramın yaddaşında verilənlərin saxlanma üsullarını təyin edən iki fərqli yaddaş sahəsidir. Bu iki yaddaş tipi müxtəlif məqsədlər üçün istifadə edilir və fərqli xüsusiyyətlərə malikdir.",
                        lists: [
                            { list: "Stack Yaddaşı: LIFO (Last In, First Out) prinsipinə əsaslanır, yəni son daxil olan ilk çıxarılır." },
                            { list: "Heap Yaddaşı: Yaddaşın dinamik olaraq idarə edildiyi sahədir. Burada verilənlər daha sərbəst şəkildə saxlanır." },
                            { list: "Stack: Funksiya çağırışları, lokal dəyişənlər və parametrlər burada saxlanır." },
                            { list: "Heap: Dinamik olaraq yaradılmış verilənlər, məsələn obyektlər və dizilər burada saxlanır." },
                            { list: "Stack Yaddaşının ölçüsü məhduddur və tez dolur, buna görə də çox miqdarda məlumat saxlanması çətindir." },
                            { list: "Heap Yaddaşı daha böyükdür və çox miqdarda verilənləri saxlamağa imkan verir." }
                        ]
                    },
                    {
                        type: "code",
                        title: "JavaScript Misalı ilə Stack və Heap fərqi",
                        content: `
// Stack və Heap arasındakı fərqi göstərən sadə bir misal
// Stack-də saxlanılan lokal dəyişənlər
function stackExample() {
let x = 5;  // Stack-də saxlanır
let y = 10; // Stack-də saxlanır
return x + y;
}
            
// Heap-də saxlanılan dinamik verilənlər
function heapExample() {
let arr = [1, 2, 3]; // Heap-də saxlanır
return arr;
}
// Stack: Funksiya çağırışlarında və lokal dəyişənlərdə istifadə edilir.
// Heap: Dinamik verilənlər və obyektlər üçün istifadə olunur.
            `,
            language: "javascript"
            
                    },
                    {
                        type: "text",
                        title: "Stack Yaddaşı",
                        content: "Stack yaddaşı, proqramın iş vaxtı ərzində idarə etdiyi lokal verilənlər və funksiyalar üçün istifadə olunan sürətli yaddaş sahəsidir. Yaddaşın idarə olunması sadədir, çünki verilənlər yığın kimi idarə edilir.",
                        lists: [
                            { list: "Stack Yaddaşı: LIFO (Last In, First Out) prinsipinə əsaslanır." },
                            { list: "Bu, verilənlərin son daxil olduğunda ilk çıxarılacağı deməkdir." },
                            { list: "Stack-də yalnız lokal dəyişənlər, funksiyaların parametrləri və yerli funksiya çağırışları saxlanır." },
                            { list: "Stack-in ölçüsü məhduddur və çox sayda funksiyanın çağırılması yığının dolmasına səbəb ola bilər." },
                            { list: "Stack-dən istifadə zamanı performans çox yüksəkdir." },
                            { list: "Yaddaşın sərbəst buraxılması avtomatik olaraq funksiyalar bitdikdə həyata keçirilir." }
                        ]
                    },
                    {
                        type: "text",
                        title: "Heap Yaddaşı",
                        content: "Heap yaddaşı, dinamik olaraq verilənlərin saxlanıldığı sahədir. Bu, daha sərbəst şəkildə verilənlər saxlamağa imkan verir, lakin idarə edilməsi daha mürəkkəbdir.",
                        lists: [
                            { list: "Heap Yaddaşı: Burada verilənlər dinamik olaraq ayrılır və sərbəst buraxılana qədər saxlanılır." },
                            { list: "Heap-də obyektlər, dizilər və digər kompleks verilənlər saxlanır." },
                            { list: "Heap-in ölçüsü daha böyükdür, amma idarə edilməsi daha mürəkkəbdir." },
                            { list: "Yaddaşın sərbəst buraxılması proqram tərəfindən edilən geri çağırmalarla həyata keçirilir." },
                            { list: "Heap, Stack-ə nisbətən daha yavaşdır, çünki verilənlərin yeri dəyişdirilə bilər və onun idarə olunması mürəkkəbdir." },
                            { list: "Heap-də verilənlər saxlanıldıqca, yaddaş sızıntısı (memory leak) riski arta bilər, əgər bu verilənlər düzgün şəkildə sərbəst buraxılmasa." }
                        ]
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

