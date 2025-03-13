import { hoursLoad } from "../form/hours-load";
// const selectedDate = document.getElementById("date");
const selectedDateM = document.getElementById("dateM");
export function schedulesDay() {
  const date = selectedDateM.value;
  hoursLoad({ date });
}
