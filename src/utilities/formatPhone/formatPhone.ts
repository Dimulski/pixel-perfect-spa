const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  let formatted = "";
  if (digits.length > 0) {
    formatted = "(" + digits.slice(0, 3);
    if (digits.length > 3) {
      formatted += ") " + digits.slice(3, 6);
      if (digits.length > 6) {
        formatted += "-" + digits.slice(6, 10);
      }
    }
  }
  return formatted;
};

export default formatPhone;
