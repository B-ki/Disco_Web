let new_task;
let button = document.getElementById("button");

function appendToList (new_str) {
    if (!new_str || !new_str.trim().length)
        return ;
    console.log("cookie content :" + new_str)
    let tag = document.createElement("li");
    let content = document.createTextNode(new_str);
    tag.appendChild(content);
    let list = document.getElementById("myUL");
    tag.addEventListener('click', function onClick(event) {
        if (window.confirm("Confirms the removal of the task"))
        {
            console.log("inneText: " + this.innerText + ',');
            console.log("cookie: " + document.cookie);
            document.cookie = document.cookie.replace(this.innerText + ',', " ");
            console.log("cookie: " + document.cookie);
            this.parentNode.removeChild(this);
        }
    });
    list.appendChild(tag);
}

button.addEventListener('click', function onClick(event) {
    new_task = window.prompt("Add new task");
    let new_str = new_task + ",";
    document.cookie += new_str;
    appendToList(new_task);
});

function checkCookie() {
    if (document.cookie)
    {
        let decodedCookie = decodeURIComponent(document.cookie);
        console.log(decodedCookie);
        let cookieList = decodedCookie.split(',');
        for (let i = 0; i < cookieList.length; i++)
        {
            appendToList(cookieList[i]);
            console.log(i + ":" + cookieList[i])
        }
    }
}