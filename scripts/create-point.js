    
    
    function populateUFs(){
        const ufSelect = document.querySelector("select[name=uf]") 

        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json())
        .then( states => {

          for( const state of states){

            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
          }

  
        })
      }

      populateUFs() 

       // 1 teste no navegador com edição do option no create-point | Console

    document
      .querySelector("select[name=uf]")
      .addEventListener("change", () => {
          console.log("Mudei")
        } )


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
