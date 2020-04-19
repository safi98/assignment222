window.onload = function() {
      
      document.getElementById("l1").style.cursor = "pointer";
      document.getElementById("l1").style.cursor = "pointer";
      document.getElementById("l3").style.cursor = "pointer";

      document.getElementById("l1").addEventListener("click", f1);
	  document.getElementById("l2").addEventListener("click", f2);
	  document.getElementById("l3").addEventListener("click", f3);
}


 
function f1(){
   
      document.getElementById("l1").style.backgroundColor = "#0000FF";
       loadItem("data/chicken.json" , "title1" );
}

function f2(){

      document.getElementById("l2").style.backgroundColor = "#FF00FF";
       loadItem("data/chicken.json" , "title2" );
}

function f3(){

      document.getElementById("l3").style.backgroundColor = "#00FF00";
       loadItem("data/chicken.json" , "title3" );
}
function loadItem( fileJson_path , title_n ){




  //Call server to get the entriy and the items
  var item=null;
  var itemOld=null;
  var shown_items="";

  var xttp=new XMLHttpRequest();

  xttp.onreadystatechange=function(){

    if ( (this.readyState==4) && (this.status==200) ) {
      
      item = this.responseText;
      itemOld = this.responseText;

      var xttp=new XMLHttpRequest();

      xttp.onreadystatechange=function(){

        if((this.readyState==4)&&(this.status==200)){

        	var entry= JSON.parse(this.responseText);
 			 
 			for (let i=0; i<entry.length; i++) {

 				item = itemOld;

  				item = item.replace(new RegExp("{{name}}", "g"), entry[i].name);
    			item = item.replace(new RegExp("{{description}}", "g"), entry[i].description);
          item = item.replace(new RegExp("{{title_n}}", "g"), header_n);

    			shown_items = shown_items + item ;
			}
 
    		document.querySelector("body").innerHTML= " <h1 onClick=\"window.location.reload();\"> Back </h1> " + shown_items ;
			 
        }

      };

      xttp.open("GET", fileJson_path , true);
      xttp.send(null);//for POST only

    }
  };

  xttp.open("GET", "templates/item.html", true);
  xttp.send(null);//for POST only

}


 