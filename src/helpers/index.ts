export const nth = (dd: number) => {
  if (dd > 3 && dd < 21) return 'th';
  switch (dd % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export const formatDate = (d: string) => {
  const datePublished = new Date(d);
  const day = datePublished.getDate() + nth(datePublished.getDate());
  const month = datePublished.toLocaleString("default", {month: "long"});
  const year = datePublished.getFullYear();
  return `${month} ${day}, ${year}`
}