/*
    Object array to store cards and supports adding more cards in the future
*/
const cardItems = [
  {
    id: "cat",
    title: "This is card 1",
    img: "img/cat.png",
    content:
      "Cats use thier whiskers to determine space between objects in the dark",
    action: "Click & go!"
  },
  {
    id: "birds",
    title: "This is card 2",
    img: "img/birds.png",
    content:
      "Some birds have membranes that cover their eyes like goggles, enabling them to see while traveling at high speeds.",
    action: "Click & go!"
  },
  {
    id: "cat",
    title: "This is card 3",
    img: "img/cat.png",
    content: "The cheetah is the only cat that can't retract its claws.",
    action: "Click & go!"
  },
  {
    id: "birds",
    title: "This is card 4",
    img: "img/birds.png",
    content:
      "Peregrine falcons can fly up to and sometimes surpassing 200mph as they hunt prey.",
    action: "Click & go!"
  }
];

/*
    Template for cards, uses data from cardItems
*/
function cardTemplate(card) {
  return `
    <div class="card-column">
        <div class="card ${card.id}">
        <img class="card-img" src="${card.img}" alt="${card.id}"></img>
        <div class="card-content">
                <h3 class="card-title">${card.title}</h3>
                <p>${card.content}</p>
            </div>
            <div class="card-actions"><a class="card-link" href="#">${
              card.action
            }</a></div>
        </div>
    </div>
    `;
}

/*
    Add cards to the card-content-wrapper div
*/
document.getElementById("card-content-wrapper").innerHTML = `
    ${cardItems.map(cardTemplate).join("")}
`;

/*
    Helper function to hide content
*/
function hide(id) {
  let arr = id;
  for (var i = 0; i < arr.length; i++) {
    arr[i].style.display = "none";
  }
}

/*
    Helper function to show content
*/
function show(id) {
  let arr = id;
  for (var i = 0; i < arr.length; i++) {
    arr[i].style.display = "flex";
  }
}

/*
    Card show/hide feature that utilizes checkboxes to show or hide cards. Checkboxes are checked by default
    for this implementation.
*/
let birdCheck = document.getElementById("bird-check");
let catCheck = document.getElementById("cat-check");
let cats = document.getElementsByClassName("cat");
let birds = document.getElementsByClassName("birds");

birdCheck.onchange = function() {
  this.checked == false ? hide(birds) : show(birds);
};

catCheck.onchange = function() {
  this.checked == false ? hide(cats) : show(cats);
};
