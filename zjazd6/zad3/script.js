let auto = [
    { rok: 2020, przebieg: 15000, cena_wyjsciowa: 50000, cena_koncowa: 48000 },
    { rok: 2018, przebieg: 30000, cena_wyjsciowa: 40000, cena_koncowa: 38000 },
    { rok: 2022, przebieg: 10000, cena_wyjsciowa: 55000, cena_koncowa: 52000 },
];
let autotext=''
let bodyauto=document.getElementById('bodyauto')
auto.forEach(item=>{
    autotext +=`<tr>
                    <td>${item.rok}</td>
                    <td>${item.przebieg}</td>
                    <td>${item.cena_wyjsciowa}</td>
                    <td>${item.cena_koncowa}</td>
                    </tr>`;
})
bodyauto.innerHTML=autotext;


