class Auto {
	constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
		this.rok = rok
		this.przebieg = przebieg
		this.cena_wyjsciowa = cena_wyjsciowa
		this.cena_koncowa = cena_koncowa
	}
	a() {
		return (this.cena_wyjsciowa += 1000)
	}
	b() {
		const obecnyrok = new Date()
		const wiek = obecnyrok.getFullYear() - this.rok
		this.cena_koncowa = this.cena_wyjsciowa - 1000 * wiek
		return 'wiek auta: ' + wiek + ' cena wyjsciowa: ' + this.cena_wyjsciowa + ' cena koncowa: ' + this.cena_koncowa
	}
	c() {
		const obnizka = Math.floor(this.przebieg / 100000)
		this.cena_koncowa = this.cena_koncowa - obnizka * 10000
		return this.cena_koncowa
	}
	d(nowyPrzebieg,nowyRocznik){
		this.przebieg =nowyPrzebieg;
		this.rok=nowyRocznik;
		this.b()
		this.c()
		return this
	}
}
const auto1 = new Auto(2005, 300000, 50000, 0)
const auto2= new Auto(1999,333333,5555555,0)
const auto3 = new Auto(2010,44444444,6666666,0)
const tablicaaut = []
function e(autodododania){
	if(autodododania.cena_wyjsciowa>10000){
		tablicaaut.push(autodododania);
		console.log('dodano samochod do tablicy')
	}else {
		console.log('nie dodano samochodu do tablicy, cena jest zbyt niska')
	}
}
function f(){
	tablicaaut.forEach(auto => { auto.rok+=1})
	console.log('zwiekszono rok dla wszystkich aut w tablicy')
	}

class Ocena {
	constructor(przedmiot, wartosc) {
		this.przedmiot = przedmiot;
		this.wartosc = wartosc;
	}
}
class Student {
	sredniaocen = 0
	tablicaocen = []
	constructor(imie, nazwisko) {
		this.imie = imie
		this.nazwisko = nazwisko
	}

	hello() {
		return 'Witaj ' + this.imie + ' ' + this.nazwisko + ', Twoja srednia ocen to: ' + this.sredniaocen
	}
	set oceny(ocena) {
		if (ocena instanceof Ocena) {
			this.tablicaocen.push(ocena)
			this.obliczsrednia()
		} else {
			console.error('Przekazany obiekt nie jest instancja klasy')
		}
	}
	obliczsrednia() {
		const sumaocen = this.tablicaocen.reduce((suma, ocena) => suma + ocena.wartosc, 0)
		this.sredniaocen = sumaocen / this.tablicaocen.length
	}
	get pobierzOceny() {
		const ocenytekst = this.tablicaocen.map(ocena => `${ocena.przedmiot} - ocena ${ocena.wartosc}`).join('. ');
		return ocenytekst;
	}
}
const student1 = new Student('Jan', 'Kowalski')
const ocenamatematyka = new Ocena('Matematyka', 4.0)
const ocenatin = new Ocena('TIN', 5.0)
student1.oceny = ocenamatematyka
student1.oceny = ocenatin
