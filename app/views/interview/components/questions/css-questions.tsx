

type TQuestion = {
    id: number
    question: string
    answer: string
}
export const CssQuestions = {
    questions(): TQuestion[] {
        return [
            {
                id: 1,
                question: "Flexbox və Grid arasındakı fərqlər nədir?",
                answer: "Flexbox və Grid hər ikisi CSS layout metodlarıdır, amma fərqli məqsədlər üçün istifadə olunur. Flexbox bir ölçülü dizayn üçün idealdır, yəni elementləri ya bir sətirdə, ya da bir sütunda yerləşdirir. Grid isə iki ölçülü dizayn yaratmağa imkan verir və həm satır, həm də sütunları idarə etməyə imkan verir. Flexbox daha sadə dizaynlar üçün daha uyğundur, Grid isə daha kompleks dizaynlar üçün əladır."
            },
            {
                id: 2,
                question: "CSS specifity nə edir?",
                answer: "CSS specifity, stil qaydalarının tətbiqini müəyyən edən bir metoddur. Hər bir CSS seçici bir spesifiklik dəyərinə sahibdir və daha yüksək spesifikliyə sahib olan seçici digərini əvəz edir. Ən yüksək spesifiklik ID selektorları ilə əldə edilir, sonra class və sonda element selektorları gəlir."
            },
            {
                id: 3,
                question: "Pseudo class nədir?",
                answer: "Pseudo class, bir elementin müəyyən bir vəziyyətinə tətbiq edilən bir CSS xüsusiyyətidir. Məsələn, `:hover`, `:focus`, `:first-child` kimi psevdoklasslar bir elementin üzərində istifadəçiyə təcrübə yaradır. Bu, elementlərin istifadəçi ilə qarşılıqlı əlaqəsi əsasında stil dəyişiklikləri etməyə imkan verir."
            },
            {
                id: 4,
                question: "Pseudo element nədir?",
                answer: "Pseudo elementlər, elementlərin müəyyən hissələrini seçmək üçün istifadə edilir. Məsələn, `::before`, `::after` kimi pseudo elementlər, HTML elementlərinin əvvəlində və ya sonunda məzmun əlavə etməyə imkan verir. Bu, real HTML elementləri yaratmadan stil dəyişiklikləri etməyə imkan tanıyır."
            },
            {
                id: 5,
                question: "Clamp() funksiyası nədir?",
                answer: "CSS `clamp()` funksiyası, bir dəyəri müəyyən bir aralıqda tutmaq üçün istifadə edilir. Bu, minimum, maksimum və istədiyiniz dəyər arasında nisbətən dəyişən bir dəyər təyin etməyə imkan verir. Məsələn, `clamp(1rem, 5vw, 3rem)` ifadəsi, 1rem ilə 3rem arasında olan bir ölçünü 5vw dəyərinə əsaslanaraq tənzimləyir."
            },
            {
                id: 6,
                question: "Clip-path nədir?",
                answer: "CSS `clip-path` xüsusiyyəti, bir elementin görünüşünü müəyyən bir formada kəsməyə imkan verir. Bu xüsusiyyət, elementin yalnız müəyyən bir hissəsini göstərmək üçün istifadə edilir. Məsələn, `clip-path: circle(50%)` ilə elementin mərkəzdən dairəvi bir hissəsi göstərilə bilər."
            },
            {
                id: 7,
                question: "CSS-də em və rem vahidləri arasındakı fərq nədir?",
                answer: "`em` və `rem` hər ikisi nisbətə əsaslanan vahidlərdir, amma fərqlidir. `em`, bir elementin özünə bağlıdır və valideyn elementinin font ölçüsünə görə dəyişir. `rem` isə root elementinin (`html`) font ölçüsünə bağlıdır və daha stabil ölçü verir."
            },
            {
                id: 8,
                question: "CSS Box Model nədir və onun komponentlərini izah edin?",
                answer: "CSS Box Model, hər bir HTML elementini dörd əsas komponentə bölür: `content` (elementin faktiki məzmunu), `padding` (elementin məzmunu ilə sərhəd arasında boşluq), `border` (elementin ətrafındakı sərhəd), və `margin` (elementin sərhədindən kənara olan boşluq). Bu model səhifənin elementlərinin ölçülərini və yerləşməsini tənzimləməyə imkan verir."
            },
            {
                id: 9,
                question: "Media queries nədir və layihədə necə istifadə olunur?",
                answer: "CSS Media Queries, fərqli cihaz ölçüləri və xüsusiyyətləri üçün üslubları tənzimləməyə imkan verir. Məsələn, fərqli ekran genişlikləri üçün fərqli dizayn tətbiq etmək üçün istifadə edilir. Responsiv dizayn yaratmaq üçün vacibdir. Məsələn, `@media (max-width: 768px) {...}`."
            },
            {
                id: 10,
                question: "Relative, absolute, fixed və sticky position arasındakı fərqlər.",
                answer: "`relative` elementin normal axınında qalır, amma onun mövqeyi nisbətən təyin edilir. `absolute` isə ən yaxın `relative`, `absolute` və ya `fixed` mövqeyinə sahib olan valideynə görə yerləşir. `fixed` mövqeyi səhifə ilə əlaqəlidir və istifadəçi səhifəni sürüklədikdə yerində qalır. `sticky` isə müəyyən bir yerdə yapışır və sonra səhifə ilə hərəkət etməyə davam edir."
            },
            {
                id: 11,
                question: "CSS-də responsiv naviqasiya panelini necə tətbiq edərdiniz?",
                answer: "Responsiv naviqasiya paneli yaratmaq üçün Flexbox və ya Grid istifadə edərək naviqasiya elementlərini uyğun şəkildə yerləşdirə bilərsiniz. `@media` queries ilə naviqasiyanı kiçik ekranlarda hamburger menyusu ilə əvəz edə bilərsiniz."
            },
            {
                id: 12,
                question: "CSS-də `!important` nədir?",
                answer: "CSS `!important`, bir stil qaydasının digər qaydalara nisbətən daha yüksək prioritetə sahib olmasını təmin edir. Bu xüsusiyyətin istifadəsi, çox vaxt qaçınılmalıdır, çünki kodun oxunabilirliyini və təkrarlanmasını çətinləşdirə bilər."
            },
            {
                id: 13,
                question: "CSS-də `display` xüsusiyyəti nədir?",
                answer: "CSS `display` xüsusiyyəti, bir elementin necə göstəriləcəyini və necə davranacağını müəyyən edir. `block`, `inline`, `inline-block`, `none` və `flex` kimi dəyərləri vardır."
            },
            {
                id: 14,
                question: "CSS-də `transition` nədir?",
                answer: "CSS `transition`, bir elementin bir dəyərdən digərinə keçməsini asanlaşdırır və animasiya yaratmağa imkan verir. Bu, istifadəçi təcrübəsini zənginləşdirir və vizual keçidlər təmin edir."
            },
            {
                id: 15,
                question: "CSS-də `z-index` nədir?",
                answer: "CSS `z-index` xüsusiyyəti, elementlərin yığın sırasını tənzimləyir. Daha yüksək `z-index` dəyəri olan elementlər daha üst səviyyədə göstərilir."
            }
        ]
    },
    getData() {
        return Promise.resolve(this.questions())
    },
}


