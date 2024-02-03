function areaOfTriangle(a, b, c){
    const s = (a + b+ c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));   
    return area.toFixed(2);
    
}

    const a = 6;
    const b = 5;
    const c = 8;

const area = areaOfTriangle(6, 5, 8);
console.log("areaOfTriangle:", area);