/** Invented help content for the coursework build. */
export const FAQ_GROUPS = [
  {
    topic: 'Tracking',
    items: [
      {
        q: 'My reference is not recognised',
        a: 'References usually appear within two hours of a parcel being booked, and only start moving once the first scan happens. If it is still blank the next morning, the sender is the person to chase — they hold the booking.'
      },
      {
        q: 'The tracking has not moved for two days',
        a: 'A parcel sitting at the same hub for over 48 hours has usually missed a scan rather than gone missing. Give it one more working day, then raise it with us and we will trace it by hand.'
      },
      {
        q: 'It says delivered but nothing has arrived',
        a: 'Check with anyone else at the address and look wherever your usual deliveries end up. If it is still nowhere, tell us within ten days and we will pull the driver notes and the photo taken at handover.'
      }
    ]
  },
  {
    topic: 'Sending',
    items: [
      {
        q: 'How should I pack a parcel?',
        a: 'Box rather than bag anything breakable, leave no room for the contents to slide about, and tape the seams rather than the middle. Write the address on the box itself as well as on the label.'
      },
      {
        q: 'What if my parcel is over the size limit?',
        a: 'Anything past the extra large dimensions has to go as freight, which we do not handle. Splitting it into two parcels is nearly always cheaper than a pallet.'
      },
      {
        q: 'Can I change the address after booking?',
        a: 'Yes, up until the first hub scan. After that the parcel is already sorted to a route and the only option is to let it travel and redirect it at the far end.'
      }
    ]
  },
  {
    topic: 'Returns',
    items: [
      {
        q: 'Do I need a printer?',
        a: 'No. Take the QR code on your phone to any point with a counter and the staff will print the label for you. Lockers need a label already attached.'
      },
      {
        q: 'Who pays for the return?',
        a: 'That is set by the retailer, not by us. Search for them on the returns page and it will say plainly whether postage is on them or on you before you commit to anything.'
      },
      {
        q: 'How long until I am refunded?',
        a: 'We get the parcel back to the retailer, and their own policy takes over from there. Most refund within a fortnight of the parcel landing with them.'
      }
    ]
  },
  {
    topic: 'Problems',
    items: [
      {
        q: 'My parcel arrived damaged',
        a: 'Photograph the box and the contents before you throw any packaging away, then tell us within seven days. Claims without a photograph of the outer box are very hard to settle.'
      },
      {
        q: 'How much is a parcel covered for?',
        a: 'Every parcel carries £20 of cover as standard. You can raise that to £250 when you book for a small amount extra, which is worth doing for anything electronic.'
      },
      {
        q: 'I want to make a complaint',
        a: 'Start on the contact page and pick the complaints option. You will get a reference the same day and a named person looking at it within two working days.'
      }
    ]
  }
]

export const RESTRICTED = [
  { item: 'Cash, cheques and gift cards', why: 'Impossible to trace once lost, and never covered.' },
  { item: 'Jewellery over £250', why: 'Above what our cover will settle.' },
  { item: 'Perishable food', why: 'Nothing in our network is refrigerated.' },
  { item: 'Live animals and plants', why: 'We have no way to look after them in transit.' },
  { item: 'Aerosols, paint and solvents', why: 'Pressurised or flammable goods cannot travel by van.' },
  { item: 'Lithium batteries sent loose', why: 'Fine inside a device, not on their own.' },
  { item: 'Alcohol and tobacco', why: 'Duty rules we are not set up to handle.' },
  { item: 'Weapons and replicas', why: 'Includes anything that merely looks like one.' },
  { item: 'Medicines and medical samples', why: 'Needs a specialist carrier with chain of custody.' },
  { item: 'Anything illegal to own', why: 'Should not need saying, but it is in the terms.' }
]
