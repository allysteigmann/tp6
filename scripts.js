// JavaScript for TP5


window.onload = function() {
  
  document.querySelector("#titleBanner h1").classList.add("tp");
  
  document.querySelector("#titleBanner h1").onclick = function() {  
    
    this.classList.toggle("black");
  }
  
  document.querySelector("#recipeColumns #ingredients").onclick = function() {
    
    this.classList.toggle("show");
  }
  
  document.querySelector("#recipeColumns #equipment").onclick = function() {
    this.classList.toggle("show");
  }
  
  document.querySelector("#recipeColumns #directions").onclick = function() {
    this.classList.toggle("show");
  }
  
  document.querySelector("#recipeColumns #ingredients").innerHTML += "<li>People to share with</li>";
  
  
} //end window.onload