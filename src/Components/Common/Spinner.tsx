import styled from "@emotion/styled";

export default styled.div`
  color: #fff;
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.3s infinite linear;
  transform: translateZ(0);

  @keyframes mulShdSpin {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 
      2em -2em 0 0em, 3em 0 0 -1em, 
      2em 2em 0 -1em, 0 3em 0 -1em, 
      -2em 2em 0 -1em, -3em 0 0 -1em, 
      -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 
      3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, 
      -2em 2em 0 -1em, -3em 0 0 -1em, 
      -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 
      2em -2em 0 0, 3em 0 0 0.2em, 
      2em 2em 0 0, 0 3em 0 -1em, 
      -2em 2em 0 -1em, -3em 0 0 -1em, 
      -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
      3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, 
      -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
      3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, 
      -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
      3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, 
      -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 
      3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
      -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 
      3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
      -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }
`;

// .loader, .loader:before, .loader:after {
//   border-radius: 50%;
//   width: 2.5em;
//   height: 2.5em;
//   animation-fill-mode: both;
//   animation: bblFadInOut 1.8s infinite ease-in-out;
// }
// .loader {
//   color: #FFF;
//   font-size: 7px;
//   position: relative;
//   text-indent: -9999em;
//   transform: translateZ(0);
//   animation-delay: -0.16s;
// }
// .loader:before,
// .loader:after {
//   content: '';
//   position: absolute;
//   top: 0;
// }
// .loader:before {
//   left: -3.5em;
//   animation-delay: -0.32s;
// }
// .loader:after {
//   left: 3.5em;
// }

// @keyframes bblFadInOut {
//   0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em }
//   40% { box-shadow: 0 2.5em 0 0 }
// }
    