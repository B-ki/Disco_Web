let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
	let span = document.createElement("SPAN");
	let txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
let j;
for (j = 0; j < close.length; j++) {
	close[j].onclick = function() {
		if (window.confirm("Confirm the removal of the task?")) {
			var div = this.parentElement;
			document.cookie = document.cookie.replace(div.innerText + ',', " ");
			div.style.display = "none";
		}
	}
}

function newElement() {
	let li = document.createElement("li");
	let inputValue = document.getElementById("myInput").value;
	let t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert("Can't be empty!");
	} else {
		document.getElementById("myUL").appendChild(li);
		let newCookie = inputValue + ",";
		document.cookie += newCookie;
		console.log("cookie content :" + newCookie);
	}
	document.getElementById("myInput").value = "";
	
	let span = document.createElement("SPAN");
	let txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

}
$(document).ready( function() {
	let list = document.querySelector('ul');
	list.addEventListener('click', function(ev) {
		if (ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
		}
	}, false);
});

function addOldCookie (oldCookie) {
	let li = document.createElement("li");
	let t = document.createTextNode(oldCookie);
	li.appendChild(t);
	document.getElementById("myUL").appendChild(li);
	document.getElementById("myInput").value = "";
	let span = document.createElement("SPAN");
	let txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);	
}

function checkCookie() {
	if (document.cookie)
	{
		let decodedCookie = decodeURIComponent(document.cookie);
		console.log(decodedCookie);
		let cookieList = decodedCookie.split(',');
		for(let i = 0; i < cookieList.length; i++) {
			addOldCookie(cookieList[i]);
			console.log(i + ":" + cookieList[i]);
		}
	}
}