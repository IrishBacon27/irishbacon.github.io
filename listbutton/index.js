window.onload = () => {
    const userInput = document.getElementById('list-data');    
    const setTextButton = document.getElementById('set-text');
    const listButton = document.getElementById('add-to-list');    
    
  
    setTextButton.onclick = () => {
        userInput.value = 'The first item for my list';
    }

    listButton.onclick = () => {
        const myList = document.getElementById('my-list');
        elfCode.appendToList(myList, userInput.value);
    }
}
const elfCode = {
    appendToList: (list, value) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        list.appendChild(li);
    }
}