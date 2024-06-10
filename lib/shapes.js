// SVG Functions
class Circle {
    constructor(color) {
        this.color = color;
    }

    createSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">
            <circle cx="50" cy="50" r="40" fill="${this.color}" />
        </svg>`;
    
    }
}
class Square {
    constructor(color) {
        this.color = color;
    }
    createSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">
            <rect x="10" y="10" width="80" height="80" fill="${this.color}" />
        </svg>`;
    }

}
class Triangle {
    constructor(color) {
        this.color = color;
    }
    createSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">
            <polygon points="50,10 10,90 90,90" fill="${this.color}" />
        </svg>`;
    }
}

module.exports = { Triangle, Circle, Square}