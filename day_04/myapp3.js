var select = document.getElementsByName('cars')[0];

select.onclick = function( event ){
    console.log( event );
};

function ClickCallback( event ){
    console.log( 'clicked by add event listener');
}

select.addEventListener('click', ClickCallback);

select.removeEventListener('click', ClickCallback);