
function fetchCatalog() {
    console.log("Fetching catalog");

    $.ajax({
        type: 'GET',
        url: '/Catalog/GetCatalog',
        success: function (res) {
            console.log("From server", res);

            // TODO Sort the cars (res array) to be the cheapest first
            // ie sort the cars by price in ascending order

            var sortedList = [];
            sortedList = res.sort(function(left, right) {
                if(left.dailyPrice < right.dailyPrice){
                    return -1; // the first param goes first
                }
                else if(right.dailyPrice < left.dailyPrice){
                    return 1;
                }

                return 0;
            });

            // or simply replace the above code with just the line below
            // var sortedList = res.sort((left, right) => left.dailyPrice - right.dailyPrice);

            for (var i = 0; i < sortedList.length; i++) {
                displayCar(sortedList[i]);
            }
        },
        error: function (details) {
            console.log("Error", details);
        }
    })
}

function displayCar(car) {
    var template =
        `<div class="item">

        <div class="img-attri">
            <img src='${car.imageUrl}'>
        </div>    
    <div class="attributes">
    <label>Make:</label>
    <label>${car.make}</label>    
    </div>
    
    <div class="attributes">
    <label>Model:</label>
    <label>${car.model}</label>    
    </div>
   
    <div class="attributes">
    <label>Year:</label>
    <label>${car.year}</label>    
    </div>

    <div class="attributes">
    <label>Price/Day ($):</label>
    <label>${car.dailyPrice}</label>    
    </div>
    <br><br>   
    <div class="attributes">
    <button class="btn btn-outline-dark")>Rent Now</button>
    </div>  
    <hr>
    <div class="desc">               
       <label>${car.description}</label>
    </div>    

    </div>`

    var container = $("#catalog");
    container.append(template);
}

function init() {
    console.log("Catalog page!");

    fetchCatalog();
}

window.onload = init;