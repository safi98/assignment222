window.onload = function  () {
	// body...
	document.getElementByID('FC').style.cursor="poointer";
	document.getElementByID('SC').style.cursor="poointer";
	document.getElementByID('THC').style.cursor="poointer";

	document.getElementByID("FC").addEventlistener("click",f1);
	document.getElementByID("SC").addEventlistener("click",f2);
	document.getElementByID("THC").addEventlistener("click",f3);
}


function f1()
{

	document.getElementByID('FC').style.backgroundColor="#00FF00";
}
function f2()
{

	document.getElementByID('SC').style.backgroundColor="#000080";
}
function f3()
{

	document.getElementByID('THC').style.backgroundColor="#FF00FF";

}