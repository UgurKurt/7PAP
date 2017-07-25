var Post = require('../models/post');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/7pap');

var posts = [
    new Post({
        title: '1',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('1')
    }),
    new Post({
        title: '2',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('2')
    }),
    new Post({
        title: '3',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('3')
    }),
    new Post({
        title: '4',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('4')
    }),
    new Post({
        title: '5',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('5')
    }),
    new Post({
        title: '6',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('6')
    }),
    new Post({
        title: '7',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('7')
    }),
    new Post({
        title: '8',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('8')
    }),
    new Post({
        title: '9',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('9')
    }),
    new Post({
        title: '10',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('10')
    }),
    new Post({
        title: '11',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('11')
    }),
    new Post({
        title: '12',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('12')
    }),
    new Post({
        title: '13',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('13')
    }),
    new Post({
        title: '14',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('14')
    }),
     new Post({
        title: '15',
        imgUrl: 'https://fthmb.tqn.com/CqpMrhnNPu7eKDEdn7pNjFSfg3o=/735x0/about/meme-baby1-580700253df78cbc28b1b442.PNG',
        publishDate: Number('15')
    })
];

for(var i=0;i<posts.length;i++){
    posts[i].save();
}