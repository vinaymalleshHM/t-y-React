const image = document.getElementById("image")
const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")

const div = document.createElement("div")
const image4 = document.createElement("img")
const image5 = document.createElement("img")

// onmouseover action performing
image.addEventListener("mouseover", function() {
    image1.src = "http://1.bp.blogspot.com/_p8eFRHbwr70/SlLpYvIOZPI/AAAAAAAABnw/Nt9YbCp_Fco/s400/bio_sm.jpg"
    image2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYMPDoRP04ASNQpulI0YhIeIoTXLQUVCsDRLRlQ_ByUrz8nu-Tw&s"
})

// onmouseout action performing
image.addEventListener("mouseout", function() {
    image1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaW4_9xJlJavaNsa-J7udu9bkqQnpVHMgkvt8O57Ow3t93y5N8ng&s"
    image2.src = "https://img.gaadicdn.com/images/carexteriorimages/630x420/DC/DC-Avanti/2477/front-left-side-47.jpg"
})

// onclick action performing
image.addEventListener("click", function() {

    image4.src = 'https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-260nw-668593321.jpg'
    image5.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8DDmOYkhrs5vd0cq-B1f1WzxduWACwBL_NEJqQh1Ym-zYRwYJA&s'
    div.appendChild(image4)
    div.appendChild(image5)
    document.body.appendChild(div)


})