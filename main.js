let glavniy = document.getElementById("glavniy")
let body = document.body


fetch("https://fakestoreapi.com/products",{
    method:"GET",
    headers:{
        "Content-Type":"applicotion/json"
    },
})
.then((respons)=>{
    console.log(respons)
    return respons.json()
}).then((date)=>{
    console.log(date)
    date.forEach((soz)=>{
        let div = document.createElement("div")
        div.innerHTML = `
        <h1>${soz.id}</h1>
        <p>${soz.title}</p>
        `

        glavniy.appendChild(div)
    })
})

fetch("https://fakestoreapi.com/products/12",{
    method:"DELETE",
    headers:{
        "Content-Type":"applicotion/json"
    }
})
.then((respons)=>{
    console.log(respons)
})

fetch("https://fakestoreapi.com/products",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
            title:"dd",
            body:"ii",
            userId:1
    })

})
.then((respon)=>{
    console.log(respon)
})

fetch("https://fakestoreapi.com/products/3",{
    method:"PUT",
    headers:{
        "Content-Type":"applicotion/json"
    },
    body:{
        title: "sanjar",
        body:"mrs",
        userId: 4,
    }
})
.then((respons)=>{
    console.log(respons)
})

fetch("https://fakestoreapi.com/products/12",{
    method:"PATCH",
    headers:{
        "Content-Type":"applicotion/json"
    },
    body:{
        body:"mmm"
    }
})
.then((respons)=>{
    console.log(respons)
})

