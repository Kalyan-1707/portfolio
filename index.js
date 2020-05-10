var el = document.getElementById('contact_form_submit');
if(el){
  el.addEventListener('click', submitContactForm);
}



function modal(img)
{
 var btn=document.getElementById('trigger_modal');
 document.getElementById('modal_img').src=img;
 btn.click();
}

function submitContactForm(e){

    
  
    var xhr=new XMLHttpRequest();
  
    var uname=document.getElementById('contact_form_name').value;
  
    var email=document.getElementById('contact_form_email').value;

    var msg=document.getElementById('contact_form_msg').value;

  
    var pars="uname="+uname+ "&" + "email="+email + "&" + "msg="+msg;
  
    xhr.open('POST','https://bbbs0717.000webhostapp.com/sendmail.php',true);
  
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=function(){
       if(this.status == 200)
        {
         console.log("Sending");
         var res=this.responseText;
            console.log(res);
         }
      }
      console.log(pars);
      xhr.send(pars);
  }