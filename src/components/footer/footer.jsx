import "./footer.css";

const Footer = () =>{
    return(
      <div >
            <div className="footer-text">
                <h1 className="footer-text animate__animated animate__pulse">Proyecto realizado por</h1>
                <h1 className="font animate__animated animate__pulse">Noelia Zeitunlian</h1>
            </div>
            <div className="container-footer">
                <div className="icons-footer">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/noelia-zeitunlian/" target='_blank' className="linkedin"> 
                            <i className="bi bi-linkedin"></i>
                            </a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a href="https://github.com/noeliazeitunlian" target='_blank' className="github"> 
                            <i className="bi bi-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>

      </div>
    )
  }

export default Footer;