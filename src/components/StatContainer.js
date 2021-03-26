import Progress from "../reusables/Progress.js";
import utilities from "../scss/_utilities.scss";

const StatContainer = ({ stats }) => {
  return (
    <div>
      <h2 className="pb-05">Stats</h2>
      <div className="stats-container border">
        {Object.keys(stats).map((s) => (
          <div key={s} className="stat-row">
            <span>{s.toLocaleUpperCase()}:</span>
            <span>{stats[s].total}</span>
            <Progress
              value={
                stats[s].total /
                Object.values(stats)
                  .map((s) => s.total)
                  .reduce((a, b) => a + b)
              }
              color={utilities.testColor}
              bgcolor="white"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatContainer;
