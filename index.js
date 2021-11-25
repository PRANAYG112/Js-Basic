// console.log("Hello world")
showNotes();

// const parseJson = require("parse-json");

// Adding Notes
let adnote = document.getElementById('adnote');
adnote.addEventListener("click", function (e) {
    let adtxt = document.getElementById('adtxt');

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(adtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    adtxt.value = "";
    showNotes();
});

// Add the txt to notes section

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="notecard card my-2 mx-2" style="width: 18rem;color:white;background-color:#999999;border: 1px solid white">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onClick = "deletenote(this.id)" class="btn btn-danger">Delete Note</button>
        </div>
        </div>`
    });


    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = `No Notes Added Please Add a Note`;
    }
}

// delete a note

function deletenote(index) {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notes.obj = JSON.parse(notes);
    }

    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}

// Search notes
let search = document.getElementById("searchNote");
search.addEventListener("input", function () {
    let inputval = search.value.toLowerCase();
    let notecard = document.getElementsByClassName("notecard");
    Array.from(notecard).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText.toLocaleLowerCase();
        if (cardtxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
});