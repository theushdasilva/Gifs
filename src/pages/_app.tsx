import Titulo from '../components/titulo';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Titulo titulo="Desafio"></Titulo>
    <Component {...pageProps} />
  </>
  );
}

export default MyApp
