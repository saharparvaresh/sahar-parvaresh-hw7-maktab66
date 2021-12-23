class networkClass {
    constructor(name) {
        this.name = name
        this.classUnit = [1, 2, 3];
        this.classCapacity = [1, 30];
    }
    members() {
        for (let i = 0; i < this.classCapacity[this.classCapacity.length - 1]; i++) {
            this.classCapacity = this.classCapacity[i] * this.classCapacity[this.classCapacity.length - 1]
        }
        return { className: this.name, classUnit: this.classUnit.length, classCapacity: this.classCapacity, project: this.project };
    }
}

let network = new networkClass("network")

networkClass.prototype.project = true;

console.log(network.members());