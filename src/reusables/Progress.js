import ProgressBar from "@ramonak/react-progress-bar";
//https://www.npmjs.com/package/@ramonak/react-progress-bar

const Progress = ({ value, color }) => {
  const thiscolor = color === undefined ? "black" : color;
  return (
    <ProgressBar
      completed={value * 100}
      bgcolor={thiscolor}
      height="0.5rem"
      isLabelVisible={false}
    />
  );
};
export default Progress;
