const allName = [];

function select(Element) {
    const name = Element.parentNode.children[0].innerText;
    allName.push(name)

    if (allName.length > 5) {
        alert('sorry!! you have already selected five players😁')
        return;
    }

    const nameCount = document.getElementById('nameCount')
    nameCount.innerText = allName.length

    const nameList = document.getElementById('listName')
    const li = document.createElement('li')
    li.innerHTML = `
        <li>${name}</li>
    `
    nameList.appendChild(li)
    console.log(allName)
}