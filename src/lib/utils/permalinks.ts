export const getCanonical = (path = ""): string | URL => {
  const url = String(new URL(path, origin));

  return url + "/";
};
