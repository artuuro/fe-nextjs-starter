import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import { Fragment } from 'react';
import { Theme } from '../lib';

class AgenciesDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
                    <meta name="theme-color" content={Theme.palette.primary.main} />
                    <link rel="manifest" href="/static/manifest.json" />
                    <link rel="icon" type="image/png" href="/static/icons/icon-192x192.png" />
                    <link rel="apple-touch-icon" href="/static/icons/icon-192x192.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

AgenciesDocument.getInitialProps = async (context: DocumentContext) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = context.renderPage;

    context.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

    const initialProps = await Document.getInitialProps(context);

    return {
        ...initialProps,
        styles: [
            <Fragment key="styles">
                {initialProps.styles}
                {sheets.getStyleElement()}
            </Fragment>,
        ],
    };
}

export default AgenciesDocument;