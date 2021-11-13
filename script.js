let names = ["Jean", "Sandra", "Cosmo", "Anna", "Wister", "Luiz"]


function sorteio() {
    //Nome 1
    let randomName1 = names[Math.floor(Math.random() * names.length)];

    let indexName1 = names.indexOf(randomName1);

    let name1 = names.splice(indexName1, 1)


    //Nome 2
    let randomName2 = names[Math.floor(Math.random() * names.length)];

    let indexName2 = names.indexOf(randomName2);

    let name2 = names.splice(indexName2, 1)


    //Nome 3
    let randomName3 = names[Math.floor(Math.random() * names.length)];

    let indexName3 = names.indexOf(randomName3);

    let name3 = names.splice(indexName3, 1)


    //Nome 4
    let randomName4 = names[Math.floor(Math.random() * names.length)];

    let indexName4 = names.indexOf(randomName4);

    let name4 = names.splice(indexName4, 1)


    //Nome 5
    let randomName5 = names[Math.floor(Math.random() * names.length)];

    let indexName5 = names.indexOf(randomName5);

    let name5 = names.splice(indexName5, 1)


    //Nome 6
    let randomName6 = names[Math.floor(Math.random() * names.length)];

    let indexName6 = names.indexOf(randomName6);

    let name6 = names.splice(indexName6, 1)

    //Conversão em string

    let coluna1 = name1.toString();
    let coluna2 = name2.toString();
    let coluna3 = name3.toString();
    let coluna4 = name4.toString();
    let coluna5 = name5.toString();
    let coluna6 = name6.toString();

    //Escrita no HTML
    document.querySelector("#name1").innerHTML = coluna1;
    document.querySelector("#name2").innerHTML = coluna2;
    document.querySelector("#name3").innerHTML = coluna3;
    document.querySelector("#name4").innerHTML = coluna4;
    document.querySelector("#name5").innerHTML = coluna5;
    document.querySelector("#name6").innerHTML = coluna6;
}


//Acionamento do evento

document.querySelector("#sorteio").addEventListener("click", sorteio, false);