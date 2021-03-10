 
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

  const itensToCollect = document.querySelectorAll('.itens-grid li')
   for (const item of itensToCollect){
     item.addEventListener("click",handleSelectedItem)
    }

    const collectedItens = document.querySelector("input[name=itens]");
    let selectedItens = [];

   function handleSelectedItem(event){
    // console.log(event.target)
       const itemLi = event.target;
       itemLi.classList.toggle("selected");
       const itemId = eventLi.dataset.id;
   }
