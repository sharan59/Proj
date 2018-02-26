var app = require('express')();

//var Book = require('../models/bookModel');
var mongo = require('mongodb').MongoClient;
//mongoose.Promise = global.Promise;
//mongo.connect("mongodb://localhost:27017/booktest");
//var db = mongo.connection;

app.get('/allproducts', function(req, res) {
    mongo.connect("mongodb://localhost:27017/booktest",function(err,db){
        if(err) throw err;
        console.log("mongo is connected");
        db.collection('booktest').find({}).toArray( function(err, sample) {
            if(err) throw err;
    //console.log(data[1]);
            res.send(sample);
        });
    });

    
});

app.get('/book', function(req, res) {
    var id = req.query.bookId;

    Book.find({ _id: id }, function(err, book) {
        if(err) throw err;
        
        res.send(book[0]);
    });
});

app.delete('/book', function(req, res) {
    var bookId = req.query.bookId;
    console.log(bookId)

    Book.findByIdAndRemove(bookId, function(err, book) {
        if(err) {
            console.log(err);
            res.send({
                success: false,
                message: "The request was not completed. Book with id " + book._id + " is not successfully deleted"
            });
        } else {
            res.send({
                success: true,
                message: "Book successfully deleted",
                id: book._id
            });
        }
    });
});

app.post('/signup', function(req, res) {
    //var userName=req.body.userName;
    //var pw=req.body.pw;
    //var age=req.body.age;
    var obj={firstName:req.body.firstName,lastName:req.body.lastName,Gender:req.body.Gender,fatherName:req.body.fatherName,
        Address:req.body.Address,PhoneNumber:req.body.PhoneNumber,Email:req.body.Email, Password:req.body.Password,
        ConfirmPassword:req.body.ConfirmPassword,AadharNumber:req.body.AadharNumber};
  mongo.connect("mongodb://localhost:27017/project",function(err,db){

    if(err) throw err;
    db.collection('signup').insert(obj,function(err,res){
        if(err)
        console.log.apply(err);
        console.log("successfully inserted");
        

    })
    res.send("inserted");
    });
    });


    app.post('/login', function(req, res) {
        var email=req.body.Email;
        var password=req.body.Password;
                
      mongo.connect("mongodb://localhost:27017/project",function(err,db){

                if(!err)
                {
                    db.collection('signup').find({Email:email,Password:password}).toArray(function(err,result){
                     
                        //console.log(result);
                        if(err||result.length<=0)
                        console.log('invalid user');
                        else
                        res.send(result);
                        console.log("successful login");
                })


      }
    })})
    
    app.post('/insertcourse', function(req, res) {
        //var userName=req.body.userName;
        //var pw=req.body.pw;
        //var age=req.body.age;
        var obj={coursename:req.body.coursename,faculty:req.body.faculty,coursedisc:req.body.coursedisc,coursefee:req.body.coursefee};
      mongo.connect("mongodb://localhost:27017/project",function(err,db){
    
        if(err) throw err;
        db.collection('insertcourse').insert(obj,function(err,res){
            if(err)
            console.log.apply(err);
            console.log("successfully inserted");
            
    
        })
        res.send("inserted");
        });
        });

        app.get('/java', function(req, res) {

            
                
            mongo.connect("mongodb://localhost:27017/project",function(err,db){
      
                      if(!err)
                      {
                          db.collection('insertcourse').find({coursename:"java"}).toArray(function(err,result){
                           
                              console.log(result);
                              if(err||result.length<=0)
                              console.log('no data');
                              else
                              console.log("data retrieved");
                              res.send(result);
                      })
                }
          })})

          app.get('/mean', function(req, res) {

            mongo.connect("mongodb://localhost:27017/project",function(err,db){
      
                      if(!err)
                      {
                          db.collection('insertcourse').find({coursename:"mean"}).toArray(function(err,result){
                           
                              console.log(result);
                              if(err||result.length<=0)
                              console.log('no data');
                              else
                              console.log("data retrieved");
                              res.send(result);
                      })
                }
          })})

          app.get('/all', function(req, res) {

            mongo.connect("mongodb://localhost:27017/project",function(err,db){
      
                      if(!err)
                      {
                          db.collection('insertcourse').find({}).toArray(function(err,result){
                           
                              console.log(result);
                              if(err||result.length<=0)
                              console.log('no data');
                              else
                              console.log("data retrieved");
                              res.send(result);
                      })
                }
          })})

          app.delete('/all/:name', function(req, res) {

     
            console.log("name is"+req.params.name);
               var rname=req.params.name;
               console.log("param is"+rname)
        mongo.connect("mongodb://localhost:27017/project",function(err,db)
        
        {
           console.log("before");
           db.collection('insertcourse').deleteOne({coursename:rname},function(err,result){
        
                   if(err) throw err;
        
                   console.log("result is"+result);
        
                   
                   db.collection('insertcourse').find({}).toArray(function(err, data) {
                       if(err) throw err;
                       console.log('mongo connected');
                       console.log(data);
                       res.send(data);
                   });
        
           });
        
        })})
app.put('/book', function(req, res) {
    var bookData = req.body.bookData;

    Book.findById(bookData.id, function(err, book) {
        if(err) {
            res.send(err);
        } else {
            book.title = bookData.title;
            book.author = bookData.author;
            book.publisher = bookData.publisher;
            book.price = bookData.price;
            book.description = bookData.description;
            book.category = bookData.category;
            book.cover = bookData.cover;

            book.save(function(err, book) {
                if(err) {
                    res.send(err);
                } else {
                    res.send({
                        success: true,
                        message: "Book successfully updated"
                    });
                }
            });
        }
    });
});

module.exports = app;

