// Legal pages. DRAFT text written for this site — the Privacy / Terms tabs in the client's Google Doc
// were empty when exported. Replace the strings below with the client's approved wording
// (each section: heading + paragraphs and/or a bullet list).

const UPDATED = 'October 2026'
const CLINIC = 'Minus Slimming Clinic – Madurai'

export const LEGAL = {
  'privacy-policy': {
    title: 'Privacy Policy',
    updated: UPDATED,
    intro: `This Privacy Policy explains how ${CLINIC} ("Minus", "we", "us") collects, uses and protects the personal information you share with us through this website, by phone, by email or in person at our KK Nagar clinic.`,
    sections: [
      {
        h: 'Information we collect',
        p: ['When you use our enquiry form or contact us, we collect the details you give us:'],
        list: ['Your name, email address and phone number', 'The message you write to us about your concern or the treatment you are interested in'],
      },
      {
        h: 'Please do not send medical records through the form',
        p: ['The enquiry form is meant for first contact only. Detailed health information is discussed privately at your consultation, not through this website.'],
      },
      {
        h: 'How we use your information',
        list: [
          'To reply to your enquiry and arrange a consultation',
          'To call, message or email you about your appointment or follow-up',
          'To improve our services and this website',
        ],
      },
      {
        h: 'Sharing',
        p: ['We do not sell your personal information. We may share it with other Minus clinics or trusted service providers only where needed to handle your enquiry or appointment, or where the law requires us to.'],
      },
      {
        h: 'Third-party services and links',
        p: ['This website links to services we do not control, such as Instagram, Facebook, WhatsApp and Google Maps, and shows a map image from OpenStreetMap. Those services have their own privacy policies and may collect information when you use them.'],
      },
      {
        h: 'Keeping your information',
        p: ['We keep your details only for as long as needed to deal with your enquiry or treatment and to meet our legal and record-keeping duties. We take reasonable steps to protect them from loss, misuse or unauthorised access.'],
      },
      {
        h: 'Your choices',
        p: ['You can ask us to show, correct or delete the personal information we hold about you, or to stop contacting you, by writing to madurai@minusclinic.com or calling +91 85081 34567.'],
      },
      {
        h: 'Changes to this policy',
        p: ['We may update this policy from time to time. The date at the top shows when it was last changed.'],
      },
      {
        h: 'Contact us',
        p: [`${CLINIC}, Ground Floor, Flat No, P415, 9th Main Rd, below ICICI Prudential Life Insurance, Zone 2 East, KK Nagar, Madurai, Tamil Nadu 625020. Email: madurai@minusclinic.com. Phone: +91 85081 34567.`],
      },
    ],
  },

  'terms-and-conditions': {
    title: 'Terms & Conditions',
    updated: UPDATED,
    intro: `These Terms & Conditions apply to your use of the ${CLINIC} website. By using this website you agree to them.`,
    sections: [
      {
        h: 'Information only, not medical advice',
        p: ['The content on this website is general information about our treatments. It is not medical advice and does not replace an assessment by a qualified professional. Which treatment suits you is decided at your consultation.'],
      },
      {
        h: 'Consultation first',
        p: ['Every treatment, whether non-invasive, minimally invasive or surgical, is offered only after a consultation and assessment. We may recommend a different treatment from the one you asked about, or advise that a treatment is not suitable for you.'],
      },
      {
        h: 'Results',
        p: ['Results differ from person to person. Before-and-after images and testimonials show individual experiences and are not a promise or guarantee of the same result for you.'],
      },
      {
        h: 'Pricing',
        p: ['Cost depends on the treatment, the area treated and the number of sessions needed. We give an accurate quote only after an assessment, so prices are not listed on this website.'],
      },
      {
        h: 'Enquiries and appointments',
        p: ['Sending an enquiry through this website does not confirm an appointment. An appointment is confirmed only when our team confirms it with you.'],
      },
      {
        h: 'Using this website',
        p: ['Please use the website lawfully and do not try to disrupt it or access it in unauthorised ways. All text, logos and images on it belong to Minus or its licensors, and may not be copied or reused without our written permission.'],
      },
      {
        h: 'Third-party links',
        p: ['Links to other websites and services are provided for convenience. We are not responsible for their content or practices.'],
      },
      {
        h: 'Limits of liability',
        p: ['We try to keep this website accurate and available, but we do not promise it will be free from errors or interruptions. To the extent the law allows, Minus is not liable for losses that arise from using the website.'],
      },
      {
        h: 'Governing law',
        p: ['These terms are governed by the laws of India.'],
      },
      {
        h: 'Contact us',
        p: ['For any question about these terms, write to madurai@minusclinic.com or call +91 85081 34567.'],
      },
    ],
  },
}

export const LEGAL_LINKS = [
  { key: 'privacy-policy', label: 'Privacy Policy' },
  { key: 'terms-and-conditions', label: 'Terms & Conditions' },
]
