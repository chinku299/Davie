/** Invented drop-off points, standing in for a location search endpoint. */
export const POINTS = [
  {
    id: 1,
    name: 'Bramley Convenience',
    kind: 'Shop counter',
    street: '14 Elder Road',
    town: 'Leeds',
    postcode: 'LS13 2PQ',
    hours: '06:00 – 22:00, seven days',
    printing: true
  },
  {
    id: 2,
    name: 'Kirkstall Locker Bank',
    kind: 'Lockers',
    street: 'Retail Park, Savins Mill Way',
    town: 'Leeds',
    postcode: 'LS5 3RP',
    hours: 'Open all hours',
    printing: false
  },
  {
    id: 3,
    name: 'Hyde Park Post & Print',
    kind: 'Shop counter',
    street: '88 Woodhouse Street',
    town: 'Leeds',
    postcode: 'LS6 2PY',
    hours: '08:00 – 19:00, closed Sunday',
    printing: true
  },
  {
    id: 4,
    name: 'Redland Corner Store',
    kind: 'Shop counter',
    street: '3 Chandos Road',
    town: 'Bristol',
    postcode: 'BS6 6PE',
    hours: '07:00 – 21:00, seven days',
    printing: true
  },
  {
    id: 5,
    name: 'Temple Quay Lockers',
    kind: 'Lockers',
    street: 'Station Approach',
    town: 'Bristol',
    postcode: 'BS1 6QS',
    hours: 'Open all hours',
    printing: false
  },
  {
    id: 6,
    name: 'Paisley Road Garage',
    kind: 'Garage forecourt',
    street: '210 Paisley Road West',
    town: 'Glasgow',
    postcode: 'G51 1BW',
    hours: '06:30 – 23:00, seven days',
    printing: false
  },
  {
    id: 7,
    name: 'Dennistoun Newsagent',
    kind: 'Shop counter',
    street: '41 Duke Street',
    town: 'Glasgow',
    postcode: 'G31 1DR',
    hours: '07:00 – 20:00, seven days',
    printing: true
  },
  {
    id: 8,
    name: 'Chorlton Green Hardware',
    kind: 'Shop counter',
    street: '6 Beech Road',
    town: 'Manchester',
    postcode: 'M21 9EG',
    hours: '08:30 – 18:00, closed Sunday',
    printing: true
  },
  {
    id: 9,
    name: 'Ancoats Locker Point',
    kind: 'Lockers',
    street: 'Blossom Street',
    town: 'Manchester',
    postcode: 'M4 6AJ',
    hours: 'Open all hours',
    printing: false
  }
]

/** Matches on postcode, town or shop name — whatever the visitor happens to type. */
export function searchPoints(term) {
  const q = String(term || '').trim().toLowerCase().replace(/\s+/g, ' ')
  if (!q) return []
  return POINTS.filter((p) => {
    const haystack = [p.name, p.town, p.postcode, p.street].join(' ').toLowerCase()
    return haystack.includes(q) || p.postcode.toLowerCase().replace(' ', '').includes(q.replace(' ', ''))
  })
}
