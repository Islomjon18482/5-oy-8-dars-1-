const inp = document.querySelector(".inp__btn input")
const btn = document.querySelector(".inp__btn button")
const block = document.querySelector(".block")
const error = document.querySelector(".error")

function validate(){
    if(!inp.value){
        inp.focus()
        return false
    }
    if(!inp.value.trim()){
        inp.focus()
        inp.value = ""
        return false
    }
    return true
}

function creat(item){
    return `<div class="wrapper">
    <div class="border">
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>            
        <div class="wrapper__text">
            <p class="city">${item.name}</p>
            <p class="tmp">Temperature ${Math.trunc(item.main.temp -272.15)}℃</p>
        </div>
    </div>
</div>`
}

btn.addEventListener("click", function(){
    if(validate()){
        let card = ''
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=56ff80ac3a0c0f5f2e37a0de8ad98800`
        fetch(api, {
            method: "GET"
        })
        .then((data) =>{
            return data.json()
        })
        .then(data1 =>{
            card = creat(data1)
            block.innerHTML += card  
        })
        .catch(()=>{
            error.style.display = "block"
        })
    }
})
