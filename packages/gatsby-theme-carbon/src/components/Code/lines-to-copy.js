/**
 * Get some of some lines of code to copy from a code block's contents
 * @param {string} content - String to copy, typically `children` of a Code component. Will be split by newlines
 * @param {string|number} [start] - First line to copy; defaults to the first line
 * @param {string|number} [length] - Number of lines to copy; defaults to all lines
 * @returns {string} A slice of `content`
 */
export default function linesToCopy(content, start, length) {
  const lines = String(content).split(/\n/);

  const sliceStart = start ? parseInt(start, 10) : 0;
  const sliceLength = length ? parseInt(length, 10) : lines.length - 1;

  if (Number.isNaN(sliceStart) || Number.isNaN(sliceLength)) {
    return content;
  }
  return lines.slice(sliceStart, sliceStart + sliceLength).join('\n');
}
