const useCounter = (forward = false) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        setCounter((prevCounter) => prevCounter - 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);
  }, [forward]);
  return counter;
};
