function dealData($)
{

$.ajax({
	type:'GET',
	url:"https://api.hotukdeals.com/rest_api/v2",
	data:"?key=a3b2fab76ed0c26f50e4e25be4ae3efb&merchant=argos&output=json&jsonp&callback=?",
	success: function(data) {
	
	for (var i=0;i<data.deals.length;i++)
	{
		var x = document.createElement('div');
		x.className = 'items';
		var y = document.createElement('h3');
		y.appendChild(document.createTextNode(data.deals[i].items.title));
		x.appendChild(y);
		var z = document.createElement('p');
		z.className = 'moreInfo';
		z.appendChild(document.createTextNode('Info: ' + data.deals[i].items.description));
		x.appendChild(z);
		var a = document.createElement('img');
		a.src = data.deals[i].items.deal_image_highres;
		x.appendChild(a);
		var b = document.createElement('p');
		b.appendChild(document.createTextNode(data.deals[i].items.temperature));
		x.appendChild(b);
		document.getElementById('writeroot').appendChild(x);
	},
	dataType'jsonp'
		
	}};
}
