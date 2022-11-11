import {
  useState,
  useEffect,
  useCallback,
  // useTransition
} from "react";
import { debounce } from "lodash";
export function useClock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);

  return `${date.getHours()}:${
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  }:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`;
}
export function useMagicColor({ initialColor = "#fff", timeout = 2000 }) {
  const [backgroundColor, setColor] = useState(initialColor);

  useEffect(() => {
    setTimeout(() => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      setColor(color);
    }, timeout);
  }, [backgroundColor, timeout]);

  return backgroundColor;
}
export function useCoolClock() {
  //Dữ liệu trả về là 1 object
  //{color: value, clock: value}

  const color = useMagicColor({ initialColor: "#fff", timeout: 1000 });
  const clock = useClock();

  return {
    color: color,
    clock: clock,
  };
}
export function useDebounce(callback, timeout) {
  // const [isPending, startTransition] = useTransition();
  const handler = useCallback(
    debounce((keyword) => {
      callback(keyword);
    }, timeout),
    []
  );

  return handler;
}
