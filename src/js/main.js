import $ from 'jquery'



for (var i=0; i<12; i++){
	var data = $.ajax({
	  url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: makeBlock
	});
}



function makeBlock(data){
	var result = data.results[0];

	var pic = `<img class="pic" src="${result.picture.large}">`;

	var fullName = `<p class=name>${result.name.title} ${result.name.first} ${result.name.last}</p>`;
	var email = `<p class=email>${result.email}</p>`;
	var location1 = `<p class=location>${result.location.street}</p>`;
	var location2 = `<p class=location>${result.location.city}, ${result.location.state}, ${result.location.postcode}</p>`;
	var phone = `<p class=phone>${result.cell}</p>`;
	var ssn = `<p class=ssn>${result.phone}</p>`;


	var blockHTML = `<div class=block>${pic}${fullName}${email}${location1}${location2}${phone}${ssn}</div>`;

	$(".container").append(blockHTML);
}

// function capFirst(item){
	
// 	var array = item.split(" ");
// 	for (var word=0; word<array.length; word++){
// 		if (typeof array[word] === 'string'){
// 			var newChar = array[word][0].toUpperCase();
// 			array[word] = newChar + array[word].slice(1, array[word].length);
// 		}
// 	}
// 	var newArray = array.join(" ");
// 	return newArray;
// }
