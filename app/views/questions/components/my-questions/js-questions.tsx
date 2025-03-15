import { TQuestion } from "../../types"


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
                        content: `
async function getData() {
  // API'dən veri almaq üçün fetch istifadə edilir
  const response = await fetch("https://baseurl.api.com/todos/1");

  // Gələn JSON formatını oxumaq üçün json() metodu istifadə edilir
  const data = await response.json();

  // Alınan verini konsolda göstərmək
  console.log(data);
}

// Asinxron funksiyanı çağırır
getData();
                        `,
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
                        content: "Call Stack (çağrı yığını), proqramın işləmə zamanı funksiyaların çağırılma qaydasını izləyən bir məlumat strukturudur."
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Call Stack necə işləyir?",
                        content: "",
                        lists: [
                            {
                                list: "Funksiya çağırıldıqda, o, call stackə əlavə olunur (push olunur).",
                            },
                            {
                                list: "Funksiya icra edildikdə, onun daxilində başqa bir funksiya çağırılarsa, həmin funksiya da call stackə əlavə olunur.",
                            },
                            {
                                list: "Funksiya bitdikdə, o, call stackdən çıxarılır (pop olunur).",
                            },
                            {
                                list: "Stack boş qalana qədər bu proses davam edir.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        title: "Məsələn:",
                        content:
                            `
function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
    third();
}

function third() {
    console.log("Third function");
}

first();
                        
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Call Stack axışı belə olacaq:",
                        content: "",
                        lists: [
                            {
                                list: <span>1. <mark> first() </mark> çağırılır → Stack: <mark>[first]</mark></span>,
                            },
                            {
                                list: <span>2. <mark>first()</mark> içində <mark>second()</mark> çağırılır → Stack: <mark>[first, second]</mark></span>,
                            },
                            {
                                list: <span>3. <mark>second()</mark> içində <mark>third()</mark> çağırılır → Stack:  <mark>[first, second , third]</mark></span>,
                            },
                            {
                                list: <span> 4. <mark>third()</mark> bitir və stack-dən çıxarılır → Stack: <mark>[first, second]</mark></span>,
                            },
                            {
                                list: <span>5. <mark>second()</mark>  bitir və stack-dən çıxarılır → Stack: <mark>[first]</mark></span>,
                            },
                            {
                                list: <span>6. <mark>first()</mark> bitir və stack-dən çıxarılır → Stack: <mark>[]</mark> (boş qalır)</span>,
                            },

                        ]
                    },
                    {
                        type: "text",
                        header: "Call Stack və Stack Overflow",
                        content: "Əgər sonsuz rekursiya olarsa və stack dolarsa, Stack Overflow xətası yaranır:",
                    },
                    {
                        type: "code",
                        title: "",
                        content: `
function recursive() {
    recursive(); // Sonsuz dövrə
}
    

recursive(); // Stack Overflow xətası
                        
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        content: "Çünki call stackin ölçüsü məhduddur və sonsuz funksiyalar əlavə olunduqda proqram çökə bilər. Bu konsept JavaScript, Python, C++, Java və digər dillərdə eyni şəkildə işləyir.",
                    },
                ]
            },
            {
                id: 11,
                question: "Var, let və const arasındakı fərq nədir?",
                answer: [
                    {
                        type: "text",
                        content: "JavaScript-də var, let və const dəyişən elan etmək üçün istifadə olunur, lakin onların scope (görünürlük sahəsi), hoisting və dəyişdirilə bilmək baxımından fərqləri var."
                    },
                    {
                        type: "text",
                        header: "🔹 1. var",
                        title: "✅ Xüsusiyyətləri:",
                        content: "",
                        lists: [

                            {
                                list: <span > <strong>Function-scoped </strong> – yalnız funksiyalar daxilində məhdudlaşır.</span>,
                            },
                            {
                                list: <span> <strong>Hoisting</strong> yuxarı qaldırılır, amma <mark>undefined</mark> olur</span>,
                            },
                            {
                                list: <span> <strong>Redeclaration </strong> (yenidən elan) – eyni blokda təkrar elan edilə bilər</span>,
                            },
                            {
                                list: <span><strong>Reassignment </strong> – dəyəri dəyişdirilə bilər</span>,
                            },
                        ]
                    },
                    {
                        type: "code",
                        title: "✅ Məsələn:",
                        content: `

console.log(a); // undefined (hoisting)
var a = 10;
console.log(a); // 10

var a = 20; // Yenidən elan etmək mümkündür
console.log(a); // 20

                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        title: "❌ Problem: Blok ({}) daxilində elan olunsa belə, xaricdə görünə bilər:",
                        content: `
if (true) {
    var x = 5;
}
console.log(x); // 5 (blok içində elan olunsa da xaricdə mövcuddur)
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: "🔹 2. let",
                        title: "✅ Xüsusiyyətləri:",
                        content: "",
                        lists: [

                            {
                                list: <span> <strong>Block-scoped</strong> – { } daxilində elan olunduqda yalnız o blokda keçərlidir.</span>,
                            },
                            {
                                list: <span> <strong>Hoisting </strong> – yuxarı qaldırılır, amma inicializasiya olmadan istifadə oluna bilməz.</span>,
                            },
                            {
                                list: <span> <strong>Redeclaration </strong>  – eyni blokda yenidən elan oluna bilməz.</span>,
                            },
                            {
                                list: <span> <strong>Reassignment </strong>  – dəyəri dəyişdirilə bilər.</span>,
                            },
                        ]
                    },
                    {
                        type: "code",
                        title: "✅ Məsələn:",
                        content: `
 // console.log(b); // ReferenceError: b is not defined
let b = 15;
console.log(b); // 15

b = 25; // Dəyəşiklik etmək mümkündür
console.log(b); // 25

// let b = 30; // ❌ Error: Identifier 'b' has already been declared
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        title: "✅ Blok içində işləyir:",
                        content: `
if (true) {
    let y = 10;
    console.log(y); // 10
}
// console.log(y); // ❌ Error: y is not defined (blokdan kənarda işləmir)
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: "🔹 3. const",
                        title: "✅ Xüsusiyyətləri:",
                        content: "",
                        lists: [

                            {
                                list: <span> <strong>Block-scoped</strong>  – { } daxilində işləyir.</span>,
                            },
                            {
                                list: <span> <strong>Hoisting </strong> – yuxarı qaldırılır, amma inicializasiya olmadan istifadə oluna bilməz.</span>,
                            },
                            {
                                list: <span> <strong>Redeclaration </strong>  – təkrar elan edilə bilməz.</span>,
                            },
                            {
                                list: <span> <strong>Reassignment </strong>  – dəyişdirilə bilməz.</span>,
                            },
                        ]
                    },
                    {
                        type: "code",
                        title: "✅ Məsələn:",
                        content: `
const c = 30;
console.log(c); // 30

// c = 40; // ❌ Error: Assignment to constant variable
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        title: "✅ Amma obyekt və array-lərin içini dəyişmək olar:",
                        content: `
const obj = { name: "Ali" };
obj.name = "Veli"; // Dəyişmək mümkündür
console.log(obj); // { name: "Veli" }

// obj = { name: "Mehmet" }; // ❌ Error: Assignment to constant variable
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: "🎯 Hansını istifadə etməli?",
                        title: "✅ Tövsiyə:",
                        content: "",
                        lists: [

                            {
                                list: <span> <strong>Dəyəri dəyişməyəcəksə →</strong> <mark>const </mark>istifadə et.</span>,
                            },
                            {
                                list: <span> <strong>Dəyəri dəyişə bilərsə → </strong> <mark>let </mark> istifadə et.</span>,
                            },
                            {
                                list: <span> <mark>var</mark> <strong> istifadə etmə! </strong> (çünki <mark>hoisting</mark> və <mark>scope</mark> problemləri yaradır).</span>,
                            },
                        ]
                    },
                ]
            },
            {
                id: 12,
                question: "JavaScript-də this açar sözü necə işləyir?",
                answer: [
                    {
                        type: "text",
                        content: "JavaScript-də this, cari icra kontekstinə (execution context) əsasən fərqli obyektlərə istinad edir. this dəyəri, funksiyanın necə çağırıldığına görə müəyyən olunur."
                    },
                    {
                        type: "text",
                        header: "1️⃣ Global Context (Qlobal kontekst)",
                        content: "this qlobal mühitdə (window və ya globalThis) kontekstdən asılıdır.",
                    },
                    {
                        type: "code",
                        title: "Browser mühitində:",
                        content: `
console.log(this); // window (və ya globalThis)                        
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        title: "Node.js mühitində:",
                        content: `                        
console.log(this); // {} (boş obyekt)
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        header: "2️⃣ Object Method (Obyekt metodu)",
                        title: "Obyekt daxilində this, həmin obyektə istinad edir.",
                        content: `                        
const person = {
    name: "Ali",
    greet: function () {
        console.log(this.name);
    }
};

person.greet(); // "Ali"
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        content: " İzah: this.name obyektin name xüsusiyyətinə istinad edir."
                    },
                    {
                        type: "code",
                        header: "3️⃣ Function Call (Sadə funksiya çağırışı)",
                        title: "Normal funksiyada this, qlobal obyektə (window və ya globalThis) istinad edir.",
                        content: `                        
function show() {
    console.log(this);
}

show(); // Browser: window, Node.js: global
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        content: " Problem: this global obyekti göstərir, çünki show() funksiyası müstəqil çağırılıb."
                    },
                    {
                        type: "code",
                        header: "4️⃣ Arrow Function (Ox funksiyası)",
                        title: "Arrow function-lar this dəyərini dəyişmir, onu yuxarıdakı kontekstdən miras alır.",
                        content: `                        
const obj = {
    name: "Ali",
    greet: () => {
        console.log(this.name);
    }
};

obj.greet(); // undefined (çünki "this" global obyektə istinad edir)
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        content: " İzah: Arrow function-lar öz this-ini yaratmır, ətraf mühitdən (window və ya globalThis) miras alır."
                    },
                    {
                        type: "code",
                        header: "5️⃣ Constructor Function (Konstruktor funksiyası)",
                        title: "this, yeni yaradılan obyektə istinad edir.",
                        content: `                        
function Person(name) {
    this.name = name;
}

const ali = new Person("Ali");
console.log(ali.name); // "Ali"
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        content: " İzah: new açar sözü ilə çağırıldığı üçün this yeni obyektə istinad edir."
                    },
                    {
                        type: "text",
                        header: "6️⃣ Explicit Binding (call, apply, bind)",
                        title: "this-i dəyişmək üçün call(), apply(), bind() metodlarından istifadə edə bilərik.",
                        content: `                        
                        `,
                    },
                    {
                        type: "code",
                        header: "",
                        title: "✅ call()",
                        content: `                        
function sayHello() {
    console.log(this.name);
}

const user = { name: "Veli" };
sayHello.call(user); // "Veli"
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        header: "",
                        title: "✅ apply() (Eyni call(), amma argumentləri array kimi alır)",
                        content: `                        
function introduce(age) {
    console.log('$ {this.name} is $ {age} years old');
}

const person = { name: "Hasan" };
introduce.apply(person, [25]); // "Hasan is 25 years old"
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        header: "",
                        title: "✅ bind() (this-i sabit bağlayır və yeni funksiya qaytarır)",
                        content: `                        
const obj = { name: "Mehmet" };
const boundFunc = sayHello.bind(obj);
boundFunc(); // "Mehmet"
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        header: "7️⃣ Class və this",
                        title: "Class içində this, yaradılan obyektə aiddir.",
                        content: `                        
class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello, $ {this.name}");
    }
}

const user1 = new User("Cem");
user1.greet(); // "Hello, Cem"
                        `,
                        language: "javascript"
                    },
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
                        content: "Promise, asinxron əməliyyatların nəticəsini gözləyən (Gələcək qiymətini saxlayan) obyekt strukturdur. Hər bir asinxron funksiya geriyə 'Promise' qaytarır.Asinxron ənıliyyatları Handle etməyin bir yoludur. "
                    },
                    {
                        type: "text",
                        header: "",
                        title: "🔹 Promise-lərin əsas vəziyyətləri",
                        content: "",
                        lists: [
                            {
                                list: <span>1️⃣ <strong>Pending →</strong> Gözləmə mərhələsi (əməliyyat davam edir).</span>,
                            },
                            {
                                list: <span>2️⃣ <strong>Fulfilled →</strong> Əməliyyat uğurla tamamlandı. <mark>(resolve())</mark></span>,
                            },
                            {
                                list: <span> 3️⃣ <strong>Rejected →</strong> Əməliyyat uğursuz oldu. <mark>(reject())</mark></span>,
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "✅ Promise yaratmaq və istifadə etmək",
                        title: "",
                        content: `                        
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; // false olarsa, reject işləyəcək
        if (success) {
            resolve("Məlumat uğurla gəldi");
        } else {
            reject("Xəta baş verdi");
        }
    }, 2000);
});

myPromise
    .then(data => console.log("✅", data))  // Uğurlu nəticə
    .catch(error => console.log("❌", error)) // Xəta
    .finally(() => console.log("🔄 Əməliyyat bitdi"));
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Nəticə (2 saniyə sonra):",
                        content: `
✅ Məlumat uğurla gəldi
🔄 Əməliyyat bitdi
(Yox əgər success = false olsa, onda catch() işləyəcək.)                        
                        `,
                    },
                    {
                        type: "text",
                        header: "🔹 Promise-lər niyə vacibdir?",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "✅ Callback Hell problemini həll edir.",
                            },
                            {
                                list: "✅ Kodun daha oxunaqlı və idarəedilə bilən olmasını təmin edir.",
                            },
                            {
                                list: "✅ Asinxron əməliyyatları asılılıqla (chain) idarə etməyə imkan yaradır.",
                            },
                        ]
                    },
                ]
            },
            {
                id: 15,
                question: "JavaScript-də event delegasiyası necə işləyir?",
                answer: [
                    {
                        header:"✅ JavaScript-də Event Delegasiyası nədir və necə işləyir?",
                        type: "text",
                        content: "Event Delegation (Hadisə ötürülməsi) – bir valideyn elementi seçib, onun içində olan bütün övlad elementlərin hadisələrini (event-lərini) dinləməyə imkan verən texnikadır."
                    },
                    {
                        type: "text",
                        content: "Bu yanaşma, çoxlu elementlərə ayrıca event listener əlavə etməkdən daha effektivdir və daha az yaddaş istifadəsi təmin edir."
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Necə işləyir?",
                        content: "",
                        lists: [
                            {
                                list: "1️⃣ Event, valideyn elementə əlavə edilir.",
                            },
                            {
                                list: "2️⃣ Event, aşağıdakı elementlərə 'bubble' edərək çatır.",
                            },
                            {
                                list: "3️⃣ Target (event.target) istifadə edərək kliklənən konkret elementi tapmaq olur.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "✅ Misal: Event Delegasiyası ilə klik dinləmə",
                        title: "",
                        content: `                        
document.getElementById("list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log("Kliklənən element:", event.target.textContent);
    }
});
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        header: "",
                        title: "HTML:",
                        content: `                        
<ul id="list">
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
</ul>
                        `,
                        language: "html"
                    },
                    {
                        type: "text",
                        header: "",
                        title: " İşləmə qaydası:",
                        content: "",
                        lists: [
                            {
                                list: "Əgər bir <li> kliklənərsə, event.target həmin <li>-ni tapır və məlumatı göstərir.",
                            },
                            {
                                list: "Amma biz hər <li>-yə ayrıca addEventListener əlavə etməmişik, sadəcə valideyn <ul>-yə əlavə etmişik",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "🔥 Event Delegasiyası niyə vacibdir?",
                        content: "",
                        lists: [
                            {
                                list: "✅ Daha az event listener → Performansı artırır.",
                            },
                            {
                                list: "✅ Dinamik elementlər üçün işləyir → Yeni <li> əlavə edilsə də, event işləyəcək.",
                            },
                            {
                                list: "✅ Daha təmiz və qısa kod → Hər bir elementə ayrı event yazmağa ehtiyac yoxdur.",
                            },
                        ]
                    },
                  
                ]
            },
            {
                id: 16,
                question: "Function declaration, expression və İİFE arasındakı fərqlər.",
                answer: [
                     {
                        type: "text",
                        header: "✅ Function Declaration, Function Expression və IIFE fərqləri",
                        title: "",
                        content: "JavaScript-də funksiyalar 3 əsas üsulla elan edilə bilər:",
                        lists: [
                            {
                                list: <span>1️⃣ <strong>Function Declaration</strong> (Funksiya elan etmə)</span>,
                            },
                            {
                                list: <span>2️⃣ <strong> Function Expression</strong> (Funksiya ifadəsi)</span>,
                            },
                            {
                                list: <span>3️⃣ <strong>IIFE (Immediately Invoked Function Expression)</strong> (Dərhal icra olunan funksiya)</span>,
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "1️⃣ Function Declaration",
                        title: "Adi funksiya elan etmə üsuludur və hoisting (yuxarı qaldırma) ilə işləyir.",
                        content: `                        
function sayHello() {
    console.log("Salam!");
}

sayHello(); // ✅ Çıxış: Salam!
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: "",
                        title: " Xüsusiyyətlər:",
                        content: "",
                        lists: [
                            {
                                list: "Hoisting var → Funksiya çağırışı, elan edilmədən əvvəl işləyir.",
                            },
                            {
                                list: "Adı olan funksiyadır.",
                            },
                            {
                                list: "Global scope-da mövcuddur.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "2️⃣ Function Expression",
                        title: "Funksiya bir dəyişənə təyin edilir. Hoisting yoxdur.",
                        content: `                        
const sayHello = function() {
    console.log("Salam!");
};

sayHello(); // ✅ Çıxış: Salam!
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Xüsusiyyətlər:",
                        content: "",
                        lists: [
                            {
                                list: "Hoisting yoxdur → Funksiya elan edilmədən əvvəl çağırılsa, xəta alarıq.",
                            },
                            {
                                list: "Anonim və ya adlı ola bilər.",
                            },
                            {
                                list: "Funksiyanı dəyişən kimi istifadə etmək mümkündür.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: " Anonim Funksiya Expression (adı yoxdur):",
                        content: `                        
const sayHello = function() {
    console.log("Salam!");
};
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Adlı Funksiya Expression (adı var):",
                        content: `                        
const sayHello = function greet() {
    console.log("Salam!");
};
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        content: "🔹 Fərq: Adlı function expression öz daxilində self-reference üçün istifadə edilə bilər."
                    },
                    {
                        type: "code",
                        header: "3️⃣ IIFE (Immediately Invoked Function Expression)",
                        title: "Yazıldığı anda icra olunan funksiyadır.",
                        content: `                        
(function() {
    console.log("Bu funksiya dərhal işləyir!");
})();
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Xüsusiyyətlər:",
                        content: "",
                        lists: [
                            {
                                list: "Dərhal icra olunur (öz-özünə çağırılır).",
                            },
                            {
                                list: "Hoisting yoxdur.",
                            },
                            {
                                list: "Global scope çirklənməsin deyə istifadə olunur.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Arrow Function ilə IIFE:",
                        content: `                        
(() => console.log("IIFE işləyir!"))();
                        `,
                        language: "javascript"
                    },
                ]
            },
            {
                id: 17,
                question: "Arrow functions nədir və adi funksiyalardan nə ilə fərqlənir?",
                answer: [
                    {
                        type: "text",
                        header: "",
                        title: "",
                        content: "JavaScript-də iki əsas funksiya tipi var:",
                        lists: [
                            {
                                list: "1️⃣ Regular Functions (Ənənəvi funksiyalar)",
                            },
                            {
                                list: "2️⃣ Arrow Functions (=>)",
                            },
                        ]
                    },
                    {
                        type: "text",
                        content: "Hər ikisi eyni məqsəd üçün istifadə edilir, amma bəzi vacib fərqlər var."
                    },
                    {
                        type: "text",
                        header: "1️⃣ Regular Functions (Ənənəvi Funksiyalar)",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "function açar sözü ilə elan edilir.",
                            },
                            {
                                list: "Hoisting (yuxarı qaldırma) dəstəklənir.",
                            },
                            {
                                list: "this dinamik işləyir → çağırıldığı yerə görə dəyişir.",
                            },
                            {
                                list: "Arguments obyektinə malikdir.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: " Misal:",
                        content: `                        
function sayHello(name) {
    console.log("Salam, " + name);
}

sayHello("Ali"); // ✅ Çıxış: Salam, Ali
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: "2️⃣ Arrow Functions (=>)",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "Daha qısa sintaksis.",
                            },
                            {
                                list: "Hoisting yoxdur → Funksiya elan edilmədən əvvəl çağırmaq olmaz.",
                            },
                            {
                                list: "this bağlanmış (lexical) olur → çağırıldığı yerə görə yox, funksiyanın yazıldığı yerə görə müəyyən edilir.",
                            },
                            {
                                list: "arguments obyekti yoxdur.",
                            },
                                                
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal:",
                        content: `                        
const sayHello = (name) => console.log("Salam, " + name);

sayHello("Ali"); // ✅ Çıxış: Salam, Ali
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Tək parametr olduqda mötərizə ( ) tələb olunmur:",
                        content: `                        
const square = x => x * x;

console.log(square(5)); // ✅ Çıxış: 25
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        header: "",
                        title: " Əgər {} istifadə edilərsə, return açar sözü tələb olunur:",
                        content: `                        
const multiply = (a, b) => { 
    return a * b; 
};
console.log(multiply(3, 4)); // ✅ Çıxış: 12
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Tək sətrlik arrow function (return avtomatikdir):",
                        content: `                        
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // ✅ Çıxış: 12
                        `,
                        language: "javascript"
                    },
                 
                ]
            },
            {
                id: 18,
                question: "JavaScript-də forEach və map metodları arasındakı fərq nədir?",
                answer: [
                    {
                        type: "text",
                        content: "JavaScript-də həm forEach, həm də map metodları array üzərində dövr etmək üçün istifadə edilir, amma aralarında əsas fərqlər var."
                    },
                    {
                        type: "text",
                        header: "1️⃣ forEach() metodu",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "Dövr üçün istifadə olunur, amma yeni array yaratmır.",
                            },
                            {
                                list: "Geri dəyər (return) qaytarmır.",
                            },
                            {
                                list: "Dəyişikliklər mövcud array-də edilir.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal:",
                        content: `                        
const numbers = [1, 2, 3, 4];

numbers.forEach(num => console.log(num * 2)); 
// ✅ Çıxış: 2, 4, 6, 8

console.log(numbers); 
// ✅ Əsas array dəyişmir: [1, 2, 3, 4]
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: "2️⃣ map() metodu",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "Yeni array yaradır və dəyəri qaytarır.",
                            },
                            {
                                list: "Dəyişikliklər orijinal array-i dəyişmir.",
                            },
                            {
                                list: "Əsasən array-ləri çevirmək üçün istifadə edilir.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: " Misal:",
                        content: `                        
const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); 
// ✅ Çıxış: [2, 4, 6, 8]

console.log(numbers); 
// ✅ Əsas array dəyişmir: [1, 2, 3, 4]
                        `,
                        language: "javascript"
                    },
                ]
            },
            {
                id: 19,
                question: "DRY, KISS və YAGNI prinsipləri nədir?",
                answer: [
                    {
                        type: "text",
                        header: "",
                        content: "Bunlar yazılan kodun keyfiyyətini artırmaq üçün istifadə edilən proqramlaşdırma prinsipləridir."
                    },
                    {
                        type: "text",
                        header: "1️⃣ DRY (Don't Repeat Yourself - Özünü Təkrarlama)",
                        title: "",
                        content: "Məqsəd: Kod təkrarlanmasının qarşısını almaq.",
                        lists: [
                            {
                                list: "Eyni kodu fərqli yerlərdə yazmaq əvəzinə, onu bir funksiya və ya modul halına gətirib təkrar istifadə etməlisən.",
                            },
                            {
                                list: <span>Düzəliş və inkişaf etdirməni asanlaşdırır.</span>,
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: " Pis nümunə (təkrarlanan kod):",
                        content: `                        
function getUserFullName(user) {
    return user.firstName + " " + user.lastName;
}

const user1 = { firstName: "Ali", lastName: "Həsənov" };
const user2 = { firstName: "Elvin", lastName: "Quliyev" };
// ❌ DRY prinsipi pozulur
console.log(user1.firstName + " " + user1.lastName);
// ❌ DRY prinsipi pozulur 
console.log(user2.firstName + " " + user2.lastName); 
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Düzgün nümunə (DRY tətbiq olunub):",
                        content: `                        
function getUserFullName(user) {
    return user.firstName + " " + user.lastName;
}
// ✅ Ali Həsənov
console.log(getUserFullName(user1)); 
// ✅ Elvin Quliyev
console.log(getUserFullName(user2)); 
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: "2️⃣ KISS (Keep It Simple, Stupid - Sadə Saxla)",
                        title: "",
                        content: "Məqsəd: Kodu mümkün qədər sadə və başa düşülən saxlamaq.",
                        lists: [
                            {
                                list: "Kod nə qədər sadə olarsa, o qədər asan oxunur və inkişaf etdirilir.",
                            },
                            {
                                list: <span>Lazımsız mürəkkəblikdən qaçmaq lazımdır.</span>,
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Pis nümunə (Gərəksiz mürəkkəblik):",
                        content: `                        
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Düzgün nümunə (Sadə və effektiv yazılmış kod):",
                        content: `                        
const isEven = num => num % 2 === 0;
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: " 3️⃣ YAGNI (You Aren't Gonna Need It - Sənə Lazım Olmayacaq)",
                        title: "",
                        content: "Məqsəd: İhtiyac olmayan funksiyaları və xüsusiyyətləri əlavə etməmək.",
                        lists: [
                            {
                                list: "İrəlidə lazım ola bilər deyə, lazımsız kod yazmamaq lazımdır.",
                            },
                            {
                                list: <span>Sadəcə lazım olan funksionallığı yazmaq və ehtiyac yarananda əlavə etmək daha yaxşıdır.</span>,
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Pis nümunə (İstifadə olunmayan kod):",
                        content: `                        
function calculateSum(a, b) {
    let extraFeature = a * b; 
    return a + b;
}
                        `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Düzgün nümunə (Yalnız lazım olanı yazmaq):",
                        content: `                        
function calculateSum(a, b) {
    return a + b;
}
                        `,
                        language: "javascript"
                    },
                ]
            },
            {
                id: 20,
                question: "Generation function nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Generator funksiyalar `yield` açar sözü ilə icranı dayandırıb davam etdirə bilən funksiyalardır."
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Generator Function Xüsusiyyətləri",
                        content: "",
                        lists: [
                            {
                                list: <span>✅ <mark>function*</mark> açar sözü ilə yazılır.</span>,
                            },
                            {
                                list: <span>✅ <mark>yield</mark> açar sözü istifadə edilir.</span>,
                            },
                            {
                                list: <span>✅ Funksiya tam icra olunmur, dayandırılıb davam etdirilə bilər.</span>,
                            },
                            {
                                list: <span>✅ <mark>next()</mark> metodu ilə idarə olunur.</span>,
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal 1: Sadə Generator Function",
                        content: `                        
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = numberGenerator();
// { value: 1, done: false }
console.log(generator.next()); 
// { value: 2, done: false }
console.log(generator.next());
 // { value: 3, done: false } 
console.log(generator.next());
 // { value: undefined, done: true }
console.log(generator.next());
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: "",
                        title: "",
                        content: "İzah:",
                        lists: [
                            {
                                list: <span>yield ifadəsi funksiyanı dayandırır və dəyəri qaytarır.</span>,
                            },
                            {
                                list: <span>next() metodu çağırılana qədər növbəti hissə icra olunmur.</span>,
                            },
                            {
                                list: "Son next() çağırıldıqda { value: undefined, done: true } qaytarır.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal 2: Limitsiz Sayğac (İnfinite Generator)",
                        content: `                        
function* counter() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

const count = counter();

console.log(count.next().value); // 1
console.log(count.next().value); // 2
console.log(count.next().value); // 3
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: "",
                        title: "",
                        content: "İzah:",
                        lists: [
                            {
                                list: "while (true) dövrü ilə limitsiz generator yaradılır.",
                            },
                            {
                                list: <span>Hər dəfə next() çağırıldıqda yeni dəyər qaytarır.</span>,
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal 3: Array üzərində Generator istifadə etmək",
                        content: `                        
function* arrayIterator(arr) {
    for (let item of arr) {
        yield item;
    }
}

const iterator = arrayIterator(["Apple", "Banana", "Cherry"]);
// Apple
console.log(iterator.next().value);
// Banana 
console.log(iterator.next().value);
 // Cherry 
console.log(iterator.next().value);
  // true (artıq element yoxdur)
console.log(iterator.next().done);
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        header: "",
                        title: "",
                        content: "İzah:",
                        lists: [
                            {
                                list: "Array üzərində for...of dövrü ilə generator yaradılır.",
                            },
                            {
                                list: <span>yield sayəsində hər dəfə bir element qaytarılır.</span>,
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "🔥 Generator Function nə üçün istifadə olunur?",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "✅ Asinxron proqramlaşdırmada (async/await və Promise ilə birlikdə)",
                            },
                            {
                                list: "✅ Limitsiz (infinite) dövrlər qurmaq üçün",
                            },
                            {
                                list: "✅ Məlumatları tək-tək işləmək üçün (lazy evaluation)",
                            },
                            {
                                list: "✅ Iterator pattern yaratmaq üçün",
                            },
                        ]
                    },
                ]
            },
            {
                id: 21,
                question: "AJAX nədir və necə işləyir?",
                answer: [
                    {
                        type: "text",
                        content: "AJAX, səhifəni yeniləmədən serverdən asinxron məlumat almağa imkan verən texnologiyadır."
                    },
                    {
                        type: "text",
                        title: " AJAX-in əsas xüsusiyyəti: Saytı yeniləmədən (page refresh olmadan) server ilə əlaqə saxlaya bilməsidir.",
                        content: "🛠 Əsas komponentləri:",
                        lists: [
                            {
                                list: "✅ XMLHttpRequest (köhnə üsul)",
                            },
                            {
                                list: "✅ fetch() API (yenilənmiş üsul)",
                            },
                            {
                                list: "✅ Promise və async/await ilə istifadə",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "AJAX necə işləyir?",
                        content: "",
                        lists: [
                            {
                                list: "1️⃣ İstifadəçi bir əməliyyat edər (məsələn, düyməyə basar).",
                            },
                            {
                                list: "2️⃣ AJAX serverə sorğu göndərər (XMLHttpRequest və ya fetch()).",
                            },
                            {
                                list: "3️⃣ Server cavab qaytarar (JSON, XML, HTML və s.).",
                            },
                            {
                                list: "4️⃣ JavaScript alınan cavabı emal edər.",
                            },
                            {
                                list: "5️⃣ Səhifə yenilənmədən məlumat göstərilər.",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "AJAX hansı formatlarla işləyir?",
                        content: "",
                        lists: [
                            {
                                list: "✅ JSON (ən çox istifadə edilən)",
                            },
                            {
                                list: "✅ XML (köhnə format)",
                            },
                            {
                                list: "✅ HTML",
                            },
                            {
                                list: "✅ Text",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Nəticə:",
                        content: "",
                        lists: [
                            {
                                list: "✅ AJAX saytı yeniləmədən məlumat almağa və göndərməyə imkan yaradır.",
                            },
                            {
                                list: "✅ fetch() API və async/await daha yeni və sadə üsullardır.",
                            },
                            {
                                list: "✅ AJAX real-time interaktiv veb tətbiqləri üçün vacibdir.",
                            },
                        ]
                    },
                ]
            },
            {
                id: 22,
                question: "__proto__ nədir və necə işləyir?",
                answer: [
                    {
                        type: "text",
                        content: "__proto__, hər bir obyektin prototip zəncirini (prototype chain) göstərən xüsusi bir xassəsidir. Bunun vasitəsilə bir obyektin başqa bir obyektin prototipindən (prototype) miras almasını təmin edirik."
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Adi obyektlərdən yaradılan obyektin __proto__ -u Parentinə bərabərdir",
                        content: `                        
let a = {}
let b = Object.create(a)
b.__proto__===a                       `,
                        language: "javascript"
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Constructor və Class obyektlərindən yarananlar isə Parentin Prototypesinə bərabərdir",
                        content: `                        
function Person(name) {
    this.name = name;
}
let Doctor = new Person("Urfan")
Doctor.__proto__===Person.prototype                           `,
                        language: "javascript"
                    },
                ]
            },
            {
                id: 23,
                question: "Prototype nədir?",
                answer: [
                    {
                        type: "text",
                        content: "JavaScript-də prototype, obyektlərin xüsusiyyətlərini və metodlarını paylaşmaq üçün istifadə olunan bir mexanizmdir. JavaScript obyekt yönlü proqramlaşdırmanı prototype-based (prototaip əsaslı) bir model ilə həyata keçirir.",
                        lists: [
                            {
                                list: "Hər bir funksiya (constructor function daxil olmaqla) avtomatik olaraq prototype adlı bir xassəyə sahib olur.",
                            },
                            {
                                list: "Bu prototype vasitəsilə yaradılan obyektlər eyni metod və xüsusiyyətləri paylaşa bilər.",
                            },
                            {
                                list: "Prototype chain (prototaip zənciri) vasitəsilə obyektlər, özündə olmayan xassələri və metodları üst səviyyədəki obyektlərdən miras ala bilər.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal",
                        content: `                        
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log("Salam, mənim adım " + this.name);
};

const user1 = new Person("Eli");
const user2 = new Person("Leyla");

user1.sayHello(); // Salam, mənim adım Eli
user2.sayHello(); // Salam, mənim adım Leyla
                        `,
                        language: "javascript"
                    },
                    {
                        type: "text",
                        content: "Burada sayHello metodu Person.prototype üzərində yaradıldığı üçün bütün Person obyektləri bu metodu paylaşır."
                    },
                    {
                        type: "text",
                        header: "",
                        title: "",
                        content: "Prototype yalniz Function obyektlərində olan xüsusi propertidir",
                       
                    },
                    {
                        type: "text",
                        header: "",
                        title: "",
                        content: "Prototype özü bir obyektdir və iki propertisi var ",
                        lists: [
                            {
                                list: "constructor",
                            },
                            {
                                list: "__proto__",
                            },
                        ]
                    },
                    {
                        type: "text",
                        content: "Promise də bir Constructor funksiyadır və onun da prototype-i var. Bütün Promise obyektləri Promise prototype-dən miras alır, buna görə də hər bir Promise obyekti then(), catch() və finally() metodlarından istifadə edə bilər"
                    },
                    {
                        type: "text",
                        content: "Global obyekti də funksiya kimi çağırmaq olur, bu o deməkdir ki onun da prototype-i var."
                    },
                    {
                        type: "text",
                        content: "Constuctor funksiyanın prototype-ə nə əlavə etsək, avtmatik olaraq ondan yaranan bütün obyektlərə əlavə olur."
                    },
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

