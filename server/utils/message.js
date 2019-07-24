const generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: `${new Date().getHours()}:${new Date().getMinutes()}`
  };
};

module.exports = {
  generateMessage
};
