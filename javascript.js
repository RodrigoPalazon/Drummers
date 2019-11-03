
function load()
{  
  document.getElementById("article0").innerHTML =  "<a href="+ drummers[0].link+  ">" +"<img id= "+ drummers[0].id + " src="+ drummers[0].imageUrl + " alt=" + drummers[0].lastName +"/>" + "</a>";
  
  document.getElementById("article1").innerHTML =  "<a href="+ drummers[1].link+  ">" +"<img id= "+ drummers[1].id + " src="+ drummers[1].imageUrl + " alt=" + drummers[1].lastName +"/>" + "</a>";
  
  document.getElementById("article2").innerHTML = "<a href="+ drummers[2].link+  ">" + "<img id= "+ drummers[2].id + " src="+ drummers[2].imageUrl + " alt=" + drummers[2].lastName + "/>" + "</a>";
  
  document.getElementById("article3").innerHTML = "<a href="+ drummers[3].link+  ">" +  "<img id= "+ drummers[3].id + " src="+ drummers[3].imageUrl + " alt=" + drummers[3].lastName + "/>" + "</a>";
  
  document.getElementById("article4").innerHTML = "<a href="+ drummers[4].link+  ">" +   "<img id= "+ drummers[4].id + " src="+ drummers[4].imageUrl + " alt=" + drummers[4].lastName + "/>" + "</a>";
  
  document.getElementById("article5").innerHTML ="<a href="+ drummers[5].link+ ">" + "<img id= "+ drummers[5].id + " src="+ drummers[5].imageUrl + " alt=" + drummers[5].lastName + "/>" + "</a>";
  
  document.getElementById("article6").innerHTML = "<a href="+ drummers[6].link + ">" + "<img id= "+ drummers[6].id + " src="+ drummers[6].imageUrl + " alt=" + drummers[6].lastName + "/>" + "</a>";
  
 document.getElementById("article7").innerHTML = "<a href="+ drummers[7].link + ">" + "<img id= "+ drummers[7].id + " src="+ drummers[7].imageUrl + " alt=" + drummers[7].lastName + "/>" + "</a>";
  
  document.getElementById("article8").innerHTML = "<a href="+ drummers[8].link + ">" + "<img id= "+ drummers[8].id + " src="+ drummers[8].imageUrl + " alt=" + drummers[8].lastName + "/>" + "</a>";
  
  
}



const drummers = [
  {
  id: "Vinnie",
  lastName: "Colaiuta",  imageUrl:"https://www.drummerworld.com/drummerworld2/vinniecolaiuta840.jpg",
  link:"https://www.drummerworld.com/drummers/Vinnie_Colaiuta.html"  
},
    {
  id: "Gary",
  name: 'Gary Novak',
  imageUrl: "https://www.drummerworld.com/drummerworld/garynovak550loertscher.jpg",
  link:"https://www.drummerworld.com/drummers/Gary_Novak.html"    
},
    {
  id: "Justin",
  name: "Justin Faulkner",
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxR6LdwQKkD_sBExZrGajMVlkTNxdxG2o9Cu0HzasuyNgCF_AK&s",
  link:"https://www.youtube.com/watch?v=7BVePPwlHZs"
},
    {
  id: "Dennis",
  name: "Dennis Chambers",                   imageUrl:"https://www.drummerworld.com/pics/drumpics25/dennischambers55054.jpg",
  link:"https://www.drummerworld.com/drummers/Dennis_Chambers.html"
}, 
  {
  id: "Elvin",
  name: "Elvin Jones",
  imageUrl: "https://www.drummerworld.com/pics/drumpics34/elvinjonescreasy.jpg", 
  link:"https://www.drummerworld.com/drummers/Elvin_Jones.html"
},
    {
  id: "Jojo",
  name: "Jojo Mayer",
  imageUrl: "https://www.drummerworld.com/drummerworld/jojomayerfoottechnique.jpg", 
   link:"https://www.drummerworld.com/drummers/JOJO_Mayer.html"
},
    {
  id: "Will",
  name: "Will Kennedy",
  imageUrl: "https://www.drummerworld.com/pics/drumpics10/Will-Kennedy.jpg",
  link:"https://www.drummerworld.com/drummers/William_Kennedy.html"
},
    {
  id: "Mark",
  name: "Mark Guiliana",
  imageUrl: "https://www.drummerworld.com/drummerworld/markguilianahudson550.jpg", 
  link:"https://www.drummerworld.com/drummers/Mark_Guiliana.html"
},
  
    {
  id: "Chris",
  name: "Chris Coleman",
  imageUrl: "https://www.drummerworld.com/pics/drumpics33/chriscoleman550.jpg", 
  link:"https://www.drummerworld.com/drummers/Chris_Coleman.html"
}
];

