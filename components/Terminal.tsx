import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import styled from 'styled-components';

const TerminalStyler = styled.div`
  width: 100%;
  > div {
    background: transparent;
    height: 100%;
    border-radius: 0;
    &:before {
      display: none;
    }
  }
  .react-terminal {
    height: 100%;
    justify-content: flex-start;
  }
`;

const Tui = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([]);
  return (
    <TerminalStyler>
      <Terminal
        name="=== Idiotbox ==="
        colorMode={ColorMode.Dark}
        prompt="Ξ"
        onInput={(terminalInput) =>
          setTerminalLineData([
            ...terminalLineData,
            <TerminalOutput>{terminalInput}</TerminalOutput>,
          ])
        }
      >
        {terminalLineData}
      </Terminal>
    </TerminalStyler>
  );
};
export default Tui;
