 
    function populateUFs() {
        const ufSelect = document.querySelector("select[name=uf]") 

        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json())
        .then( states => {

          for( const state of states ){

            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
          }

  
        })
      }

      populateUFs() 

      // const stateInput  esconder input para não aparecer dados na url -->

      function getCities(event) {
        const citySelect = document.querySelector("select[name=city]")
        const stateInput = document.querySelector("input[name=state]")

        const ufValue = event.target.value

        const indexOfSelectedState = event.target.selectedIndex
        stateInput.value = event.target.options[indexOfSelectedState].text

       //  const indexOfSelectedCity=event.target.selectedIndex
       //  citySelect.value=event.target.options[indexOfSelectedCity].text

        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`     

                //Limpando campo para o carregamento
                citySelect.innerHTML ="<option value>Selecione a Cidade</option>"
                citySelect.disabled=true


        fetch(url)
        .then( res => res.json())
        .then( cities => {

          for( const city of cities ){

          citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
          }

          citySelect.disabled=false
 
          })

      }

     
document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)  

            // itens de coleta all li

  const itensToCollect = document.querySelectorAll('.items-grid li')
   for (const item of itensToCollect){
     item.addEventListener("click",handleSelectedItem)
    }

    const collectedItems = document.querySelector("input[name=items]")
    let selectedItems = []

   function handleSelectedItem(event){
    // console.log(event.target)
       const itemLi = event.target
       itemLi.classList.toggle("selected")
       const itemId = eventLi.dataset.id
   }


// Verificar se existem itens selecionados, se sim 
// pegar os itens selecionados

const alreadySelected = selectedItems.findIndex(item => {
    const itemFound = item == itemId // isso será true ou false
    return itemFound
})

        // Se já estiver Selecionado
if (alreadySelected >= 0) {
    //tirar da seleção
    const filredItems = selectedItems.filter(item => {
        const itemIsDifferent = item != itemId      // false
        return itemIsDifferent
    })

    selectedItems = filteredItems

    } else {
        // se não estiver selecionado
        // adcionar á seleção
        selectedItems.push(itemId)
}

        // Atualizar o campo escondido com os itens selecionados
        collectedItems.value = selectedItems


/**                         **** Notas ***
 *         
                        
*   Execute a function populateUFs(){
*   carregado o no console f12 o evento.target e exibido o campo Utilizado.
*   o no console f12 evento.target  carregado tambem o valor ex: piaui 22
*   de    console.log(event.target.value) para       const ufValue = event.target.value
 * 
 * 
*/

//            <!-- target abre outra pagina Ex: target="blanck" abrir pagina em branco> -->


    
 //     console.log("event.target")

// A Função getCities() ira executar pegar do document quando mudar o Change o objeto getCities para popular dentro do select


// 1 teste no navegador com edição do option no create-point | Console
/*
    document
      .querySelector("select[name=uf]")
      .addEventListener("change", () => {
          console.log("Mudei")
        } )
*/

//   .addEventListener("chaches", () => {  Ouvidor de eventos mudança Ex: Click, carregamento de pagina
//   .querySelector("select [name=uf]")  Essa query utiliza o campo select em busca um seletor especifico de nome UF 


         
     // A promessa ira retornar ou não algo do site.
     // então que a função dela seja resposta e que retorne essa resposta em json()
     // .then - Então
     // .catch -  Utilizado em caso de erro de busca
     
     // *** FUNÇÃO    
     //         .then(function(res) {return res.json() })
    
     /*    Função anonima retornando um valor
           EX: .then ( () => {} )
               .then(data=>{
        
              })
       */   
     /* Quando a função tem menos de uma linha não precisa ultilizar return nem {}
           EX: .then(res => res.json())     | SIMPLIFICADA
       *///    .then(res => { res.json() }) | COMPLICADA

       ///          ufSelect.innerHTML = ufSelect.innerHTML + `<option value="1">Valor</option>`


