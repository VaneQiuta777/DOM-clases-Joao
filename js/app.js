window.onload = function (){
    var board = document.querySelector(".board-js");
   
    board.addEventListener("click",addX);
};
    var centinel = true;
    
    function addX (event) {
        if (event.target.matches("td")&& event.target.textContent==="") {
            if (centinel)
                event.target.textContent = "X"
            else 
                event.target.textContent = "O"
            
            centinel = !centinel;
        }
    }
    function reset(){
        var td = document.getElementsByTagName('td');
    
        for(var i = 0; i < td.length; i++){
            td[i].innerHTML = "";
        }
    }