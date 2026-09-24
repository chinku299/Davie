/**
 * Invented rate card. Everything here is made up for the coursework — it drives
 * the quote builder on /send and the table on /prices from one source.
 */

export const PARCEL_SIZES = [
  { id: 'letter', name: 'Large letter', dims: '35 × 25 × 2.5 cm', weight: 'Up to 1 kg', base: 3.1 },
  { id: 'small', name: 'Small parcel', dims: '45 × 35 × 16 cm', weight: 'Up to 2 kg', base: 3.95 },
  { id: 'medium', name: 'Medium parcel', dims: '61 × 46 × 46 cm', weight: 'Up to 10 kg', base: 5.4 },
  { id: 'large', name: 'Large parcel', dims: '120 × 60 × 60 cm', weight: 'Up to 20 kg', base: 8.75 },
  { id: 'xl', name: 'Extra large', dims: '150 × 70 × 70 cm', weight: 'Up to 30 kg', base: 13.2 }
]

export const SPEEDS = [
  { id: 'standard', name: 'Standard', detail: 'Three to five working days', multiplier: 1 },
  { id: 'express', name: 'Express', detail: 'Next working day before 18:00', multiplier: 1.85 }
]

export const HANDOVERS = [
  { id: 'dropoff', name: 'Drop it off', detail: 'Leave it at a point near you', adjust: 0 },
  { id: 'collection', name: 'Collection', detail: 'A driver comes to your door', adjust: 1.25 }
]

export const EXTRAS = [
  { id: 'cover', name: 'Cover up to £250', detail: 'Replaces the standard £20 of cover', price: 1.6 },
  { id: 'signature', name: 'Signature on delivery', detail: 'Nobody can leave it in a porch', price: 0.9 },
  { id: 'saturday', name: 'Saturday delivery', detail: 'Express bookings only', price: 2.4 }
]

/** Overseas zones, priced as a multiplier on the domestic base rate. */
export const ZONES = [
  {
    id: 'z1',
    name: 'Zone 1 — Ireland',
    days: '2 to 4 working days',
    multiplier: 2.1,
    countries: ['Ireland']
  },
  {
    id: 'z2',
    name: 'Zone 2 — Western Europe',
    days: '3 to 5 working days',
    multiplier: 2.8,
    countries: ['France', 'Germany', 'Belgium', 'Netherlands', 'Spain', 'Portugal', 'Italy', 'Austria', 'Denmark']
  },
  {
    id: 'z3',
    name: 'Zone 3 — Wider Europe',
    days: '4 to 7 working days',
    multiplier: 3.4,
    countries: ['Poland', 'Czechia', 'Sweden', 'Norway', 'Finland', 'Greece', 'Romania', 'Hungary']
  },
  {
    id: 'z4',
    name: 'Zone 4 — Rest of the world',
    days: '6 to 12 working days',
    multiplier: 5.2,
    countries: ['United States', 'Canada', 'Australia', 'New Zealand', 'Japan', 'Singapore', 'South Africa']
  }
]

export const BUSINESS_TIERS = [
  { id: 'starter', name: 'Starter', volume: 'Up to 50 parcels a week', discount: 0, note: 'Pay as you go, no contract' },
  { id: 'growing', name: 'Growing', volume: '50 to 500 a week', discount: 12, note: 'Weekly invoicing' },
  { id: 'scale', name: 'Scale', volume: '500 to 5,000 a week', discount: 22, note: 'Named account manager' },
  { id: 'network', name: 'Network', volume: 'Over 5,000 a week', discount: null, note: 'Rates agreed with you' }
]

const gbp = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })

export const formatPrice = (value) => gbp.format(value)

/** Works out a domestic price from the current selections. */
export function quote({ sizeId, speedId, handoverId, extraIds = [] }) {
  const size = PARCEL_SIZES.find((s) => s.id === sizeId)
  const speed = SPEEDS.find((s) => s.id === speedId)
  const handover = HANDOVERS.find((h) => h.id === handoverId)
  if (!size || !speed || !handover) return null

  const lines = [
    { label: size.name + ', ' + speed.name.toLowerCase(), amount: size.base * speed.multiplier }
  ]

  if (handover.adjust > 0) {
    lines.push({ label: 'Collection from your door', amount: handover.adjust })
  }

  for (const id of extraIds) {
    const extra = EXTRAS.find((e) => e.id === id)
    if (extra) lines.push({ label: extra.name, amount: extra.price })
  }

  const total = lines.reduce((sum, line) => sum + line.amount, 0)
  return { lines, total: Math.round(total * 100) / 100 }
}

/** Overseas price for a given size and zone. */
export function overseasPrice(sizeId, zoneId) {
  const size = PARCEL_SIZES.find((s) => s.id === sizeId)
  const zone = ZONES.find((z) => z.id === zoneId)
  if (!size || !zone) return null
  return Math.round(size.base * zone.multiplier * 100) / 100
}
