/* eslint-disable */
export default function createIteratorObject(report) {
    const allEmployees = [];
    for (const [key, value] of Object.entries(report)) {
      for (const [key, values] of Object.entries(value)) {
        allEmployees.push(...values);
      }
    }
    return allEmployees;
  }
  