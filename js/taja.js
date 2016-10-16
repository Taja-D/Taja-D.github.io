var mainList = $('#main ol');
var favs = $('#main h1');

function hider() {
	if (mainList.css('display') != "none"){
		mainList.css('display', 'none');
	} else {
	mainList.css('display', 'block');
	}
}

function shower() {

	if (mainList.css('display') == "none"){
	mainList.css('display', 'block');
	}
}

favs.on('click', shower);
mainList.on('click', hider);