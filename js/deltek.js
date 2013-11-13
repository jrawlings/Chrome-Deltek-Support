// Looking for a specific iFrame with title 'Charge Lookup'
// to start the manipulation to support WebKit
if (document.title === 'Charge Lookup') {

	// default behavior is to drill through normal charge codes
	document.getElementById('event').value = 'showChargeForm';

	// start of 'Favorites' manipulation

	// In order to not overwrite the existing onclick callback
	// on the <tr> element for the 'Favorites' Charge Tree, 
	// we add a new callback on the <td> contained with the <tr>

	// query for the 2nd <tr> which is default 'Favorites' on the first 'layer'
	var favs = document.getElementById('chargeTable') && document.getElementById('chargeTable').querySelector('tr:nth-of-type(2)');

	// check if the <tr> has the showFavorites method call in the onclick
	if (favs && favs.getAttribute('onclick').toString().indexOf('showFav') !== -1) {
		var favTds = favs.querySelectorAll('td');

		// add a new onclick callback to all <td>s under Favorites
		// that sets the hidden event value
		for (var i = 0; i < favTds.length; i++) {
			favTds[i].onclick = function(event) {
				document.getElementById('event').value = 'showFavorites';
			}
		}
		
	}
}
