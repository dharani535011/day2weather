const root=document.getElementById("root")
const popup=document.getElementById("popup")
const overlay=document.getElementById("overlay")
const closee=document.getElementById("close")
const content=document.getElementById("content")
fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then((data)=>{
     const detials=data
     console.log(detials)
     for(let j=0;j<detials.length;j++){
        root.innerHTML+=`<div class="card card-header card-body">
        <h3>${detials[j].name.common}</h3>
        <img src="${detials[j].flags.png}" alt="flagImg">
        <p>capital:${detials[j].capital},
           region:${detials[j].region},
           country code:${detials[j].cca3}</p>
        <input type="button" value="check weather" onclick=block(${detials[j].latlng[0]},${detials[j].latlng[1]}) class="button">
    </div>`
 }   

    })
    function block(lat,lon){
        overlay.style.display="block"
          popup.style.display="block"
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&metric=celsius&appid=9c0db3ed7939ccd5321785f72a8e7c71`)
          .then(res=>res.json())
          .then((data)=>{
            content.innerText=`Temperature : min${data.main.temp_min}*C=>avg${data.main.temp}*C=>
                max${data.main.temp_max}*C,
            Description : ${data.weather[0].description} ,
         Wind Speed : ${data.wind.speed}`
        })
    
    }


    closee.addEventListener("click",()=>{
            overlay.style.display="none"
              popup.style.display="none"
            })
