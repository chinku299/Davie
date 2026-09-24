/**
 * Plain-English placeholder policies written for the coursework build. These
 * describe how this demo actually behaves — they are not legal advice and are
 * not modelled on any real company's documents.
 */
export const LEGAL_DOCS = {
  privacy: {
    title: 'Privacy notice',
    intro:
      'Parcelane is an invented company and this site is a student project. It is worth being precise about what that means for data, because the honest answer is that there is almost none.',
    updated: 'September 2026',
    sections: [
      {
        heading: 'What this site collects',
        body: 'Nothing. There is no server, no database and no analytics script. Everything you type into the tracking box, the retailer search or the contact form stays inside your own browser tab and disappears when you close it.'
      },
      {
        heading: 'Where the sample data comes from',
        body: 'The parcel references, drop-off points, retailers and prices are all invented and written directly into the source code. No real person, address or shipment is represented anywhere on this site.'
      },
      {
        heading: 'Third parties',
        body: 'One font family is requested from Google Fonts, which means your browser makes a request to their servers to fetch it. That is the only outbound connection the site makes. Nothing else is embedded.'
      },
      {
        heading: 'What a real version would need',
        body: 'A working courier would have to explain its lawful basis for processing, how long it keeps delivery photographs and addresses, who it shares data with, and how you exercise your rights under UK GDPR. None of that applies here because none of it happens.'
      }
    ]
  },

  cookies: {
    title: 'Cookies',
    intro:
      'Short version: this site sets none, which is why you have not been shown a consent banner.',
    updated: 'September 2026',
    sections: [
      {
        heading: 'What we set',
        body: 'No cookies, no local storage, no session storage, no fingerprinting. The pages are static files and a small amount of JavaScript that runs entirely in your browser.'
      },
      {
        heading: 'Why there is no banner',
        body: 'Consent banners exist because sites place non-essential cookies before you have agreed to them. With nothing to consent to, a banner would be noise. If this build ever gained analytics, the banner would have to come with it.'
      },
      {
        heading: 'What a real version would set',
        body: 'Typically a session cookie to keep you signed in, a preference cookie for things like your chosen drop-off point, and — only with consent — analytics to see which pages people struggle on.'
      }
    ]
  },

  terms: {
    title: 'Terms of carriage',
    intro:
      'These describe the fictional service the site depicts. Nothing here forms a contract, because nothing on this site can be bought or booked.',
    updated: 'September 2026',
    sections: [
      {
        heading: 'Nothing here is a real service',
        body: 'Parcelane does not exist. No parcel can be booked, paid for, collected or delivered through this site. Every price, delivery time and location shown is invented for the purpose of the coursework.'
      },
      {
        heading: 'What the depicted service would cover',
        body: 'In the scenario the site describes, every parcel carries £20 of cover as standard, raisable to £250 when booking. Claims would need to be raised within ten days for a non-delivery and seven days for damage, with a photograph of the outer packaging.'
      },
      {
        heading: 'Things that could not be carried',
        body: 'The restricted list sets out what would be refused — cash, perishables, pressurised containers, weapons and anything unlawful to possess. Sending a restricted item would void any claim on that parcel.'
      },
      {
        heading: 'Liability',
        body: 'As this is a demonstration rather than a service, no liability of any kind arises from anything shown on this site.'
      }
    ]
  },

  accessibility: {
    title: 'Accessibility',
    intro:
      'This build was written to meet WCAG 2.1 AA, and it is worth saying plainly what has been done and what has not been tested.',
    updated: 'September 2026',
    sections: [
      {
        heading: 'What has been built in',
        body: 'Every control reaches by keyboard and shows a visible focus ring. Menus and accordions use real buttons with aria-expanded rather than hover alone. Forms have labels tied to their inputs, results announce themselves through aria-live regions, and a skip link jumps past the navigation.'
      },
      {
        heading: 'Colour and motion',
        body: 'Body and interface text meets the 4.5:1 contrast ratio against its background, and larger headings exceed it comfortably. Colour is never the only way information is conveyed. Animation is limited to short fades, and all of it is switched off when a device requests reduced motion.'
      },
      {
        heading: 'Not yet tested',
        body: 'This has been checked against the specification and in a desktop browser, but not with a screen reader on a real device, not at 400% zoom, and not with voice control. Those are the obvious next steps rather than claimed achievements.'
      },
      {
        heading: 'Telling us about a problem',
        body: 'A real service would give a route to report a barrier and a target for responding. The contact page stands in for that here.'
      }
    ]
  }
}
