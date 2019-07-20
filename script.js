
let clientsList = [];


function add(){

        let name = document.getElementById('name');
        let second_name = document.getElementById('second_name');
        let phone_number = document.getElementById('phone_number');
        let newClient = [name.value, second_name.value, phone_number.value];
    console.log(newClient);
    clientsList.push(newClient);
    localStorageClients(clientsList);
}

function getClient(){

    let storedList = localStorage.getItem('localClients');
    if (storedList == null){
        clientsList = [];
    }else{
        clientsList = JSON.parse(storedList);
    }
    return clientsList;
}

function localStorageClients (cList){

    localStorage.setItem('localClients', JSON.stringify(cList));
}

function remove(){

    localStorage.clear();
    
}

function remove(){zz
    localStorage.clear();
}