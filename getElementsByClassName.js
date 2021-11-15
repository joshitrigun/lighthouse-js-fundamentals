let names = [];

let elements = document.getElementsByClassName('name');

let data = [].map.call(elements, elem => elem.textContent);

for (i = 0; i < data.length; i++) {
  names.push(data[i]);
}

const resultAlert = function(){
	alert(names);
}
setTimeout(resultAlert, 3000);