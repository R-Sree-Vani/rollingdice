var player1="player1";
    var player2="player2";
	function editname(){
		player1=prompt("Change player1 name");
		player2=prompt("Change player2 name");

		document.querySelector('p.player1').innerText=player1;
		document.querySelector('p.player2').innerText=player2;

	}


	function roll(){
		setTimeout(function(){
			var ranno1=Math.floor(Math.random()*6) + 1;
			var ranno2=Math.floor(Math.random()*6) + 1;
			
 			document.querySelector('.img1').setAttribute('src','dice' + ranno1 + '.jpg');
			document.querySelector('.img2').setAttribute('src','dice' + ranno2 + '.jpg');

			if(ranno1===ranno2){
				document.querySelector('h1').innerText='It\'s a draw of '+ranno1;
			}
			else if(ranno1>ranno2){
				document.querySelector('h1').innerText=player1+' wins by ' +(ranno1-ranno2)+'!';
			}
			else{
				document.querySelector('h1').innerText=player2 +' wins by '+(ranno2-ranno1)+'!';
			}


		},1000);
	}