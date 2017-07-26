var lastEntryDate = Date.now();
console.log(lastEntryDate + "hehe");

$( document ).ready(function(){
    fillContent();
});

$('#show-more').on('click',function(event){
    fillContent();
});

function appendPostHTML(post,rank){
    var html = "<h3>" + post.title + "</h3>"+
               "<img src='" + post.imgUrl + "'/>";
    $('.post-container').append(html);
}

function fillContent(){
    $.getJSON('http://localhost:3000/api/'+lastEntryDate.toString(),function(data){
        console.log('incoming data:' + data);
        for(var i=0;i<data.length;i++){
            appendPostHTML(data[i],i);
        }
        lastEntryDate = data[i-1].publishDate;
    });
}