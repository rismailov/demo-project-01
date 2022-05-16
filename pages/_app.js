import Layout from '../components/Layout';
import 'windi.css';
import '../styles/windi.css';
import '../styles/app.scss';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
