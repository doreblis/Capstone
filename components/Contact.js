export default function Contact() {
    return `

    <section id="contact" class="image-bg home-img">
      <div class="container inner pt-70">
        <div class="row section-separator">
          <div class="col-lg-8 offset-lg-2">
            <h2 class="section-title display-4 text-center">Get in Touch</h2>
            <br>
            <br>
            <div class="row text-center">
              <div class="col-md-4"> <span class="icon icon-color color-default fs-48 mb-10"><i class="fas fa-map-marked-alt"></i></span>
                <p>Nashville, TN, USA</p>
              </div>
              <div class="col-md-4"> <span class="icon icon-color color-default fs-48 mb-10"><i class="fas fa-phone"></i></span>
                <p><a class="nocolor" href="callto:">+1 615.123.4567</a></p>
              </div>
              <div class="col-md-4"> <span class="icon icon-color color-default fs-48 mb-10"><i class="fas fa-envelope"></i></span>
                <p><a class="nocolor" href="mailto:">ddiscoding@gmail.com</a></p>
                <br>
                <br>
              </div>
            </div>
            <div class="space30"></div>
            <form class="contact-form" action="https://formspree.io/ddiscoding@gmail.com" method="POST">
            <div class="form-container">
                <div class="row text-center">
                  <div class="col-md-6 pr-10">
                    <div class="form-group">
                      <input type="text" class="form-control" name="name" placeholder="Your name" required="required">
                    </div>
                  </div>
                  <div class="col-md-6 pl-10">
                    <div class="form-group">
                      <input type="email" class="form-control" name="email" placeholder="Your e-mail" required="required">
                    </div>
                  </div>
                  <div class="col-md-6 pr-10">
                    <div class="form-group">
                      <input type="tel" class="form-control" name="tel" placeholder="Phone">
                    </div>
                  </div>
                  <div class="col-md-6 pl-10">
                    <div class="form-group">
                      <input type="text" class="form-control" name="subject" placeholder="Subject" required="required">
                    </div>
                  </div>
                  <div class="col-12">
                    <textarea name="message" class="form-control" rows="3" placeholder="Type your message here..." required=""></textarea>
                    <div class="space20"></div>
                    <br>
                    <br>
                    <button type="submit" class="btn btn-dark" data-error="Fix errors" data-processing="Sending..." data-success="Thank you!" data-initial="" value="">Submit</button>

                </div>
            </div>
            </form>
          </div>
        </div>
      </div>
 
     

</section>


    `;
  }