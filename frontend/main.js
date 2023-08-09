// declare a constant:
//within the '', we put the URL to the API. We'll have tht 
//later when we implement the API via an Azure function
const functionApi = '';

//this code will grab the JSON that is provided form that API.
//grabbing the correct part of tht JSON & showing it in our HTML

const getVisitCount = () => {
    let count = 30;
    //^declare a variable that holds count data
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API :D"); //log a message to the console for debugging purposes
        count = response.count; //actually setting tht variable to the data tht's in the json response
        document.getElementById("counter").innerText = count;//grabbing the element in our HTML w/the Id 'counter'
    })
    //^fetch the data from tht URL we're providing in functionApi

}