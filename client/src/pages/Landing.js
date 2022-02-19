import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>tracking </span> app
          </h1>
          <p>
            Lyft chicharrones normcore blue bottle fashion axe church-key
            activated charcoal locavore lo-fi. Hot chicken kale chips poutine,
            hexagon shabby chic taiyaki palo santo mumblecore. Pitchfork
            everyday carry wayfarers lo-fi, vexillologist taiyaki blog pork
            belly cred beard semiotics.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
