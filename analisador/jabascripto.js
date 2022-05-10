let valores = []

function tabuada() {
    let num = Number(document.getElementById('num').value)
    let tab = document.getElementById('tab')
    if (num >= 1 && num <= 100 && !valores.includes(num)) {
        valores.push(num)
        tab.innerHTML += `<option>Valor ${num} adicionado.</option>`
    } else {
        window.alert('Número inválido')
    }
}

function resultados() {
    let total = document.getElementById('total')
    let maior = document.getElementById('maior')
    let menor = document.getElementById('menor')
    let soma = document.getElementById('soma')
    let media = document.getElementById('media')

    total.innerText = valores.length
    maior.innerText = Math.max(...valores)
    menor.innerText = Math.min(...valores)

    let sum = valores.reduce((a, b) => a + b, 0)
    soma.innerText = sum

    let avg = (sum / valores.length) || 0
    media.innerText = avg.toFixed(1)
}
