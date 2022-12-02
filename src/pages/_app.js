import '../app/common/Variables.sass'
import '../App.sass';
import '../index.sass';
import Menu from '../app/common/Menu'
import Script from 'next/script';

function ElComApp({ Component, pageProps }) {
  return (
    <div className="App">
      <Script src="https://kit.fontawesome.com/7ee732abfc.js" strategy='beforeInteractive'/>
      <Menu />
      <Component {...pageProps} />
    </div>
  );
}

export default ElComApp;