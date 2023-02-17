/**
 * @param ['introvert', 'introvert', 'extrovert']
 * @returns 'introvert'
 */
export const mode = (arr: string[]) => {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length,
    )
    .pop()
}
