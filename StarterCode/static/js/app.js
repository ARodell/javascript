// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

tableData.forEach(function(row){
        var newRow = d3.select("tbody").append("tr");
        Object.entries(row).forEach(function([key, value]){
           // console.log(key, value);
            var cell = newRow.append("td");
            cell.text(value);
        });  
});

submit.on("click", function() {
    // Clear the existing table
    var selectTable = d3.select("tbody");
    selectTable.html(""); 

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
    //console.log(inputElement);
    //console.log(inputCity);  

    // Get the value property of the input element
    var inputDate = inputElement.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");
    //console.log(inputDate);
    //console.log(cityValue);

    // Use the form input to filter the data by date and/or city
    tableData.forEach(function(row){
        //console.log(row.datetime);
        if((row.datetime == inputDate || !inputDate) && (row.city === cityValue || !cityValue) && (row.state === stateValue || !stateValue) && (row.country === countryValue || !countryValue) && (row.shape === shapeValue || !shapeValue)){
            var newRow = selectTable.append("tr");
            Object.entries(row).forEach(function([key, value]){
                //console.log(key, value);
                var cell = newRow.append("td");
                cell.text(value);
            });
        }
    });
  
  });// from data.js
var tableData = data;

// YOUR CODE HERE!
