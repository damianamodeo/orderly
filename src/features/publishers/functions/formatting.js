export const formatMobileNumber = (value) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 5) return phoneNumber;
  if (phoneNumberLength < 8) {
    return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4)}`;
  }
  return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(
    4,
    7
  )} ${phoneNumber.slice(7, 10)}`;
}

export const formatHomeNumber = (value) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 3) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2)}`;
  }
  return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(
    2,
    6
  )} ${phoneNumber.slice(6, 10)}`;
}