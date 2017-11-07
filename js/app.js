window.onload = function (){
    var board = document.querySelector(".board-js");
    /*como se investiga que funciona
    debugger*/

    /*board.addEventListener("click",function(event){
        event.target.style.backgroundColor = "green";
    } );
    board.addEventListener("dblclick",function(event){
        event.target.style.backgroundColor = "yellow";
    } );
    board.addEventListener("mouseover",function(event){
        event.target.style.backgroundColor = "grey";
    } );
}*/
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

