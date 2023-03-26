let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let sets = 1

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count 
    var ul = document.getElementById("save-el")
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(`Set: ${sets} Reps: ${countStr}`));
    ul.appendChild(li);
    countEl.textContent = 0
    count = 0
    sets += 1
    
}
