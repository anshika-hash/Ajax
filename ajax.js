* Ajax is asynchronous javascript and xml.
* AJAX allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes.

All modern browsers support the XMLHttpRequest object.
All XMLHttpRequest object is used to exchange data with a server behind the scene.
req=new XMLHttpRequest();
-----------------------------------------
req.open("GET","URL",true);
req.send();

req.open("GET","abc.php?x=25",true);
req.send();
-----------------------------------------
req.open("POST","abc.php",true);
req.setRequestHeader("content-type","application/x-www-form-urlencoded");

req.send("fname=anshika&age=24");
-----------------------------------------
execute other script while waiting for server response.
deal with the response when the response ready.
----------------------------------------- 

{
  rar req = new XMLHttpRequest();      
  req.open("GET","url",true);
  req.send();
  
  reqonreadystatechange = function(){                     //onreadystatechange value contain in req. ready state change continuously 1,2,3,4
  if(req.readystate==4 && req.status==200){
      document.getElementById("myDiv").innerHTML=req.responseText;
   }
  }
 }
  
  The onreadystatechange stores a function(or the name of a function) to be called automatically each time the readyState property changes.
  Holds the status of the XMLHttpRequest change from 0 to 4.
  0: request not initialized.
  1:server connection established.
  2:request recieved.
  3: processing request.
  4: request finished and response is ready.
  
  200:"OK"
  404:Page not found
  * when readyState is 4 and status is 200, the response is ready.
  
  
  
  
  
