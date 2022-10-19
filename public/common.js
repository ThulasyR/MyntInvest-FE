mt_backend_url = "http://localhost:8000";
//mt_backend_url = "http://ec2-15-207-254-24.ap-south-1.compute.amazonaws.com:8000";
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
     

   
  
    // alert("inside");
    sessionSetting(sessionStorage);   

  //   $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false);   

  //  var adminStartupTable = $('#adminStartupTable').DataTable( {
  //   destroy: true,
  //   responsive: false,     
  //   scrollY:  "40vh",
  //   scrollX: true,
  //   scroller: false,
  //   scrollCollapse:true,
  //   paging:false, 
  //   filter:false,   
  //   columnDefs: [], 
  //   dom: '<<"top" ip>flt>', 
	// 		columnDefs: [  { width: '20px', targets: [0,1]},
	// 							{"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"orderable": false,"searchable": false}],		 
	// 		 fnDrawCallback: function(oSettings) {
	// 				if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
	// 				} 
	// 		 }
	// 	}).draw();

  //   var companyInfoTable= $('#companyInfoTable').DataTable( {
  //     destroy: true,
  //     responsive: false,          
  //      ordering: false,
  //      searching: false,    
  //      scrollY:  "40vh",
  //      scrollX: true,
  //      scroller: false,
  //      scrollCollapse:true,
  //      paging:false, 
  //      filter:false,   
  //      columnDefs: [], 
  //      dom: '<<"top" ip>flt>', 
  //        columnDefs: [  { width: '20px', targets: [0,1]},
  //                  {"className": "dt-head-center text-center",targets: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"orderable": false,"searchable": false}],		 
  //         fnDrawCallback: function(oSettings) {
  //            if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) { 
  //            } 
  //         }
  //      }).draw();


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



  $(document).on("click",".reload", function() {
    // event.preventDefault(); 


    // setTimeout(window.location.reload(false), 1000);


    
  });

  
  $(document).on("click","a#openChooseStartup", function() {
    // event.preventDefault(); 

    ChooseStartupModel();
    // setTimeout(window.location.reload(false), 1000);


    
  });
  $(document).on("click","#btnOpenWishListInvest", function() {
    // event.preventDefault(); 

    OpenWishListInvest();
    // setTimeout(window.location.reload(false), 1000);


    
  });
  // btnOpenWishListInvest

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


      $("#ciDate,#DateOfBirth").change(function(){
        var fieldval = $(this); 
        isDate(fieldval); 
     });


     $('.mobilenumberval').change(function (e) {    
    
      var numbers = /^[0-9]+$/;
      if($(this).val().match(numbers))
      { 
        console.log($(this).val().length)
          if(Number($(this).val().length) == 10){ 
              return true;
          }else{
            showAlert('Invalid Mobile Number');
            $(this).val("");
            $(this).focus();
          return false;
          }
      }
      else
      {
        showAlert('Please input numeric characters only');
        $(this).val("");
        $(this).focus();
      return false;
      }                        

  });    


  $(".pan").change(function () {      
    var inputvalues = $(this).val();      
      var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;    
      if(!regex.test(inputvalues)){      
      $(".pan").val("");    
      showAlert("Invalid PAN no");    
      return regex.test(inputvalues);    
      }    
    });    
    $(".numberOnly").change(function () {   
    
      var numbers = /^[0-9]+$/;
      if($(this).val().match(numbers))
      {    return true; 
      }
      else
      {
        showAlert('Please input numeric characters only');
        $(this).val("");
        $(this).focus();
      return false;
      }     
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



      $("input:checkbox[name=chooseSector]").on("click", function() {
	
        chkedJSONCollection(this, 'choosesectorhid');
      });
      



      


          //Widget 


          var current_fs, next_fs, previous_fs; //fieldsets
        var opacity;
        var current = 1;
        var steps = $("fieldset").length;

        setProgressBar(current);

        $(".next").click(function(){
          // function nextWidgetClass(elm){

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
        step: function(now) {
        // for making fielset appear animation
        opacity = 1 - now;

        current_fs.css({
        'display': 'none',
        'position': 'relative'
        });
        next_fs.css({'opacity': opacity});
        },
        duration: 500
        });
        setProgressBar(++current);
        });
      // }

        $(".previous").click(function(){

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
        step: function(now) {
        // for making fielset appear animation
        opacity = 1 - now;

        current_fs.css({
        'display': 'none',
        'position': 'relative'
        });
        previous_fs.css({'opacity': opacity});
        },
        duration: 500
        });
        setProgressBar(--current);
        });

        function setProgressBar(curStep){
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
        .css("width",percent+"%")
        }

        $(".submit").click(function(){
        return false;
        })





}); 

function chkedJSONCollection(chkbox, hiddenObj) {
	var hiddenObjval = $("#" + hiddenObj); 
	var jsonVal = JSON.parse(isEmpty(hiddenObjval.val()) ? "{}" : hiddenObjval
			.val());
	var ischecked = $(chkbox).is(":checked");
	var checkedVal = $(chkbox).attr("data-attr");

	var resObj = jsonVal;
	resObj[checkedVal] = (ischecked == true ? "Y" : "N");
	hiddenObjval.val(JSON.stringify(resObj)); 
}



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

    $(".profile_header").attr("style","display:block !important");//visible
    $(".profile_header2").attr("style","display:none !important");//not visible
    $("#controlpanel").attr("style","display:none !important");//not visible
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
        $(".profile_header").attr("style","display:none !important");//not visible
        $(".profile_header2").attr("style","display:block !important");//not visible
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
        $(".profile_header").attr("style","display:block !important");//not visible
        $(".profile_header2").attr("style","display:none !important");//not visible
    }
    
    if(Roleval == "Admin"){
        $("#controlpanel").attr("style","display:block !important");//not visible
    }else{
        $("#controlpanel").attr("style","display:none !important");//not visible
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
	 
	// $("#"+tblid+"_wrapper").css("width","98%");
	// $("#"+tblid+"_wrapper").find(".dataTables_scrollBody").css("width","101.6%");
	// $("#"+tblid+"_wrapper").find(".dataTables_scrollBody").css("overflow","scroll"); 
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

              
              // $($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw(false); 
          

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
          var dataAttr =$("input:checkbox[name=chooseSector]").map(function() {
            return $(this).attr("data-attr");
          }).get();

          $.ajax({
            type : "GET",
            url : mt_backend_url+"/api/Choose_Sector?EMAIL="+$("#mtuser_email").val(),
            dataType: "json",
            async : true,
            cache:false, 
            success : function (data) {
              // console.log(data);
              // var jsnRslt=JSON.parse(data); 
              $.each(data,function(i,obj){
                // console.log(obj.INV_CHOOSE_SECTOR)
                $("#secid").val(obj.ID);
                $("#choosesectorhid").val(obj.INV_CHOOSE_SECTOR); 
                var jsonObject = $.parseJSON(obj.INV_CHOOSE_SECTOR);
                  $.each(jsonObject, function (i, obj) {  
                    $.each(dataAttr, function (j, obj2) { 
                      if(i == obj2){ 
                        if(obj == "Y"){
                          $("input:checkbox[data-attr="+obj2+"]").val(obj).click();
                        }else{
                          $("input:checkbox[data-attr="+obj2+"]").val(obj);
                        }
                      }
                     });




                      
                  });

                
              });
                    //  $('#first_name').text( data[0].first_name);
                    //  $('#last_name').text( data[0].last_name);
                    //  $('#age').text( data[0].age);
                    //  $('#gender').text( data[0].gender);
                    
          // window.location.href = "/Investors_Details";//to redirect to normal links
                   }
                });


          $(this).find(".modal-footer").find("button:eq(0)").unbind();
          $(this).find(".modal-footer").find("button:eq(0)").click(function (){  
            
              $('#chooseStartupSecdiv').modal('hide');   
              // if(!isEmpty(redirect)){
                var data =  JSON.stringify({

                  "ID": Number($("#secid").val()),
                  "MTUSER_ID":$("#mtuser_id").val(),
                  "EMAIL": $("#mtuser_email").val(),
                  "MODULE": $("#mtuser_module").val(),
                  "INV_CHOOSE_SECTOR": $("#choosesectorhid").val(),
                  "STATUS": "Active",
                  "COMMENTS": "TEST", 
                  "DESCRIPTION":"Logged User",
                  "CREATED_USER": $("#mtuser_fname").val() ,
                  "CREATED_DATE":  todayDate(),
                  "MODIFIED_USER": $("#mtuser_fname").val(),
                  "MODIFIED_DATE":  todayDate(), 
                })

  
                if(isEmpty($("#secid").val())){
                  $.ajax({
                    type : "POST",
                    url : mt_backend_url+"/api/Choose_Sector",
                    dataType: "json",
                    async : true,
                    cache:false,
                    data:data,
                    success : function (data) {
                            //  $('#first_name').text( data[0].first_name);
                            //  $('#last_name').text( data[0].last_name);
                            //  $('#age').text( data[0].age);
                            //  $('#gender').text( data[0].gender);
                            
                  window.location.href = "/Investors_Details";//to redirect to normal links
                           }
                        });
  
  
                // }
               
            
              }
              else
              {
                  $.ajax({
                    type : "PUT",
                    url : mt_backend_url+"/api/Choose_Sector/"+$("#secid").val(),
                    dataType: "json",
                    async : true,
                    cache:false,
                    data:data,
                    success : function (data) {
                             window.location.href = "/Investors_Details";//to redirect to normal links
                           }
                        });
  
  
                }
               
            });
                 
          
          $(this).find(".modal-footer").find("button:eq(1)").click(function (){ 
            $('#chooseStartupSecdiv').modal('hide');   
          });

           

        }); 
          
}


function OpenWishListInvest(){
  hideLoader();
  $("#OpenWishListInvestdiv").modal('show');
  $('#OpenWishListInvestdiv').modal({
        backdrop: 'static',
        keyboard: false,
        show:true,
      });
  
  $('#OpenWishListInvestdiv').on('shown.bs.modal', function() { 
      
        $(this).find(".modal-title").text("Notification");
        $(this).find(".modal-header").find("h3").text("Invest on "+$("span[id=brelmid]").text());
        $(this).find(".modal-footer").find("button:eq(0)").unbind();
        
        $(this).find(".modal-footer").find("button:eq(0)").click(function (){ 
          $('#OpenWishListInvestdiv').modal('hide');   
        });

        $(this).find(".modal-footer").find("button:eq(1)").click(function (){ 
          $('#OpenWishListInvestdiv').modal('hide');   
        });
  });
}

function todayDate(){
  
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = yyyy + '-' + mm + '-' + dd;

  return today;
 
      
  }

  


  $(window).on('scroll', function () {

    // fixedHeader on scroll
    function fixedHeader() {
      var headerTopBar = $('.top-bar').outerHeight();
      var headerOneTopSpace = $('.header-one .logo-area').outerHeight();
  
      var headerOneELement = $('.header-one .site-navigation nav');
      var headerTwoELement = $('.header-two .site-navigation nav');
  
      if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
        $(headerOneELement).addClass('fixed-top').attr("style","box-shadow:0 0.46875rem 2.1875rem rgb(4 9 20 / 3%), 0 0.9375rem 1.40625rem rgb(4 9 20 / 3%), 0 0.25rem 0.53125rem rgb(4 9 20 / 5%), 0 0.125rem 0.1875rem rgb(4 9 20 / 3%)");
        $('.header-one').css('margin-bottom', headerOneELement.outerHeight());
      } else {
        $(headerOneELement).removeClass('fixed-top').attr("style","box-shadow:none");
        $('.header-one').css('margin-bottom', '-38px');
      }
      if ($(window).scrollTop() > headerTopBar) {
        $(headerTwoELement).addClass('fixed-top').attr("style","box-shadow:0 0.46875rem 2.1875rem rgb(4 9 20 / 3%), 0 0.9375rem 1.40625rem rgb(4 9 20 / 3%), 0 0.25rem 0.53125rem rgb(4 9 20 / 5%), 0 0.125rem 0.1875rem rgb(4 9 20 / 3%)");
        
        $('.header-two').css('margin-bottom', headerTwoELement.outerHeight());
      } else {
        $(headerTwoELement).removeClass('fixed-top').attr("style","box-shadow:none");
        $('.header-two').css('margin-bottom', '-38px');
      }
    }
    fixedHeader();
  
  });







  /*Animate*/
  (function() {
    var Util,
      __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  
    Util = (function() {
      function Util() {}
  
      Util.prototype.extend = function(custom, defaults) {
        var key, value;
        for (key in custom) {
          value = custom[key];
          if (value != null) {
            defaults[key] = value;
          }
        }
        return defaults;
      };
  
      Util.prototype.isMobile = function(agent) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
      };
  
      return Util;
  
    })();
  
    this.WOW = (function() {
      WOW.prototype.defaults = {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
      };
  
      function WOW(options) {
        if (options == null) {
          options = {};
        }
        this.scrollCallback = __bind(this.scrollCallback, this);
        this.scrollHandler = __bind(this.scrollHandler, this);
        this.start = __bind(this.start, this);
        this.scrolled = true;
        this.config = this.util().extend(options, this.defaults);
      }
  
      WOW.prototype.init = function() {
        var _ref;
        this.element = window.document.documentElement;
        if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
          return this.start();
        } else {
          return document.addEventListener('DOMContentLoaded', this.start);
        }
      };
  
      WOW.prototype.start = function() {
        var box, _i, _len, _ref;
        this.boxes = this.element.getElementsByClassName(this.config.boxClass);
        if (this.boxes.length) {
          if (this.disabled()) {
            return this.resetStyle();
          } else {
            _ref = this.boxes;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              box = _ref[_i];
              this.applyStyle(box, true);
            }
            window.addEventListener('scroll', this.scrollHandler, false);
            window.addEventListener('resize', this.scrollHandler, false);
            return this.interval = setInterval(this.scrollCallback, 50);
          }
        }
      };
  
      WOW.prototype.stop = function() {
        window.removeEventListener('scroll', this.scrollHandler, false);
        window.removeEventListener('resize', this.scrollHandler, false);
        if (this.interval != null) {
          return clearInterval(this.interval);
        }
      };
  
      WOW.prototype.show = function(box) {
        this.applyStyle(box);
        return box.className = "" + box.className + " " + this.config.animateClass;
      };
  
      WOW.prototype.applyStyle = function(box, hidden) {
        var delay, duration, iteration;
        duration = box.getAttribute('data-wow-duration');
        delay = box.getAttribute('data-wow-delay');
        iteration = box.getAttribute('data-wow-iteration');
        return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
      };
  
      WOW.prototype.resetStyle = function() {
        var box, _i, _len, _ref, _results;
        _ref = this.boxes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          box = _ref[_i];
          _results.push(box.setAttribute('style', 'visibility: visible;'));
        }
        return _results;
      };
  
      WOW.prototype.customStyle = function(hidden, duration, delay, iteration) {
        var style;
        style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
        if (duration) {
          style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
        }
        if (delay) {
          style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
        }
        if (iteration) {
          style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
        }
        return style;
      };
  
      WOW.prototype.scrollHandler = function() {
        return this.scrolled = true;
      };
  
      WOW.prototype.scrollCallback = function() {
        var box;
        if (this.scrolled) {
          this.scrolled = false;
          this.boxes = (function() {
            var _i, _len, _ref, _results;
            _ref = this.boxes;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              box = _ref[_i];
              if (!(box)) {
                continue;
              }
              if (this.isVisible(box)) {
                this.show(box);
                continue;
              }
              _results.push(box);
            }
            return _results;
          }).call(this);
          if (!this.boxes.length) {
            return this.stop();
          }
        }
      };
  
      WOW.prototype.offsetTop = function(element) {
        var top;
        top = element.offsetTop;
        while (element = element.offsetParent) {
          top += element.offsetTop;
        }
        return top;
      };
  
      WOW.prototype.isVisible = function(box) {
        var bottom, offset, top, viewBottom, viewTop;
        offset = box.getAttribute('data-wow-offset') || this.config.offset;
        viewTop = window.pageYOffset;
        viewBottom = viewTop + this.element.clientHeight - offset;
        top = this.offsetTop(box);
        bottom = top + box.clientHeight;
        return top <= viewBottom && bottom >= viewTop;
      };
  
      WOW.prototype.util = function() {
        return this._util || (this._util = new Util());
      };
  
      WOW.prototype.disabled = function() {
        return !this.config.mobile && this.util().isMobile(navigator.userAgent);
      };
  
      return WOW;
  
    })();
  
  }).call(this);
  
  
  wow = new WOW(
    {
      animateClass: 'animated',
      offset: 100
    }
  );
  wow.init();

/********** */  
function truncateText(truncated, maxLength) { 

  if (truncated.length > maxLength) {
      truncated = truncated.substr(0,maxLength) + '...';
  }
  return truncated;
} 