var bookController = function(Book)
{
   var post = function(req,res)
   {
    var book = new Book(req.body);

    if(!req.body.title){
        console.log("yes");
        res.status(400);
        res.send('Title is required');
   }else
   {
     console.log('ssfsfsf');
    
     book.save();
     res.status(201);
     res.send(book);
   }
    }

   var get = function(req,res)
   {
    var query = {};
    if(req.query.title)
      {
        query.title = req.query.title;
      }
      Book.find(query,function(err,books){
      if(err)
          res.status(500).send(err);
      else
          {
          var returnBooks = [];
          books.forEach(function(element,index, array){
              var newBook = element.toJSON();
                newBook.links = {};
                newBook.links.self = 'http://' + req.headers.host + '/api/books/' + newBook._id   
              returnBooks.push(newBook);
          });
          res.json(returnBooks);
          }
  });
  
    }
    return {
        post :post,
        get : get
    }
}

module.exports = bookController; 