function conversorRed(){
    const valorRed = Number(document.getElementById("valorRed").value)
    const calc = valorRed/5
    const result = document.getElementById("resultado").innerHTML=(`O valor de redOrb convertido em  real é R$${calc}`)
}