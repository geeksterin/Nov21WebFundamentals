//Get the element based on the ID.
//From my document. GET the ELEMENT based on the ID.
//From my document. get the element by the id.
//From my document, get the elementById.
//From my document. getElementById.
//document.getElementbyId();

// let e = document.getElementById("change_para");
// console.log(e);

// let f = document.getElementById("other_id");
// console.log(f);

// console.log(e.innerText);

// e.innerText = "New Content";
// f.innerText = "Other Updated content";


// //Function Definition
// function show_alert() {
//     console.log('Button clicked');
//     alert("Alert called");
// }







//Change the content only when the button is clicked
function change_content() {
    let e = document.getElementById("change_para");
    let f = document.getElementById("other_id");

    e.innerText = "New Content";
    f.innerText = "Other Updated content";
}