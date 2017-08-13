import Head from 'next/head'

export default (props) => {
  return (
    <Head>
      <title>prace.python.cz</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Arbutus+Slab&amp;subset=latin,latin-ext"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&amp;subset=latin,latin-ext"/>
      <style>{`
        body, .ui.form, .ui.text.container {
          font-family: Roboto, sans-serif;
          font-size: 14px !important;
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
          margin-top: 2rem;
          margin-bottom: .66rem;
        }
        h1 {
          font-size: 36px;
        }
        h2 {
          font-size: 25px;
        }
        h3 {
          color: #379;
        }

        label.label,
        .ui.form .field>label,
        .ui.form .grouped.fields>label,
        .ui.form .inline.field>label
        {
          font-weight: 600;
          font-size: 14px;
          color: #069;
        }

        label.label,
        .ui.form .field>label {
          margin-top: 1rem;
          margin-bottom: .5rem;
          display: block;
        }

      `}</style>
    </Head>
  );
}
