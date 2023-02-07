import Head from "next/head";

const Meta = ({ title, description, ogType, ogUrl, image }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content={title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={ogUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        content="images/dj-comic-clean-lines.png"
      ></meta>

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

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
