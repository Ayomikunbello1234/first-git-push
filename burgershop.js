let links = document.querySelectorAll(".nav");

links.forEach(link => {
    link.addEventListener("click", function(){
        links.forEach(1 => 1.classList.remove("active"));
     
        this.class .add("active");          
});
});
