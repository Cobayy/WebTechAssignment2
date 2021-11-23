
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





function cleanUpView() {
    let contactinfo = document.querySelectorAll('.contactinfo');
    contactinfo[0].remove();    
}


function renderView(contact) {
    let main = document.querySelectorAll('.main')[0];
    let divInfo = document.createElement('div');
    let divName = document.createElement('div');
    let divImg = document.createElement('img');
    let divEmail = document.createElement('div');
    let divPhone = document.createElement('div');
    let divAddress = document.createElement('div');
    let divButtons = document.createElement('div');
    let buttonEdit = document.createElement('button')
    let buttonClose = document.createElement('button')


    divImg.src = './img/profile.jpg';
    divImg.classList.add('profilepic');
    divImg.alt = 'Profile Picture';


    divName.append(contact.name);
    divName.classList.add('contactname');


    divInfo.classList.add('contactinfo');


    divName.appendChild(divImg);
    divInfo.appendChild(divName);
    main.appendChild(divInfo);


    divEmail.append('email: ', contact.email);
    divEmail.classList.add('contactemail');


    divInfo.appendChild(divEmail);


    divPhone.append('cell: ', contact.phone);
    divPhone.classList.add('contactphone');


    divInfo.appendChild(divPhone);

    
    divAddress.append('address: ', contact .address);
    divAddress.classList.add('contactaddress');


    divInfo.appendChild(divAddress);


    buttonEdit.classList.add('button');
    buttonEdit.classList.add('edit');
    buttonEdit.value = 'Edit';
    buttonEdit.append('Edit');

    buttonClose.classList.add('button');
    buttonClose.classList.add('close');
    buttonClose.value = 'Close';
    buttonClose.append('Close');

    divButtons.classList.add('buttons');
    divButtons.appendChild(buttonEdit);
    divButtons.appendChild(buttonClose);


    divInfo.appendChild(divButtons);
}


