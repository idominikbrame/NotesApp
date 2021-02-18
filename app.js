function addNote() {
    let myTitle = document.querySelector("#myTitle").value;
    let myTextArea = document.querySelector("#textarea").value;

    if (myTitle != "" && myTextArea != "") {
        let table = document.getElementById("table");
        let row = table.insertRow(1);
        let titleCell = row.insertCell(0);
        let noteCell = row.insertCell(1);
        titleCell.innerHTML = myTitle;
        noteCell.innerHTML = myTextArea;

        addNoteToStorage(myTitle, myTextArea);

        closeAddNoteDialogue();

    }
}

function openAddNoteDialogue() {
    document.querySelector("#myModal").style.visibility = "visible";
    document.querySelector("#myModal").style.pointerEvents = "auto";
}

function closeAddNoteDialogue() {
    document.querySelector("#myModal").style.visibility = "hidden";
}

function documentReady () {
    document.querySelector("#form").onsubmit = function (event) {
        event.preventDefault();
        console.log("logging some shit 1")
        addNote()
        console.log("logging some shit")
    }
}
function addNoteToStorage(title, text) {
    let store = localStorage.getItem("notes")
    if (store == null) {
        store = '[]'
    }
    let notes = JSON.parse(store)
    notes.push({"title": title, "text": text})
    localStorage.setItem("notes", JSON.stringify(notes))
}
document.addEventListener("DOMContentLoaded", documentReady, false);