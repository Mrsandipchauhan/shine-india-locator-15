
export const servicePricing = {
  basic: {
    wash: 1499,
    exterior: 2999,
    interior: 2499,
    full: 4999
  },
  premium: {
    ceramic: 15999,
    protection: 25999,
    headlight: 1999,
    engine: 1499
  }
} as const;

export const formatPrice = (amount: number) => {
  return `₹${amount.toLocaleString('en-IN')}`;
};
