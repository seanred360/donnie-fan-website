import Layout from "../components/Layout";
import "../styles/globals.scss";
import "../styles/HamburgerButton.scss";
import "../styles/pages/Contact.scss";
import "../styles/pages/Events.scss";
import "../styles/SocialMediaButtons.scss";
import "../styles/SocialMediaFeed.scss";
import "../styles/ReactImageGallery.scss";
import "../styles/_animations.scss";
import "../styles/Shows.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
