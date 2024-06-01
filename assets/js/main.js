const ready2 = document.getElementById('ready2')
const secguide2 = document.querySelector('#secguide2')
const btnspan2 = document.getElementById('btnguide2')
const btnspin = document.querySelector('#spin')
const boxmain = document.querySelector('#boxmain')
const heart = document.getElementById('heart')
const result = document.getElementById('result')
const boxres = document.querySelector('#boxres')
const btnok = document.querySelector('#boxres>button')
const money = document.querySelector('#money')
const boxpriz = document.querySelector('#boxpriz')
const allspan = document.querySelector('#allspan')
const chance = ['50% off for Product', 'Free Delivery', '200$ for You!', 'Sorry...Null', 'Ipad Pro', '90% Off for IELTS PLANET', '75% Off For Subscription', 'iPhone13', 'MacBook', '20% Off For Products', 'Sorry...Null', 'Travel To Spain']
let spinner = ''
let flag = 1
let m = 1
ready2.addEventListener('click', () => {
    secguide2.style.display = 'none'
})
btnspan2.addEventListener('click', () => {
    secguide2.style.display = 'flex'
})
spin.addEventListener('click', (e) => {
    if (flag <= 2) {
        spinner = Math.floor(Math.random() * chance.length)
        console.log(chance[spinner])
        document.getElementById('s1').play()
        let z = (1800 + (spinner * 30)) + ((Math.floor(Math.random() * 20)) + 5)
        boxmain.style.transform = 'rotate(' + z + 'deg)'
        e.target.classList.remove('shadow-myshadow');
        e.target.classList.add('shadow-nextshadow');
        setTimeout(() => {
            document.getElementById('s1').pause()
            boxres.style.display = 'flex'
            if (chance[spinner] == 'Sorry...Null') {
                result.innerHTML = 'You Could not Win anything!</br></br>' + chance[spinner] + '';
                document.getElementById('s3').play()
            }
            else {
                document.getElementById('s2').play()
                result.innerHTML = 'Congratulation!!</br></br>You Win ' + chance[spinner] + '';
                allspan.style.display = 'flex'
                money.innerHTML = m++
                let _p = document.createElement('p')
                _p.classList.add('w-full')
                _p.classList.add('font-project')
                _p.classList.add('text-xl')
                _p.classList.add('pl-[15px]')
                _p.classList.add('my-[15px]')
                _p.innerHTML = chance[spinner]
                boxpriz.appendChild(_p)
            }
            boxmain.style.transition = '1s'
            boxmain.style.transform = 'rotate(0deg)'
            setTimeout(() => {
                boxmain.style.transition = '5s'
            }, 1000);
        }, 5500);
        heart.innerHTML = '1'

    }
    else {
        heart.innerHTML = '0'
        alert('Your Chance End!!')
    }
    flag++
})
btnok.addEventListener('click', () => {
    boxres.style.display = 'none'
    allspan.style.display = 'none'
})
document.querySelector('#prize').addEventListener('click', () => {

    boxpriz.parentElement.style.display = 'flex'
})
document.getElementById('btndel').addEventListener('click', () => {
    boxpriz.parentElement.style.display = 'none'
})