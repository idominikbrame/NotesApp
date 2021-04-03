const inputKey = document.getElementById("inputKey");
const inputData = document.getElementById("inputData");
const buttonInsert = document.getElementById("buttonInsert");
const output = document.getElementById("output");

buttonInsert.addEventListener('click', function() {
    const key = inputKey.value;
    const data = inputData.value
    console.log(key);
    console.log(data)

    if(key && data) {
        localStorage.setItem(key, data)
        location.reload()
    } else {
        alert("fill both fields")
    }
})

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); 
    const value = localStorage.getItem(key)

    output.innerHTML += `${key}: ${value} <br/><br/>`
}

