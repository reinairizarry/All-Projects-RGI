
var loadingContact = 0;
var contactURLArray = [];
var contactArray = [];

function initApplication() {
    console.log('Mustang v1 is begining');
}

function loadIndex() {
    var indexRequest = new XMLHttpRequest();
    indexRequest.open('GET', 'https://mustang-index.azurewebsites.net/index.json');//this will load index file
    indexRequest.onload = function() {
        console.log("Index:" + indexRequest.responseText);//JSON document into index and makes it searchable
        document.getElementById("indexID").innerHTML = indexRequest.responseText;
        contactIndex = JSON.parse(indexRequest.responseText);//convert text into a JavaScript object

        for (i=0; i<contactIndex.length; i++) {
            contactURLArray.push(contactIndex[i].ContactURL);
        }
        console.log("ContactURLArray: " + JSON.stringify(contactURLArray));//converts a JavaScript value to a JSON string
    }
    indexRequest.send();
}

function loadContacts() {
    contactArray.length = 0;
    loadingContact = 0;

    if (contactURLArray.length > loadingContact) {
        loadNextContact(contactURLArray[loadingContact]);// greater than 0 load next hero
    }
}

function loadNextContact(URL) {
    console.log("URL: " + URL);
    contactRequest = new XMLHttpRequest(); //retrieve data from a URL without having to do a full page refresh
    contactRequest.open('GET', URL);
    contactRequest.onload = function() {
        console.log(contactRequest.responseText);
        var contact;
        contact = JSON.parse(contactRequest.responseText);
        console.log("Contact: " + contact.firstName);
        contactArray.push(contact);
        document.getElementById("contactsID").innerHTML = JSON.stringify(contactArray);

        loadingContact++;
        if (contactURLArray.length > loadingContact) {
            loadNextContact(contactURLArray[loadingContact]);
        }
    }

    contactRequest.send();
}


function logContacts() {
    console.log(contactArray);//shows heros and contacts array
}
