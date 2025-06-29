export function validatePhone(phone: string): string | null {
  const regex = /^09\d{9}$/;
  if (!phone) return 'شماره تلفن الزامی است';
  if (!regex.test(phone)) return 'شماره تلفن معتبر نیست';
  return null;
}
