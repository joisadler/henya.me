export default text =>
  text
    .split(' ')
    .map(word => word[0])
    .join('');
