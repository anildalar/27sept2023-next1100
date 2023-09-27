// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

import '../styles/globals.css'
import CommonLayout from '../components/layouts/CommonLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CommonLayout>
          <Component {...pageProps} />
      </CommonLayout>
    </>
  );
}

export default MyApp
