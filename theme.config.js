const theme = {
  titleSuffix: " | Akchauhan2 Blog",
  search: true,
  unstable_flexsearch: true,
  unstable_staticImage: true,
  floatTOC: true,
  font: false,
  github: "https://github.com/akchauhan2",
  projectLink: "https://github.com/akchauhan2",
  logo: () => (
    <>
      <img
        src="https://akchauhan2.com/asset/images/fevicon.png"
        height="25"
        width="25"
        style={{ marginRight: "1em" }}
      />
      <h1>
        Akchauhan2 Blog <span style={{ opacity: 0.2 }}></span>
      </h1>
    </>
  ),
  head: function Head(props) {
    return (
      <>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/javascript.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/javascript.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/javascript.svg"
        />
        <link rel="mask-icon" href="/javascript.svg" color="#000000" />
        <link rel="shortcut icon" href="/javascript.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="description"
          content="Website for the testing by Akchauhan2"
        />
        <meta
          name="description"
          content="Website for the testing by Akchauhan2"
        />
        <meta name="author" content="akchauhan2" />
        <meta property="og:url" content="https://dev.akchauhan2.com/myself" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="692" />
        <meta
          property="og:title"
          content={`${props.title} | Akchauhan2 Blog`}
        />
        <meta
          property="og:description"
          content="Website for the testing by Akchauhan2"
        />
        <meta
          property="og:image"
          content="https://dev.akchauhan2.com/static/media/ak.926de9fd.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@akchauhan2" />
        <meta name="twitter:creator" content="@akchauhan2" />
      </>
    );
  },
  darkMode: true,
  footerText: `${new Date().getFullYear()} © akchauhan2`,
  nextThemes: {
    defaultTheme: "dark",
  },
};
export default theme;
