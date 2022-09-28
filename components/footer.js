function footer(){
    return` <div class="footer-container">
    <div class="footer-brandlogo">
        <h1>Trending Brands</h1>
        <div class="brand-logo">
            <div id="inner-brandlogo">

            </div>
            <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg" alt="">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png" alt="">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/nike-hp-logos-256x256.jpg" alt="">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg" alt="">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg" alt="">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg" alt="">
        </div>
    </div>
    <div class="footer-logo">
        <div id="social-logo">
<img src="data:image/png;base64,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" alt="">
<img src="data:image/jpeg;base64,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" alt="">
<img src="data:image/png;base64,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" alt="">            
</div>
<p id="dash">|</p>
<div id="payment-logo">

 <img src="https://percenta-nanoproducts.com/wp-content/uploads/2021/07/paypal-visa-mastercard.png" alt="dont know">
</div>

          
      
           

    </div>
    <div class="footer">
       
        <div class="footer-heading">
            <h2>HELP & INFORMATION</h2>
            <a href="#">Help</a>
            <a href="#">Track Order</a>
            <a href="#">Delivery & returns</a>
        </div>
        <div class="footer-heading">
            <h2>ABOUT ASOS</h2>
            <a href="#">About us</a>
            <a href="#">Careers at ASOS</a>
            <a href="#">Corporate responsibility</a>
            <a href="#">Investor's site</a>
        </div>
        <div class="footer-heading">
            <h2>MORE FROM ASOS</h2>
            <a href="#">Mobile and  ASOS apps</a>
            <a href="#">ASOS Marketplace</a>
            <a href="#">Gift vouchers</a>
            <a href="#">Black Friday</a>
            <a href="#">ASOS x Thrift+</a>
        </div>
        <div class="footer-heading">
            <h2>SHOPPING FROM:</h2>
           <p>You're in<a href="#"> <b>IN</b> | CHANGE</a></p> 
        </div>
      
    </div>
    <div class="footer-bottom">
        <p>© 2022 ASOS</p>
        <a href="#">Privacy & Cookies  |  Ts&Cs  |  Accessibility</a>

       </div>
</div>`
}
export default footer ;