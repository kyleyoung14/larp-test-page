var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , qs   = require('querystring')
  , port = 8080;

// Add more movies! (For a technical challenge, use a file, or even an API!)
// var text = fs.readFileSync("./movies.txt");
// text = text.toString()
// var movies = text.split("\n")
// console.log(movies.length)

// fs.exists("/README.md", function(exists){
//   if(exists)  {console.log("found readme")}
// });

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url, true)
//function sendIndex(res, movieList,timer, query, numRes)
  switch( uri.pathname ) {
    // Note the new case handling search
    case '/':
      sendFile(res, 'public/index.html', 'text/html')
      break
    case '/index.html':
      sendFile(res, 'public/index.html', 'text/html')
      break
    case '/README.md':
      sendFile(res, 'README.md', 'text/plain')
      break
    case '/readme.md':
      sendFile(res, 'README.md', 'text/plain')
      break
    case '/img/leafyBackground.jpg':
      sendFile(res,'public/img/leafyBackground.jpg', 'image/jpeg')
      break
    case '/css/style.css':
      sendFile(res, 'public/css/style.css', 'text/css')
      break
    case '/css/bootstrap.min.css':
      sendFile(res, 'public/css/bootstrap.min.css', 'text/css')
      break
    case '/css/bootstrap.min.css.map':
      sendFile(res, 'public/css/bootstrap.min.css.map', 'text/css')
      break
    case '/js/scripts.js':
      sendFile(res, 'public/js/scripts.js', 'text/javascript')
      break
    default:
      res.end('404 not found')
  }

})

server.listen(process.env.PORT || port)
console.log('listening on 8080')

// subroutines

// You'll be modifying this function
// function handleSearch(res, uri) {
//   var text = fs.readFileSync("./movies.txt");
//   text = text.toString()
//   var movies = text.split("\n")
//   var t0 = process.hrtime();
//   var contentType = 'text/html'
//   res.writeHead(200, {'Content-type': contentType})
//   var filMovies = []

//   if(uri.query) {
//     // PROCESS THIS QUERY TO FILTER MOVIES ARRAY BASED ON THE USER INPUT
//     if(uri.query.query){
//       for (var i = 0; i < movies.length; i++){
//         if((movies[i].toUpperCase()).includes((uri.query.query.toUpperCase()))){
//           filMovies.push(movies[i])
//         }
//       }

//     }
//     else{
//       filMovies = movies
//     }
//     numRes = filMovies.length
    

//     // if(uri.query.page){
//     //   movieNum = uri.query.page*20
//     //   if(filMovies.length < movieNum){
//     //     filMovies = filMovies.slice(movieNum-20,filMovies.length)
//     //   }
//     //   else{
//     //     filMovies = filMovies.slice(movieNum-20,movieNum)
//     //   }
//     // }
//     // else{
//     //   filMovies = filMovies.slice(0,20)
//     // }

//     console.log( uri.query )
//     // res.end( movies.join('\n') )
//     if(filMovies.length == 0){
//       filMovies = ['No movies matched your search']
//     }
//     var t1 = process.hrtime(t0);
//     // t1 = t1-t0
//     console.log('time= ' + t1[1] + 'seconds')
//     // var t1 = 4
//     sendIndex(res, filMovies, t1, uri.query, numRes)
//   } else {
//     res.end('no query provided')
//   }
// }

// function handleSearch2(request, res) {
//   if (request.method == 'POST') {
//     console.log("into if statement");
//     var body = '';
//     request.on('data', function (data) {
//         body += data;
//         console.log(body)
//         // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
//         if (body.length > 1e6) { 
//             // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
//             console.log("Destroyed");
//             request.connection.destroy();
//         }
//     });
//     request.on('end', function () {
//       var t0 = process.hrtime();
//       // var contentType = 'text/html'
//       // res.writeHead(200, {'Content-type': contentType})

//       console.log("parsing qs")
//       var POST = qs.parse(body).query;
//       console.log(POST)

//       var text = fs.readFileSync("./movies.txt");
//       text = text.toString()
//       var movies = text.split("\n")

//       var filMovies = []
//       for (var i = 0; i < movies.length; i++){
//         if((movies[i].toUpperCase()).includes((POST.toUpperCase()))){
//           filMovies.push(movies[i])
//         }
//       }
//       numRes = filMovies.length

//       if(filMovies.length == 0){
//         filMovies = ['No movies matched your search']
//       }
//       var t1 = process.hrtime(t0);
//       sendIndex(res, filMovies, t1, POST, numRes)
//       res.end()
//     });
//   }
// }



// // Note: consider this your "index.html" for this assignment
// function sendIndex(res, movieList,timer, query, numRes) {
//   var contentType = 'text/html'
//     , html = ''

//   var timer = (typeof timer !== 'undefined') ?  timer : -1;

//   var page = (query.page || 1)


//   html = html + '<html>'

//   html = html + '<head>'
//   // You could add a CSS and/or js call here...
//   html = html + '<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">'

//   html = html + '<link rel="stylesheet" type="text/css" href="css/style.css">'

//   html = html + '<link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet">'

//   html = html + '<link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet">'

//   html = html + '</head>'

//   html = html + '<body>'
//   html = html + '<h1>Movie Search!</h1>'

//   html = html + '<script src="js/scripts.js"></script>'

//   // Here's where we build the form YOU HAVE STUFF TO CHANGE HERE
  
//   html = html + '<form action="search" method="POST" id="search" onsubmit="return false;">'
//   html = html + '<input type="text" placeholder = "Search for..." name="query" id="movieSearch"/>'
//   html = html + '<button class = "btn btn-info" type="submit" onclick="getMySearch();">Go!</button>'
//   html = html + '</form>'

//   html = html + '<div class="row">'
//   html = html + '<div class="col-sm-6" margin="auto">'
//   html = html + '<form action="/add" method="POST" id="Add" onsubmit="return false;">'
//   html = html + '<input type="text" placeholder = "Add..." name="add" id="movieAdd"/>'
//   html = html + '<button class = "btn btn-success" type="submit" onclick="addMovie();">Add</button>'
//   html = html + '</form>'
//   html = html + '</div>'

//   html = html + '<div class="col-sm-6" margin="auto">'
//   html = html + '<form action="/remove" method="POST" id="Remove" onsubmit="return false">'
//   html = html + '<input type="text" placeholder = "Remove..." name="remove" id="movieRemove"/>'
//   html = html + '<button class = "btn btn-danger" type="submit" onclick="removeMovie();">Remove</button>'
//   html = html + '</form>'
//   html = html + '</div>'
//   html = html + '</div>'
//   // if(timer[1] > 0){
//     // if(query.query){
//       html = html + '<div class="time" id="searchNum"></div>'
//       html = html + '<br>'
//     // }
    
//   // }

//   // html = html + '<nav aria-label="Page navigation">'

//   // html = html + '<ul class="pagination">'

//   // for (var i = 1; i < Math.ceil(numRes/20)+1; i++){
//   //   if(i == page){
//   //     html = html + '<li class="active">'
//   //   }
//   //   else{
//   //     html = html + '<li>'
//   //   }
//   //   if(query.query){
//   //     html = html + '<a href="search?query='+query.query+'&page='+i+'">'+i+'</a></li>'
//   //   }
//   //   else{
//   //     html = html + '<a href="?page='+i+'">'+i+'</a></li>'
//   //   }
//   // }
//   // html = html + '</ul>'
//   // html = html + '</nav>'
//   html = html + '<ul id="movieList" class="list-group">'
//   html = html + movieList.map(function(d) { return '<li class="list-group-item">'+d+'</li>' }).join(' ')
//   html = html + '</ul>'
//   // html = html + '<nav aria-label="Page navigation">'

//   // html = html + '<ul class="pagination">'

//   // for (var i = 1; i < Math.ceil(numRes/20)+1; i++){
//   //   if(i == page){
//   //     html = html + '<li class="active">'
//   //   }
//   //   else{
//   //     html = html + '<li>'
//   //   }
//   //   if(query.query){
//   //     html = html + '<a href="search?query='+query.query+'&page='+i+'">'+i+'</a></li>'
//   //   }
//   //   else{
//   //     html = html + '<a href="?page='+i+'">'+i+'</a></li>'
//   //   }
//   // }
//   // html = html + '</ul>'
//   // html = html + '</nav>'

//   html = html + '</body>'
//   html = html + '</html>'
  
//   res.writeHead(200, {'Content-type': contentType})
//   res.end(html, 'utf-8')
// }

function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html'

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType})
    res.end(content, 'utf-8')
  })

}

// function handleAdd(request,response) {
//   console.log("add found");
//     if (request.method == 'POST') {
//       console.log("into if statement");
//         var body = '';
//         request.on('data', function (data) {
//             body += data;
//             console.log(body)
//             // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
//             if (body.length > 1e6) { 
//                 // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
//                 console.log("Destroyed");
//                 request.connection.destroy();
//             }
//         });
//         request.on('end', function () {
//             console.log("parsing qs")
//             var POST = qs.parse(body).add;
//             console.log(POST)
//             // use POST
//             var text = fs.readFileSync("./movies.txt");
//             text = text.toString()
//             var movies = text.split("\n")

//             //if not already in the list of movies
//             if(movies.indexOf(POST) == -1){
//               console.log(POST.toString() + " is being added to movie list");
//              fs.appendFile("./movies.txt", "\n" + POST, 'utf-8')
//             }
//             else{
//               console.log("found " + POST.toString() + " in movie list");
//             }
//             // response.writeHead(301, {'Location':'/index.html'});
//             response.end();
//         });
//     }
// }

// function handleRemove(request,response) {
//   console.log("remove found");
//   if (request.method == 'POST') {
//       var body = '';
//       request.on('data', function (data) {
//           body += data;
//           // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
//           if (body.length > 1e6) { 
//               // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
//               request.connection.destroy();
//           }
//       });
//       request.on('end', function () {
//           console.log("parsing qs")
//           var POST = qs.parse(body).remove;
//           console.log(POST)
//           // use POST
//           var text = fs.readFileSync("./movies.txt");
//           text = text.toString()
//           var movies = text.split("\n")

//           //if not already in the list of movies
//           var ind = movies.indexOf(POST)
//           if(ind >= 0){
//             console.log("Removing " + POST.toString() + " from movie list");
//             movies.splice(ind, 1);
//             fs.writeFileSync("./movies.txt", movies.join('\n'), 'utf-8');
//           }
//           else{
//             console.log(POST.toString() + " was not in the movie list");
//           }
//           // response.writeHead(301, {'Location':'/index.html'});
//           response.end();
//       });
//   }
// }

