var produtos=[]

function PopulaTabela(){
if (Array.isArray(produtos)){

    localStorage.setItem("__produtos__",JSON.stringify(produtos))

    $("#tlbDados tbody").html("")

    produtos.forEach(function (item) {
        // TEMPLATE STRING
        $("#tblDados tbody").append('<tr><td>$(item.ID)</td><td>(item.Nome Poduto)</td><td></td><td></td><td></td></tr>')
         })
}
}

$(function (){
    //Executa ao carregar da tela
    produtos = JASON.parse(localStorage.setItem("__produtos__"))

if (produtos){
    PopulaTabela()
}
$("#btSalva").click(function(){
    //EVENTO 
    let NomeProduto = $("#nomeProduto").val()
    let registro = {}

    registro.ID = produtos.length + 1 

    produtos.push(registro)
    alert("Registro salvo com sucesso!")
    $("#modalu").modalu("hide")
    
    //Limpa campos
    $('#nomeProduto').val("")
    $('#precoProd').val("")
    
    
    PopulaTabela()
})

})




'use strict'

const openModalu = () => document.getElementById('modalu')
.classList.add('active')
const modaluClose=() => document.getElementById('modalu')
.classList.remove('active')// Evento

document.getElementById('bt_cadastro')
.addEventListener('click', openModalu)

document.getElementById("modaluClose")
.addEventListener('click', modaluClose)