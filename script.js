function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fgen = window.document.getElementsByName('radgen')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        if (fgen[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 11) {
                img.setAttribute('src' , 'foto-bebe-m.png')
                //Criança
            } else if (idade < 21) {
                img.setAttribute('src' , 'foto-jovem-m.png')
                //Jovem
            } else if (idade < 60) {
                img.setAttribute('src' , 'foto-adulto-m.png')
                //Adulto
            } else {
                img.setAttribute('src' , 'foto-idoso-m.png')
                //Idoso
            }
        } else if (fgen[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade <= 11) {
                img.setAttribute('src' , 'foto-bebe-f.png')
                //Criança
            } else if (idade < 21){
                img.setAttribute('src' , 'foto-jovem-f.png')
                //Jovem
            } else if (idade < 60) {
                img.setAttribute('src' , 'foto-adulto-f.png')
                //Adulto
            } else {
                img.setAttribute('src' , 'foto-idoso-f.png')
                //Idoso
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}