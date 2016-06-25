$(document).ready(function(){
	console.log("loaded");

var states = ["AK","AL","AR","AZ","CA","CO","CT","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"];

var sel = document.getElementById('selectState');
for(var i = 0; i < states.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = states[i];
    opt.value = states[i];
    sel.appendChild(opt);
}


// var select = document.getElementById('selectState');
// var fragment = document.createDocumentFragment();
// states.forEach(function(state, index){
// 	var opt = document.createElement('option');
// 	opt.innerHTML = state;
// 	opt.value = state;
// 	fragment.appendChild(opt);

});



// 	states.forEach(function(item, index){
// 	// var currentItem = item;
// 	if (this === "choose") { 
// 	$("select").append("<option"+currentItem+"</option");
// 	return;
// 	}

// }) 
