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
    
    bookrouter.route('/:bookID')
    .get(function(req,res){
    
      Book.findById(req.params.bookID,function(err,book){
        if(err)
            res.status(500).send(err);
        else
            res.json(book); 
           })
       })
       .put(function(req,res){
        Book.findById(req.params.bookID,function(err,book)
        {
         if(err)
           res.status(500).send(err);
            else
               console.log(req.body.title);
               book.title = req.body.title;
               book.auther = req.body.auther;
               book.genre = req.body.genre;
               book.read = req.body.read;
       
               book.save();
               res.json(book); 
             });   
          
          });
           
    
return bookrouter;    

}

module.exports= routes;