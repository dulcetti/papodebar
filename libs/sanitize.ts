export function sanitizeXml(str: string) {
  return str.replace(
    /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F/\n]/g,
    ''
  );
}
