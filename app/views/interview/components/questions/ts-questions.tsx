


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

export const TSQuestions = {
    questions(): TQuestion[] {
        return [
            {
                id: 1,
                question: "TypeScript-də interface ilə type annotation arasındakı fərqlər.",
                answer: [
                    {
                        type: "text",
                        content: "Interface və type annotation arasında əsas fərq budur: Interface yalnız obyekt strukturlarını müəyyən edir və genelliklə genişləndirilə bilər (extends), amma type annotation daha ümumi və müxtəlif növ təyin etməyə imkan verir. Type bir çox növü birləşdirə bilər, məsələn, union və intersection növləri."
                    }
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
                        content: "Function overloads, eyni funksiya adını fərqli parametrlər və ya qaytarılan dəyərlərlə təkrarlamağa imkan verir. Məsələn, `function greet(name: string): string; function greet(age: number): number;`"
                    },
                    {
                        type: "code",
                        content: "function greet(name: string): string; function greet(age: number): number;",
                        language: "typescript"
                    }
                ]
            },
            {
                id: 16,
                question: "Static initialization block nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Static initialization block, sinifin statik üzvlərini ilkin dəyərlərlə təmin etmək üçün istifadə olunur. Bu xüsusiyyət yalnız Java və digər bəzi dillərdə mövcuddur, TypeScript-də isə buna bənzər bir sintaksis yoxdur."
                    }
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
                    }
                ]
            }
        ];
        
    },
    getData() {
        return Promise.resolve(this.questions())
    },
}



