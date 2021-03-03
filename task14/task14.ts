/**
 * dog dgo -> true
 * dog dfo -> false
 * doog ddog -> false
 */

const doEqual = (str1: string, str2: string): boolean =>
  str1.trim().split("").sort().join("") ===
  str2.trim().split("").sort().join("");
