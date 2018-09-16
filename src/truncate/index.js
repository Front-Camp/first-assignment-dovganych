/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  if(str.length <= length) {return str;}
  if(length == 0) {return str.substr(0, str.length-replacer.length)+replacer;}
  return str.substr(0,length > replacer.length ? length-replacer.length : length)+replacer;
};

export default truncate;
