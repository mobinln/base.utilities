export default function getChangedFields<T>(originalValues: Partial<T>, newValues: Partial<T>): Partial<T> {
  const changedFields: Partial<T> = {};

  for (const property in originalValues) {
    if (originalValues.hasOwnProperty(property) && newValues.hasOwnProperty(property)) {
      if (originalValues[property] !== newValues[property]) {
        changedFields[property] = newValues[property];
      }
    } else {
      changedFields[property] = newValues[property];
    }
  }

  for (let key in newValues) {
    if (newValues.hasOwnProperty(key) && !originalValues.hasOwnProperty(key)) {
      changedFields[key] = newValues[key];
    }
  }

  return changedFields;
}
