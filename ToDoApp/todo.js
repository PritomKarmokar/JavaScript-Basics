const task_form = document.querySelector('#task-form');

// Function for getting username from the url

function getName(){
    
    const url = document.URL;
    let nameKey = url.substr(url.lastIndexOf('=') + 1, url.length);
    nameKey = nameKey.toLowerCase().replace(/\+/g, ' ');

    return nameKey;

}

// console.log( getName() );

function addTask( name , title)
{

    const obj = JSON.parse( 
        localStorage.getItem( name )
    );


    console.log( obj.name );
    // console.log( obj.name );
    // console.log( obj.list );

    if(title === ''){
        alert('Taskfield cannot be empty.')
    }
    else {
        obj.list.push(title);

        localStorage.setItem( name, JSON.stringify(obj) );
    }
}



task_form.addEventListener('submit', ( e )=> {
    
    // console.log('okay');
    e.preventDefault();

    const listInput = document.getElementById('task-input').value;

    console.log( listInput);
    addTask( getName() , listInput );
    // console.log( obj.list );

    window.location.reload(true);
})

// Function for displaying todo list
function displayTasks( name ){

    const todolist_container = document.querySelector('#todolist-container');

    const obj = JSON.parse( 
        localStorage.getItem( name )
    );

    if(obj.list.length == 0){
        todolist_container.innerHTML = '<h2 class="todo-title">You have nothing to do now.</h2>'
    }
    else {
        for(let i = 0; i < obj.list.length; i++){
            todolist_container.innerHTML += `
            <div class="todolist-div">
                <input class="todo-title" type="text" style="width:300px;" value="${obj.list[i]}" readonly>
                <input class="edit-btn edit"  type="submit" value="Edit">
                <input class="delete-btn" type="submit" value="Delete">
            </div>
            `;
        }
    }
}


// Function for deleting todo
function deleteTask( name )
{
    const obj = JSON.parse( 
        localStorage.getItem( name )
    );

    const delete_btn = document.getElementsByClassName('delete-btn');

    for(let i = 0; i < delete_btn.length; i++){
        delete_btn[i].addEventListener('click', ()=>{
            obj.list.splice(i, 1);
            localStorage.setItem(name , JSON.stringify(obj));
            window.location.reload(true);
        })
    }
}


// Function for editing a todo value. 

function editTodo( name )
{
    const obj = JSON.parse( 
        localStorage.getItem( name )
    );

    const todo_title = document.getElementsByClassName('todo-title');
    const edit_btn = document.getElementsByClassName('edit-btn');
    // const list = obj.list;

    for(let i = 0; i < edit_btn.length; i++){
        edit_btn[i].addEventListener('click', (e) => {

            e.preventDefault();

            if(todo_title[i].hasAttribute('readonly')){
                todo_title[i].removeAttribute('readonly');
                console.log('okay');
            }
            else{
                todo_title[i].setAttribute('readonly', 'readonly');
                obj.list[i] = todo_title[i].value;
            }

            if(edit_btn[i].classList.contains('edit')) edit_btn[i].classList.toggle('save');

            if(edit_btn[i].classList.contains('save')) edit_btn[i].value = 'Save';
            else edit_btn[i].value = 'Edit';

            const json_data = JSON.stringify(obj);
            localStorage.setItem(name, json_data);
        })
    }
     
}

displayTasks( getName() );

deleteTask( getName() );

editTodo( getName() );