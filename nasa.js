//variable to hold references to html
let dateO = document.querySelector('#date');
let explanation = document.querySelector('#explanation');
let titles = document.querySelector('#title');
let imageUrls = document.querySelector('.imageUrl');


let apikey = "64WAwnomuAx2B2NoAFxPOB4yctBMj1XzyXGkjKDO";




btn1.addEventListener('click',function(){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`).then (res => res.json()).then(
        data =>{
        let DateData = data['date'];
        let explanationData= data['explanation'];
        let titlesData = data['title'];
        let imageUrlData = data['url'];



        dateO.innerHTML =`<span>${DateData}</span>`;
        explanation.innerHTML =`<span>${explanationData}</span>`;
        titles.innerHTML =`<span>${titlesData}</span>`;
        imageUrls.innerHTML =`  <img src=${imageUrlData} alt="" width="300" class="" />`;



       
        

    })

}
)

