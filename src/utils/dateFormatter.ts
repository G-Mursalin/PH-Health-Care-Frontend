/* If the value is 2024-06-07T18:30:00.000Z OUTPUT is 2024-06-08
 The output is 2024-06-08 instead of 2024-06-07 because
the input date string '2024-06-07T18:30:00.000Z' is in UTC (Coordinated Universal Time),
and when you create a new Date object with this string,
it converts the time to the local time zone of the environment where the code is running.
*/
// export const dateFormatter = (value: string) => {
//   const date = new Date(value);

//   // Extract year, month, and day
//   const year = date.getFullYear();
//   const month = (date.getMonth() + 1).toString().padStart(2, "0");
//   const day = date.getDate().toString().padStart(2, "0");
//   // Construct the desired format
//   const formattedDate = `${year}-${month}-${day}`;

//   return formattedDate;
// };

// To ensure the date remains in UTC,
// you can extract the date components using UTC
// methods instead of the local ones. Here's how you can adjust your function:
export const dateFormatter = (value: string) => {
  const date = new Date(value);

  // Extract year, month, and day in UTC
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  // Construct the desired format
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};
