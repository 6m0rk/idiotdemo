import Head from 'next/head';
import { Container, Main } from '../components/sharedstyles';
import Overlay from '../components/Overlay';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Idiotbox</title>
        <meta name="description" content="A box filled with idiot." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Overlay />
      </Main>
    </Container>
  );
}
