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

fetch("https://fakestoreapi.com/products",{
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
