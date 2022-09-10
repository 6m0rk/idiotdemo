import Head from 'next/head';
import { Container } from '../components/sharedstyles';
import Screen from '../components/Screen';
import Tui from '../components/Terminal';
import Overlay from '../components/Overlay';

export default function Home() {
  return (
    <>
      <Head>
        <title>Idiotbox</title>
        <meta name="description" content="A box filled with idiot." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Overlay />
      <Container>
        <Screen />
        <Tui />
      </Container>
    </>
  );
}
