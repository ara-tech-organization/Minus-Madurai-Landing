// Legal pages. Content follows the client's Google Doc (Privacy Policy / Terms and Conditions, last updated
// 05 October 2026). Each section: heading + paragraphs and/or a bullet list.

const UPDATED = 'October 05, 2026'
const CLINIC = 'MINUS Slimming Clinic Madurai'
const PHONE = '+91 85081 34567'

export const LEGAL = {
  'privacy-policy': {
    title: 'Privacy Policy',
    updated: UPDATED,
    intro: `This Privacy Policy describes how ${CLINIC} ("the Company", "we", "us") collects, uses and discloses your personal data when you use this website, and tells you about your privacy rights.`,
    sections: [
      {
        h: 'Definitions',
        list: [
          'Account: a unique account created for you to access our service.',
          'Affiliate: an entity that controls, is controlled by or is under common control with the Company.',
          `Company: ${CLINIC}.`,
          'Cookies: small files placed on your device by a website, holding details of your browsing history.',
          'Personal Data: any information that relates to an identified or identifiable individual.',
          'Service Provider: a person or company that processes data on behalf of the Company.',
          'Usage Data: data collected automatically when you use the website.',
          'User: the individual accessing or using the website.',
        ],
      },
      {
        h: 'Data we collect',
        p: ['Personal Data: when you ask us to contact you, we collect your email address, name and phone number.', 'Usage Data: collected automatically, and may include:'],
        list: ['Your IP address and browser type', 'Device identifiers', 'The pages you visit and how long you stay', 'Other diagnostic information'],
      },
      {
        h: 'Tracking technologies',
        p: [
          'We use session and persistent cookies for authentication and to make the website work, and web beacons to track activity and compile statistics.',
          'Where the law requires it, non-essential cookies are used only with your explicit consent.',
        ],
      },
      {
        h: 'How we use your Personal Data',
        list: [
          'To provide and maintain our service',
          'To manage your account',
          'To perform a contract with you',
          'To contact you and respond to your requests',
          'To send marketing communications, which you can opt out of at any time',
          'To manage your requests to us',
          'To evaluate a business transfer such as a merger or sale',
          'For analytics and to understand trends',
        ],
      },
      {
        h: 'Sharing your data',
        p: ['We may share your Personal Data:'],
        list: [
          'With Service Providers, to monitor and analyse the use of our service',
          'In connection with a business transfer',
          'With Affiliates, who must honour this Privacy Policy',
          'In public areas of the website where you choose to interact with others',
          'With your explicit consent',
        ],
      },
      {
        h: 'Text message privacy',
        list: [
          'We send text messages only to people who have opted in.',
          'Your phone number is never shared, except with service providers who need it to deliver messages.',
          'Messages may cover customer care, account notifications, delivery updates, authentication, security alerts and marketing.',
          'Reply STOP at any time to opt out, or HELP for support.',
        ],
      },
      {
        h: 'How long we keep your data',
        list: [
          'User accounts: for the life of the account plus 24 months after closure',
          'Support tickets and correspondence: 24 months from closure',
          'Chat transcripts: 24 months, for quality assurance and training',
          'Website analytics: 24 months from collection',
          'Server logs: 24 months, for security monitoring',
        ],
      },
      {
        h: 'Transfer of data',
        p: ['Your data may be transferred to, and kept at, locations outside your region only where appropriate safeguards are in place. We do not transfer data without adequate controls.'],
      },
      {
        h: 'Deleting your data',
        p: ['You may ask us to delete your Personal Data through your account settings or by contacting us directly. We may keep some data where the law requires us to.'],
      },
      {
        h: 'When we may disclose your data',
        list: [
          'In a business transaction such as a merger or sale of assets',
          'When the law or a lawful public-authority request requires it',
          'To protect the rights and property of the Company',
          'To prevent or investigate possible wrongdoing',
          'To protect personal safety',
        ],
      },
      {
        h: 'Security',
        p: ['We use commercially reasonable means to protect your Personal Data, but no method of transmission or storage is completely secure, so we cannot guarantee absolute security.'],
      },
      {
        h: "Children's privacy",
        p: ['Our service is not directed at anyone under 16. If we learn that we have collected data from a child without verified consent, we will remove it.'],
      },
      {
        h: 'Links to other websites',
        p: ['Our service contains links to websites we do not operate. We have no control over, and accept no responsibility for, their content or privacy policies.'],
      },
      {
        h: 'Contact us',
        p: [`For any question about this Privacy Policy, call us on ${PHONE}.`],
      },
    ],
  },

  'terms-and-conditions': {
    title: 'Terms & Conditions',
    updated: UPDATED,
    intro: `These Terms and Conditions are a legally binding agreement between you and ${CLINIC} about your use of this website.`,
    sections: [
      {
        h: 'Definitions',
        list: [
          'Affiliate: an entity that controls, is controlled by or is under common control with the Company.',
          `Company: ${CLINIC}.`,
          'Device: any device that can access the service, such as a computer, phone or tablet.',
          'Service: the website.',
          'Terms: these Terms and Conditions.',
          'User: the individual accessing or using the website.',
        ],
      },
      {
        h: 'Acknowledgment',
        p: [
          'These Terms are the complete agreement between you and the Company and apply to all visitors and users. By accessing the website you accept them.',
          'You must be 18 or older to use the service. Your use of the service is also subject to our Privacy Policy.',
        ],
      },
      {
        h: 'Links to other websites',
        p: ['The website may link to third-party websites. The Company is not responsible for their content, policies or practices, and you accept that the Company has limited liability for third-party services.'],
      },
      {
        h: 'Links to social media services',
        p: ['The Company is not liable for any damage arising from third-party social media services. Their own terms and policies govern your use of them.'],
      },
      {
        h: 'Termination',
        p: ['We may end or suspend your access immediately, without notice. Your rights under these Terms then cease.'],
      },
      {
        h: 'Limitation of liability',
        p: [
          'The Company’s total liability is limited to the amount you paid for the service, or $100 if you paid nothing.',
          'The Company is not liable for special, incidental, indirect or consequential damages, including loss of profits, loss of data, business interruption, personal injury or loss of privacy.',
        ],
      },
      {
        h: 'Disclaimer',
        p: ['The service is provided “AS IS” and “AS AVAILABLE”. The Company disclaims all warranties, express, implied or statutory, and does not guarantee the service’s functionality, compatibility, performance, reliability or freedom from errors.'],
      },
      {
        h: 'Governing law',
        p: ['The laws of Tamil Nadu, excluding its conflict-of-law rules, govern these Terms and your use of the service. Local, state, national or international law may also apply to you.'],
      },
      {
        h: 'Dispute resolution',
        p: ['If you have a concern or dispute, please first try to resolve it informally by contacting the Company.'],
      },
      {
        h: 'EU consumers',
        p: ['If you are a consumer in the European Union, you benefit from any mandatory provisions of the law of the country where you live.'],
      },
      {
        h: 'US legal compliance',
        p: ['You confirm that you are not located in a country under a US government embargo, and that you are not on any US government list of prohibited or restricted parties.'],
      },
      {
        h: 'Severability and waiver',
        p: ['If any provision is found unenforceable, it will be changed to the extent possible and the rest of the Terms still apply. Failing to enforce a right does not waive it.'],
      },
      {
        h: 'Translation',
        p: ['If these Terms are translated, the English version prevails in a dispute.'],
      },
      {
        h: 'Changes to these Terms',
        p: ['We may change these Terms. For a material change we will give at least 30 days’ notice. By continuing to use the service after a change takes effect, you accept the new Terms.'],
      },
      {
        h: 'Contact us',
        p: [`For any question about these Terms, call us on ${PHONE}.`],
      },
    ],
  },
}

export const LEGAL_LINKS = [
  { key: 'privacy-policy', label: 'Privacy Policy' },
  { key: 'terms-and-conditions', label: 'Terms & Conditions' },
]
