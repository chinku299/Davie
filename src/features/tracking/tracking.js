/**
 * Stand-in for a tracking API. Everything here is invented sample data so the
 * lookup form does something real without talking to an outside service.
 */
const PARCELS = {
  PL4417200938: {
    reference: 'PL 4417 2009 38',
    status: 'out-for-delivery',
    headline: 'On the van with Priya',
    detail: 'Due between 14:10 and 15:10 today.',
    destination: 'Leeds LS2',
    steps: [
      { label: 'Dropped off', place: 'Bramley Lockers', when: 'Mon 09:41', done: true },
      { label: 'At the sorting hub', place: 'Wakefield hub', when: 'Mon 21:08', done: true },
      { label: 'Out for delivery', place: 'With your courier', when: 'Tue 07:55', done: true },
      { label: 'Delivered', place: 'Awaiting handover', when: 'Expected today', done: false }
    ]
  },
  PL8820561147: {
    reference: 'PL 8820 5611 47',
    status: 'delivered',
    headline: 'Delivered and signed for',
    detail: 'Left with a neighbour at number 14.',
    destination: 'Bristol BS1',
    steps: [
      { label: 'Dropped off', place: 'Redland corner shop', when: 'Thu 16:22', done: true },
      { label: 'At the sorting hub', place: 'Avonmouth hub', when: 'Thu 23:47', done: true },
      { label: 'Out for delivery', place: 'With your courier', when: 'Fri 08:12', done: true },
      { label: 'Delivered', place: 'Signed for by J. Adeyemi', when: 'Fri 13:30', done: true }
    ]
  },
  PL3095778402: {
    reference: 'PL 3095 7784 02',
    status: 'in-transit',
    headline: 'Travelling across the network',
    detail: 'We expect to deliver on Thursday.',
    destination: 'Glasgow G41',
    steps: [
      { label: 'Dropped off', place: 'Paisley Road shop', when: 'Tue 11:03', done: true },
      { label: 'At the sorting hub', place: 'Cumbernauld hub', when: 'Tue 19:36', done: true },
      { label: 'Out for delivery', place: 'Not yet scanned', when: 'Expected Thu', done: false },
      { label: 'Delivered', place: 'Not yet scanned', when: 'Expected Thu', done: false }
    ]
  }
}

export const SAMPLE_CODES = Object.keys(PARCELS)

/** Normalises whatever the visitor typed, then looks it up in the sample set. */
export function findParcel(input) {
  const key = String(input || '').toUpperCase().replace(/[^A-Z0-9]/g, '')
  if (!key) return { state: 'empty' }
  if (key.length < 6) return { state: 'too-short' }
  const parcel = PARCELS[key]
  return parcel ? { state: 'found', parcel } : { state: 'not-found', key }
}
