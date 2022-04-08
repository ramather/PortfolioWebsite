import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <h1>CONTACT ME</h1>
        <button>Let's talk</button>
      </div>
      <div className="links">
        <div className="technologies">
          <i id="icon" class="devicon-linkedin-plain"></i>
          <i id="icon" class="devicon-github-original"></i>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Footer;
