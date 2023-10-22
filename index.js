// Add your code here
function submitData(name, email) {

    return fetch("http://localhost:3000/users",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ name, email })
        })
        .then(res => res.json())
        .then(obj => {
            // Manipulate HTML to add the ID of the data
            document.body.innerHTML = `ID: ${obj.id}`;
            return obj;
        }) // Pass the data to the next then block})
        .catch(error => {
            document.body.innerHTML = `Error: ${error.message}`;
        }
        );

}
document.body.innerHTML = obj.id
document.body.innerHTML = error.message