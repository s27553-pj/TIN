//console.log('dziala')
function zad1(a, b, c) {
	if (a ** 2 + b ** 2 === c ** 2 || a ** 2 + c ** 2 === b ** 2 || b ** 2 + c ** 2 === a ** 2) {
		console.log('te liczby moga utworzyc trojkat')
	} else {
		console.log('te liczby nie moga utworzyc trojkata')
	}
}
function zad2(a, b, c) {
	for (i = a; i <= b; i++) {
		if (i % c == 0) {
			console.log(i + ' ta jest podzielna')
		} else {
			console.log(i + ' ta nie jest podzielna')
		}
	}
}
function tabliczka(a) {
	for (i = 1; i <= a; i++) {
		let wiersz = ''
		for (j = 1; j <= a; j++) {
			let wynik = i * j
			wiersz += wynik.toString().padStart(4, ' ') + ' '
		}
		console.log(wiersz)
	}
}
function choinka(a) {
	var wynik = ''
	for (i = 1; i <= a; i++) {
		for (j = i; j <= i; j++) {
			wynik += '*'
			console.log(wynik)
		}
	}
}
function choinka2(a) {
	var pole = ''

	for (let i = 1; i <= a; i++) {
		for (let j = 1; j <= a - i; j++) {
			pole += '*'
		}
		for (let k = 0; k < 2 * i - 1; k++) {
			if (k === 0 || k === 2 * i - 2 || i === a) {
				pole += '*'
			} else {
				pole += ' '
			}
		}
		for (let j = 1; j <= a - i; j++) {
			pole += '*'
		}
		pole += '\n'
	}

	console.log(pole)
}

function fibonacci(n) {
	let a = 0,
		b = 1,
		next
	for (i = 1; i <= n; i++) {
		console.log(a)
		next = a + b
		a = b
		b = next
	}
}
function poletrojkata(a, h) {
	return (a * h) / 2
}
function poleprostokata(a, b) {
	return a * b
}
function polerownolegloboku(a, h) {
	return a * h
}
function poletrapezu(a, b, h) {
	return ((a + b) * h) / 2
}
function obliczpole(figura, ...parametry) {
	switch (figura) {
		case 'trojkat':
			console.log(poletrojkata(...parametry))
			break
		case 'prostokat':
			console.log(poleprostokata(...parametry))
			break
		case 'rownoleglobok':
			console.log(polerownolegloboku(...parametry))
			break
		case 'trapez':
			console.log(poletrapezu(...parametry))
			break
		default:
			console.log('nieznana figura')
			return null
	}
}
const figura = {
	trojkat: poletrojkata,
	prostokat: poleprostokata,
	rownoleglobok: polerownolegloboku,
	trapez: poletrapezu,
}
function obliczpole2(figury, ...parametry) {
	const pole = figura[figury]
	if (pole) {
		console.log(pole(...parametry))
	} else {
		console.log('nieznana  figura')
	}
}
function pascal(n) {
	const tab = []
	for (i = 0; i < n; i++) {
		tab[i] = []
		for (j = 0; j <= i; j++) {
			if (j === 0 || j === i) {
				tab[i][j] = 1
			} else {
				tab[i][j] = tab[i - 1][j - 1] + tab[i - 1][j]
			}
		}
	}
	for (let i = 0; i < tab.length; i++) {
		console.log(tab[i].join(' '))
	}
}
function cenzurowanie(niedozwolone, zdanie) {
	const slowa = zdanie.split(' ')
	const cenzurowaneslowa = []
	for (const slowo of slowa) {
		if (niedozwolone.includes(slowo)) {
			cenzurowaneslowa.push('*'.repeat(slowo.length))
		} else {
			cenzurowaneslowa.push(slowo)
		}
	}
	console.log(cenzurowaneslowa.join(' '))
}
