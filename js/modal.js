window.onload=function(){
var linkSendApp=document.querySelector('.send_aplication a');
var popSendApp=document.querySelector('.modal_submit_applic');
var linkSendRes=document.querySelector('.send_resume a');
var popSendRes=document.querySelector('.modal_send_resume');
var fio=document.querySelectorAll('[name=fio]');
var tel=popSendApp.querySelector('[name=telephon]');
var form_1=popSendApp.querySelector('.form_modal_submit_applic');
var modalsClose=document.querySelectorAll('.modal_close');
for(i=0;i<modalsClose.length;i++){
    modalsClose[i].addEventListener('click', function(evt){
        evt.preventDefault();
        if(popSendApp.classList.contains('modal_submit_applic_show')){
            popSendApp.classList.remove('modal_submit_applic_show');
        }
        if(popSendRes.classList.contains('modal_send_resume_show')){
            popSendRes.classList.remove('modal_send_resume_show')
        } 
    })
}
window.addEventListener("keydown",function(evt){
    if(evt.keyCode===27){
        if(popSendApp.classList.contains('modal_submit_applic_show')){
            popSendApp.classList.remove('modal_submit_applic_show');
        }
    }
});
window.addEventListener("keydown",function(evt){
    if(evt.keyCode===27){
        if(popSendRes.classList.contains('modal_send_resume_show')){
            popSendRes.classList.remove('modal_send_resume_show')
        }
    }
});
linkSendApp.addEventListener("click", function(evt){
  evt.preventDefault();
  popSendApp.classList.add("modal_submit_applic_show");
  fio[0].focus();
});
linkSendRes.addEventListener("click", function(evt){
  evt.preventDefault();
  popSendRes.classList.add("modal_send_resume_show") ;
  fio[1].focus();
});
}