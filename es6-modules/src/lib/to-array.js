function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

// module.exports = toArray;
export { toArray as default };
