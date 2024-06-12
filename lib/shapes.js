// Export the Circle class with constructor and createSVG method

class Circle {
    constructor(text, textColor, color) {
        this.color = color;
        this.text= text;
        this.textColor = textColor;
    }

    setColor(color) {
        this.color = color;
    }
    
    render() {
        return this.createSVG();
    
    }

    createSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">
            <circle cx="50" cy="50" r="40" fill="${this.color}" />
            <text x="50" y="50" font-size="20" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
        </svg>`;
    
    }
}
class Square {
    constructor(text, textColor, color) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
    setColor(color) {
        this.color = color;
    }
    
    render() {
        return this.createSVG();
    
    }
    createSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">
            <rect x="10" y="10" width="80" height="80" fill="${this.color}" />
            <text x="50" y="50" font-size="20" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
        </svg>`;
    }

}
class Triangle {
    constructor(text, textColor, color) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
    setColor(color) {
        this.color = color;
    }
    createSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">
            <polygon points="50, 10 90, 90 10, 90" fill="${this.color}" />
            <text x="50" y="50" font-size="20" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
        </svg>`;

    }
    
    
    render() {
        return this.createSVG();
    
    }
    

}

module.exports = { Triangle, Circle, Square}