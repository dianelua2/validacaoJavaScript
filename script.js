const form=document.querySelector('form');
form.addEventListener('submit',validate);

function validate(event){
    event.preventDefaut();
    const firstNameField=document.querySelector("#firstname");
    let valid=true;
    if(!firstNameField.value){
        const nameError=document.querySelector("span");
        nameError.classList.add("visible");
        firstNameField.classList.add("invalid");
        nameError.setAttribute("aria-hidden",false);
        nameError.setAttribute("aria-invalid",true);
    }
    return valid;
}