let btnAre = document.getElementById("btnAre")
let btnIs = document.getElementById("btnIs")
let btnHas = document.getElementById("btnHas")
let answer = document.getElementById('answer')
let btnTranslate = document.getElementById('btnTranslate')

btnIs.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    let image1 = document.getElementById('img01')
    image1.style.visibility = 'hidden'
    let image2 = document.getElementById('img02')
    image2.style.visibility = 'visible'
    answer.innerHTML = "Is"
    btnIs.style.background = 'lime'
    answer.style.color = 'lime'
    btnIs.disabled = 'true'
    btnAre.disabled = 'true'
    btnHas.disabled = 'true'
})

btnHas.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    answer.innerHTML = 'has'
    btnHas.style.background = 'red'
    answer.style.color = 'red'
    btnHas.disabled = 'true'
})

btnAre.addEventListener('click', function() {
    let audio = document.getElementById('wrong2')
    audio.play()
    answer.innerHTML = "Are"
    answer.style.color = 'red'
    btnAre.style.background = ' red'
    btnAre.disabled = 'true'
})

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Há muito dinheiro no porquinho (cofrinho)?'
    setTimeout(() => {
        btnTranslate.innerHTML = 'Translate'
    }, 3000);
})



