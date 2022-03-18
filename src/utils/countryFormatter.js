export const formatKey = (key) => key.split(/(?=[A-Z])/).join(' ');

export const formatValue = (key, value) => {
  switch (key) {
    case 'topLevelDomain':
      return value.join(', ');
    case 'currencies':
      return value.map((curr) => curr.name).join(', ');
    case 'languages':
      return value.map((lang) => lang.name).join(', ');
    default:
      return value;
  }
};
