/**
 * Purges the filters object by removing any keys with empty values.
 *
 * @param {Object} filters - The filters object to be purged.
 * @return {Object} The purged filters object.
 */

export function purgeFilters(filters) {
  const cleanedFilters = {}

  Object.entries(filters).forEach(([key, value]) => {
    if (value && value.length > 0) {
      cleanedFilters[key] = value;
    }
  });

  return cleanedFilters;
}
