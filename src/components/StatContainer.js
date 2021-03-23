import Progress from "../reusables/Progress.js";

const StatContainer = ({ stats }) => {
  return (
    <div>
      <h2 className="pb-05">Stats</h2>
      <div className="stats-container pb-05">
        {Object.keys(stats).map((s) => (
          <div key={s} className="progress-segment-reverse">
            {s}: {stats[s].total}
            <Progress
              value={
                stats[s].total /
                Object.values(stats)
                  .map((s) => s.total)
                  .reduce((a, b) => a + b)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatContainer;
