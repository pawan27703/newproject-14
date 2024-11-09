
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF8C33", "#A133FF", "#FF3333", "#33FFDD", "#FFD733", "#33FF9E"];

const shapes = ["circle", "square", "rectangle", "triangle", "diamond"];

document.getElementById("changeColorBtn").addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("shape").style.backgroundColor = randomColor;
});

document.getElementById("changeShapeBtn").addEventListener("click", () => {
    const shapeDiv = document.getElementById("shape");
    shapeDiv.className = "shape"; 
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shapeDiv.classList.add(randomShape);
});
