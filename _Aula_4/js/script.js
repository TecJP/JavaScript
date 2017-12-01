console.log(
    /*querySelector de ID vai buscar o elemento através do id do mesmo.*/
    document.querySelector("#teste1")
)
console.log(
    /*querySelector de Class vai buscar o elemento através da class do mesmo, porém de você tiver mais de um elemento com a mesma class, o retorno do querySelector será do primeiro somente.*/
    document.querySelector(".teste2")
)
console.log(
    /*querySelector de Tag name vai buscar o elemento atraves da tag name e você ainda tme a possibilidade de adicionar uma class ou um id dentro dessa tag name no querySelector.*/
    document.querySelector("p.teste3")
)