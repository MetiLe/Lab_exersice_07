var slideCounter = 0;
var carousel_indicators = document.querySelector('.carousel-indicators');
var carousel_inner = document.querySelector('.carousel-inner');
var spinner = document.querySelector('.overlay')




document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    setTimeout(() => {    
        spinner.style = "display:none";
        main();
}, 1500)

    
});


async function fetch_img() {

    //open the request 
    let response = await fetch('https://picsum.photos/v2/list');

    let data = await response.json();

    return data;

}

function main() {

    fetch_img().then(function(imgs) {
        
    spinner.style = "display:none";
        let outputimg = '';
        let slides = '';
        let url = '';
        slideCounter = 0

        imgs.forEach(function(img) {

            url = img.download_url;
            
            slides = `<li data-bs-target="#sildeShowContainer" data-bs-slide-to="${slideCounter+=""}"></li>`
            

            if(slideCounter == 0){

                outputimg += `<div class="carousel-item active">
                <img class="d-block" src="${url}" alt="First slide" width = 100% height=100%>
                </div>`
            }

            else{

                outputimg += `<div class="carousel-item">
                <img class="d-block" src="${url}" alt="First slide" width = 100% height=100%>
                </div>`
            }

            slideCounter+=1;
           
 });
                
            carousel_indicators.innerHTML = slides;
            carousel_inner.innerHTML = outputimg;
             
      })
        .catch(function(err) {
            spinner.style.display="block"
            console.log(err);
         
        });

}