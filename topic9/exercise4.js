circle = {
    name: "circle",
    radius: 5,
    materialCostPerUnitArea: 2,
    calculateArea: function(){
        area = 3.142 * this.radius * this.radius
        return area
    },
    
}

square = {
    name: "square",
    length: 4,
    materialCostPerUnitArea: 7,
    calculateArea: function(){
        area = this.length * this.length
        return area
    },
    
}

rectangle = {
    name: "rectangle",
    length: 8,
    width: 3,
    materialCostPerUnitArea: 4.5,
    calculateArea: function(){
        area = this.length * this.width
        return area
    },
    
}

triangle = {
    name: "triangle",
    base: 3.5,
    height: 5,
    materialCostPerUnitArea: 3,
    calculateArea: function(){
        area = 0.5 * this.base * this.height
        return area
    },
    
}

function calculateMaterialCost(area, materialCostPerUnitArea){
        return area*materialCostPerUnitArea
    }

shapes = [circle, square, rectangle, triangle]

for(i=0;i<shapes.length;i++){
    area = shapes[i].calculateArea()
    let cost = calculateMaterialCost(area, shapes[i].materialCostPerUnitArea)
    console.log(shapes[i].name + 
        "\nArea: " + area + 
        "\nMaterial Cost: " + cost + 
        "\n");
}