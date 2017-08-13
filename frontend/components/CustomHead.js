import Head from 'next/head'

export default (props) => {
  return (
    <Head>
      <title>prace.python.cz</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Arbutus+Slab&amp;subset=latin,latin-ext"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&amp;subset=latin,latin-ext"/>
      <style>{`
        body, .ui.text.container {
          font-family: Roboto, sans-serif;
        }


        code {
          font-size: 85%;
        }
        .vmargin {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        h1, h2, h3 {
          font-family: Arbutus Slab, serif;
          font-weight: 400;
        }
        h1 {
          font-size: 36px;
        }
        h2 {
          font-size: 25px;
        }
        h3 {
        }

      `}</style>
    </Head>
  );
}
