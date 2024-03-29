module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // format large numbers with commas
      return parseInt(amount).toLocaleString();
    },
    get_emoji: () => {
      const randomNum = Math.random();
  
      // Return a random emoji
      if (randomNum > 0.7) {
        return `<span for="img" aria-label="shark">129416</span>`;
      } else if (randomNum > 0.4) {
        return `<span for="img" aria-label="golf">9971</span>`;
      } else {
        return `<span for="img" aria-label="beach-yoga">1F9D8</span>`;
      }
    },
  };
  