const moment = require('moment');

const generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: moment().format('D MMM YYYY H:mm')
  };
};

module.exports = {
  generateMessage
};
