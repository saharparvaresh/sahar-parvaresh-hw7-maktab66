class softEngineeringClass {
    constructor(name) {
        this.name = name
        this.classUnit = [1, 2, 3];
        this.classCapacity = [1, 50];
    }
    members() {
        for (let i = 0; i < this.classCapacity[this.classCapacity.length - 1]; i++) {
            this.classCapacity = this.classCapacity[i] * this.classCapacity[this.classCapacity.length - 1]
        }
        return { className: this.name, classUnit: this.classUnit.length, classCapacity: this.classCapacity, property: this.property };
    }
}

let softEngineering = new softEngineeringClass("softEngineering")

softEngineeringClass.prototype.property = "book";

console.log(softEngineering.members());