$(function(){
    var imagesrc = [
    "Stock/birds-1.jpg",
    "Stock/birds-2.jpg",
    "Stock/birds-3.jpg",
    "Stock/birds-4.jpg",
    "Stock/birds-5.jpg",
    "Stock/Cars.jpg",
    "Stock/chamomile.jpg"
    ];

$storage = $('.storage');
$viewer = $('.viewer');
$index = 0;
for(var i=0;i<imagesrc.length;i++){
    $storage.append("<div class="+ "image" +i+"></div>"); // we can use append , append start at first element to push but prepend start from last.
    $('.image' + i).append("<img src = "+ imagesrc[i] + "></img>");
    $viewer.append("<img class='myslides'src="+ imagesrc[i] +"></img>");
}

$('.myslides:eq(0)').css('display','block'); 
$('.storage img:eq(0)').addClass("active");

$myslides = $(".myslides");
$stimg = $(".storage img");
$(document).on("keydown", ()=>{
$myslides.css("display", "none");
$stimg.removeClass("active");

$index = show($index);

if($index > imagesrc.length-1){
    $index = 0;
}
else if($index <0){
    $index = imagesrc.length-1;
}

$(".myslides:eq("+$index +")").css("display" , "block");
$('.storage img:eq('+ $index +')').addClass("active");
});

function show($index){
     
    if(event.keyCode == 39){
        $index++;
    }
    if(event.keyCode == 37){

        $index--;
    }
    return $index;
}

});