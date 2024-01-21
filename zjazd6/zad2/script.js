 function formularz() {
        let miejscewyniku = document.getElementById("wynik")
        let wynik
        let liczba1 = document.getElementById("l1").value
        let liczba2 = document.getElementById("l2").value
        let dzialanie = document.querySelector(".wybranaopcja")
        if (dzialanie.value == "*") {
            wynik = parseFloat(liczba1) * parseFloat(liczba2)
            console.log(wynik)
        } else if (dzialanie.value == "/") {
            if (liczba1 || liczba2 == 0) {
                wynik = "nie dziel przez zero"
                console.log('zero')
            } else {
                wynik = parseFloat(liczba1) / parseFloat(liczba2)
            }
        } else if (dzialanie.value == "+") {
            wynik = parseFloat(liczba1) + parseFloat(liczba2)
        } else if (dzialanie.value == "-") {
            wynik = parseFloat(liczba1) - parseFloat(liczba2)
        }
        miejscewyniku.innerText = wynik.toString()

    }