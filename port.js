$(function() {
    $(".carouselTour").carousel( { interval: 2000 } )
});
$("#bookingButton").click(function(){
            $('#bookingModal').modal("show");
});

function myFunction(){
    alert("Thank you!");
}