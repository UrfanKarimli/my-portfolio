import { TQuestion } from "../../types"

export const GeneralQuestions = {
    questions(): TQuestion[] {
        return [
            {
                id: 1,
                question: "SPA və MPA arasındakı fərq nədir? Hansı JavaScript kitabxanası hansını istifadə edir?",
                answer: [
                    {
                        type: "text",
                        header: "SPA vs MPA",
                        title: "Fərqlər və Kitabxanalar",
                        content: "SPA (Single Page Application) istifadəçi interfeysini yenidən yükləmədən dinamik olaraq dəyişdirən tək səhifəlik tətbiqdir. MPA (Multi Page Application) isə hər səhifə dəyişikliyində serverə yeni bir istək göndərən ənənəvi yanaşmadır.",
                        lists: [
                            { list: "SPA - React, Angular, Vue istifadə edir." },
                            { list: "MPA - Ənənəvi PHP, jQuery, SSR ilə Next.js istifadə edilə bilər." }
                        ]
                    }
                ]
            },
            {
                id: 2,
                question: "SSR və CSR arasındakı fərq nədir? Hansı JavaScript kitabxanası hansını istifadə edir?",
                answer: [
                    {
                        type: "text",
                        header: "SSR vs CSR",
                        title: "Server və Müştəri Tərəfli Renderləmə",
                        content: "SSR (Server-Side Rendering) serverdə HTML-in əvvəlcədən render edilib müştəriyə göndərilməsidir. CSR (Client-Side Rendering) isə müştəri brauzerində JavaScript vasitəsilə render olunur.",
                        lists: [
                            { list: "SSR - Next.js, Nuxt.js istifadə edir." },
                            { list: "CSR - React, Vue, Angular əsasən CSR istifadə edir." }
                        ]
                    }
                ]
            },
            {
                id: 3,
                question: "Function Programming nədir?",
                answer: [
                    {
                        type: "text",
                        header: "Functional Programming",
                        title: "Təsviri",
                        content: "Funksional proqramlaşdırma dəyişməz (immutable) verilənlər və saf funksiyalar (pure functions) üzərində qurulmuş proqramlaşdırma paradiqmasıdır.",
                        lists: [
                            { list: "Yan təsirsiz funksiyalar istifadə edilir." },
                            { list: "Dəyərlər dəyişməz olur, mutation azaldılır." }
                        ]
                    },
                    {
                        type: "code",
                        header: "Kod nümunəsi",
                        title: "Pure Function",
                        content: `const add = (a, b) => a + b;`,
                        language: "tsx"
                    }
                ]
            },
            {
                id: 4,
                question: "Frontend-də Testing necə olur?",
                answer: [
                    {
                        type: "text",
                        header: "Frontend Testing",
                        title: "Test Növləri",
                        content: "Frontend tətbiqlərində testlər UI-nin düzgün işlədiyini yoxlamaq üçün yazılır.",
                        lists: [
                            { list: "Unit Test - Jest, Mocha istifadə edilir." },
                            { list: "Integration Test - Cypress, Playwright istifadə edilir." }
                        ]
                    }
                ]
            },
            {
                id: 5,
                question: "Component növləri hansılardır?",
                answer: [
                    {
                        type: "text",
                        header: "Component Növləri",
                        title: "Fərqli yanaşmalar",
                        content: "Frontend-də komponentlər reusable (təkrar istifadə edilən) modullardır.",
                        lists: [
                            { list: "Class Component" },
                            { list: "Function Component" },
                            { list: "Controlled və Uncontrolled Component" }
                        ]
                    }
                ]
            },
            {
                id: 6,
                question: "Built-time və Request-time nədir?",
                answer: [
                    {
                        type: "text",
                        header: "Built-time vs Request-time",
                        title: "İzahı",
                        content: "Built-time zamanı kod kompilyasiya edilir və optimallaşdırılır. Request-time isə istifadəçinin istəyi əsasında verilənlər yaradılır və cavab qaytarılır.",
                        lists: [
                            { list: "Built-time - SSR və SSG zamanı istifadə olunur." },
                            { list: "Request-time - API-lərə edilən real vaxt istəkləri üçün istifadə olunur." }
                        ]
                    }
                ]
            },
            {
                id: 7,
                question: "Code splitting nədir?",
                answer: [
                    {
                        type: "text",
                        header: "Code Splitting",
                        title: "İstifadəsi",
                        content: "Code splitting tətbiqin yüklənməsini optimallaşdırmaq üçün kodun hissələrə bölünməsidir.",
                        lists: [
                            { list: "React.lazy və dynamic import istifadə edilir." },
                            { list: "Webpack və Parcel kimi bundler-lərlə edilə bilər." }
                        ]
                    }
                ]
            },
            {
                id: 8,
                question: "API-lərin təhlükəsizliyini necə təmin edirsiniz?",
                answer: [
                    {
                        type: "text",
                        header: "API Security",
                        title: "Təhlükəsizlik Praktikaları",
                        content: "API-lərin təhlükəsizliyini təmin etmək üçün müxtəlif metodlardan istifadə olunur.",
                        lists: [
                            { list: "JWT (JSON Web Token) istifadə etmək." },
                            { list: "Rate limiting tətbiq etmək." }
                        ]
                    }
                ]
            },
            {
                id: 9,
                question: "REST API-lərdə GET və POST metodları arasındakı fərq nədir?",
                answer: [
                    {
                        type: "text",
                        header: "GET vs POST",
                        title: "Əsas Fərqlər",
                        content: "GET məlumatları oxumaq üçün, POST isə məlumatları yaratmaq üçün istifadə olunur.",
                        lists: [
                            { list: "GET - URL vasitəsilə istək göndərilir, cache edilə bilər." },
                            { list: "POST - Bədən (body) vasitəsilə məlumat göndərilir, təhlükəsizlik yüksəkdir." }
                        ]
                    }
                ]
            },
            {
                id: 10,
                question: "API performansını necə optimallaşdırardınız?",
                answer: [
                    {
                        type: "text",
                        header: "API Performance Optimization",
                        title: "Metodlar",
                        content: "API performansını artırmaq üçün optimallaşdırma metodlarından istifadə olunur.",
                        lists: [
                            { list: "Caching istifadə etmək (Redis, CDN)." },
                            { list: "Lazy loading və pagination tətbiq etmək." }
                        ]
                    }
                ]
            },
            {
                "id": 11,
                "question": "S.O.L.I.D OOP prinsipləri nədir?",
                "answer": [
                    {
                        "type": "text",
                        "header": "S.O.L.I.D Prinsipləri",
                        "title": "S.O.L.I.D OOP Prinsipləri",
                        "content": "S.O.L.I.D OOP prinsipləri beş əsas prinsipdən ibarətdir: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, və Dependency Inversion. Bu prinsiplər tətbiqlərin daha yaxşı dizayn edilməsinə kömək edir.",
                        "lists": [
                            {
                                "list": "Single Responsibility: Hər bir sinifin tək bir vəzifəsi olmalıdır."
                            },
                            {
                                "list": "Open/Closed: Siniflər genişlənməyə açıq, dəyişikliyə qapalı olmalıdır."
                            },
                            {
                                "list": "Liskov Substitution: Alt siniflər üst siniflərin yerinə istifadə edilə bilməlidir."
                            },
                            {
                                "list": "Interface Segregation: İnterfeyslər xüsusi və kiçik olmalıdır."
                            },
                            {
                                "list": "Dependency Inversion: Yüksək səviyyəli modullar aşağı səviyyəli modullardan asılı olmamalıdır."
                            }
                        ]
                    },
                    {
                        "type": "code",
                        "header": "Single Responsibility Principle (SRP)",
                        "title": "Nümunə: Tək Məsuliyyət Prinsipi",
                        "content": "class User {\n    constructor(private name: string, private email: string) {}\n\n    saveToDatabase() {\n        // Məlumatları bazaya yaz\n    }\n}\n\nclass UserPrinter {\n    printUserInfo(user: User) {\n        console.log(`Name: ${user.name}, Email: ${user.email}`);\n    }\n}",
                        "language": "typescript"
                    },
                    {
                        "type": "code",
                        "header": "Open/Closed Principle (OCP)",
                        "title": "Nümunə: Açıq/Qapalı Prinsipi",
                        "content": "interface Shape {\n    area(): number;\n}\n\nclass Rectangle implements Shape {\n    constructor(public width: number, public height: number) {}\n\n    area() {\n        return this.width * this.height;\n    }\n}\n\nclass Circle implements Shape {\n    constructor(public radius: number) {}\n\n    area() {\n        return Math.PI * this.radius * this.radius;\n    }\n}\n\nclass AreaCalculator {\n    calculateArea(shape: Shape) {\n        return shape.area();\n    }\n}",
                        "language": "typescript"
                    },
                    {
                        "type": "code",
                        "header": "Liskov Substitution Principle (LSP)",
                        "title": "Nümunə: Liskov Əvəzetmə Prinsipi",
                        "content": "class Bird {\n    move() {\n        console.log('Moving');\n    }\n}\n\nclass FlyingBird extends Bird {\n    fly() {\n        console.log('Flying');\n    }\n}\n\nclass Penguin extends Bird {\n    move() {\n        console.log('Swimming');\n    }\n}",
                        "language": "typescript"
                    },
                    {
                        "type": "code",
                        "header": "Interface Segregation Principle (ISP)",
                        "title": "Nümunə: İnterfeys Ayrı-seçkiliyi Prinsipi",
                        "content": "interface Printer {\n    print(document: string): void;\n}\n\ninterface Scanner {\n    scan(): void;\n}\n\nclass SimplePrinter implements Printer {\n    print(document: string) {\n        console.log(`Printing: ${document}`);\n    }\n}\n\nclass MultiFunctionMachine implements Printer, Scanner {\n    print(document: string) {\n        console.log(`Printing: ${document}`);\n    }\n\n    scan() {\n        console.log('Scanning...');\n    }\n}",
                        "language": "typescript"
                    },
                    {
                        "type": "code",
                        "header": "Dependency Inversion Principle (DIP)",
                        "title": "Nümunə: Asılılığın İnversiyası Prinsipi",
                        "content": "interface Database {\n    save(data: string): void;\n}\n\nclass MySQLDatabase implements Database {\n    save(data: string) {\n        console.log(`Saving ${data} to MySQL`);\n    }\n}\n\nclass UserService {\n    constructor(private database: Database) {}\n\n    saveUserData(data: string) {\n        this.database.save(data);\n    }\n}",
                        "language": "typescript"
                    }
                ]
            },
            {
                "id": 12,
                "question": "Boilerplate kod nədir?",
                "answer": [
                    {
                        "type": "text",
                        "header": "Boilerplate Kod",
                        "title": "Boilerplate Kodun Tərifi",
                        "content": "Boilerplate kod, təkrar olunan və çox vaxt dəyişməyən kod hissələridir. Bu kodlar tez-tez eyni strukturda istifadə olunur.",
                        "lists": [
                            {
                                "list": "Təkrar olunan kod hissələri."
                            },
                            {
                                "list": "Dəyişməyən struktur."
                            }
                        ]
                    }
                ]
            }
        ]

    },
    getData() {
        return Promise.resolve(this.questions())
    },
}



