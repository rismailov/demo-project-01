import Header from './global/Header';
import Footer from './global/Footer';

export default function Layout({ children }) {
    return (
        <div className="relative">
            <Header />

            <main>{children}</main>

            <Footer />
        </div>
    );
}
