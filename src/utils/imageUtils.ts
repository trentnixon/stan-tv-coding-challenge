export const updateImageUrl = (url: string, width: number): string => {
  const regex = /(\?resize=)(\d+)(px:\*)/;

  if (regex.test(url)) {
    // If the URL already has a resize parameter, update its value
    return url.replace(regex, `$1${width}px:*`);
  } else {
    // If the URL doesn't have a resize parameter, add it with the correct values
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}resize=${width}px:*&quality=75&preferredFormat=image/jpeg`;
  }
};
