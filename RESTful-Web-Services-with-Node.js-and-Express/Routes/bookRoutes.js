var express= require('express');

var routes = function(Book){

    var bookrouter = express.Router();
    
    bookrouter.route('/')
       .post(function(req,res){
         var book = new Book(req.body);
         console.log(book);
         book.save();
         res.status(201).send(book);
    
       })
      .get(function(req,res){
          var query = {};
          if(req.query.title)
            {
              query.title = req.query.title;
            }
            Book.find(query,function(err,books){
            if(err)
                res.status(500).send(err);
            else
                res.json(books);
        });
        
      });
    
      bookrouter.use('/:bookID',function(req,res,next){

        Book.findById(req.params.bookID,function(err,book){
          if(err)
              res.status(500).send(err);
          else if(book)
            {
              req.book = book;
              next();
            }
            else
            {
              res.status(404).send('No Book Found');  
            }
             });
      });

    bookrouter.route('/:bookID')
    .get(function(req,res){
    
                 res.json(req.book);
       })
       .put(function(req,res){
        
               console.log(req.body.title);
               req.book.title = req.body.title;
               req.book.auther = req.body.auther;
               req.book.genre = req.body.genre;
               req.book.read = req.body.read;
       
               req.book.save();
               res.json(req.book); 
             });   
             
return bookrouter;    

}

module.exports= routes;