import NavBar from "../components/NavBar"
import {Fragment} from "react";

const Home = () =>{
    return (<Fragment>
        <NavBar/>
        <body>
    <section class="py-14" id="welcome" data-jarallax data-speed=".8" style={{backgroundImage:"url(/img/custom/cover-22.jpg)"}}>
    <div class="container">
        <div class="row pt-12">
            <div class="col-12 col-md-7 col-lg-6 text-white">

                <h1 class="display-6">
                    Get a bigger wardrobe spending less
                </h1>

                <p class="mb-8 font-size-lg">
                    *Membership starts from €29.99
                </p>

                <a href="#!" class="btn btn-primary">
                    Join the club
                </a>

            </div>
        </div>
    </div>
    </section>

    <section class="pt-12 pb-10 " id="products" href="#products">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">

                    <h6 class="heading-xxs mb-3 text-gray-400">
                        PRODUCTS
                    </h6>

                    <h2 class="text-center">Be a member and borrow any piece for FREE!</h2>

                    <p class="mb-10 text-gray-500">
                        We want to give you the opportunity of playing with different styles and experiment the fun side of fashion without worrying about the price.
                        Your second closet adapts to multiple occasions, from work to holiday without forgetting quality and comfort.
                    </p>


                    <div class="flickity-buttons-lg flickity-buttons-offset px-lg-12" data-flickity='{"groupCells": true,"prevNextButtons": true}'>

                        <div className="col pt-3 pb-7" style={{'max-width': '229px;'}}>
                        <div class="card shadow-hover" >

                            <img src={process.env.PUBLIC_URL + '/img/products/product-50.jpg'} alt="..." class="card-img-top"/>

                                    <div class="card-body font-weight-bold text-center">

                                        <div class="text-body">Cropped cotton Top</div>

                                        <div class="text-muted">$29.00</div>

                                    </div>

                            </div>
                        </div>

                        <div class="col pt-3 pb-7" style={{"max-width": "229px;"}}>
                            <a class="card shadow-hover" href="product.html">

                                <img src={process.env.PUBLIC_URL + '/img/products/product-51.jpg'} alt="..."
                                     className="card-img-top"/>

                                <div class="card-body font-weight-bold text-center">

                                        <div class="text-body">Cropped cotton Top</div>

                                        <div class="text-muted">$29.00</div>

                                    </div>

                            </a>
                        </div>

                        <div class="col pt-3 pb-7" style={{"max-width": "229px;"}}>
                            <a class="card shadow-hover" href="product.html">

                                <img src={process.env.PUBLIC_URL + '/img/products/product-52.jpg'} alt="..."
                                     className="card-img-top"/>

                                <div class="card-body font-weight-bold text-center">

                                        <div class="text-body">Cropped cotton Top</div>

                                        <div class="text-muted">$29.00</div>

                                    </div>
                            </a>
                        </div>

                        <div class="col pt-3 pb-7" style={{"max-width": "229px;"}}>
                            <a class="card shadow-hover" href="product.html">

                                <img src={process.env.PUBLIC_URL + '/img/products/product-53.jpg'} alt="..."
                                     className="card-img-top"/>

                                <div class="card-body font-weight-bold text-center">

                                        <div class="text-body">Cropped cotton Top</div>

                                        <div class="text-muted">$29.00</div>

                                    </div>

                            </a>
                        </div>

                        <div class="col pt-3 pb-7" style={{"max-width": "229px;"}}>
                            <a class="card shadow-hover" href="product.html">

                                <img src={process.env.PUBLIC_URL + '/img/products/product-127.jpg'} alt="..."
                                     className="card-img-top"/>

                                <div class="card-body font-weight-bold text-center">

                                        <div class="text-body">Suede Sandals</div>

                                        <div class="text-muted">$69.00</div>

                                    </div>

                            </a>
                        </div>

                        <div class="col pt-3 pb-7" style={{"max-width": "229px;"}}>
                            <a class="card shadow-hover" href="product.html">

                                <img src={process.env.PUBLIC_URL + '/img/products/product-128.jpg'} alt="..."
                                     className="card-img-top"/>

                                <div class="card-body font-weight-bold text-center">

                                        <div class="text-body">Basic Polo T-Shirt</div>

                                        <div class="text-muted">$22.00</div>

                                    </div>

                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>

    <section class="py-12" id="about" data-jarallax data-speed=".8" style={{"background-image": "url(assets/img/custom/cover-about.jpg);"}}>
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-12 col-md-7 col-lg-5">

                    <div class="card">
                        <div class="card-body p-10">

                            <h3 class="mb-6">About the club</h3>

                            <p class="text-muted">
                                The Second Closet Club is a shared wardrobe
                                service that helps you to enjoy more of the
                                fashion world with less environmental impact.
                                The inventory is carefully selected so you can
                                stay fashionable knowing someone is looking
                                after the production, quality and destination of
                                what you wear everyday.
                            </p>

                            <a class="link-underline" href="#!">
                                Discover more
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section class="pt-12 pb-12">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-8 col-xl-7 text-center">

                    <h6 class="heading-xxs mb-3 text-gray-400">
                        Before & after
                    </h6>

                    <h2 class="mb-4">Dont waste your money and space</h2>

                    <p class="mb-10 text-gray-500">
                        We all have those pieces that were worn once (or never) piling up in the wardrobe.
                        Optimize your wardrobe, you don’t need to buy everything you want to wear...
                    </p>

                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-12 col-lg-10">

                    <div class="card">

                        <div class="badge badge-white card-badge card-badge-left text-uppercase">
                            Before
                        </div>

                        <div class="badge badge-white card-badge card-badge-right text-uppercase">
                            After
                        </div>

                        <div class="img-comp">

                            <div class="img-comp-back">
                                <img src="assets/img/custom/before.jpg" alt="..." class="img-comp-img"/>
                            </div>

                            <div class="img-comp-front">
                                <img src="assets/img/custom/after.jpg" alt="..." class="img-comp-img"/>
                            </div>

                            <div class="img-comp-handle btn btn-sm btn-circle btn-white">
                                <i class="fe fe-arrow-left"></i>
                                <i class="fe fe-arrow-right"></i>
                            </div>

                            <input class="img-comp-input" type="range"/>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>


    <section class="bg-light">
        <div class="container">
            <div class="row no-gutters justify-content-between">
                <div class="col-12 col-md-6 mt-12 mb-n12 bg-cover" style={{"background-image": "url(./img/custom/product-102.jpg);"}}></div>
                <div class="col-12 col-md-5 py-12">

                    <h3 class="mb-7">
                        You can have all the fun,
                        we will take care of the clothes
                    </h3>

                    <ul class="list-styled mb-7">
                        <li class="list-styled-item">
                            <i class="fe fe-check mr-2 text-primary"></i>
                            <span>Good quality pieces that will last.</span>
                        </li>
                        <li class="list-styled-item">
                            <i class="fe fe-check mr-2 text-primary"></i>
                            <span>Support local designers displayed in our inventory.</span>
                        </li>
                        <li class="list-styled-item">
                            <i class="fe fe-check mr-2 text-primary"></i>
                            <span>Professionally washed and safe to share.</span>
                        </li>
                        <li class="list-styled-item">
                            <i class="fe fe-check mr-2 text-primary"></i>
                            <span>Maintain the garments correctly making them last longer.</span>
                        </li>
                        <li class="list-styled-item">
                            <i class="fe fe-check mr-2 text-primary"></i>
                            <span>Give a proper environment friendly destination after their lifetime use.</span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </section>

    <div class="pb-12 pt-12">
    </div>

    <section class="pt-12" style={{"background": "#b8ae9f"}} id="howItWorks" href="#howItWorks" >
        <div class="container">
            <div class="row">
                <div class="col-12">

                    <h6 class="heading-xxs mb-3 text-gray-400 text-center ">
                        How it Works
                    </h6>

                    <h2 class="mb-10 text-center text-white">
                        LOVE...WEAR...RETURN
                    </h2>

                </div>
            </div>
            <div class="row pb-10">
                <div class="col-lg-4 text-center">

                    <div class="card bg-none mb-7 mb-md-0">

                        <div class="card-img-top position-relative mx-auto" style={{"max-width": "120px;"}}>


                            <i-feather name="heart" class="big text-white"></i-feather>


                        </div>

                        <div class="card-body text-center">

                            <h6 class="mb-4 text-white">
                                Join the club choosing your membership
                            </h6>

                            <p class="mb-0 text-gray-250">
                                Choose the maximum amount of pieces you want to rent per week.
                            </p>

                        </div>

                    </div>

                </div>
                <div class="col-lg-4 text-center">

                    <div class="card bg-none mb-7 mb-md-0">

                        <div class="card-img-top position-relative mx-auto" style={{"max-width": "120px;"}}>

                            <i-feather name="calendar" class="big text-white" ></i-feather>

                        </div>

                        <div class="card-body text-center">

                            <h6 class="mb-4 text-white pl-10 pr-10">
                                Book what you want to wear
                            </h6>

                            <p class="mb-0 text-gray-250">
                                Come to our meet ups to try
                                our inventory and book
                                your favorites online.
                            </p>

                        </div>

                    </div>

                </div>
                <div class="col-lg-4  text-center">

                    <div class="card bg-none mb-7 mb-md-0">

                        <div class="card-img-top position-relative mx-auto" style={{"max-width": "120px;"}}>


                            <i-feather name="corner-left-up" class="big text-white"></i-feather>

                        </div>

                        <div class="card-body text-center">

                            <h6 class="mb-4 text-white pl-8 pr-8">
                                Enjoy your new look them return
                            </h6>

                            <p class="mb-0 text-gray-250">
                                You don’t need to worry about washing your pieces. We will take care of it.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>

    <section class="py-12 bg-light" id="membership">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">

                    <h6 class="heading-xxs mb-3 text-gray-400">
                        Membership
                    </h6>

                    <h2 class="mb-10">Choose a plan that fits to your wardrobe</h2>

                </div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-4">

                    <div class="card card-lg shadow mb-7 mb-lg-0">
                        <div class="card-body border-bottom text-center">

                            <h5>Join the club for</h5>

                            <h2 class="mb-0 font-weight-bolder">
                                FREE
                            </h2>

                        </div>
                        <div class="card-body">

                            <p class="text-muted">
                                Spice up your wardrobe with <b>ONE-TIME RENTAL</b>. You can book and enjoy one piece at a time for a week.
                            </p>

                            <ul class="list-styled mb-8">
                                <li class="list-styled-item">
                                    <i class="fe fe-check mr-2"></i>Keep it upto 7 days.
                                </li>
                                <li class="list-styled-item">
                                    <i class="fe fe-check mr-2"></i>Free Laundry.
                                </li>
                                <li class="list-styled-item text-muted">
                                    <i class="fe fe-x mr-2"></i>Swap.
                                </li>
                            </ul>

                            <div class="text-center">
                                <a class="btn btn-outline-primary" href="#!">
                                    SELECT
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="col-12 col-lg-4">

                    <div class="card card-lg shadow mb-7 mb-lg-0">

                        <div class="badge badge-primary card-badge card-badge-left text-uppercase">
                            Popular
                        </div>

                        <div class="card-body border-bottom text-center">

                            <h5>Casual</h5>

                            <h2 class="mb-0 font-weight-bolder text-primary">
                                €58.00 <span class="font-size-lg font-weight-bold">/ month</span>
                            </h2>

                        </div>
                        <div class="card-body">

                            <p class="text-muted">
                                Pick <b>ONE PIECE</b>, enjoy it, mix and match with your wardrobe and then swap for a new piece.
                            </p>

                            <ul class="list-styled mb-8">
                                <li class="list-styled-item">
                                    <i class="fe fe-check mr-2 text-primary"></i>Keep it for up to 30 days.
                                </li>
                                <li class="list-styled-item">
                                    <i class="fe fe-check mr-2 text-primary"></i>Free laundry.
                                </li>
                                <li class="list-styled-item">
                                    <i class="fe fe-check mr-2 text-primary"></i>Book up to 4 pieces every month.
                                </li>
                            </ul>

                            <div class="text-center">
                                <a class="btn btn-outline-primary" href="#!">
                                    SELECT
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
                <div class="col-12 col-lg-4">

                    <div class="card card-lg shadow">
                        <div class="card-body border-bottom text-center">

                            <h5>Large</h5>

                            <h2 class="mb-0 font-weight-bolder">
                                €79.99 <span class="font-size-lg font-weight-bold">/ month</span>
                            </h2>

                        </div>
                        <div class="card-body">

                            <p class="text-muted">
                                Never get bored of your wardrobe.
                                Pick <b>TWO PIECES</b> at a time and make full new looks every week.
                            </p>

                            <ul class="list-styled mb-8">
                                <li class="list-styled-item">
                                    <i class="fe fe-check mr-2 text-primary"></i>Keep it for up to 30 days.
                                </li>
                                <li class="list-styled-item">
                                    <i class="fe fe-check mr-2 text-primary"></i>Free laundry.
                                </li>
                                <li class="list-styled-item">
                                    <i class="fe fe-check mr-2 text-primary"></i>Book up to 4 pieces every month.
                                </li>
                            </ul>

                            <div class="text-center">
                                <a class="btn btn-outline-primary" href="#!">
                                    Get Started Now
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>


    <section class="pt-12 pb-6" id="getStarted">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">

                    <h2 class="mb-8">Want to join the club?</h2>

                    <a href="#!" class="btn btn-primary mb-10">
                    I want to be a member
                </a>

            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row align-items-end">
            <div class="col">

                <img src="assets/img/custom/product-105.jpg" alt="..." class="img-fluid"/>

            </div>
            <div class="col d-none d-md-block">

                <img src="assets/img/custom/product-106.jpg" alt="..." class="img-fluid"/>

            </div>
            <div class="col">

                <img src="assets/img/custom/product-107.jpg" alt="..." class="img-fluid"/>

            </div>
            <div class="col d-none d-md-block">

                <img src="assets/img/custom/product-108.jpg" alt="..." class="img-fluid"/>

            </div>
            <div class="col">

                <img src="assets/img/custom/product-109.jpg" alt="..." class="img-fluid"/>

            </div>
        </div>
    </div>
</section>
    <div class="bg-dark bg-cover @@classList">
        <div class="pt-12 border-bottom border-gray-700">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8 col-xl-6">

                        <h5 class="mb-7 text-center text-white">Want style Ideas and Treats?</h5>

                        <form class="mb-11">
                            <div class="form-row align-items-start">
                                <div class="col">
                                    <input type="email" class="form-control form-control-gray-700 form-control-lg" placeholder="Enter Email *"/>
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-gray-500 btn-lg">Subscribe</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
        </body></Fragment>)

}

export default Home;