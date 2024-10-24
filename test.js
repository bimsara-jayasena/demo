function addnewdata(){
    const data={
        "item":"cream-bun",
        "price":250.00,
        "availability":"available"
    }
    fetch('http://localhost:5555/restaurent/add',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then(json=>console.log(json))
    .catch(err=>console.error(err));
}