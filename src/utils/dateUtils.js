export const YYYYMMDDtoMonthDDYYYY = (YYYYMMDD) => {
  const formattedDate = YYYYMMDD
    ? new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
        new Date(YYYYMMDD)
      )
    : "";

  return formattedDate;
};

export const getFlashCodingArenaCountdown = (eventDate) => {
  const today = new Date();
  const eventDateObj = new Date(eventDate);

  // Check if the event date has passed
  if (eventDateObj < today) {
    return "Event Over";
  }

  // Check if the event is today
  if (eventDateObj.toDateString() === today.toDateString()) {
    return "Today";
  }

  // Calculate the difference in days
  const timeDiff = eventDateObj - today;
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert ms to days

  return `${daysLeft} days left`;
};
