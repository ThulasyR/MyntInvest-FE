mt_backend_url = "http://localhost:8000";
const current = new Date();
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;//mysql insert date format


function showLoader(){   
	$(".loading").show();  
}

function hideLoader(){  
	$(".loading").hide();  
}//end of hideLoader


function initPage(){
    hideLoader();
    sessionSetting(sessionStorage);  
  // if($("#logemail").val().length > 0 && $("#logpassword").val().length > 0){
  //     $("#rememberme").checked = true;
  //   }
// ----------multiplefile-upload---------

    $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);   

   var adminStartupTable = $('#adminStartupTable').DataTable( {
    destroy: true,
    responsive: false,     
    scrollY:  "40vh",
    scrollX: true,
    scroller: false,
    scrollCollapse:true,
    paging:false, 
    filter:false,   
    columnDefs: [], 
    dom: '<<"top" ip>flt>', 
			columnDefs: [  { width: '20px', targets: [0,1]},
								{"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"orderable": false,"searchable": false}],		 
			 fnDrawCallback: function(oSettings) {
					if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
					} 
			 }
		}).draw();

    var companyInfoTable= $('#companyInfoTable').DataTable( {
      destroy: true,
      responsive: false,          
       ordering: false,
       searching: false,    
       scrollY:  "40vh",
       scrollX: true,
       scroller: false,
       scrollCollapse:true,
       paging:false, 
       filter:false,   
       columnDefs: [], 
       dom: '<<"top" ip>flt>', 
         columnDefs: [  { width: '20px', targets: [0,1]},
                   {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"orderable": false,"searchable": false}],		 
          fnDrawCallback: function(oSettings) {
             if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
             } 
          }
       }).draw();


       $("#aks-file-upload").aksFileUpload({
        fileUpload: "#rsuploadfile",
        // Multiple
         multiple: true,
        // Multiple
        maxSize: "1 GB",
      });
     

//REMENER ME

  // if (localStorage.checkbox && localStorage.checkbox !== "") {
  //   $("#rememberme").setAttribute("checked", "checked");
  //   $("#logemail").val(localStorage.username);
  // } else {
  //   $("#rememberme").removeAttribute("checked");
  //   $("#logemail").val("");
  // }
  
  // // function lsRememberMe() {
  // $("#rememberme").click(function(){
  //   if ( $("#rememberme").checked && $("#logemail").val() !== "") {
  //     localStorage.username = $("#logemail").val() ;
  //     localStorage.checkbox = $("#rememberme").val();
  //   } else {
  //     localStorage.username = "";
  //     localStorage.checkbox = "";
  //   }
  // });



}
 
$(function() {


  $(document).on("change","#investorRange", function() {
  var slider = document.getElementById("investorRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
  });

  $('[type=checkbox],[type=radio]').click(function() {
    if ($(this).is(":checked") == true) {
        $(this).val('yes');
    } else {
        $(this).val('no');
    }
});



  $(document).on("click","a", function() {
    // event.preventDefault(); 


    // setTimeout(window.location.reload(false), 1000);


    
  });

  
  $(document).on("click","a#openChooseStartup", function() {
    // event.preventDefault(); 

    ChooseStartupModel();
    // setTimeout(window.location.reload(false), 1000);


    
  });

  $(document).on("change",".uploadFile", function() 
  {
    // var getDataAttr = $(this).attr("data-attr"); 


      var uploadFile = $(this);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
      if (/^image/.test( files[0].type)){ // only image file
          var reader = new FileReader(); // instance of the FileReader
          reader.readAsDataURL(files[0]); // read the local file
          reader.onloadend = function(){ // set image data as background of div
              //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
          }
      }
  });


  $(document).on("change","#campressimage,#campbanimage,#createpitchimage,#solutionimage,#ptproductimage,#pttransimage,#ptbsmodelimage,#ptcompimage,#ptcustimage,#ptusageimage,#ptvisionimage,#ptpotretimage", function() 
  {
    // var getDataAttr = $(this).attr("data-attr"); 


      var uploadFile = $(this);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
      if (/^image/.test( files[0].type)){ // only image file
          var reader = new FileReader(); // instance of the FileReader
          reader.readAsDataURL(files[0]); // read the local file
          reader.onloadend = function(){ // set image data as background of div
              //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
          }
      }
  });

  $(document).on("change","#uploadanalystics", function() 
  { 
      var uploadFile = $(this);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
      if (/^image/.test( files[0].type)){ // only image file
          var reader = new FileReader(); // instance of the FileReader
          reader.readAsDataURL(files[0]); // read the local file
          reader.onloadend = function(){ // set image data as background of div
              //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
              $("#analyticsCollOne").find('.analysticimage-preview').css("background-image", "");  
              $("#analyticsCollOne").find(".analysticimagelbel").find("span").text("Upload a Profile")

$("#analyticsCollOne").find('.analysticimage-preview').css("background-image", "url("+this.result+")");
$("#analyticsCollOne").find(".analysticimagelbel").find("span").text("Reupload a Profile")

}
      }
  });

  
  $(document).on("change","#campressvideo,#campbanvideo,#createpitchvideo,#solutionvideo,#ptproductvideo,#pttransvideo,#ptbsmodelvideo,#ptcompvideo,#ptcustvideo,#ptusagevideo,#ptvisionvideo,#ptpotretvideo", function() 
  { 
      var uploadFile = $(this);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
      if (/^image/.test( files[0].type)){ // only image file
          var reader = new FileReader(); // instance of the FileReader
          reader.readAsDataURL(files[0]); // read the local file
          reader.onloadend = function(){
            uploadFile.closest(".videoUp").find('.imagePreview').css("background-image", "url("+this.result+")");
          }
      }
  });


 
	$("#teaminfoAddmem").click(function(){
		var divIter = $(this).attr("data-attr-id");
		var count = $(".teaminfomem").length ; 
			console.log("inside"+count)
			$(this).closest(".col-md-12").before("<div class='col-md-12 teaminfomem' id='teamInfoDivisionIter"+(Number(count)+1)+"' >"+$("div[id=teamInfoDivisionIter]").html()+"</div>"); 
			var iterid = "#teamInfoDivisionIter"+(Number(count)+1)
			$(iterid).find("input,select,textarea").val("").attr("value","");
      $(iterid).find('.imagePreview').css("background", "url(http://cliquecities.com/assets/no-image-e3699ae23f866f6cbdf8ba2443ee5c4e.jpg)");
      $(iterid).find(".imagePreview").closest(".imgUp").find("label").css("visibility","visible");
      $(iterid).find(".spanbgcircle").html(Number(count)+1); 
      $(iterid).find("input[id=tmsno]").val(Number(count)+1); 
      $(iterid).find(".imagePreview").attr("id","No"+Number(count)+1); 
      $(iterid).find(".imagePreview").closest(".imgUp").find(".uploadFile").attr("data-attr",Number(count)+1); 
     
    });



    $("#caminvestAddmem").click(function(){
      var divIter = $(this).attr("data-attr-id");
      var count = $(".campinvestmem").length ; 
        console.log("inside"+count)
        $(this).closest(".col-md-12").before("<div class='col-md-12 campinvestmem' id='campinvestDivisionIter"+(Number(count)+1)+"' >"+$("div[id=campinvestDivisionIter]").html()+"</div>"); 
        var iterid = "#campinvestDivisionIter"+(Number(count)+1)
        $(iterid).find("input,select,textarea").val("").attr("value","");
        $(iterid).find('.imagePreview').css("background", "url(http://cliquecities.com/assets/no-image-e3699ae23f866f6cbdf8ba2443ee5c4e.jpg)");
        $(iterid).find(".imagePreview").closest(".imgUp").find("label").css("visibility","visible");
        $(iterid).find(".spanbgcircle").html(Number(count)+1); 
        $(iterid).find("input[id=camivstsno]").val(Number(count)+1); 
        $(iterid).find(".imagePreview").attr("id","No"+Number(count)+1); 
        $(iterid).find(".imagePreview").closest(".imgUp").find(".uploadFile").attr("data-attr",Number(count)+1); 
       
      });


      $("#camfaqAddmem").click(function(){
        var divIter = $(this).attr("data-attr-id");
        var count = $(".campfaqmem").length ; 
          console.log("inside"+count)
          $(this).closest(".col-md-12").before("<div class='col-md-12 campfaqmem' id='campfaqDivisionIter"+(Number(count)+1)+"' >"+$("div[id=campfaqDivisionIter]").html()+"</div>"); 
          var iterid = "#campfaqDivisionIter"+(Number(count)+1)
          $(iterid).find("input,select,textarea").val("").attr("value","");
          $(iterid).find(".spanbgcircle").html(Number(count)+1); 
          $(iterid).find("input[id=camfaqsno]").val(Number(count)+1);  
        });
  
  


      $(".logout").click(function(){
        sessionStorage.removeItem('key');
        sessionStorage.clear();
        window.location.href = "/";
      });

      $("#controlpanel").click(function(){ 
        window.location.href = "/Admin_Dashboard";
      });

      $("input,select,textarea").change(function(){
        var fieldval = $(this).val();
        if(!isEmpty(fieldval)){
             if($(".errors").html().length > 0){
                $(".errors").html("");
             }
        }
      });

      $("#email,#rsemail").change(function(){
           var fieldval = $(this); 
           EmailCheck(fieldval); 
      });

    
      $(".link,#caminvinstalink,#caminvlinklink,#tmfblink,#tminstalink,#tmlinklink,#ciLinkedInLink,#rsfounderurl1,#rsfounderurl2,#ciCompanyWebsite,#ciFacebookLink,#ciInstagramLink").change(function(){
        var fieldval = $(this); 
        validURL(fieldval); 
      });


      $("#ciDate").change(function(){
        var fieldval = $(this); 
        isDate(fieldval); 
     });


   $("#btnrsprivateroundno").on("click",function(){
    $("[name=btnrsprivateround]").attr("class","").addClass("btn btn-light w-100");
    $(this).removeClass("btn-default").addClass("btn-dark");
    $("#rsprivateroundno").click();
    $("#rsprivateroundno").val("No");
   });

   $("#btnrsprivateroundyes").on("click",function(){
    $("[name=btnrsprivateround]").attr("class","").addClass("btn btn-light w-100");
    $(this).removeClass("btn-default").addClass("btn-dark");
    $("#rsprivateroundyes").click();
    $("#rsprivateroundyes").val("Yes");
 });


      $("#confirm_password").on('keyup', function() {
        var password = $("#password").val();
        var confirmPassword = $("#confirm_password").val();
        if (password != confirmPassword)
        $("#conpassdiv").html("Password does not match !").attr("class", "text-danger");
        else
        $("#conpassdiv").html("Password match !").attr("class", "text-success");
      }); 

      $("#googleintrgration").click(function(){

        wip();
      });


}); 


function genRandomCode() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
for (var i = 0; i <= passwordLength; i++) {
 var randomNumber = Math.floor(Math.random() * chars.length);
 password += chars.substring(randomNumber, randomNumber +1);
}
  return password;
}

 function sessionSetting(sessionStorage){
    // sessionStorage.setItem("campUniqueId",window.genRandomCode());
  

    var emailVal      = sessionStorage.getItem("sessEmail");
    var Firstnameval  = sessionStorage.getItem("sessFirstname");
    var Roleval       = sessionStorage.getItem("sessRole");
    var userId        = sessionStorage.getItem("sessUserId");
    var userModule    = sessionStorage.getItem("sessModule"); 
    var campModule    = sessionStorage.getItem("campUniqueId");
    
    console.log("Session setting"+campModule);

    if(emailVal == null){
      showAlert("Please Login","/Login");
      sessionStorage.setItem("sessEmail","");
    }

    $(".profile_header").css("display","block");//visible
    $(".profile_header2").css("display","none");//not visible
    $("#controlpanel").css("display","none");
    if(!isEmpty(emailVal)){
        $("span[id=profilename]").html(Firstnameval);
        $("span[id=profileuname]").html(emailVal);
        $("span[id=profilerole]").html(Roleval);
        $("#mtuser_id").val(userId);
        $("#mtuser_role").val(Roleval);
        $("#mtuser_module").val(userModule);
        $("#mtuser_email").val(emailVal);
        $("#mtuser_fname").val(Firstnameval);
        // $("#campModule").val(campModule);
// console.log("inside"+userId)
        $(".profile_header").css("display","none");
        $(".profile_header2").css("display","block");
        // $("#controlpanel").css("display","block");
    }else{
    
        $("span[id=profilename]").html("");
        $("span[id=profileuname]").html("");
        $("span[id=profilerole]").html("");
        $("#mtuser_id").val("");
        $("#mtuser_role").val("");
        $("#mtuser_module").val("");
        $("#mtuser_email").val("");
        $("#mtuser_fname").val(""); 
        $(".profile_header").css("display","block");
        $(".profile_header2").css("display","none");
    }
    
    if(Roleval == "Admin"){
        $("#controlpanel").css("display","block");
    }else{
        $("#controlpanel").css("display","none");
    }
   
 }

 /**COMMON JS FUNCTION */
 
 /** EMPTY VALIDATION LENGTH OR VALUE OF ANY FIELD */
 function isEmpty(strVal) 
{ 
   if ((strVal.length==0) || (strVal == null) || (strVal == undefined) || (strVal == "undefined")) 
   {
      return true;
   }
   else 
   { 
      return false; 
   }
}//end IsEmpty


function ctrlOverFlowDataTable(tblid){
	 
	$("#"+tblid+"_wrapper").css("width","98%");
	$("#"+tblid+"_wrapper").find(".dataTables_scrollBody").css("width","101.6%");
	$("#"+tblid+"_wrapper").find(".dataTables_scrollBody").css("overflow","scroll"); 
}


/**CHECK EMAIL VALIDATION */
function EmailCheck(email){
	var mailformat =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;  
	if($(email).val().match(mailformat))  
	{  
	return true;  
	}  
	else  
	{  
	if(!(isEmpty($(email).val()))){   /*changed*/
    showAlert("Invalid Email Id");
	$(email).val("");
	$(email).focus();  
	return false;  
	}  	
 }
	
}

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

    var valueOfStr =  $(str).val();
  if(pattern.test(valueOfStr)){
    return true; 
  }else{
    showAlert("Invalid URL Format");
    $(str).val("");
    $(str).focus();  
    return false;  
  }



}




function checkDateFormat(date){
  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;  
 
  var txtVal=date.val();
  var day,month,year;
  var arr=[]; 
  if(txtVal.match(dateformat)) {
  if(txtVal.length<10){  
    arr = txtVal.split('/');
    if(arr[0].length == 1){
      day=arr[0].replace(arr[0],"0"+arr[0]);
    }else{
      day=arr[0];
    }
    
    if(arr[1].length == 1){
      month=arr[1].replace(arr[1],"0"+arr[1]);
    }else{
      month=arr[1];
    }
    
    year=arr[2];
    date.val(day+"/"+month+"/"+year);
  }
  }
   if(!isEmpty(txtVal) && !isDate(txtVal)){
    
     showAlert('Invalid Date');
     $(date).val("");
     $(date).focus();
 }
}




function isDate(txtDate)
{
    var currVal = $(txtDate).val();
    if(currVal == '')
        return false;
    
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dtArray = currVal.match(rxDatePattern);
    
    if (dtArray == null) 
        return false;
    

    dtDay= dtArray[1];
    dtMonth = dtArray[3];    
    dtYear = dtArray[5];        
    
    if (dtMonth < 1 || dtMonth > 12) 
        return false;
    else if (dtDay < 1 || dtDay> 31) 
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
        return false;
    else if (dtMonth == 2) 
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    return true;
}


function wip(){
    showAlert("Working in Progress!!!")
}


function showAlert(content,redirect) {
	    hideLoader();
        $("#alertimg").html("");
        
        $("#alertmsg").html(content);
    	// $("#alertimg").prepend('<img class="img-fluid" src="../MyntInvest-f.png"  /><br/>');
        $("#alertmsgdiv").modal('show');
        $('#alertmsgdiv').modal({
              backdrop: 'static',
              keyboard: false,
              show:true,
            });
        
        $('#alertmsgdiv').on('shown.bs.modal', function() { 
            
              $(this).find(".modal-title").text("Notification");
              $(this).find(".modal-footer").find("button:eq(0)").unbind();
              $(this).find(".modal-footer").find("button:eq(0)").click(function (){  
                
                  $('#alertmsgdiv').modal('hide');   
                  if(!isEmpty(redirect)){
                    window.location.href = redirect;//to redirect to normal links
                  }
                 
              });
              $(this).find(".modal-footer").find("button:eq(1)").click(function (){ 
                $('#alertmsgdiv').modal('hide');   
              });

              
              $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false); 
          

            }); 
              
}
    

/**File upload */


function ChooseStartupModel() {
  hideLoader();
    $("#chooseStartupSecdiv").modal('show');
    $('#chooseStartupSecdiv').modal({
          backdrop: 'static',
          keyboard: false,
          show:true,
        });
    
    $('#chooseStartupSecdiv').on('shown.bs.modal', function() { 
        
          $(this).find(".modal-title").text("Notification");
          $(this).find(".modal-footer").find("button:eq(0)").unbind();
          $(this).find(".modal-footer").find("button:eq(0)").click(function (){  
            
              $('#chooseStartupSecdiv').modal('hide');   
              // if(!isEmpty(redirect)){
                var data = {

                  "ID": null,
                  "MTUSER_ID":$("#mtuser_id").val(),
                  "EMAIL": $("#mtuser_email").val(),
                  "MODULE": $("#mtuser_module").val(),
                  "INV_CHOOSE_SECTOR": $("#mtuser_module").val(),
                  "STATUS": "Active",
                  "COMMENTS": "TEST", 
                  "DESCRIPTION":"Logged User",
                  "CREATED_USER": convertDate(date),
                  "CREATED_DATE": $("#mtuser_fname").val(),
                  "MODIFIED_USER": convertDate(date),
                  "MODIFIED_DATE": $("#mtuser_fname").val(),  
                }

 console.log(data)

                $.ajax({
                  type : "POST",
                  url : mt_backend_url+"/api/Choose_Sector",
                  dataType: "json",
                  async : true,
			            cache:false,
                  success : function (data) {
                          //  $('#first_name').text( data[0].first_name);
                          //  $('#last_name').text( data[0].last_name);
                          //  $('#age').text( data[0].age);
                          //  $('#gender').text( data[0].gender);
                          
                window.location.href = "/Investors_Details";//to redirect to normal links
                         }
                      });


              // }
             
          });
          $(this).find(".modal-footer").find("button:eq(1)").click(function (){ 
            $('#chooseStartupSecdiv').modal('hide');   
          });

           

        }); 
          
}


function convertDate(date){

  const str = date;
  
  const [month, day, year] = str.split('/');
  
  
  console.log(month); // 👉️ 09
  console.log(day); // 👉️ 24
  console.log(year); // 👉️ 2022
  return (year+"/"+month+"/"+day);
  
      
  }