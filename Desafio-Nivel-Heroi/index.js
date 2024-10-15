let nome = "Capitão Pirata"
let nivel = Math.floor(Math.random() * 20000) +1 ;

if(nivel <=1000){
    console.log(`O Herói ${nome} está no nível de XP ${nivel} = Ferro`)
}
else if(nivel >= 1001 && nivel <=2000){
    console.log(`O Herói ${nome} está no nível de XP ${nivel} = Bronze`)
}
else if(nivel >= 2001 && nivel <5000){
    console.log(`O Herói ${nome} está no nível de XP ${nivel} = Prata`)
}
else if(nivel >= 5001 && nivel <=7000){
    console.log(`O Herói ${nome} está no nível de XP ${nivel} = Ouro`)
}
else if(nivel >= 7001 && nivel <=8000){
    console.log(`O Herói ${nome} está no nível de XP ${nivel} = Platina`)
}
else if(nivel >= 8001 && nivel <=9000){
    console.log(`O Herói ${nome} está no nível de XP ${nivel} = Ascendente`)
}
else if(nivel >= 9001 && nivel <=10000){
    console.log(`O Herói ${nome} está no nível de XP ${nivel} = Imortal`)
}
else if(nivel > 10000){
    console.log(`O Herói ${nome} está no nível de XP ${nivel} = Radiante`)
}