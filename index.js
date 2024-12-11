function validateEmail(email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
        const err = new Error('Email inválido.');
        err.input = 'email';
        throw err;
    } 
}

const userInputs = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
};

const form = document.querySelector('form');

form.addEventListener('submit',(ev) =>{
    ev.preventDefault();
    try{

    }
    catch(err){
        
    }
});


