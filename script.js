
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
    divAddress.append('address: ', contact.address);
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



function cleanUpCreate() {
    let contactedit = document.querySelectorAll(".contactedit")
    contactedit[0].remove()
}



function renderCreate(contact) {
    let main = document.querySelectorAll(".main")
    let contactEdit = document.createElement("div");

    contactEdit.classList.add("contactedit")

    let contactImg = document.createElement("div");
    contactImg.classList.add("contactimg")

    let profilePic = document.createElement("img");
    profilePic.classList.add("profilepic");
    profilePic.src = "./img/profile.jpg";
    profilePic.alt = "Profile picture";
    contactImg.appendChild(profilePic);

    let form = document.createElement("form");

    let inputContainer1 = document.createElement("div");
    inputContainer1.classList.add("inputcontainer");
    form.appendChild(inputContainer1)

    let contactName = document.createElement("input")
    contactName.type = "text";
    contactName.id = "contactname";
    contactName.name = "contactname";
    contactName.placeholder = "Contact Name";
    contactName.value = contactList.name;
    inputContainer1.appendChild(contactName);

    let NameField = document.createElement("button")
    NameField.classList.add("extrafield");
    NameField.id = "extranamefield";
    NameField.name = "extranamefield";
    NameField.append("+");
    inputContainer1.appendChild(NameField);

    let inputContainer2 = document.createElement("div");
    inputContainer2.classList.add("inputcontainer");
    form.appendChild(inputContainer2);

    let contactPhone = document.createElement("input");
    contactPhone.type = "tel";
    contactPhone.id = "contactphone";
    contactPhone.name = "contactphone";
    contactPhone.placeholder ="Contact Phone";
    contactPhone.value = contactList.phone;
    inputContainer2.appendChild(contactPhone);

    let PhoneField = document.createElement("button")
    PhoneField.classList.add("extrafield");
    PhoneField.id = "extraphonefield";
    PhoneField.name = "extraphonefield";
    PhoneField.append("+");
    inputContainer2.appendChild(PhoneField);


    let inputContainer3 = document.createElement("div");
    inputContainer3.classList.add("inputcontainer");
    form.appendChild(inputContainer3);

    let contactAddress = document.createElement("input");
    contactAddress.type = "text";
    contactAddress.id = "contactaddress";
    contactAddress.name = "contactaddress";
    contactAddress.placeholder = "Contact Address";
    contactAddress.value = contactList.address;
    inputContainer3.appendChild(contactAddress);

    let AddressField = document.createElement("button");
    AddressField.classList.add("extrafield");
    AddressField.id = "extraaddressfield";
    AddressField.name = "extraaddressfield";
    AddressField.append("+");
    inputContainer3.appendChild(AddressField);

    let inputContainer4 = document.createElement("div");
    inputContainer4.classList.add("inputcontainer");
    form.appendChild(inputContainer4);

    let contactEmail = document.createElement("input")
    contactEmail.type = "email";
    contactEmail.id = "contactemail";
    contactEmail.name = "contactemail";
    contactEmail.placeholder = "Contact Email";
    contactEmail.value = contactList.email;
    inputContainer4.appendChild(contactEmail);

    let EmailField = document.createElement("button");
    EmailField.classList.add("extrafield");
    EmailField.id = "extraemailfield";
    EmailField.name = "extraemailfield";
    EmailField.append("+");
    inputContainer4.appendChild(EmailField);

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");
    form.appendChild(buttons);

    let buttonSave = document.createElement("button");
    buttonSave.classList.add("button");
    buttonSave.classList.add("save");
    buttonSave.type = "submit";
    buttonSave.id = "savecontact";
    buttonSave.name = "savecontact";
    buttonSave.append("Save Contact");
    buttons.appendChild(buttonSave);

    let buttonCancel = document.createElement("button");
    buttonCancel.type = "reset";
    buttonCancel.classList.add("button");
    buttonCancel.classList.add("save");
    buttonCancel.id = "cancel";
    buttonCancel.name = "cancel"
    buttonCancel.value = "Close";
    buttonCancel.append("Cancel");
    buttons.appendChild(buttonCancel);

    contactEdit.appendChild(contactImg);
    contactEdit.appendChild(form);

    main[0].appendChild(contactEdit);
}

