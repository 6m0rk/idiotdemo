import React, { useState } from 'react';
import styled from 'styled-components';
import ReactTerminal, { ReactThemes } from 'react-terminal-component';
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

const TerminalStyler = styled.div`
  > div {
    height: 100%;
  }
`;

const Tui = () => {
  return (
    <TerminalStyler>
      <ReactTerminal
        theme={ReactThemes.dye}
        inputStr="ls"
        emulatorState={customState}
      />
    </TerminalStyler>
  );
};
export default Tui;
