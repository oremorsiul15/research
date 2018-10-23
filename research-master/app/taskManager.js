

$('#mySelect')
.append($("<option></option>")
           .attr("value",key)
           .text(value));

db.collection('users').get()
    .then(snapshot=>{
        snapshot.docs.forEach((contact)=>{
            
        });
    })
    .catch(e=>{
        console.log(e);
    });