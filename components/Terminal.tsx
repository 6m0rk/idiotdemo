import React from 'react';
import styled from 'styled-components';
import ReactTerminal, { ReactThemes } from 'react-terminal-component';
import { EmulatorState } from 'javascript-terminal';
import { fs } from '../commands';

const TerminalStyler = styled.div`
  height: 26vh;
  padding: 0 4vw 8vh;
  overflow: hidden;
  > div {
    height: 100%;
    background: transparent;
    &::-webkit-scrollbar {
      background-color: transparent;
    }
  }
  input {
    background: transparent;
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
