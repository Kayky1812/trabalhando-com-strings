const nome = prompt ("Digite seu nome completo");
document.body.innerHTML = (`Seu nome é ${nome} <br>`) 


document.body.innerHTML += (`Seu nome tem ${nome.length} letras <br>`)

document.body.innerHTML += (`A segunda letra do seu nome é ${nome.charAt(1)} <br> `)

document.body.innerHTML += (`O primeiro indice da letra A no seu nome, é  ${nome.indexOf("a")} <br>`)

document.body.innerHTML += (`as ultimas 3 letras do seu nome são ${nome.slice(-3,nome.length)} <br>`)

document.body.innerHTML += (`As palavras do seu nome são ${nome.split(" ")} <br>`)

document.body.innerHTML += (`O seu nome em letras Maiuscula são  ${nome.toUpperCase(nome)} <br>`)

document.body.innerHTML += (`O seu nome em letraas minusculas são ${nome.toLowerCase(nome)} <br>`)