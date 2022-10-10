// Add your code here
const formData = {
    name: "Mary Shelley",
    email: "maryshelley@lady.com"
  };
  
const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

function submitData( formData ) {
  return fetch( "http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        console.log(object);
        document.body.innerHTML = object [ "id" ];
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    });
  };
