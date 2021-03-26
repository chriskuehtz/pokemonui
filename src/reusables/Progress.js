import ProgressBar from "@ramonak/react-progress-bar";
//https://www.npmjs.com/package/@ramonak/react-progress-bar

const Progress = ({ value, color, bgcolor }) => {
  const thiscolor = color === undefined ? "black" : color;
  const thisbgcolor = bgcolor === undefined ? "lightgray" : bgcolor;

  return (
    <ProgressBar
      completed={value * 100}
      bgcolor={thiscolor}
      baseBgColor={thisbgcolor}
      height="0.5rem"
      isLabelVisible={false}
    />
  );
};
export default Progress;
