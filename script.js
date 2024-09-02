//your JS code here. If required.
let select=document.querySelector("#colorSelect");
let btn=document.querySelector("input");


function deleteOption() {
    // Get the selected option
    let selectedOption = select.value;

    // Find the option in the dropdown and remove it
    for(let i=0; i<select.options.length; i++) {
        if(select.options[i].value == selectedOption) {
            select.remove(i);
            break;
        }
    }
}

btn.addEventListener("click", deleteOption);
