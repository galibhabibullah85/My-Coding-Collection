//______________Image flipping action___________________
var myPic=document.querySelector("#myPic");
myPic.onmouseover=function(){
	myPic.style="transform:rotateY(180deg);";
	myPic.src="Image011.jpg";
	myPic.style="transform:rotateY(360deg);";

}

myPic.onmouseout=function(){
	myPic.style="transform:rotateY(180deg);";
	myPic.src="Image036.jpg";
	myPic.style="transform:rotateY(0deg);";
}


//______________________Effect like typing........{amazing effect}
var headingTag=document.querySelector("#heading");
const headingTxt1="Assalamu alaikum";
// const headingTxt2="Welcome to Galib's blog";
var i=0,j=1;
// var a=0,b=1;



//________________________For salam_____________
function typingIn1(){
	if (i < headingTxt1.length) {
	  headingTag.innerHTML += headingTxt1.charAt(i);
	  i++;
	  setTimeout(typingIn1, 50);
	}

	// setTimeout(typingOut1,2000);
}

function typingOut1(){
	if (i <= headingTxt1.length) {
		var duplicateTxt1 = headingTxt1.slice(0,-j);
		headingTag.innerHTML = duplicateTxt1;
		i--;
		j++;
		setTimeout(typingOut1,1000);
	}
}

//_____________________For greeting_________________
// function typingIn2(){
// 	if (a < headingTxt2.length) {
// 	  headingTag.innerHTML += headingTxt2.charAt(a);
// 	  a++;
// 	  setTimeout(typingIn2, 50);
// 	}

// 	setTimeout(typingOut2,2000);
// }

// function typingOut2(){
// 	if (a <= headingTxt2.length) {
// 		var duplicateTxt2 = headingTxt2.slice(0,-b);
// 		headingTag.innerHTML = duplicateTxt2;
// 		a--;
// 		b++;
// 		setTimeout(typingOut2,1000);
// 	}
// }

typingIn1();