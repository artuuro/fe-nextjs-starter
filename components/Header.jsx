import Head from 'next/head';
import { Config } from '../lib';

export default ({ title, description = "" }) => {
    return (
        <Head>
            <meta name="description" content={ description } />
            <title>{ Config.title } - { title }</title>
        </Head>
    );
};