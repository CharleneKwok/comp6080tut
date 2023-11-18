import React from "react";

function App() {
  const [timer, setTimer] = React.useState(5);
  const [countdown, setCountdown] = React.useState(undefined);

  React.useEffect(() => {
    if (timer === 0) {
      clearInterval(countdown);
      setCountdown(undefined);
    }
  }, [timer]);

  return (
    <>
      <p id="timer">{timer === 0 ? "Launch!" : timer}</p>
      <button
        id="start"
        disabled={countdown}
        onClick={() => {
          if (countdown === undefined) {
            setTimer(5);
            setCountdown(
              setInterval(() => {
                setTimer((timer) => timer - 1);
              }, 1000)
            );
          }
        }}
      >
        Start Countdown
      </button>
    </>
  );
}

export default App;
