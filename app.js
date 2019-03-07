


$.get("/api/reserve", function(data){
    data = data.reservation
for(let i = 0; i< data.length; i++){
    console.log(data[i]);

    let reservedTable = $("<li class='tables-reserved'>");

    reservedTable.append($("<h2>").text("customerName: " + data[i].name));
    reservedTable.append($("<h2>").text("phoneNumber: " + data[i].number));
    reservedTable.append($("<h2>").text("customerEmail: " + data[i].email));
    reservedTable.append($("<h2>").text("customerID: " + data[i].id));


}
})

$.get("/api/waitlist", function(data){
    data = data.reservation
    for(let i = 0; i< data.length; i++){
        console.log(data[i]);

        let waitList = $("<li class='wait-list'>");

        waitList .append($("<h2>").text("customerName: " + data[i].name));
        waitList .append($("<h2>").text("phoneNumber: " + data[i].number));
        waitList .append($("<h2>").text("customerEmail: " + data[i].email));
        waitList .append($("<h2>").text("customerID: " + data[i].id));
    
    
    }
    })







