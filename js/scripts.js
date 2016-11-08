// YOUR SCRIPTS
//grid view
$('#grid').click(function(){
    //remove list class ONLY
    $('.cd-gallery').removeClass('list');
    //add grid class ONLY
    $('.cd-gallery').addClass('grid');
});
//grid view
$('#list').click(function(){
    //remove list class ONLY
    $('.cd-gallery').removeClass('grid');
    //add grid class ONLY
    $('.cd-gallery').addClass('list');
});