

type TQuestion = {
    id: number
    question: string
    answer: string
}
export const HtmlQuestions = {
    questions(): TQuestion[] {
        return [
            {
                id: 1,
                question: "HTML nədir?",
                answer: "HTML (HyperText Markup Language) veb səhifələrinin strukturunu müəyyən edən işarə dilidir. HTML, veb səhifəsinin başlıq, mətn, şəkillər, videolar və digər elementlərini təşkil edir."
            },
            {
                id: 2,
                question: "HTML tagları nədir?",
                answer: "HTML tagları, veb səhifəsinin məzmununu təsvir edən işarə vasitələridir. Hər bir tag bir başlanğıc və bitiş etiketindən ibarətdir. Məsələn, `<div></div>`, `<h1></h1>`."
            },
            {
                id: 3,
                question: "HTML-də block və inline elementlər nədir?",
                answer: "Block elementlər səhifədə yeni sətirə başlayır və tam eni tutur (məsələn, `<div>`, `<h1>`), inline elementlər isə sətir daxilindəki məzmunu təşkil edir və yalnız öz tərkibindəki mətni götürür (məsələn, `<span>`, `<a>`)."
            },
            {
                id: 4,
                question: "HTML formaları necə işləyir?",
                answer: "HTML formaları istifadəçidən məlumat toplamaq üçün istifadə olunur. Formalar `<form>` etiketi ilə yaradılır və daxilində müxtəlif növ inputlar (məsələn, `<input>`, `<select>`, `<textarea>`) yerləşir. Məlumatlar formanın göndərilməsi ilə serverə göndərilir."
            },
            {
                id: 5,
                question: "HTML-də semantik elementlər nədir?",
                answer: "Semantik elementlər, səhifədəki məzmunun mənasını daha aydın göstərən elementlərdir. Məsələn, `<header>`, `<article>`, `<footer>` və `<nav>` elementləri semantik elementlərdir."
            },
            {
                id: 6,
                question: "HTML-də `<meta>` etiketi nədir?",
                answer: "HTML-də `<meta>` etiketi, səhifənin başlıq hissəsində yer alır və səhifə haqqında əlavə məlumat (məsələn, xarici kodlaşdırma, məzmun növü, açılış səhifəsi məlumatı) təmin edir. Məsələn, `<meta charset='UTF-8'>`."
            },
            {
                id: 7,
                question: "HTML-də `<a>` etiketi nədir?",
                answer: "`<a>` etiketi hipermətn bağlantılarını yaratmaq üçün istifadə edilir. Bu etiketə `href` atributu verilir ki, bu da keçid ediləcək URL-i təyin edir. Məsələn, `<a href='https://example.com'>Link</a>`."
            },
            {
                id: 8,
                question: "HTML-də atributlar nədir?",
                answer: "Atributlar, HTML elementlərinə əlavə məlumat təmin edir. Məsələn, `<img>` elementində `src` atributu şəkilin yolunu, `alt` atributu isə şəkilin təsvirini göstərir. Hər atributun bir adı və dəyəri olur."
            },
            {
                id: 9,
                question: "HTML-də `<iframe>` etiketi nədir?",
                answer: "`<iframe>` etiketi, bir veb səhifəni başqa bir səhifədə daxil etmək üçün istifadə olunur. Məsələn, bir video və ya başqa bir saytın səhifəsi bu elementlə daxil edilə bilər. Məsələn, `<iframe src='https://www.example.com'></iframe>`."
            },
            {
                id: 10,
                question: "HTML-də `<canvas>` etiketi nədir?",
                answer: "`<canvas>` etiketi, veb səhifəsində dinamik olaraq qrafiklər çəkməyə imkan verir. JavaScript vasitəsilə bu etiketlə şəkillər, qrafiklər, animasiyalar və digər qrafiklər yaradılır."
            },
            {
                id: 11,
                question: "HTML-də `<head>` və `<body>` arasındakı fərqlər nədir?",
                answer: "`<head>` etiketi veb səhifəsinin başlıq hissəsini təşkil edir və səhifənin meta məlumatlarını (başlıq, xarici faylların əlaqələndirilməsi və s.) saxlayır. `<body>` etiketi isə səhifənin görünən hissəsini təşkil edir, yəni istifadəçinin baxdığı məzmun burada yerləşir."
            },
            {
                id: 12,
                question: "HTML-də `<img>` etiketi nədir?",
                answer: "`<img>` etiketi şəkilləri səhifəyə daxil etmək üçün istifadə olunur. Bu etiketin ən vacib atributu `src` atributudur, hansı ki şəkilin yolunu göstərir. Məsələn, `<img src='image.jpg' alt='Image'>`."
            },
            {
                id: 13,
                question: "HTML-də `<script>` etiketi nədir?",
                answer: "`<script>` etiketi, səhifəyə JavaScript kodu daxil etmək üçün istifadə olunur. Bu kod səhifə yükləndikdə işləyir. Məsələn, `<script src='script.js'></script>`."
            },
            {
                id: 14,
                question: "HTML-də `<link>` etiketi nədir?",
                answer: "`<link>` etiketi, xarici faylları səhifəyə daxil etmək üçün istifadə olunur. Ən çox CSS stil cədvəlləri ilə əlaqələndirilməsi üçün istifadə olunur. Məsələn, `<link rel='stylesheet' href='style.css'>`."
            },
            {
                id: 15,
                question: "HTML-də `<table>` etiketi nədir?",
                answer: "`<table>` etiketi, cədvəl yaratmaq üçün istifadə olunur. Cədvəl daxilində `<tr>` (sətir), `<td>` (hüceyrə) və `<th>` (başlıq hüceyrəsi) elementləri istifadə olunur."
            }
        ]
    },
    getData() {
        return Promise.resolve(this.questions())
    },
}

