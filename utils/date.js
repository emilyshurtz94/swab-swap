module.exports = {
    format_time: (date) => {
      // We use the 'toLocalTimeString()' method to format the time as H:MM:SS AM/PM
      return date.toLocalTimeString();
    },
  };