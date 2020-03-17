
function Car(make, model, year, price, cyls, passengers, type, imageUrl, description, fuelType){
    this.make = make;
    this.model = model;
    this.year = year;
    this.dailyPrice = price;
    this.cyls = cyls;
    this.passengers = passengers;
    this.type = type;
    this.imageUrl = imageUrl;
    this.description = description;
    this.fuelType = fuelType;
}

function clearForm() {
    $("#make").val("");
    $("#model").val("");
    $("#year").val("");
    $("#dailyPrice").val("");
    $("#cyls").val("");
    $("#passengers").val("");
    $("#type").val("");
    $("#imageUrl").val("");
    $("#description").val("");
    $("#fuelType").val("");
}

function saveCar(){
    // console.log("saving car");

    var make = $("#make").val();
    var model = $("#model").val();
    var year = $("#year").val();
    var price = $("#dailyPrice").val();
    var cyls = $("#cyls").val();
    var passengers = $("#passengers").val();
    var type = $("#type").val();
    var imageUrl = $("#imageUrl").val();
    var description = $("#description").val();
    var fuelType = $("#fuelType").val();
    

    // create the CAR object
    var theNewCar = new Car(make, model, year, price, cyls, passengers, type, imageUrl, description, fuelType);

    // send the object on a POST ajax request
    $.ajax({
        url: '/catalog/saveCar',
        type: 'POST',
        data: JSON.stringify(theNewCar),
        contentType: 'application/json',
        success: function(res){
            console.log("Server says:", res);

             //clear the items
             clearForm();

             //show notification
             $("#alertSuccess").removeClass("hidden");
             //setTimeout fn and miliseconds
             setTimeout(function () {
                 $("#alertSuccess").addClass("hidden");
             }, 3000);
        },
        error: function(details){
            console.log("Error", details);
        }
    });

}

function init(){
    console.log("Register car page here!");

    $("#btnSave").click(saveCar);
}

window.onload = init;


// TODO:
/**
 * link JS with register html
 * * check the id of the button
 * create the CAR object
 * send the object on a POST ajax request
 * create the backed for POST saveCar
 */
