function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('class', 'rounded-circle')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'images/baby-boy.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/kid-boy.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/man.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'images/old-man.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'images/baby-girl.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/kid-girl.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/woman.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'images/old-woman.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}
