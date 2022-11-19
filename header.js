var header=`<div class="container-fluid">
<div class="row">
  <div class="col-md-12 col-12 mx-auto ">
          <header>
              <!--header part 1-->
              <div class="row">
                  <div class="col-12 d-flex justify-content-between align-item-center first_header ">
                      <div class="container">
                       <div class="row my-3 ">
                          <div class="col-12 col-md-4 col-lg-4 header_logo">
                              <a href="index.html"><img  src="logo.png" min-width="100%" height="50px"></a>  
                          </div>
                          <div class="col-12 col-md-5 col-lg-4 mt-2  ">
                              <div class="input-group" >
                                  <input type="text" class="form-control " id="nav1_center_search_box"
                                    placeholder="Product-List , Category , etc " autocomplete="off" >
                                  <button type="button" class="nav1_center_search_btn " >Search</button>
                                </div> 
                          </div>
                          
                        <div class="col-12 col-md-3 col-lg-4 d-lg-flex d-md-flex justify-content-end mt-2 mt-md-0">
                              <a class="login_cart m-1 px-2" href="login.html">Login</a>
                              <a class="login_cart m-1 px-2" href="cart.html">
                              <i class="fa fa-shopping-cart "></i></a>  
                        </div> 
                       </div>
                      </div>
                  </div>
                  </div>
                </div>
            
                  <!--header part 2-->


                  <nav class="navbar navbar-expand-sm bg-light py-1 fs-6 ">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                     aria-label="Toggle navigation">
                      <span class="fa-solid fa-bars pt-1 navbar-toggler-icon "></i></span>
                    </button>
                    <div class="collapse navbar-collapse"  id="navbarNav">
                    <ul class="navbar-nav m-auto  text-center text-secondary">
                      <li class="nav-item px-2">
                        <a href="index.html" class="nav-link ">Home</a>
                      </li>
                      <li class="nav-item px-2">
                        <a href="allproduct.html" class="nav-link">All Product</a>
                      </li>
                      <li class="nav-item px-2 dropdown  m-auto ">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                         href="#" role="button" aria-expanded="false">Women</a>
                        <ul class="dropdown-menu ">
                          <li><a class="dropdown-item" href="#">All</a></li>
                          <li><a class="dropdown-item" href="#">Dress</a></li>
                          <li><a class="dropdown-item" href="#">Paints</a></li>
                          <li><a class="dropdown-item" href="#">Skrits</a></li>
                        </ul>
                      </li>
                      <li class="nav-item px-2 dropdown  m-auto ">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                         href="#" role="button" aria-expanded="false">Men</a>
                        <ul class="dropdown-menu ">
                          <li><a class="dropdown-item" href="#">Shirts</a></li>
                          <li><a class="dropdown-item" href="#">Hoddies</a></li>
                          <li><a class="dropdown-item" href="#">Paints</a></li>
                          <li><a class="dropdown-item" href="#">Jeans</a></li>
                        </ul>
                      </li>
                      <li class="nav-item px-2">
                        <a href="#" class="nav-link">Kids</a>
                      </li>
                      <li class="nav-item">
                        <a href="contact.html" class="nav-link">Contact</a>
                      </li>
                    </ul>
                    </div>
                    </nav>
                  </header>
                </div>
              </div>`
              document.getElementById("dynamicheader").innerHTML=header