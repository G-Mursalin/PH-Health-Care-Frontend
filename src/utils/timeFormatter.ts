// export const timeFormatter = (time: string) => {
//   const date = new Date(time);

//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");

//   return `${hours}:${minutes}`;
// };

// Time formatter using UTC methods
export const timeFormatter = (value: string) => {
  const date = new Date(value);

  // Extract hours and minutes in UTC
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  // Construct the desired format
  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
};
