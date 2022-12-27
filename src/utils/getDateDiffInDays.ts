export function getDateDiffInDays(limitDate: number) {
  const date1 = new Date(limitDate);
  const date2 = new Date(Date.now());

  const differenceInTime = date1.getTime() - date2.getTime();

  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return Math.floor(differenceInDays);
}
