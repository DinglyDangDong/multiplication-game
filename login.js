function nextPage (){
    var p1 = document.getElementById("inp1").value;
    localStorage.setItem("i1", p1);
    window.location = "game.html";
}