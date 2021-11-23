
function cleanUpIndex() {
    let elements = document.querySelectorAll('.contact');
    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();

    }
};



function createSingleIndex() {
    let main = document.querySelectorAll('.main');
    let elementA = document.createElement('a');
    let elementDiv = document.createElement('div');
    let elementP = document.createElement('p');

    elementA.appendChild(elementDiv);
    elementA.href = 'page3.html';
    elementP.appendChild(contact.name);
    elementDiv.appendChild(elementP);
    elementDiv.classList.add('contact');

    main[0].appendChild(elementA)
};



let contactList = [
    {
      name: "Yo quiero taco bell",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
];



function renderIndex(contact) {
    let main = document.querySelectorAll('.main');
       
    for (let i = 0; i < contactList.length; i++) {
        let elementA = document.createElement('a');
        let elementDiv = document.createElement('div');
        let elementP = document.createElement('p');

        elementP.append(contactList[i].name);
        elementDiv.appendChild(elementP);
        elementDiv.classList.add("contact");
        elementA.appendChild(elementDiv);
        elementA.href = "page3.html";

        main[0].appendChild(elementA);
    }
};


