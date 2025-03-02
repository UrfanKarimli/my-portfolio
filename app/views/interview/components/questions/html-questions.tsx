
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

export const HtmlQuestions = {
    questions(): TQuestion[] {
        return [
            {
                id: 1,
                question: "HTML nədir?",
                answer: [
                    {
                        type: "text",
                        content: "HTML (HyperText Markup Language) veb səhifələrinin strukturunu müəyyən edən işarə dilidir. HTML, veb səhifəsinin başlıq, mətn, şəkillər, videolar və digər elementlərini təşkil edir."
                    }
                ]
            },
            {
                id: 2,
                question: "HTML tagları nədir?",
                answer: [
                    {
                        type: "text",
                        content: "HTML tagları, veb səhifəsinin məzmununu təsvir edən işarə vasitələridir. Hər bir tag bir başlanğıc və bitiş etiketindən ibarətdir. Məsələn, <div></div>, <h1></h1>."
                    },
                    {
                        type: "code",
                        content: "<div></div>\n<h1></h1>",
                        language: "html"
                    }
                ]
            },
            {
                id: 3,
                question: "HTML-də block və inline elementlər nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Block elementlər səhifədə yeni sətirə başlayır və tam eni tutur (məsələn, <div>, <h1>), inline elementlər isə sətir daxilindəki məzmunu təşkil edir və yalnız öz tərkibindəki mətni götürür (məsələn, <span>, <a>)."
                    },
                    {
                        type: "code",
                        content: "<div>Bu, block elementidir.</div>\n<span>Bu, inline elementidir.</span>",
                        language: "html"
                    }
                ]
            },
            {
                id: 4,
                question: "HTML formları necə işləyir?",
                answer: [
                    {
                        type: "text",
                        content: "HTML formları istifadəçidən məlumat toplamaq üçün istifadə olunur. Formlar <form> etiketi ilə yaradılır və daxilində müxtəlif növ inputlar (məsələn, <input>, <select>, <textarea>) yerləşir. Məlumatlar formun göndərilməsi ilə serverə göndərilir."
                    },
                    {
                        type: "code",
                        content: "<form action='/submit' method='POST'>\n  <input type='text' name='name' />\n  <button type='submit'>Göndər</button>\n</form>",
                        language: "html"
                    }
                ]
            },
            {
                id: 5,
                question: "HTML-də semantik elementlər nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Semantik elementlər, səhifədəki məzmunun mənasını daha aydın göstərən elementlərdir. Məsələn, <header>, <article>, <footer> və <nav> elementləri semantik elementlərdir."
                    },
                    {
                        type: "code",
                        content: "<header>Başlıq</header>\n<article>Məqalə məzmunu</article>\n<footer>Alt informasiya</footer>\n<nav>Əsas naviqasiya</nav>",
                        language: "html"
                    }
                ]
            },
            {
                id: 6,
                question: "HTML-də <meta> etiketi nədir?",
                answer: [
                    {
                        type: "text",
                        content: "HTML-də <meta> etiketi, səhifənin başlıq hissəsində yer alır və səhifə haqqında əlavə məlumat (məsələn, xarici kodlaşdırma, məzmun növü, açılış səhifəsi məlumatı) təmin edir. Məsələn, <meta charset='UTF-8'>."
                    },
                    {
                        type: "code",
                        content: "<meta charset='UTF-8'>",
                        language: "html"
                    }
                ]
            },
            {
                id: 7,
                question: "HTML-də <a> etiketi nədir?",
                answer: [
                    {
                        type: "text",
                        content: "<a> etiketi hipermətn bağlantılarını yaratmaq üçün istifadə edilir. Bu etiketə href atributu verilir ki, bu da keçid ediləcək URL-i təyin edir. Məsələn, <a href='https://example.com'>Link</a>."
                    },
                    {
                        type: "code",
                        content: "<a href='https://example.com'>Link</a>",
                        language: "html"
                    }
                ]
            },
            {
                id: 8,
                question: "HTML-də atributlar nədir?",
                answer: [
                    {
                        type: "text",
                        content: "Atributlar, HTML elementlərinə əlavə məlumat təmin edir. Məsələn, <img> elementində src atributu şəkilin yolunu, alt atributu isə şəkilin təsvirini göstərir. Hər atributun bir adı və dəyəri olur."
                    },
                    {
                        type: "code",
                        content: "<img src='image.jpg' alt='Şəkil təsviri' />",
                        language: "html"
                    }
                ]
            },
            {
                id: 9,
                question: "HTML-də <iframe> etiketi nədir?",
                answer: [
                    {
                        type: "text",
                        content: "<iframe> etiketi, bir veb səhifəni başqa bir səhifədə daxil etmək üçün istifadə olunur. Məsələn, bir video və ya başqa bir saytın səhifəsi bu elementlə daxil edilə bilər. Məsələn, <iframe src='https://www.example.com'></iframe>."
                    },
                    {
                        type: "code",
                        content: "<iframe src='https://www.example.com'></iframe>",
                        language: "html"
                    }
                ]
            },
            {
                id: 10,
                question: "HTML-də <canvas> etiketi nədir?",
                answer: [
                    {
                        type: "text",
                        content: "<canvas> etiketi, veb səhifəsində dinamik olaraq qrafiklər çəkməyə imkan verir. JavaScript vasitəsilə bu etiketlə şəkillər, qrafiklər, animasiyalar və digər qrafiklər yaradılır."
                    },
                    {
                        type: "code",
                        content: "<canvas id='myCanvas' width='500' height='500'></canvas>",
                        language: "html"
                    }
                ]
            },
            {
                id: 11,
                question: "HTML-də <table> etiketi nə üçün istifadə olunur?",
                answer: [
                    {
                        type: "text",
                        content: "<table> etiketi cədvəllər yaratmaq üçün istifadə olunur. Cədvəlin içində <tr> (sətir), <td> (sütun) və <th> (başlıq) elementləri yer alır."
                    },
                    {
                        type: "code",
                        content: "<table>\n  <tr>\n    <th>Başlıq</th>\n  </tr>\n  <tr>\n    <td>Məzmun</td>\n  </tr>\n</table>",
                        language: "html"
                    }
                ]
            },
            {
                id: 12,
                question: "HTML-də <form> etiketi nədir?",
                answer: [
                    {
                        type: "text",
                        content: "<form> etiketi istifadəçidən məlumat toplamaq və serverə göndərmək üçün istifadə olunur. Daxilində <input>, <textarea>, <button> kimi elementlər ola bilər."
                    },
                    {
                        type: "code",
                        content: "<form action='/submit' method='POST'>\n  <input type='text' name='name' />\n  <button type='submit'>Göndər</button>\n</form>",
                        language: "html"
                    }
                ]
            },
            {
                id: 13,
                question: "HTML-də <audio> və <video> etiketləri nədir?",
                answer: [
                    {
                        type: "text",
                        content: "<audio> və <video> etiketləri veb səhifələrdə media fayllarını əlavə etmək üçün istifadə olunur. <audio> səs faylları, <video> isə video faylları üçün istifadə edilir."
                    },
                    {
                        type: "code",
                        content: "<audio controls><source src='audio.mp3' type='audio/mp3'></audio>\n<video controls><source src='video.mp4' type='video/mp4'></video>",
                        language: "html"
                    }
                ]
            },
            {
                id: 14,
                question: "HTML-də <script> etiketi nə üçündür?",
                answer: [
                    {
                        type: "text",
                        content: "<script> etiketi JavaScript kodlarını HTML sənədinə əlavə etmək üçün istifadə olunur. Məsələn, <script src='app.js'></script>."
                    },
                    {
                        type: "code",
                        content: "<script src='app.js'></script>",
                        language: "html"
                    }
                ]
            },
            {
                id: 15,
                question: "HTML-də <link> etiketi nədir?",
                answer: [
                    {
                        type: "text",
                        content: "<link> etiketi xarici faylları, xüsusən CSS fayllarını HTML sənədinə daxil etmək üçün istifadə olunur. Məsələn, <link rel='stylesheet' href='styles.css'>."
                    },
                    {
                        type: "code",
                        content: "<link rel='stylesheet' href='styles.css'>",
                        language: "html"
                    }
                ]
            }
        ];
        
        
    },
    getData() {
        return Promise.resolve(this.questions())
    },
}

