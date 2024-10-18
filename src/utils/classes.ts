export const clx = (c: Record<string, boolean>, additional?: string) => {
  const converted =  Object.entries(c).map(([key, value]) => value ? key : null).filter((key) => !!key).join(' ');
  if (additional) {
    return `${converted} ${additional}`;
  }
  return converted;
}