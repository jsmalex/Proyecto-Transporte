import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <p className="p-footer">
        <b>&copy; 2024 by Logística Jota. All Right Reserved</b>
      </p>
      <div className="rrss-footer">
        <li className="rs">
          <a href="https://www.facebook.com/empresa-logistica" target="_blank">
            <img className="rrss-img" src="src/assets/img/facebook.png" />
          </a>
        </li>
        <li className="rs">
          <a href="https://www.twitter.com/empresa-logistica" target="_blank">
            <img className="rrss-img" src="src/assets/img/linkedin.png" />
          </a>
        </li>
        <li className="rs">
          <a
            href="https://www.linkedin.com/company/empresa-logistica"
            target="_blank"
          >
            <img className="rrss-img" src="src/assets/img/X.png" />
          </a>
        </li>
      </div>
    </div>
  )
}

export default Footer