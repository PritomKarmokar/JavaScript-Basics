const form = document.querySelector('#login-form');

console.log(form);


function callFunc(){
    
    const name = document.querySelector('#name-id').value.toLowerCase() ;

    const existingUser = localStorage.getItem(name);

    if(name === ''){

        alert('form cannot be empty');

        form.action = "./index.html";
        return false;
    }

    if( !existingUser ){
        let nameObj = {
            'name' : name,
            'list' : []
        };
    
        const json_data = JSON.stringify(nameObj);
    
        localStorage.setItem(name, json_data);
    
    }
    else{
        console.log('User already exits.')
    }
    
}


form.addEventListener('submit', ()=> callFunc());

