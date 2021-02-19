
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet"> 
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Youtube View Detail Channel</title>
    <style>
      .nav-link{
        margin-left:10px;
      }
      body{
        font-family: 'PT Sans', sans-serif;
        background-color:#fff;
        background-size:cover;
      }
      
      @media (max-width: 575.98px) { 
        body{
          font-size:11px;
        }
        a, .btn , .form-control{
          font-size:11px;
        }
        img{
          width:120px;
        }
        
      }
    </style>
  </head>
  <body>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#"> Youtube Statistic </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-item nav-link mr-5 active" href="#">Search Channel</a>
          
          
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <div class="row bg-light mt-1 text-center">
        <div class="col-12 mt-2 mb-3">
          <h3 >Search Youtube Channel</h3>
        </div>
        <div class="col-12">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button class="btn btn-outline-secondary dropdown-toggle by" type="button" data-toggle="dropdown" id="id" aria-haspopup="true" aria-expanded="false">ID Channel</button>
              <div class="dropdown-menu">
                <a class="dropdown-item item-by" href="#" id="id">ID Channel</a>
                <a class="dropdown-item item-by" href="#" id="forUsername">Username Channel </a>
              </div>
            </div>
            <input type="text" id="tb_val" class="form-control" aria-label="Text input with dropdown button">
            <div class="input-group-append">
              <button class="btn btn-primary btn-cari" type="button">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row p-2 mt-4 detail-channel bg-light" id="ddd" >
        <div class="col-12 " id="profile-channel">
          
          
          </div>  
      </div>
      
      <div class="row mt-5 p-2" id="best_view">
        
        

      </div>

    </div>

    <div class="modal fade bd-example-modal-lg" id="loading" data-backdrop="static" data-keyboard="false" tabindex="-1">
      <div class="modal-dialog">
        <div class="col-md-12 center-screen">
          <center>
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </center>
        </div>
        </div>
    </div>

      <!-- END MODAL -->
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.js"
    integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
    crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    <script src="script.js" ></script>
  </body>
</html>