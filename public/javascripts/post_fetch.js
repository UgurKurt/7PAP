var lastEntryDate = Date.now();
var API_URL = 'http://localhost:3000/api';

$( document ).ready(function(){
    fillContent();
});

$('#show-more').on('click',function(event){
    fillContent();
});

function appendPostHTML(post){
    var html = "<h3>" + post.title + "</h3>"+
               "<img src='" + post.imgUrl + "'/>"+
               "<p id='"+post._id +"' class='karma'>"+ post.votes +"</p>" +
               "<button postId='"+ post._id +"' class='upvote'>Upvote</button>"+
               "<button postId='"+post._id +"' class='downvote'>Downvote</button>" +
               "<p>Author: "+ post.author +"</p>";
    $('.post-container').append(html);
}


function fillContent(){
    $.getJSON('http://localhost:3000/api/getPosts/'+lastEntryDate.toString(),function(data){
        console.log('incoming data:' + data);
        for(var i=0;i<data.length;i++){
            appendPostHTML(data[i],i);
        }
        lastEntryDate = data[i-1].publishDate;

        $('.upvote').on('click',function(event){
            $.post(API_URL + '/upvote/' + event.target.getAttribute('postId'), null);
            var karma = $('#'+event.target.getAttribute('postId')).html();
            $('#'+event.target.getAttribute('postId')).html(Number(karma) + 1);
            event.target.setAttribute('disabled' ,true);
        });

        $('.downvote').on('click',function(event){
            $.post(API_URL + '/downvote/' + event.target.getAttribute('postId'), null);
            var karma = $('#'+event.target.getAttribute('postId')).html();
            $('#'+event.target.getAttribute('postId')).html(Number(karma) - 1);
            event.target.setAttribute('disabled' ,true);
        });

    });
}

