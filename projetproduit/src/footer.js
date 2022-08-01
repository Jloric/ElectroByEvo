import React from 'react';

const Footer = () =>
{
    return (

        <footer class="text-center text-lg-start bg-light text-muted">



          <section class="">
            <div class="container text-center text-md-start mt-5">

              <div class="row mt-3">

                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>ElectroByEvo
                  </h6>
                  <p>
                    Voici notre projet de fin de formation
                  </p>
                </div>



                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 class="text-uppercase fw-bold mb-4">
                    Technologies utilisées
                  </h6>
                  <p>
                    <a href="#!" class="text-reset">Spring</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">React</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">GitHub</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Google Drive</a>
                  </p>
                </div>


                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                  <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                  <p>
                    <i class="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                  <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                </div>

              </div>

            </div>
          </section>



        </footer>

    )
}

export default Footer;