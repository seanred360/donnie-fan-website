import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:url" content="http://donniefan.com"></meta>
      <meta property="og:site_name" content="Donnie Fan"></meta>
      <meta property="og:image" content="images/hero.webp"></meta>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LJZNFQN96K"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-LJZNFQN96K');
      </script> */}
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Donnie Fan",
  keywords: "comedy, beijing",
  description: "The best comedy in Beijing",
};

export default Meta;
