const dataChampions = data

const champs = document.querySelector("#champ")

 /* dataChampions.forEach( campeon => {
    
  
    champs.innerHTML += `
    <div class="card m-3" style="width: 18rem;">
  <img src="${campeon.icon}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" id="${campeon.id}"> ${campeon.name}</h5>
    <p class="card-text">${campeon.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    
    <li class="list-group-item"> Armor: ${campeon.stats.armor} </li>
     <li class="list-group-item"> Hp: ${campeon.stats.hp} </li>
   
    <li class="list-group-item">Attackdamage: ${campeon.stats.attackdamage}</li>
    <li class="list-group-item">Attackspeed: ${campeon.stats.attackspeed}</li>
    <li class="list-group-item">Attackrange: ${campeon.stats.attackrange} </li>
    <li class="list-group-item">Crit: ${campeon.stats.crit}</li>
  </ul>
  <div class="card-body">
  <p id="${campeon.tags}" >Type Champs: ${campeon.tags} </p>
  </div>
</div>`
}); */

const select = document.querySelector("#select_champion")
console.log(select)
    
 dataChampions.forEach(campeonRole => {
        
        select.innerHTML += `<option value="${campeonRole.name}">${campeonRole.name} </option>`
 })


function filtros() {
    
    const SelectValue = document.getElementById("select_champion").value
    console.log(SelectValue)

 
    const ChampsFiltrados = dataChampions.filter(champeon => {
        
        return SelectValue == champeon.name
    })

    champs.innerHTML = ""

    ChampsFiltrados.forEach( campeon => {
    
  
    champs.innerHTML += `
    <div class="card m-3" style="width: 18rem;">
  <img src="${campeon.icon}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" id="${campeon.id}"> ${campeon.name}</h5>
    <p class="card-text">${campeon.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    
    <li class="list-group-item"> Armor: ${campeon.stats.armor} </li>
     <li class="list-group-item"> Hp: ${campeon.stats.hp} </li>
   
    <li class="list-group-item">Attackdamage: ${campeon.stats.attackdamage}</li>
    <li class="list-group-item">Attackspeed: ${campeon.stats.attackspeed}</li>
    <li class="list-group-item">Attackrange: ${campeon.stats.attackrange} </li>
    <li class="list-group-item">Crit: ${campeon.stats.crit}</li>
  </ul>
  <div class="card-body">
  <p id="${campeon.tags}" >Type Champs: ${campeon.tags} </p>
  </div>
</div>`
});

}

/* Submit date */

const form = document.querySelector("#formDate")


form.addEventListener("submit",(event)=> {
 
    event.preventDefault();
   const inputValue = document.querySelector("#champSearch").value
   

    
       const ChampsFiltrados = dataChampions.filter(champeon => {
        
        return inputValue.toLowerCase() == champeon.id
    })
     
  
    
    if (ChampsFiltrados != 0) {
        console.log(ChampsFiltrados)
   
        ChampsFiltrados.forEach(campeon => {
        
            champs.innerHTML += `
    <div class="card m-3" style="width: 18rem;" id="${campeon.name}">
  <img src="${campeon.icon}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" > ${campeon.name}</h5>
    <p class="card-text">${campeon.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    
    <li class="list-group-item"> Armor: ${campeon.stats.armor} </li>
     <li class="list-group-item"> Hp: ${campeon.stats.hp} </li>
   
    <li class="list-group-item">Attackdamage: ${campeon.stats.attackdamage}</li>
    <li class="list-group-item">Attackspeed: ${campeon.stats.attackspeed}</li>
    <li class="list-group-item">Attackrange: ${campeon.stats.attackrange} </li>
    <li class="list-group-item">Crit: ${campeon.stats.crit}</li>
  </ul>
  <div class="card-body">
  <p id="${campeon.tags}" >Type Champs: ${campeon.tags} </p>
  </div>
</div>`
        })

    } else {
      
        champs.innerHTML += ` 
       
         <div class="card m-3" style="width: 18rem; background:#a39aca;">
         <h2 class="text-center text-white"> No se encontro lo que buscabas </h2>
         <img src="./img/gnar_4x.webp" alt="">
       <h2 class="text-center text-white"> Intente nuevamente </h2>
      </div>
        
        `
    
    }
})



function marcando() {
     
    let checkboxs = document.querySelectorAll('input[name="rol"]:checked')

    let array = Array.from(checkboxs)
 champs.innerHTML = "" 
    for (let i = 0; i < array.length; i++) {
        
        const guarandoValue = array[i].value
        const devolviendoValue = dataChampions.filter(campeon => {
         return guarandoValue === campeon.tags[i]
        })
       
        if (devolviendoValue != 0) {
             devolviendoValue.forEach( campeon => {
    
  
    champs.innerHTML += `
    <div class="card m-3" style="width: 18rem;">
  <img src="${campeon.icon}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" id="${campeon.id}"> ${campeon.name}</h5>
    <p class="card-text">${campeon.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    
    <li class="list-group-item"> Armor: ${campeon.stats.armor} </li>
     <li class="list-group-item"> Hp: ${campeon.stats.hp} </li>
   
    <li class="list-group-item">Attackdamage: ${campeon.stats.attackdamage}</li>
    <li class="list-group-item">Attackspeed: ${campeon.stats.attackspeed}</li>
    <li class="list-group-item">Attackrange: ${campeon.stats.attackrange} </li>
    <li class="list-group-item">Crit: ${campeon.stats.crit}</li>
  </ul>
  <div class="card-body">
  <p id="${campeon.tags}" >Type Champs: ${campeon.tags} </p>
  </div>
</div>`
}); 
        } else {
            
            console.log("cadena vacia")
        }
        

    }

    }

