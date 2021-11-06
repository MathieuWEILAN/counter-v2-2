const Counter = (props) => {
  const { counters, setCounters } = props;

  return (
    <div>
      <div className="add-counter">
        {counters.map((counter, i) => {
          return (
            <div key={i} className="button-counter">
              <div className="first-line">
                {counter < 10 && (
                  <button
                    className="btn"
                    onClick={() => {
                      const newCounter = [...counters];
                      newCounter[i]++;
                      setCounters(newCounter);
                    }}
                  >
                    +
                  </button>
                )}

                <p>{counter}</p>
                {counter > 0 && (
                  <button
                    className="btn"
                    onClick={() => {
                      const newCounter = [...counters];
                      newCounter[i]--;
                      setCounters(newCounter);
                    }}
                  >
                    -
                  </button>
                )}
              </div>
              <button
                className="reset"
                onClick={() => {
                  const newCounter = [...counters];
                  newCounter[i] = 0;
                  setCounters(newCounter);
                }}
              >
                Reset
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Counter;
