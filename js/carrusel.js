
 function shiftLeft() {
    const boxes = document.querySelectorAll(".box");
    const tmpNode = boxes[0];
    boxes[0].className = "box move-out-from-left";

    setTimeout(function() {
        if (boxes.length > 3) {
            for (let i = 3; i < boxes.length; i++) {
                boxes[i].classList.add("box--hide");
            }
        }
        boxes[1].className = "box move-to-position1-from-left";
        boxes[2].className = "box move-to-position2-from-left";



        document.querySelector(".cards__container").appendChild(tmpNode);

    }, 500);
}  




/* function shiftRight() {
    const boxes = document.querySelectorAll(".box");
    boxes[2].className = "box move-out-from-right";
    setTimeout(function() {
        const noOfCards = boxes.length;
        if (noOfCards > 3) {
            for (let i = 3; i < boxes.length; i++) {
                boxes[i].classList.add("box--hide");
            }
        }

        const tmpNode = boxes[noOfCards - 1];
        tmpNode.classList.remove("box--hide");
        boxes[noOfCards - 1].remove();
        let parentObj = document.querySelector(".cards__container");
        parentObj.insertBefore(tmpNode, parentObj.firstChild);
        tmpNode.className = "box move-to-position1-from-right";
        boxes[0].className = "box move-to-position2-from-right";
        boxes[1].className = "box move-to-position3-from-right";
    }, 500);
} */





setInterval(shiftLeft, 1400); // Cambia "el número" por el tiempo en milisegundos que deseas entre diapositivas




  