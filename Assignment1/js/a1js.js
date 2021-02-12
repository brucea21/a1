class Movie{
   constructor(name, price, image, genre){
     this.name= name;
     this.price = price;
     this.image = image;
     this.genre = genre;

    }
}
var movies =
 [
{"name":"lion king","price ": "$20.00", "image": "images/king.jfif","genre": "cartoon" },
{"name":"Batman","price ": "$25.00", "image": "images/batman.jfif","genre": "cartoon"},
{"name":"Avengers","price ": "$30.00", "image": "images/avengers.jpg","genre": "action"}


 ]

 var moviestr = JSON.stringify(movies);
 console.log(moviestr);
 localStorage.setItem("movies", moviestr);

 $(document).ready(function(){
    var selected = $('#selected').val();
    if (selected == "one" ){
         $("#output").html("<p>  " + movies.name +"</p> </br>");
         $("#output").append("<p>  " + movies.price +"</p> </br>");
         $("#output").append("<p>  " + movies.image +"</p> </br>");
         $("#output").append("<p>  " + movies.genre +"</p> </br>");
    }
    if (selected == "two" ){
        $("#output").html("<p>  " + movies.name +"</p> </br>");
        $("#output").append("<p>  " + movies.price +"</p> </br>");
        $("#output").append("<p>  " + movies.image +"</p> </br>");
        $("#output").append("<p>  " + movies.genre +"</p> </br>");
   }
   if (selected == "three" ){
    $("#output").html("<p>  " + movies.name +"</p> </br>");
    $("#output").append("<p>  " + movies.price +"</p> </br>");
    $("#output").append("<p>  " + movies.image +"</p> </br>");
    $("#output").append("<p>  " + movies.genre +"</p> </br>");
}
 });