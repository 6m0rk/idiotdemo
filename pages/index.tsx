import Head from 'next/head';
import { Container } from '../components/sharedstyles';
import Screen from '../components/Screen';
import Tui from '../components/Terminal';
import Overlay from '../components/Overlay';
import Web3 from 'web3';

export default function Home() {
  return (
    <>
      <Head>
        <title>Idiotbox</title>
        <meta name="description" content="A box filled with idiot." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Screen>
          <code>setting up commands to interact with this area</code>
        </Screen>
        <Tui />
      </Container>
      <Overlay />
    </>
  );
}
