 var width = 1;
 var volWidth = 0;
 var amtWidth = 0;
 //Progress bars
 var vol = document.getElementById("tradeVolumeBar"); //number of shares
 var amt = document.getElementById("tradeAmountBar"); //amount traded in
function displayModal(){
// Get the modal
	var modal = document.getElementById('limitsModal');
	//Text showing limit reached
	var disp = document.getElementById("textToDisplay"); 
	var disp2 = document.getElementById("secondText");
	//limit reached till now
	var volLimit = document.getElementById("trade");
	var amtLimit = document.getElementById("amount");
//Get the progress bar value for triggering the modal
	//var tradeVolume = vol.value; //by trade volume
	//var tradeAmount = amt.value; //by amount 
	disp.innerHTML = volWidth + '%';
	disp2.innerHTML = amtWidth +'%';
	//if(tradeVolume == 23){
	volLimit.innerHTML = volWidth;
  	amtLimit.innerHTML = amtWidth;

  	//display modal
	if($.inArray(volWidth, [85, 90, 95]) >= 0 || $.inArray(amtWidth, [85, 90, 95]) >= 0){
  		//disp.innerHTML = "STOP";
  		$('#limitsModal').modal('show');
	}
	if ((volWidth == 100) || (amtWidth == 100)){
		document.getElementById("limitsModalHeader").innerHTML = "BREACH!";
		$('#limitsModal').modal('show');
	}


	//insert sector breach condition
	//if(sector breach) {
	//	$('#sectorModal').modal('show');
//	}
}

function move() {
  
  var disp = document.getElementById("textToDisplay");
  var id = setInterval(frame, 350);
  //document.getElementById("trade").innerHTML = tradeVolume;
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      volWidth = width;
      amtWidth = width * 0.7; 
      vol.style.width = volWidth + '%';
      amt.style.width = amtWidth + '%';
     // disp.innerHTML = width * 1  + '%';
     displayModal();
    }

  }
  
}
