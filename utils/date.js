module.exports = {
    format_time: (date) => {
      // We use the 'toLocaleTimeString()' method to format the time as H:MM:SS AM/PM
      return date.toLocaleTimeString();
    },
  };