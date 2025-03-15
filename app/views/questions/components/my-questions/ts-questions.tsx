import { TQuestion } from "../../types"

export const TSQuestions = {
    questions(): TQuestion[] {
        return [
            {
                id: 1,
                question: "TypeScript-də interface ilə type annotation arasındakı fərqlər.",
                answer: [
                    {
                        type: "text",
                        content: "TypeScript-də interface və type annotation çox oxşar məqsədlər üçün istifadə olunsa da, aralarında bəzi mühüm fərqlər var. Gəlin, onların arasındakı fərqləri detallı şəkildə araşdıraq."
                    },
                    {
                        type: "text",
                        header: "1. Oxşarlıqlar",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "Hər ikisi obyektin strukturunu təyin etmək üçün istifadə olunur.",
                            },
                            {
                                list: "Hər ikisi miras alma və birlikdə istifadə olunma imkanlarına malikdir.",
                            },
                            {
                                list: "Hər ikisi readonly, optional properties kimi xüsusiyyətləri dəstəkləyir.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal:",
                        content: `                        
// Interface ilə obyektin strukturunun təyin edilməsi
interface User {
  name: string;
  age: number;
}

const user1: User = { name: "Ali", age: 25 };

// Type ilə obyektin strukturunun təyin edilməsi
type UserType = {
  name: string;
  age: number;
};

const user2: UserType = { name: "Leyla", age: 22 };
                        `,
                        language: "typescript"
                    },
                    {
                        type: "text",
                        header: "2. Fərqlər",
                        title: "2.1. Interface genişləndirilə bilər (extend), Type isə birləşdirilə bilər (union & intersection)",
                        content: "",
                        lists: [
                            {
                                list: "interface extends açar sözü ilə digər interfeyslərdən miras ala bilər.",
                            },
                            {
                                list: "type isə & (intersection) operatoru ilə yeni strukturlar yarada bilər.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal: interface extends",
                        content: `                        
interface Person {
  name: string;
}

interface Employee extends Person {
  position: string;
}

const emp: Employee = { name: "Kamran", position: "Developer" };
                        `,
                        language: "typescript"
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal: type & intersection",
                        content: `                        
type Person = {
  name: string;
};

type Employee = Person & {
  position: string;
};

const emp: Employee = { name: "Kamran", position: "Developer" };
                        `,
                        language: "typescript"
                    },
                    {
                        type: "text",
                        content:" Burada hər ikisi eyni nəticəni verir, lakin interface extends daha aydın olur."
                    },
                    {
                        type: "text",
                        header: "",
                        title: "2.2. Interface implements ilə istifadə edilə bilər",
                        content: "",
                        lists: [
                            {
                                list: "interface siniflər (class-lar) tərəfindən implements açar sözü ilə istifadə edilə bilər.",
                            },
                            {
                                list: <span>type isə implements üçün uyğun deyil.</span>,
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal:",
                        content: `                        
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    console.log("Woof!");
  }
}

const myDog = new Dog("Rex");
myDog.makeSound(); // Woof!
                        `,
                        language: "typescript"
                    },
                    {
                        type: "text",
                        content:"Burada Animal interfeysini sinif (class) implements edərək tərif edir. type bunu edə bilmir."
                    },
                    {
                        type: "text",
                        header: "",
                        title: "2.3. Type daha çevikdir: Union və Tuple dəstəyi var",
                        content: "",
                        lists: [
                            {
                                list: "type yalnız obyektlər üçün deyil, həm də union (birlik) və tuple tipli verilənlər üçün istifadə edilə bilər.",
                            },
                            {
                                list: "interface isə yalnız obyekt tiplərini təyin etmək üçündür.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal: Union Type",
                        content: `                        
type Status = "success" | "error" | "loading"; // Union
let currentStatus: Status = "success";
                        `,
                        language: "typescript"
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal: Tuple Type",
                        content: `                        
type Point = [number, number];
const coord: Point = [10, 20]; // Tuple
                        `,
                        language: "typescript"
                    },
                    {
                        type: "text",
                        header: "",
                        title: "2.4. Interface avtomatik birləşdirilə bilər, Type isə yox",
                        content: "",
                        lists: [
                            {
                                list: "interface dəfələrlə elan edilərsə, TypeScript onları avtomatik birləşdirir (declaration merging).",
                            },
                            {
                                list: "type isə bu xüsusiyyəti dəstəkləmir.",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal: Declaration Merging (interface)",
                        content: `                        
     interface Car {
  brand: string;
}

interface Car {
  year: number;
}

const myCar: Car = { brand: "BMW", year: 2023 }; // İki interface birləşdirildi
                   `,
                        language: "typescript"
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Bu xüsusiyyət type üçün mümkün deyil:",
                        content: `                        
type Car = {
  brand: string;
};

type Car = {  // XƏTA: Duplicate identifier 'Car'
  year: number;
};
                        `,
                        language: "typescript"
                    },
                ]
            },
            {
                id: 2,
                question: "Union type nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Union type, bir dəyərin bir neçə fərqli növdən biri olmasına icazə verir. Məsələn, `let value: string | number;` burada `value` həm string, həm də number ola bilər."
                    },
                    {
                        type: "code",
                        content: "let value: string | number;",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 3,
                question: "Unknown type nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Unknown type, TypeScript-də hər hansı bir növü təmsil etmək üçün istifadə olunur, amma ona görə dəyərlərin işlənməsi müəyyən növü təhlükəsiz şəkildə təyin etmədən mümkün deyil. Məsələn, `let value: unknown;` sonra bu dəyər yoxlanmalıdır."
                    },
                    {
                        type: "code",
                        content: "let value: unknown;",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 4,
                question: "Enum type nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Enum, müəyyən dəyərləri adlarla təmsil etməyə imkan verən bir xüsusiyyətdir. Məsələn, `enum Color { Red, Green, Blue };` burada `Color.Red` dəyəri 0 olacaq."
                    },
                    {
                        type: "code",
                        content: "enum Color { Red, Green, Blue };",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 5,
                question: "Generic type nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Generic type, funksiyalar və ya siniflər üçün növü parametr olaraq keçirməyə imkan verən bir xüsusiyyətdir. Bu, kodun daha ümumi və yenidən istifadə oluna bilər olmasına kömək edir. Məsələn, `function identity<T>(arg: T): T { return arg; }`"
                    },
                    {
                        type: "code",
                        content: "function identity<T>(arg: T): T { return arg; }",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 6,
                question: "Readonly type nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Readonly type, obyektin və ya massivlərin dəyişdirilməməsini təmin edir. Məsələn, `readonly` təyin edildikdə, dəyərlər yalnız oxuna bilər və dəyişdirilə bilməz."
                    },
                    {
                        type: "code",
                        content: "readonly number[];",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 7,
                question: "Never type nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Never type, heç bir dəyər qaytarmayan funksiyalar üçün istifadə olunur. Məsələn, `throw new Error()` kimi kodlarda istifadə edilir. Bu, funksiyanın heç vaxt nəticə qaytarmadığını göstərir."
                    },
                    {
                        type: "code",
                        content: "function throwError(message: string): never { throw new Error(message); }",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 8,
                question: "Tuple type nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Tuple type, fərqli növ elementlərdən ibarət sıralanmış verilənlər toplusudur. Məsələn, `let x: [string, number] = ['hello', 10];` burada birinci element `string`, ikinci element isə `number` olmalıdır."
                    },
                    {
                        type: "code",
                        content: "let x: [string, number] = ['hello', 10];",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 9,
                question: "Optional property nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Optional property, obyektin xüsusiyyətləri arasında, müəyyən xüsusiyyətlərin təyin edilməməsinə icazə verir. Məsələn, `interface Person { name: string; age?: number; }` burada `age` xüsusiyyəti optionaldır."
                    },
                    {
                        type: "code",
                        content: "interface Person { name: string; age?: number; }",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 10,
                question: "Partial type nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Partial type, bir obyektin bütün xüsusiyyətlərinin optional olmasını təmin edir. Məsələn, `type PartialPerson = Partial<Person>;` burada `Person` obyektinin hər hansı bir xüsusiyyəti olmadan istifadə oluna bilər."
                    },
                    {
                        type: "code",
                        content: "type PartialPerson = Partial<Person>;",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 11,
                question: "Readonly array nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Readonly array, dəyişdirilməyən massivlər üçün istifadə olunur. Məsələn, `readonly number[]` tipində massiv elementləri yalnız oxuna bilər, dəyişdirilə bilməz."
                    },
                    {
                        type: "code",
                        content: "readonly number[];",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 12,
                question: "Mapped types nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Mapped types, mövcud bir tip üzərində əməliyyatlar aparmağa və yeni tiplər yaratmağa imkan verir. Məsələn, `type ReadOnly<T> = { readonly [P in keyof T]: T[P] };`"
                    },
                    {
                        type: "code",
                        content: "type ReadOnly<T> = { readonly [P in keyof T]: T[P] };",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 13,
                question: "TypeScript inference nədir?",
                answer: [
                    {
                        type: "text",
                        content: "TypeScript inference, kompilyatorun verilənlərə uyğun tipi avtomatik olaraq təyin etməsidir. Məsələn, `let num = 10;` burada TypeScript avtomatik olaraq `num` tipini `number` olaraq təyin edir."
                    },
                    {
                        type: "code",
                        content: "let num = 10;",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 14,
                question: "TypeScript declare nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Declare, TypeScript-də bir dəyişənin və ya funksiyanın tipini bildirmək üçün istifadə olunur. Bu, xüsusilə xarici kitabxanalarla işləyərkən istifadə edilir. Məsələn, `declare const myLibrary: any;`"
                    },
                    {
                        type: "code",
                        content: "declare const myLibrary: any;",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 15,
                question: "Function overloads nədir?",
                answer: [
                    {
                        type: "text",
                        content:"Function Overloading (Funksiya aşırı yüklənməsi) TypeScript-də eyni adda, amma fərqli parametrlərlə işləyən bir neçə funksiya elan etməyə imkan verən bir xüsusiyyətdir."
                    },
                    {
                        type: "text",
                        header: "Function Overloading necə işləyir?",
                        title: "",
                        content: "TypeScript-də function overloads üç əsas hissədən ibarətdir:",
                        lists: [
                            {
                                list: "1. Overload imzaları (function signatures)",
                            },
                            {
                                list: "2. Əsas funksiya (implementation)",
                            },
                            {
                                list: "3. Return dəyərləri (nəticələr)",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal:",
                        content: `                        
// 1. Overload imzaları
function getInfo(name: string): string;
function getInfo(age: number): number;
function getInfo(name: string, age: number): string;

// 2. Əsas funksiya (implementation)
function getInfo(param1: string | number, param2?: number): string | number {
    if (typeof param1 === "string" && param2 === undefined) {
        return 'Ad: $ {param1}';
    } else if (typeof param1 === "number") {
        return param1; // Yaşı qaytarır
    } else if (typeof param1 === "string" && typeof param2 === "number") {
        return 'Ad: $ {param1}, Yaş: $ {param2}';
    }
    return "Yanlış məlumat";
}

// 3. Funksiyanı fərqli yollarla çağırmaq
console.log(getInfo("Eli"));         // Ad: Eli
console.log(getInfo(25));            // 25
console.log(getInfo("Leyla", 30));   // Ad: Leyla, Yaş: 30
                        `,
                        language: "typescript"
                    },
                ]
            },
            {
                id: 16,
                question: "Static initialization block nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Static Initialization Block (static {}), ES2022 (ECMAScript 2022) versiyası ilə JavaScript və TypeScript-ə əlavə olunmuş bir xüsusiyyətdir. Bu blok, sinifin (class) statik dəyişənlərini (static properties) və ya statik loqaritmlərini təyin etmək üçün istifadə olunur."
                    },
                    {
                        type: "text",
                        header: "1. Static Initialization Block-un əsas məqsədi",
                        title: "",
                        content: "",
                        lists: [
                            {
                                list: "✅ Statik dəyişənlərə kompleks dəyərlər vermək",
                            },
                            {
                                list: "✅ Statik dəyişənlər arasında əlaqə qurmaq",
                            },
                            {
                                list: "✅ Sinif yüklənərkən bir dəfə işləyən loqaritmlər icra etmək",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "2. Syntax və İş Prinsipi",
                        title: "",
                        content: `                        
class Example {
    static value: number;
    
    // Static Initialization Block
    static {
        console.log("Static block işləyir...");
        Example.value = Math.random() * 100; // Random dəyər təyin edirik
    }
}

console.log(Example.value); // Məsələn: 42.3456789
                        `,
                        language: "typescript"
                    },
                    {
                        type: "text",
                        header: "",
                        title: "",
                        content: "İş prinsipi:",
                        lists: [
                            {
                                list: "Sinif yüklənərkən (class ilk dəfə çağırıldıqda), static {} bloku bir dəfə icra olunur.",
                            },
                            {
                                list: "Statik dəyişənlər kompleks məntiq əsasında təyin edilə bilər.",
                            },
                            {
                                list: "Bu blok sinif nümunəsi (instance) yaradılmadan da işləyir!",
                            },
                        ]
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Static Initialization Block (static {}) nə üçün istifadə edilir?",
                        content: "Əgər TypeScript kodunda bir sinifin statik dəyişənlərini tək blokda təyin etmək istəyirsənsə, static {} ən yaxşı həllərdən biridir! 🚀",
                        lists: [
                            {
                                list: "✅ Kompleks statik dəyişənlər üçün",
                            },
                            {
                                list: "✅ Mürəkkəb loqaritmlər icra etmək üçün",
                            },
                            {
                                list: "✅ Daha oxunaqlı və modulyar kod yazmaq üçün",
                            },
                            {
                                list: "✅ Əlavə funksiyalar (initialize()) yazmaqdan qaçmaq üçün",
                            },
                        ]
                    },
                ]
            },
            {
                id: 17,
                question: "Void funksiyalar nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Void funksiyalar heç bir dəyər qaytarmayan funksiyalardır. Məsələn, `function log(message: string): void { console.log(message); }`"
                    },
                    {
                        type: "code",
                        content: "function log(message: string): void { console.log(message); }",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 18,
                question: "Generics və inheritance arasındakı fərq nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Generics, funksiyalar və siniflər üçün növ parametrləri istifadə etməyə imkan verərkən, inheritance daha çox mövcud siniflərin genişləndirilməsinə və dəyişdirilməsinə yönəlir. Generics daha çevik və təkrarlanabilir kod yaratmağa kömək edir."
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Generics istifadə etməli olduğun hallar:",
                        content: "",
                        lists: [
                            {
                                list: "✅ Eyni kodu fərqli tiplərlə işlətmək lazımdırsa",
                            },
                            {
                                list: "✅ Bir obyektin və ya sinifin spesifik tipini saxlamadan işləmək istəyirsənsə",
                            },
                            {
                                list: "✅ Interfeys və funksiyalarla istifadə etmək istəyirsənsə",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal: Fərqli tip məlumatlarla işləyən Stack (yığılım) sinifi",
                        content: `                        
class Stack<T> {
    private items: T[] = [];

    push(item: T) {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // 20
                        `,
                        language: "typescript"
                    },
                    {
                        type: "text",
                        header: "",
                        title: "Inheritance istifadə etməli olduğun hallar:",
                        content: "",
                        lists: [
                            {
                                list: "✅ Bir sinfin xüsusiyyətlərini genişləndirmək lazımdırsa",
                            },
                            {
                                list: "✅ Obyektlər arasında əlaqə qurmaq istəyirsənsə",
                            },
                            {
                                list: "✅ Polymorphism tətbiq etmək istəyirsənsə (eyni metodun fərqli siniflərdə fərqli işləməsi)",
                            },
                        ]
                    },
                    {
                        type: "code",
                        header: "",
                        title: "Misal: Fərqli heyvan növləri üçün Animal sinifindən miras alan siniflər",
                        content: `                        
class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}

const myCat = new Cat("Whiskers");
myCat.makeSound(); // "Meow!"
                        `,
                        language: "typescript"
                    },
                ]
            }
        ];
        
    },
    getData() {
        return Promise.resolve(this.questions())
    },
}



