export function capitalizeFirstLetter([first, ...rest]: string) {
  return `${first.toLocaleUpperCase()}${rest.join('')}`;
}
