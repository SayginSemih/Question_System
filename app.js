let questions=[
    {
        ID: 1,
        SORU: "5+5 kaçtır?",
        A: "5",
        B: "10",
        C: "15",
        D: "20",
        CEVAP: "10"
    },
    {
        ID: 2,
        SORU: "10/2 kaçtır?",
        A: "5",
        B: "2",
        C: "4",
        D: "3",
        CEVAP: "5"
    },
    {
        ID: 3,
        SORU: "Türkiye'nin başkenti neresidir?",
        A: "Yozgat",
        B: "İzmir",
        C: "Ankara",
        D: "İstanbul",
        CEVAP: "Ankara"
    },
    {
        ID: 4,
        SORU: "Edirne'de bulunan sınır kapısı Ülkemizi hangi Ülke ile bağlamaktadır?",
        A: "Yunanistan",
        B: "Irak",
        C: "İran",
        D: "Suriye",
        CEVAP: "Yunanistan"
    },
    {
        ID: 5,
        SORU: "5'in karesi kaçtır?",
        A: "10",
        B: "50",
        C: "15",
        D: "25",
        CEVAP: "25"
    },
    {
        ID: 6,
        SORU: "Cumhuriyet hangi tarihte kurulmuştur?",
        A: "23 Nisan 1920",
        B: "29 Ekim 1923",
        C: "10 Kasım 1938",
        D: "19 Kasım 1919",
        CEVAP: "229 Ekim 1923"
    },
    {
        ID: 7,
        SORU: "3 Temmuz davası yaşanmasaydı Türkiye'nin Bayern München'i olacak olan takımı hangisidir?",
        A: "Fenerbahçe",
        B: "Galatasaray",
        C: "Beşiktaş",
        D: "Trabzonspor",
        CEVAP: "Fenerbahçe"
    },
    {
        ID: 8,
        SORU: "Bu sınav uygulaması hangi yazılım dili ile yapılmıştır?",
        A: "Python",
        B: "C#",
        C: "Java",
        D: "JavaScript",
        CEVAP: "JavaScript"
    },
    {
        ID: 9,
        SORU: "Yerli ve Milli otomobilimizin adı nedir?",
        A: "Toq",
        B: "Togg",
        C: "Toog",
        D: "Toqq",
        CEVAP: "Togg"
    },
    {
        ID: 10,
        SORU: "1 saniye kaç milisaniyedir?",
        A: "100ms",
        B: "1000ms",
        C: "10000ms",
        D: "100000ms",
        CEVAP: "1000ms"
    }
]

let i=1;

const qw = document.querySelector(".questions-wrap");
const btn = document.querySelector(".btnFinish button");

questions.forEach(question => {
    qw.innerHTML+=`
    <div id="${question.ID}" class="wrapper">
        <p>${i}) ${question.SORU}</p>
        <div>
            <input type="radio" name="${i}" value="${question.A}"> ${question.A}
        </div>
        <div>
            <input type="radio" name="${i}" value="${question.B}"> ${question.B}
        </div>      
        <div>
            <input type="radio" name="${i}" value="${question.C}"> ${question.C}
        </div>
        <div>
            <input type="radio" name="${i}" value="${question.D}"> ${question.D}
        </div>
    </div>
    `;
    i++;
});

const div = document.querySelectorAll(".questions-wrap .wrapper");

btn.addEventListener("click", () => {
    div.forEach( question => {
       let A=question.children[1].children[0].value;
       let B=question.children[2].children[0].value;
       let C=question.children[3].children[0].value;
       let D=question.children[4].children[0].value;
       questions.forEach( q => {
        if (q.ID==question.id)
        {
            let CEVAP=q.CEVAP;
            if (A === CEVAP)
            {
                question.children[1].setAttribute("style", "background-color: green;")
            }
            else if (B === CEVAP)
            {
                question.children[2].setAttribute("style", "background-color: green;")
            }
            else if (C === CEVAP)
            {
                question.children[3].setAttribute("style", "background-color: green;")
            }
            else if (D === CEVAP)
            {
                question.children[4].setAttribute("style", "background-color: green;")
            }
        }
       })
    });
    document.querySelectorAll("input").forEach( input => {
        input.disabled=true;
    })
});
