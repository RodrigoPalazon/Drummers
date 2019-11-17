function onLoad() {
  addDrummers();
  document.getElementsByClassName("article-class")[0].innerHTML = "<a href=" + drummers[0].link + ">" + "<img src=" + drummers[0].imageUrl + " alt=" + drummers[0].lastName + "/>" + "</a>";
  document.getElementsByClassName("parag")[0].innerHTML = "<b>" + drummers[0].firstName + " " + drummers[0].lastName + "</b>";
}

    // ex1
    // ex1.1 create section
    // ex1.2 set attribute class to content
    // ex1.3 put all articles inside section

    // ex2
    // fix styling with flex



function addDrummers() {
  for (let drummer of drummers) {
    const newArticle = document.createElement("article");
    newArticle.setAttribute("class", "article-class");

    const newP = document.createElement("p");
    newP.setAttribute("class", "parag");
    newP.innerText = drummer.firstName + drummer.lastName ; // Vinnie Colliaute

    document.body.appendChild(newArticle);
    newArticle.appendChild(newP);

    const newLinkAnchor = document.createElement("a");
    newLinkAnchor.setAttribute("href", drummer.link);
    newArticle.append(newLinkAnchor);

    const newImg = document.createElement("img");
    newImg.setAttribute("src", drummer.imageUrl);
    newImg.setAttribute("alt", " ");
    newLinkAnchor.appendChild(newImg);
  }
}


const drummers = [
  {
    id: 1,
    firstName: "Vinnie",
    lastName: "Colaiuta",
    imageUrl: "https://www.drummerworld.com/drummerworld2/vinniecolaiuta840.jpg",
    link: "https://www.drummerworld.com/drummers/Vinnie_Colaiuta.html"
  },
  {
    id: 2,
    firstName: "Gary",
    lastName: 'Novak',
    imageUrl: "https://www.drummerworld.com/drummerworld/garynovak550loertscher.jpg",
    link: "https://www.drummerworld.com/drummers/Gary_Novak.html"
  },
  {
    id: 3,
    firstName: "Justin",
    lastName: "Faulkner",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxR6LdwQKkD_sBExZrGajMVlkTNxdxG2o9Cu0HzasuyNgCF_AK&s",
    link: "https://www.youtube.com/watch?v=7BVePPwlHZs"
  },
  {
    id: 4,
    firstName: "Dennis",
    lastName: "Chambers",
    imageUrl: "https://www.drummerworld.com/pics/drumpics25/dennischambers55054.jpg",
    link: "https://www.drummerworld.com/drummers/Dennis_Chambers.html"
  },
  {
    id: 5,
    firstName: "Elvin",
    lastName: "Jones",
    imageUrl: "https://www.drummerworld.com/pics/drumpics34/elvinjonescreasy.jpg",
    link: "https://www.drummerworld.com/drummers/Elvin_Jones.html"
  },
  {
    id: 6,
    firstName: "Jojo",
    lastName: "Mayer",
    imageUrl: "https://www.drummerworld.com/drummerworld/jojomayerfoottechnique.jpg",
    link: "https://www.drummerworld.com/drummers/JOJO_Mayer.html"
  },
  {
    id: 7,
    firstName: "Will",
    lastName: "Will Kennedy",
    imageUrl: "https://www.drummerworld.com/pics/drumpics10/Will-Kennedy.jpg",
    link: "https://www.drummerworld.com/drummers/William_Kennedy.html"
  },
  {
    id: 8,
    firstName: "Mark",
    lastName: "Guiliana",
    imageUrl: "https://www.drummerworld.com/drummerworld/markguilianahudson550.jpg",
    link: "https://www.drummerworld.com/drummers/Mark_Guiliana.html"
  },

  {
    id: 9,
    firstName: "Chris",
    lastName: "Coleman",
    imageUrl: "https://www.drummerworld.com/pics/drumpics33/chriscoleman550.jpg",
    link: "https://www.drummerworld.com/drummers/Chris_Coleman.html"
  }
];

