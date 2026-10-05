export const CONTACT = {
  phone: '+91 85081 34567',
  phoneHref: 'tel:+918508134567',
  email: 'madurai@minusclinic.com',
  address:
    'Ground Floor, Flat No, P415, 9th Main Rd, below ICICI Prudential Life Insurance, Zone 2 East, KK Nagar, Madurai, Tamil Nadu 625020',
}

export const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9480893416044!2d78.14138787953445!3d9.933084664820163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5a7b1ee8203%3A0x61becb931d7a6790!2sMinus%20Slimming%20Clinic%20-%20Madurai!5e1!3m2!1sen!2sin!4v1791010897596!5m2!1sen!2sin'

export const MAP_LINK =
  'https://www.google.com/maps/search/?api=1&query=Minus%20Slimming%20Clinic%20KK%20Nagar%20Madurai'

// Enquiry form endpoint (PHP: sends the email and writes the Google Sheet).
// Payload: { name, email, phone, message, source }
export const FORM_ENDPOINT = 'https://minusclinicmadurai.com/api/email.php'

export const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/minusclinic.madurai/' },
  { name: 'Facebook', href: 'https://www.facebook.com/p/MINUS-Slimming-Clinic-Madurai-61594350524583/' },
]

// "Book a Consultation" buttons scroll to the enquiry form in the hero (see useBookingLinks).
export const BOOK_URL = import.meta.env.BASE_URL

export const NAV = [
  { label: 'Home', id: 'top' },
  { label: 'Welcome', id: 'welcome' },
  { label: 'Why MINUS', id: 'why' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Treatments', id: 'treatments' },
  { label: 'Results', id: 'results' },
]

export const ALT = {
  collage: 'Non-surgical, minimally invasive and surgical treatments at MINUS Madurai',
  beforeAfter: 'Body contouring before and after results at MINUS Slimming Clinic Madurai',
}

export const WELCOME = [
  'MINUS is a cutting-edge slimming and body contouring brand that redefines the way people achieve their desired body shape now local to Madurai, at our KK Nagar branch. Our mission is to empower individuals to feel confident in their bodies by offering the most advanced, safe, and effective slimming procedures, using equipment and technologies most of which were previously only available in Europe.',
  "Whether you're dealing with stubborn fat that hasn't responded to diet and exercise, loose skin after major weight loss, or a body-contouring goal that needs a surgical solution, MINUS Madurai is built to diagnose the actual problem first then recommend the treatment that fits it.",
]

export const WHY_MADURAI = [
  'A Treatment for Every Concern, Not One Signature Service',
  'Consultation-First, Always',
  'Direct Access, No Call-Center Runaround',
  'Honest, Even When It Costs Us the Sale',
  'Part of a Trusted Multi-City Network',
  'A Plan, Not a Promise',
]

export const CONCERNS = [
  "Stubborn belly fat that won't shift with diet or exercise",
  'A soft or undefined jawline / double chin',
  'Loose or sagging skin after pregnancy or major weight loss',
  'Bulky or disproportionate calves',
  'Bloating, puffiness, or fluid retention',
  'Fat pockets that are too small for surgery',
  'Significant excess weight requiring a surgical solution',
]

export const TESTIMONIALS_INTRO =
  'Real experiences from people who chose personalized care at MINUS Slimming Clinic Madurai. Read what our patients have to say about their treatment journey and overall experience.'

export const TESTIMONIALS = [
  {
    name: 'Ragavendra',
    text: 'I really appreciated the consultation-first approach at MINUS. The team understood my concerns, explained the available options clearly, and helped me choose a treatment plan that felt right for me.',
  },
  {
    name: 'Yogalakshmi',
    text: 'The clinic has a professional environment, and the treatment process was explained clearly at every step. I felt comfortable throughout my visits and appreciated the personalized attention.',
  },
  {
    name: 'Charles',
    text: 'What stood out to me was the range of treatment options available. The team took time to understand my individual concerns rather than suggesting the same solution for everyone.',
  },
  {
    name: 'Bathool',
    text: 'My experience at MINUS Slimming Clinic Madurai was reassuring from the consultation onwards. The staff were approachable, the process was well explained, and I felt that my concerns were genuinely listened to.',
  },
]

export const TREATMENTS = [
  {
    id: 'non-invasive',
    label: 'Non-Invasive Treatments',
    short: 'Non-Invasive',
    items: [
      ['AI Robotic Sonic Slim', 'Ultrasound-based fat reduction that breaks down fat cells without surgery or needles.'],
      ['Skin Fusion RF Sculpting', 'Radiofrequency waves that melt fat and tighten skin in the same session abdomen, arms, thighs, or face.'],
      ['JawDefine Pro', 'Skin Fusion RF technology, focused entirely on the jawline and submental area.'],
      ['CryoSculpt', 'Controlled cold exposure that targets and breaks down stubborn fat cells non-invasively.'],
      ['CryoMax Sculpting', 'An advanced cold-sculpting protocol for more intensive, targeted fat reduction.'],
      ['Coldplay-CryoSphere 360°', 'Full-circumference cold therapy that treats fat from every angle in one session.'],
      ['V-Fit Contour', 'EMS technology that contracts muscles thousands of times per session to build tone and definition.'],
      ['Slim Smart', 'A heat-and-detox combo, Therma Wrap, Lymph Detoxify, and thermo packs that sculpts from within.'],
      ['Lymph Detoxify', 'A gentle, rhythmic technique that stimulates lymph flow to flush toxins and reduce fluid retention.'],
      ['Calf Muscle Reduction', 'A non-surgical, multi-modal protocol that slims bulky calves over ten structured weekly sessions.'],
    ],
  },
  {
    id: 'minimally-invasive',
    label: 'Minimally Invasive Treatments',
    short: 'Minimally Invasive',
    items: [
      ['Deoxycholic Acid Double Chin Reduction', 'A named, synthetic-compound injection that dissolves submental fat in 15–20 minute sessions.'],
      ['Injection Lipolysis', 'Precisely placed injections that dissolve stubborn fat pockets in the chin, abdomen, thighs, or arms.'],
      ['Laser-Assisted Liposuction', 'Laser energy liquefies fat before removal, offering a less invasive alternative to traditional liposuction.'],
    ],
  },
  {
    id: 'surgical',
    label: 'Surgical Procedures',
    short: 'Surgical',
    items: [
      ['Bariatric Surgery', "A surgical procedure for severe obesity when diet and exercise haven't worked, not a shortcut, a medical solution."],
      ['Abdominoplasty (Tummy Tuck)', 'Removes excess skin and repairs separated abdominal muscles for a flatter, stronger core.'],
      ['Body Lift Surgery', 'A comprehensive surgical procedure addressing loose skin across multiple body areas after major weight loss.'],
      ['Liposuction', 'Surgical fat removal via cannula for stubborn deposits in the abdomen, thighs, arms, back, or jawline.'],
    ],
  },
]

export const TREATMENTS_NOTE =
  'Every treatment above is available through the same consultation-first process at our Madurai branch.'

export const BEFORE_AFTER_INTRO =
  'Explore our before-and-after gallery to understand individual treatment journeys and outcomes.'

// Optimised photos live in src/assets/results/<slug>-before.webp / <slug>-after.webp (4:5 portrait).
const resultImages = import.meta.glob('./assets/results/*.webp', { eager: true, query: '?url', import: 'default' })
const result = (slug, role) => resultImages[`./assets/results/${slug}-${role}.webp`]

// 6 cards = 3 columns x 2 rows
export const BEFORE_AFTER = [
  ['Belly fat reduction', 'belly'],
  ['Jawline definition', 'jawline'],
  ['Double chin reduction', 'double-chin'],
  ['Arm contouring', 'arm'],
  ['Thigh contouring', 'thigh'],
  ['Calf muscle reduction', 'calf'],
].map(([label, slug], id) => ({ id, label, before: result(slug, 'before'), after: result(slug, 'after') }))

export const FAQS = [
  {
    q: 'What is the best treatment for belly fat reduction in Madurai?',
    a: 'It depends on whether your concern is fat volume, skin laxity, or both. CryoSculpt and CryoMax target fat through controlled cold exposure; Skin Fusion RF Sculpting addresses fat and skin tightening together; Abdominoplasty is the surgical option for excess skin and muscle separation. This is confirmed at consultation, not guessed from a form.',
  },
  {
    q: 'Are the treatments at MINUS Madurai surgical or non-surgical?',
    a: 'Both, MINUS Madurai offers the full range: non-invasive device-based treatments, minimally invasive injectables, and surgical procedures. Your consultation determines which category fits your goal.',
  },
  {
    q: 'How much do treatments cost at MINUS Madurai?',
    a: "Cost depends on the treatment, treatment area, and number of sessions required. MINUS doesn't quote blanket pricing without an assessment book or a consultation for an accurate quote specific to your case.",
  },
  {
    q: 'Is MINUS Madurai the same standard as the Chennai flagship clinic?',
    a: 'Yes. Madurai operates on the same clinical standard, technology, and consultation-first approach as every other MINUS location.',
  },
  {
    q: 'Where is MINUS Slimming Clinic Madurai located?',
    a: '#P415, 9th Street, Zone 2, East, KK Nagar, Madurai – 625020, below Page 3 Saloon and ICICI Prudential. Call +91 85081 34567 or email madurai@minusclinic.com.',
  },
  {
    q: 'Can I get a non-surgical weight loss treatment in Madurai?',
    a: 'Yes, MINUS offers several non-surgical options including AI Robotic Sonic Slim, CryoSculpt, CryoMax Sculpting, and Skin Fusion RF Sculpting, each suited to different fat-reduction and body-contouring goals.',
  },
]

export const DIAGNOSIS = {
  title: 'The right body transformation starts with the right diagnosis!',
  text: 'Book a consultation at MINUS Slimming Clinic, Madurai, and get matched to the treatment your body and goals actually call for.',
  whatsapp: 'https://wa.me/918508134567',
}
