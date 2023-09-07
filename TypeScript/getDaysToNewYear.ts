function getDaysToNewYear(date: string | Date): number {
  // Your implementation here
  const newYearDate = new Date(2023, 0, 1);
  if (typeof date === "string") {
    let data = date.split(".");
    date = new Date(+data[2], +data[1] - 1, +data[0]);
  }
  const timeDifference = newYearDate.getTime() - date.getTime();
  const differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return differenceInDays;
}

console.log(getDaysToNewYear(new Date(2022, 12, 31))); // 1
getDaysToNewYear(new Date(2022, 5, 15)); // 200
getDaysToNewYear("22.04.2020"); // 994
