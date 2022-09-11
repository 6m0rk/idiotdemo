import React from 'react';
import styled from 'styled-components';
import ReactTerminal, { ReactThemes } from 'react-terminal-component';
import { EmulatorState } from 'javascript-terminal';
import { fs } from '../commands';

const TerminalStyler = styled.div`
  > div {
    height: 100%;
  }
`;
// creating the emulator state and passing it
// custom emulators
const customState = EmulatorState.create({ ...fs });

// Terminal User Interface
export default function Tui() {
  return (
    <TerminalStyler>
      <ReactTerminal theme={ReactThemes.dye} emulatorState={customState} />
    </TerminalStyler>
  );
}
