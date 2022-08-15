document.getElementById("Button").addEventListener("click", () => {
    
    const massValue = document.getElementById("mass").value
    const specificHeatValue = document.getElementById("specificHeat").value
    const temperatureValue = document.getElementById("temperature").value
    
    const HeatContent = massValue*specificHeatValue*temperatureValue
    
    document.getElementById("text").innerHTML = "The Heat Content is " + HeatContent +" Joule"
    document.getElementById("showdiv").style.display = "block"
})

document.getElementById("removeshowdiv").addEventListener("click", () => {
    document.getElementById("showdiv").style.display = "none"

})

document.getElementById("showdiv").addEventListener("click", () => {
    document.getElementById("showdiv").style.display = "none"

})

