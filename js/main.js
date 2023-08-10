class Player {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.width = 20;
        this.height = 20;
        this.domElement = null;
        
        this.createDomElement();
    }
    createDomElement() {
        // create dom element
        this.domElement = document.createElement("div");

        //set id
        domElement.id = "player";
        domElement.style.width = this.width + "vw";
        domElement.style.height = this.height + "vh";
        domElement.style.left = this.positionX + "vw";
        domElement.style.bottom = this.positionY + "vh";

        //append to the dom
        const parentElm = document.getElementById("board");
        parentElm.appendChild(domElement);

    }
    moveLeft() {
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";

        console.log(`moving left... ${this.positionX} `);
    }
    moveRight() {
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";

        console.log(`moving right... ${this.positionX}`);
    }
}


const player = new Player();

document.addEventListener("keydown", (event) => {
    if(event.key === "ArrowLeft") {
        player.moveLeft();
    } else if (event.key === "ArrowRight") {
        player.moveRight();
    }
});