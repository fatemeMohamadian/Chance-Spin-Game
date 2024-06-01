const btnspan = document.getElementById('btnguide')
const secguide = document.querySelector('#secguide')
const ready = document.getElementById('ready')
const inp = document.querySelector('#num')
const btnregister = document.querySelector('#log')
const login = document.getElementById('login')
const join = document.getElementById('btnjoin')
const boxphone = document.getElementById('phone')
const cancle = document.getElementById('cancle')
let x = ''
btnspan.addEventListener('click', () => {
    secguide.style.display = 'flex'
})
ready.addEventListener('click', () => {
    secguide.style.display = 'none'
})
btnregister.addEventListener('click', () => {
    // console.log(e.target.parentElement)
    if (inp.value == '') {
        alert('The Input Empty!!!!')
    }
    else {
        alert('Welcome!! Now You Can Start The Game....')
        boxphone.style.display = 'none'
        inp.value = null
        login.style.display = 'flex'
        setTimeout(() => {
            nextpage()
        }, 1000);
    }
    // محدود کردن تعداد عدد واردشده///////
    // else if(inp.value<12) {
    //     alert('Welcome!! Now You Can Start The Game....')
    //     boxphone.style.display = 'none'
    //     inp.value = null
    //     login.style.display = 'flex'
    //     setTimeout(() => {
    //         nextpage()
    //     }, 1000);
    // }
    // else{
    //     alert('Just Enter Your Phone Number!')
    // }
})
join.addEventListener('click', () => {
    boxphone.style.display = 'flex'
})
inp.addEventListener('input', () => {
    if (inp.value <= 11) {
        inp.style.border = '1px solid red'
    }
    else {
        inp.value = inp.value.slice(0, 11)
    }
})
cancle.addEventListener('click', () => {
    boxphone.style.display = 'none'
})
function nextpage() {
    window.location = "mainpage.html"
}