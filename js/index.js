// مش احسن حاجه 
// dark mood
darkMood=document.querySelector('.darkMoodBtn').addEventListener('click',function(){
    document.querySelector('body').classList.toggle('darkmood')
   
})


document.querySelector('.detailsPage').classList.add('hide')

// api
async function getCountry(){
    let api=await fetch ("https://restcountries.com/v3.1/all");
    let country  = await api.json()
   
        let content=''
    for( let i=0 ; i<country.length; i++){
    content+=`

    <div class="country-card rounded-md px-5 py-9   lightMoodNav-box shadow-lg m-2 border border-gray-200    ">
        <div class="flag"> <img  src="${country[i].flags.png}" class='countryFlag'  width='100%' height="100%"></div>
        <h2 class="name text-xl font-black py-4">${country[i].name.common }</h2>
        <ul>
            <li class='py-2 '> <span class='font-black'>Population :</span>${country[i].population}</li>
               <li class='py-2'> <span class='font-black'>Region :</span>  ${country[i].region}</li>
               <li class='py-2'> <span class='font-black'>Capital :</span> ${country[i].capital}</li>
        </ul>
    </div>
    

    `

   document.querySelector('.countryCountainer').innerHTML=content;

   

   
 
    }

    


// click at countryCountainer card

function getDetails(){
    document.querySelector('.countryCountainer' ).addEventListener('click',function(e){
        let countrytryDetails='';
         for( let j=0 ; j<country.length; j++){
          if(e.srcElement.src== country[j].flags.png){ 
      console.log(country[j].maps.openStreetMaps)
    //   console.log(country[j])
              countrytryDetails+=
            
          // flag & details caption
          `  <div class="flagDetails p-9  ">
          <img src="${country[j].flags.png }" alt="" width="100%" height="100%">
                             
          </div>
          <div class="caption p-9 py-12 ">
              <h3 class="countryDetails-name text-2xl font-black py-4 ">${country[j].name.common } </h3>
      
              <div class=" grid grid-cols-2 gap-2">
                  <ul >
                      <li class="py-3"><span class='font-black'>Native Name:</span> ${country[j].name.common } </li>
                      <li class="py-3"><span class='font-black'>Population:</span> ${country[j].population }</li>
                      <li class="py-3"><span class='font-black'>Region:</span> ${country[j].region}</li>
                      <li class="py-3"><span class='font-black'>Sub Region:</span>  ${country[j].subregion}</li>
                      <li class="py-3"><span class='font-black'>Capital:</span> ${country[j].capital}</li>
                      
                  </ul>
                  <ul>
                      <li class="py-3"><span class='font-black'>Top Level Domain:</span> ${country[j].cca2}</li>
                      <li class="py-3"><span class='font-black'>Currencies:</span>${country[j].currencies} </li>
                      <li class="py-3"><span class='font-black'>Languages:</span>  ${country[j].languages}</li>
                  </ul>
                 
                  <span class='font-black'>Border Countries:</span> 
                  <button  class="bg-white py-3 px-5 shadow-lg rounded-md ms-4  "> ${country[j].borders}</button>
                 
                      
      
      
                  
              </div>
           
          
          <div><img src=" ${country[j].maps.googleMaps}" alt="" width="100%" height="100%"></div>
          `
        // مش شغاله مع انها موجوده ف الكونسول map
        // مش عارفه اوصل لل weather
      
        }
       
       
      }
      // details 
      
        document.querySelector('.details').innerHTML=countrytryDetails
      
      //   hide countres to show details
      document.querySelector('.countriesPage').classList.add('hide')
      document.querySelector('.detailsPage').classList.remove('hide')
      // back button
      document.querySelector('.backBtn').addEventListener('click',function(){
          document.querySelector('.countriesPage').classList.remove('hide') 
          document.querySelector('.detailsPage').classList.add('hide')
      })
      
      
      })
}

getDetails()

// مش عارفه جايز يكون ف طريقه اسهل من كده بس دماغي فصلت ع التفكير 
///filter 
function filter(){
document.querySelector('.select').addEventListener('click',function(){
    let selected =document.querySelector('.select').value;
    let coutryRegion='';
    // all
   if(selected ==='all'){  
    document.querySelector('.countryCountainer').innerHTML=content; 
}
// africia
else if(selected ==='africia' ){
           
        document.querySelector('.countryCountainer').innerHTML=''; 
        for(let r=0; r<country.length;r++){
            let africiaCountries=[]

            if(country[r].region=="Africa" ){
                africiaCountries.push(country[r])
                for( let f=0;f<africiaCountries.length;f++){
                    coutryRegion+=`
                    <div class="country-card rounded-md px-5 py-9   lightMoodNav-box shadow-lg m-2 border border-gray-200    ">
                      <div class="flag"> <img  src="${africiaCountries[f].flags.png}" class='countryFlag'  width='100%' height="100%"></div>
                      <h2 class="name text-xl font-black py-4">${africiaCountries[f].name.common }</h2>
                      <ul>
                         <li class='py-2 '> <span class='font-black'>Population :</span>${africiaCountries[f].population}</li>
                         <li class='py-2'> <span class='font-black'>Region :</span>  ${africiaCountries[f].region}</li>
                          <li class='py-2'> <span class='font-black'>Capital :</span> ${africiaCountries[f].capital}</li>
                        
                      </ul>
                    </div>` 

                  

                }
                document.querySelector('.countryCountainer').innerHTML=coutryRegion; 
            }
        }
    }
// amricas
else if(selected ==='americas' ){
           
    document.querySelector('.countryCountainer').innerHTML=''; 
    for(let r=0; r<country.length;r++){
        let amiricasCountries=[]

        if(country[r].region=="North America" ||country[r].continents=="South America"){
            amiricasCountries.push(country[r])
            for( let m=0;m< amiricasCountries.length;m++){
                coutryRegion+=`
                <div class="country-card rounded-md px-5 py-9   lightMoodNav-box shadow-lg m-2 border border-gray-200    ">
                  <div class="flag"> <img  src="${amiricasCountries[m].flags.png}" class='countryFlag'  width='100%' height="100%"></div>
                  <h2 class="name text-xl font-black py-4">${amiricasCountries[m].name.common }</h2>
                  <ul>
                     <li class='py-2 '> <span class='font-black'>Population :</span>${amiricasCountries[m].population}</li>
                     <li class='py-2'> <span class='font-black'>Region :</span>  ${amiricasCountries[m].region}</li>
                      <li class='py-2'> <span class='font-black'>Capital :</span> ${amiricasCountries[m].capital}</li>
                    
                  </ul>
                </div>` 
            }
            document.querySelector('.countryCountainer').innerHTML=coutryRegion; 
        }
    }
}

// asia
else if(selected ==='asia' ){
           
    document.querySelector('.countryCountainer').innerHTML=''; 
    for(let r=0; r<country.length;r++){
        let asiaCountries=[]

        if(country[r].region=="Asia"){
            asiaCountries.push(country[r])
            for( let a=0;a<asiaCountries.length;a++){
                coutryRegion+=`
                <div class="country-card rounded-md px-5 py-9   lightMoodNav-box shadow-lg m-2 border border-gray-200    ">
                  <div class="flag"> <img  src="${asiaCountries[a].flags.png}" class='countryFlag'  width='100%' height="100%"></div>
                  <h2 class="name text-xl font-black py-4">${asiaCountries[a].name.common }</h2>
                  <ul>
                     <li class='py-2 '> <span class='font-black'>Population :</span>${asiaCountries[a].population}</li>
                     <li class='py-2'> <span class='font-black'>Region :</span>  ${asiaCountries[a].region}</li>
                      <li class='py-2'> <span class='font-black'>Capital :</span> ${asiaCountries[a].capital}</li>
                    
                  </ul>
                </div>` 
            }
            document.querySelector('.countryCountainer').innerHTML=coutryRegion; 
        }
    }
}

// europe
else if(selected ==='europe' ){
           
    document.querySelector('.countryCountainer').innerHTML=''; 
    for(let r=0; r<country.length;r++){
        let europeCountries=[]

        if(country[r].region=="Europe"){
            europeCountries.push(country[r])
            for( let p=0;p<europeCountries.length;p++){
                coutryRegion+=`
                <div class="country-card rounded-md px-5 py-9   lightMoodNav-box shadow-lg m-2 border border-gray-200    ">
                  <div class="flag"> <img  src="${europeCountries[p].flags.png}" class='countryFlag'  width='100%' height="100%"></div>
                  <h2 class="name text-xl font-black py-4">${europeCountries[p].name.common }</h2>
                  <ul>
                     <li class='py-2 '> <span class='font-black'>Population :</span>${europeCountries[p].population}</li>
                     <li class='py-2'> <span class='font-black'>Region :</span>  ${europeCountries[p].region}</li>
                      <li class='py-2'> <span class='font-black'>Capital :</span> ${europeCountries[p].capital}</li>
                    
                  </ul>
                </div>` 

              

            }
            document.querySelector('.countryCountainer').innerHTML=coutryRegion; 
        }
    }
}
// oceania
else if(selected ==='oceania' ){
           
    document.querySelector('.countryCountainer').innerHTML=''; 
    for(let r=0; r<country.length;r++){
        let oceaniaCountries=[]

        if(country[r].region=="Oceania"){
            oceaniaCountries.push(country[r])
            for( let c=0;c<oceaniaCountries.length;c++){
                coutryRegion+=`
                <div class="country-card rounded-md px-5 py-9   lightMoodNav-box shadow-lg m-2 border border-gray-200    ">
                  <div class="flag"> <img  src="${oceaniaCountries[c].flags.png}" class='countryFlag'  width='100%' height="100%"></div>
                  <h2 class="name text-xl font-black py-4">${oceaniaCountries[c].name.common }</h2>
                  <ul>
                     <li class='py-2 '> <span class='font-black'>Population :</span>${oceaniaCountries[c].population}</li>
                     <li class='py-2'> <span class='font-black'>Region :</span>  ${oceaniaCountries[c].region}</li>
                      <li class='py-2'> <span class='font-black'>Capital :</span> ${oceaniaCountries[c].capital}</li>
                    
                  </ul>
                </div>` 

              

            }
            document.querySelector('.countryCountainer').innerHTML=coutryRegion; 
        }
    }
}
})
}
filter()







// مش شغاله مش عارفه ليه 
// search
function search(searchTxt){
    let  searchResult=''
    for(let s=0; s<country.length; s++){
        // console.log(country[s].name.common)
        if( country[s].name.common.includes(searchTxt) ){
            // document.querySelector('.countryCountainer').innerHTML=''
            searchResult+=`
            <div class="country-card rounded-md px-5 py-9  bg-light shadow-lg m-2 border border-gray-200    ">
                <div class="flag"> <img  src="${country[s].flags.png}" class='countryFlag'  width='100%' height="100%"></div>
                <h2 class="name text-xl font-black py-4">${country[s].name.common }</h2>
                <ul>
                    <li class='py-2 '> <span class='font-black'>Population :</span>${country[s].population}</li>
                       <li class='py-2'> <span class='font-black'>Region :</span>  ${country[s].region}</li>
                       <li class='py-2'> <span class='font-black'>Capital :</span> ${country[s].capital}</li>
                </ul>
            </div>`
        
        
        }
        
        document.querySelector('.countryCountainer').innerHTML= searchResult;
    }
}
search()

}
    getCountry()

    

