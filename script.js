// getting elements using DOM created in HTML

const gotdetails = document.getElementById("contents");
const details = document.getElementById("butn");

// using addeventlistener to show the data when button is clicked
details.addEventListener("click", () => {
fetch("https://api.gameofthronesquotes.xyz/v1/characters") /*Using fetch to get the data from API */
  .then((data) => data.json())
  .then((ele) => {
    
    // Using for loop to iterate elements from the API
    for(let i=0;i<ele.length;i++)  
    {
      gotdetails.innerHTML += `
      <div class="card">
      <div class="card-body">
      <div class="card-title">${ele[i].name}</div>
      <div class="card-house">${ele[i].house.slug}</div>
      <div class="card-text">${ele[i].house.name}</div>
      <div class="card-quotes">${ele[i].quotes}</div>
      </div>
      <div>
      `
    }
})
//  Using catch to handle the errors from API
.catch((error) => {
    console.error("Error fetching data:", error);
});
});


