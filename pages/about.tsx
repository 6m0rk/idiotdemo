import Link from 'next/link';
import { Container } from '../components/sharedstyles';
import ReactTerminal from 'react-terminal-component';
import {
  EmulatorState,
  OutputFactory,
  CommandMapping,
  EnvironmentVariables,
  FileSystem,
  History,
  Outputs,
  defaultCommandMapping,
} from 'javascript-terminal';

const customState = EmulatorState.create({
  fs: FileSystem.create({
    '/home': {},
    '/home/README': { content: 'This is a text file' },
    '/home/nested/directory': {},
    '/home/nested/directory/file': { content: 'End of nested directory!' },
  }),
});

export default function About() {
  return (
    <Container>
      <ReactTerminal inputStr="ls" emulatorState={customState} />
    </Container>
  );
}
