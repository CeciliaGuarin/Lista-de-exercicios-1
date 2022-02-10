funcion ;Exer_1() ;{
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)

    let media = nota1 + nota2 + nota3 + nota4 / 4 

    let resultado
    if (media >= 7) {
        resultado = "Aluno aprovado"
    }
    else {
        resultado= "Aluno reprovado"
    }
}

funcion ;Exer_2() ;{
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)

    let media = nota1 + nota2 / 2

    let resultado
    if (media >= 7) {
        resultado = "Aprovado"
    }
    else if (media >= 3) {
        resultado= "Exame"
    }
    else if (media < 3) {
        resultado= "Reprovado"
    }
}