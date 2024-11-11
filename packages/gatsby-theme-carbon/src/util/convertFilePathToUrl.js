export function convertFilePathToUrl(filePath) {
  if (!filePath) return null;

  const pagesIndex = filePath.lastIndexOf('/pages/');
  if (pagesIndex === -1) return null;

  const fileName = filePath.slice(
    pagesIndex + '/pages/'.length,
    filePath.lastIndexOf('.')
  );
  const normalizedFileName = fileName.endsWith('/index')
    ? fileName.slice(0, -'/index'.length)
    : fileName;
  const urlPath = `/${normalizedFileName}/`;

  return urlPath;
}
