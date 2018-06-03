export const Modifiers = {
  // Display
  dFlex: () => `
    display: flex;
  `,
  dInline: () => `
    display: inline;
  `,
  dBlock: () => `
    display: block;
  `,
  dNone: () => `
    display: none;
  `,
  vHidden: () =>  `
    visibility:hidden;
  `,

  // Flexbox
  fColumn: () => `
    flex-direction: column;
  `,
  fWrap: () => `
    flex-wrap: wrap;
  `,
  fjcCenter: () => `
    justify-content: center;
  `,
  fjcBetween: () => `
    justify-content: space-between;
  `,
  fjcAround: () => `
    justify-content: space-around;
  `,
  facCenter: () => `
    align-content: center;
  `,
  faiCenter: () => `
    align-items: center;
  `,
  fasCenter: () => `
    align-self: center;
  `,
  f1: () => `
    flex: 1;
  `,
  f25: () => `
    flex: 1 1 25%;
  `,

  // Box Model
  p0: () => `
    padding: 0;
  `,
  p1: () => `
    padding: 1rem;
  `,
  p2: () => `
    padding: 2rem;
  `,
  p3: () => `
    padding: 3rem;
  `,
  py1: () => `
    padding: 1rem 0;
  `,
  py3: () => `
    padding: 3rem 0;
  `,
  m0: () => `
    margin: 0;
  `,
  m0A: () => `
    margin: 0 auto;
  `,
  my3A: () => `
    margin: 3rem auto;
  `,
  my6: () => `
    margin: 6rem 0;
  `,
  mt2R: () => `
    margin-top: 2rem;
  `,
  
  // Window
  wA: () => `
    width: auto;
  `,
  w25: () => `
    width: 25%;
  `,
  w50: () => `
    width: 50%;
  `,
  w75: () => `
    width: 75%;
  `,
  w90: () => `
    width: 90%;
  `,
  w100: () => `
    width: 100%;
  `,
  h0: () => `
    height: 0;
  `,
  h25: () => `
    height: 25%;
  `,
  h50: () => `
    height: 50%;
  `,
  h75: () => `
    height: 75%;
  `,

  // Color
  cWhite: () => `
    color: white;
  `,
  bBlack: () => `
    background: black;
  `,

  // Font
  fRaleway: () => `
    font-family: 'Raleway';
  `,
  fAbril: () => `
    font-family: 'Abril Fatface';
  `,
  tCenter: () => `
    text-align: center;
  `,
  tLeft: () => `
    text-align: left;
  `,
  fSmall: () => `
    font-size: 0.8rem;
  `,
  fLarge: () => `
    font-size: 1.2rem;
  `,
  fLarger: () => `
    font-size: 1.5rem;
  `,
  fLargest: () => `
    font-size: 1.8rem;
  `,
  ul: () => `
    text-decoration: underline;
  `,
  b: () => `
    font-weight: bold;
  `,
  i: () => `
    font-style: italic;
  `,

  // Misc
  lsNone: () => `
    list-style: none;
  `,
  bRadius50: () => `
    border-radius: 50%;
  `,
  borderBlack: () => `
    border: 5px double black;
  `,
}