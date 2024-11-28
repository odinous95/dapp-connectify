export const sanitizeFileName = (fileName: string) => {
  return fileName.replace(/\s+/g, "_").replace(/[^\w.-]+/g, "");
};
