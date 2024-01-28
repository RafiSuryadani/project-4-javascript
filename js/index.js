var cars = 'Hello World'
//document.writeln(cars)
console.log(cars)

console.log("hey Hello world")
console.log(5)
console.log(true)
console.log(false)
console.log(3/2.5)

var fullname = "Rafi Suryadani"
var fullname = "jhon doe"

const resultTambah = 3 + 5
console.log(resultTambah)

const resultKurang = 9 - 7
console.log(resultKurang)

const resultKali = 8 * 5
console.log(resultKali)

const resultBagi = 9 / 3
console.log(resultBagi)

const resultSisa = 10 % 4
console.log(resultSisa)

// prompt
// const number1 = prompt('number1')
// const number2 = prompt('number2')
// const result2 = number1 * number2
// alert ("hasil Perkalian =" + result2)

// operator perbandingan
const result3 = 5 == '5'
console.log(result3)

const result4 = 5 === '5'
console.log(result4)

const result5 = 5 > 3
console.log(result5)

const result6 = 5 < 3
console.log(result6)


//operator logika
const nilaiUjian = 74
const nilaiAbsen = 74

const lulusUjian = nilaiUjian >= 75
const lulusAbsen = nilaiAbsen >= 75

const lulus = lulusUjian && lulusAbsen
const lulus2 = lulusUjian || lulusAbsen
console.log('Hasil Akhir:', lulus)
console.log('Hasil Akhir:', lulus2)

//ternery operator
const lulus3 = nilaiUjian >= 75 || nilaiAbsen >= 75 ? 'lulus' : 'Tidak Lulus'
console.log(lulus3)

//string tamplate
const nama = "Rafi"
const umur = "23"
console.log("Nama :" + nama + ", Usia" + umur)
console.log(`Nama : ${nama}, Usia: ${umur}`)

//Array
const mobil = ['Ayla', 'Agya', 'Calya', 'Avanza']
const motor = [
    'Vario',
    'Beat',
    'Scoopy',
    'Nmax'
]
console.log('Data Mobil:', mobil)
console.log('Data Motor:', motor)
console.table(mobil)
console.table(motor)


console.log(mobil[1])

console.log(mobil.length)

console.log(mobil.toString())

console.log(mobil.join(' - '))

console.log(mobil.pop())//remove data terakhir
console.log(mobil)

mobil.push('kijang')//menambah data terakhir
console.log(mobil)

mobil.shift() //remove data pertama
console.log(mobil)

delete mobil[0] //remove data ada sisa undefined
console.log(mobil)

const groupKendaraan = mobil.concat(motor)// untuk gabung data
console.log(groupKendaraan)

groupKendaraan.shift()
console.log(groupKendaraan)

//looping
for(i=0; i < groupKendaraan.length; i++){
    console.log(groupKendaraan[i] + '<br>')
    document.writeln ('<br><br>' + groupKendaraan[i] + '</br>' )
}

// for in
const users = {
    fullNama : 'Jhon',
    email : 'jhon@gmail.com',
    age : '25'
}
let text = ''
for (let a in users){
    text += users[a] + ''
}
console.log(text)
document.writeln(text)

//for of
let txt = ''
for (let b of groupKendaraan){
    txt += b + '<br>'
}
document.writeln('<br><br>' + txt)

//for each
const food = [
    {
        id: 1,
        rasa: 'manis',
        warna: 'merah',
        bentuk: 'bulat'

    },
    {
        id: 2,
        rasa: 'mahit',
        warna: 'hitam',
        bentuk: 'kotak'

    },
    {
        id: 3,
        rasa: 'asam',
        warna: 'kuning',
        bentuk: 'segitiga'

    }
]

food.forEach(foods => {
    for(let value in foods){
        document.writeln(`${foods[value]} <br>`)
    }
})

//conditional
const score = 65

if(score <= 60){
    document.writeln('TIDAK LULUS')
}else {
    document.writeln('LULUS')
}

if(score < 60){
    document.writeln('TIDAK LULUS')
}else if(score >= 60 && score <= 75){
    document.writeln('CUKUP')
}else{
    document.writeln('SEMPURNA')
}

const hasilUjian = score < 60 ? 'TIDAK LULUS' : score >= 60 && score <= 75 ? 'CUKUP' : 'SEMPURNA'
document.writeln(hasilUjian)


//conditional Switch case
const role = 'PRPRODUCT MANAGER'
switch (role){
    case "PROGRAMER":
    document.writeln('Coding')
    break

    case "DESIGNER":
    document.writeln('Mendesign')
    break

    case "PRPRODUCT MANAGER":
    document.writeln('Lead')
    break

    document.writeln('Kerja')
}

//FUNCTION

//decalaration
function user(fullname, email){
    document.writeln (`<br><br> Full Nama: ${fullname}, Email: ${email}` )
}
user('Rafi Suryadani', 'rafisuryadani007@gmail.com'
)

//expression1
const user2 = function(fullname, email){
    const resultUser = `<br><br> Full Nama: ${fullname}, email: ${email}`
    return resultUser
}
document.writeln(user2('Rafi Suryadani', 'rafisuryadani007@gmail.com'))

//ecpression 2
const user3 = (fullname, email) => {
    const resultUser = `<br><br> Full Nama: ${fullname}, email: ${email}`
    return resultUser
}

document.writeln(user2('Rafi Suryadani', 'rafisuryadani007@gmail.com'))