import styled from 'styled-components';

// rudimentary overlay for image overlay

export default styled((props) => (
  <div {...props}>
    <div />
    {props.children}
    <div />
  </div>
))`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  div {
    &:first-child {
      position: absolute;
      height: 74vh;
      width: 100%;
      background: rgba(45, 52, 54, 0.2);
    }
    &:last-child {
      position: absolute;
      height: 26vh;
      width: 100%;
      bottom: 0;
      background: rgba(99, 110, 114, 0.2);
    }
  }
`;
