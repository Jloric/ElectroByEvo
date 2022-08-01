import React from 'react';
import {Link} from 'react-router-dom';
const Footer = () =>
{
    return (

        <footer className="text-center text-lg-start bg-light text-muted">



          <section className="">
            <div className="container text-center text-md-start mt-5">

              <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>ElectroByEvo
                  </h6>
                  <p>
                    Voici notre projet de fin de formation
                  </p>
                </div>



                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">
                    Technologies utilisées
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Spring</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">React</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">GitHub</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Google Drive</a>
                  </p>
                </div>


                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                  <p><Link className="btn" to="/login">Administration</Link></p>
                </div>

              </div>

            </div>
          </section>



        </footer>

    )
}

export default Footer;