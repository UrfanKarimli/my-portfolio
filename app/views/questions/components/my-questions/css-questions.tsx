

type TAnswer = {
    type: string,
    title?: string,
    header?: string,
    content: string,
    language?: string
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
                        "type": "text",
                        "header": "Position Xüsusiyyətləri",
                        "title": "1. Relative (Nisbi)",
                        "content": "Element normal axına görə yerləşdirilir, amma top, right, bottom, left kimi xüsusiyyətlərlə yeri dəyişir. Normal axını pozmur."
                    },
                    {
                        "type": "code",
                        "content": `
.box {
position: relative;
top: 20px;
left: 10px;
}
`,
                        "language": "css"
                    },
                    {
                        "type": "text",
                        "title": "2. Absolute (Mütləq)",
                        "content": "Element valideynin position: relative olduqda ona görə yerləşir. Əsas layout axınından çıxır."
                    },
                    {
                        "type": "code",
                        "content": `
.container {
position: relative;
}
.box {
position: absolute;
top: 0;
right: 0;
}
`,
                        "language": "css"
                    },
                    {
                        "type": "text",
                        "title": "3. Fixed (Sabit)",
                        "content": "Element ekranın görünən hissəsinə görə sabitlənir və scroll edildikdə belə eyni yerdə qalır."
                    },
                    {
                        "type": "code",
                        "content": `
.box {
position: fixed;
bottom: 10px;
right: 10px;
}
 `,
                        "language": "css"
                    },
                    {
                        "type": "text",
                        "title": "4. Sticky (Yapışqan)",
                        "content": "Element normalda relative kimi davranır, amma scroll edilərkən mùəyyən bir nöqtəyə çatdıqda sabitlənir."
                    },
                    {
                        "type": "code",
                        "content": `
.box {
position: sticky;
top: 0;
}
`,
                        "language": "css"
                    }
                ]
            },


            {
                id: 11,
                question: "CSS Flexbox Nədir?",
                answer: [
                    {
                        type: "text",
                        content: "CSS Flexbox veb səhifələrdə elementlərin yerləşdirilməsini asanlaşdıran bir modeldir. Bu model, elementləri çevik və dinamik şəkildə hizalamaq və ölçüsünü dəyişdirmək üçün istifadə olunur."
                    },
                    {
                        type: "text",
                        content: "Flexbox-un işləməsi üçün bir konteyner (display: flex;) və içindəki elementlər (flex items) olmalıdır."
                    },
                    {
                        type: "text",
                        title: "1. Flex Container ",
                        content: "Flexbox modelini aktiv etmək üçün ana konteynerdə display: flex; və ya display: inline-flex; istifadə olunur."
                    },
                    {
                        type: "code",
                        content: ".container {\n  display: flex;\n}",
                        language: "css"
                    },
                    {
                        type: "text",
                        title: "2. Flex Direction (İstiqamət)",
                        content: "Elementlərin düzülmə istiqamətini təyin edir."
                    },
                    {
                        type: "code",
                        content: `.container {
flex-direction: row; /* Default (Soldan sağa) */
flex-direction: row-reverse; /* Sağdan sola */
flex-direction: column; /* Yuxarıdan aşağı */
flex-direction: column-reverse; /* Aşağıdan yuxarı */
   }`,
                        language: "css"
                    },
                    {
                        type: "text",
                        title: "3. Justify Content (Üfüqi Hizalama)",
                        content: "Elementlərin üfüqi istiqamətdə hizalanmasını təyin edir."
                    },

                    {
                        type: "code",
                        content: `.container {
  justify-content: flex-start;  /* Default - Başdan hizala */
  justify-content: flex-end;  /* Sondan hizala */
  justify-content: center;  /* Ortala */
  justify-content: space-between;  /* İlk və son element kənarlarda, arada boşluq */
  justify-content: space-around;  /* Bütün elementlər arasında bərabər boşluq */
  justify-content: space-evenly;  /* Bütün boşluqlar eyni ölçüdə */
}
`,
                        language: "css"
                    },
                    {
                        type: "text",
                        title: " 4. Align Items (Şaquli Hizalama)",
                        content: "Elementlərin şaquli istiqamətdə hizalanmasını təyin edir."
                    },
                    {
                        type: "code",
                        content: `.container {
  align-items: stretch;  /* Default - Bütün elementlər konteynerin hündürlüyünü tutur */
  align-items: flex-start;  /* Yuxarı hizala */
  align-items: flex-end;  /* Aşağı hizala */
  align-items: center;  /* Ortala */
  align-items: baseline;  /* Mətin sətrinə görə hizala */
}
`,
                        language: "css"
                    },
                    {
                        type: "text",
                        title: "5. Align Content (Çox Sətirli Dizayn)",
                        content: "Çox sətirli düzənlərdə şaquli hizalanmanı idarə edir."
                    },
                    {
                        type: "code",
                        content: `.container {
    align-content: flex-start;
    align-content: flex-end;
    align-content: center;
    align-content: space-between;
    align-content: space-around;
    align-content: space-evenly;
}
`,
                        language: "css"
                    },
                    {
                        type: "text",
                        title: " 6. Flex Wrap (Sıra Qırılması)",
                        content: "Elementlərin sıxılıb-sıxılmamasını təyin edir."
                    },


                    {
                        type: "code",
                        content: `.container {
  flex-wrap: nowrap;  /* Default - Hamısı bir sətirdə qalır */
  flex-wrap: wrap;  /* Ekrana sığmayan elementlər növbəti sətrə keçir */
  flex-wrap: wrap-reverse;  /* Sətirləri tərsinə çevirir */
}
`,
                        language: "css"
                    },
                    {
                        type: "text",
                        title: " 7. Flex Property (Elementlərin Dinamik Ölçüləndirilməsi)",
                        content: "Bütün flex elementlər üçün böyümə, kiçilmə və əsas ölçü təyin edir."
                    },


                    {
                        type: "code",
                        content: `.item {
  flex: 1;  /* Bütün elementlər bərabər böyüyəcək */
  flex: 2;  /* Digər elementlərdən 2 qat daha çox yer tutacaq */
}
`,
                        language: "css"
                    },
                    {
                        type: "text",
                        content: "Alternativ olaraq:"
                    },
                    {
                        type: "code",
                        content: `.item {
flex-grow: 1; /* Böyümə */
flex-shrink: 1; /* Kiçilmə */
flex-basis: auto; /* Başlanğıc ölçü */
}`,
                        language: "css"
                    },
                    {
                        type: "text",
                        title: " 8. Order (Elementlərin Sırasını Dəyişmək)",
                        content: "Elementlərin HTML-dəki sırasını dəyişdirmədən, CSS vasitəsilə yenidən düzəltmək üçün istifadə olunur."
                    },
                    {
                        type: "code",
                        content: `.item1 { order: 2; }
.item2 { order: 1; }
.item3 { order: 3; }
`,
                        language: "css"
                    },
                    {
                        type: "text",
                        content: " Default order: 0; olur. Kiçik dəyərlər əvvəl göstərilir."
                    },
                    {
                        type: "code",
                        title: "Praktik Nümunə",
                        content: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
`,
                        language: "html"
                    }, {
                        type: "code",
                        content: `.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightgray;
}

.item {
  width: 100px;
  height: 100px;
  background-color: tomato;
  margin: 10px;
  text-align: center;
  line-height: 100px;
  font-size: 24px;
  color: white;
}
`,
                        language: "css"
                    },
                    {
                        type: "text",
                        content: "Bu nümunədə elementlər ortalanmış vəziyyətdədir."
                    },

                ]
            },
            {
                id: 12,
                question: "CSS Grid Layout (Şəbəkə Düzəni) Nədir?",
                answer: [
                    {
                        "type": "text",
                        "content": "CSS Grid Layout, veb səhifədə iki ölçülü (sətir və sütun) əsaslı layout yaratmağa imkan verən güclü bir modeldir. Flexbox bir istiqamətə (sətir və ya sütun) fokuslanırsa, CSS Grid həm sətir, həm də sütun yönümlü tərtibat yaratmağa imkan verir."
                    },
                    {
                        "type": "text",
                        "header": "Əsas Terminlər və Xüsusiyyətlər",
                        "title": "1. Grid Container (Ana Konteyner)",
                        "content": "Grid işlətmək üçün ana konteynerdə display: grid; və ya display: inline-grid; təyin edilməlidir."
                    },
                    {
                        "type": "code",
                        "content": ".container {\n  display: grid;\n}\n",
                        "language": "css"
                    },
                    {
                        "type": "text",
                        "title": "2. Grid Template Columns (Sütunların Tərtibatı)",
                        "content": "Sütunların ölçüsünü təyin edir."
                    },
                    {
                        "type": "code",
                        "content": ".container {\n  display: grid;\n  grid-template-columns: 100px 200px 150px;\n}\n",
                        "language": "css"
                    },
                    {
                        "type": "text",
                        "title": "3. Grid Template Rows (Sətirlərin Tərtibatı)",
                        "content": "Sətirlərin ölçüsünü təyin edir."
                    },
                    {
                        "type": "code",
                        "content": ".container {\n  grid-template-rows: 100px 150px auto;\n}\n",
                        "language": "css"
                    },
                    {
                        "type": "text",
                        "title": "4. Grid Gap (Sətir və Sütunlararası Boşluq)",
                        "content": "Sətir və sütunlar arasında boşluq əlavə edir."
                    },
                    {
                        "type": "code",
                        "content": ".container {\n  grid-gap: 10px;\n}\n",
                        "language": "css"
                    },
                    {
                        "type": "text",
                        "title": "5. Grid Auto Columns və Grid Auto Rows",
                        "content": "Elementlər sətir və ya sütunlara sığmazsa, avtomatik ölçülər təyin edilə bilər."
                    },
                    {
                        "type": "code",
                        "content": ".container {\n  grid-auto-rows: 100px;\n  grid-auto-columns: 200px;\n}\n",
                        "language": "css"
                    }
                ]
            },
            {
                id: 13,
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
        ];


    },
    getData() {
        return Promise.resolve(this.questions())
    },
}


