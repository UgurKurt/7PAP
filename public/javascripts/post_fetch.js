
$( document ).ready(function(){
    $.getJSON('http://localhost:3000/api',function(data){
        for(var i=0;i<data.length;i++){
            appendPostHTML(data[i],i);
        }
    });
});

function appendPostHTML(post,rank){
    var html = "<h3>" + post.title + "</h3>"
               "<img src=" + post.imgUrl + "/>";
    $('.post-container').append(html);
    console.log(rank);
}