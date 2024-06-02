export default function countDays (date) {
  if (!(date instanceof Date)) throw new Error('Parameter must be date instance')
  if (isNaN(date.getTime())) throw new Error('Invalid Date')

  date.setHours(0) // Setting hours to 0 to avoid proximity errors
  const goal = new Date('Dec 25, 2021')
  const msPerDay = 1000 * 60 * 60 * 24 // seconds / minutes / hours / days
  const daysffset = (goal.getTime() - date.getTime()) / msPerDay

  return Math.round(daysffset)
}
