function getPathAndAlt(namePicture: string) {
  switch (namePicture) {
    case "telegram":
      return { src: "../src/app/assets/icons/Telegram.svg", alt: "picture telegram" };
    case "youtube":
      return { src: "../src/app/assets/icons/Youtube.svg", alt: "picture youtube" };
    case "calendar":
      return { src: "../src/app/assets/icons/ExpCalendar.svg", alt: "picture calendar of experience" };
    default:
      return { src: "../src/app/assets/icons/ExpCalendar.svg", alt: "picture calendar of experience" };
  }
};
export default getPathAndAlt;