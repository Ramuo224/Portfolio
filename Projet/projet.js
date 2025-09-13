const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});
const scrollScale =document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom =document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop =document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

// Btn retour

document.getElementById('btn-retour').addEventListener('click',function(e){
 e.prevent();
 window.history.back();
});

