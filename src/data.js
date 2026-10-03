export const CONTACT = {
  phone: '+91 85081 34567',
  phoneHref: 'tel:+918508134567',
  email: 'madurai@minusclinic.com',
  address:
    'Ground Floor, Flat No, P415, 9th Main Rd, below ICICI Prudential Life Insurance, Zone 2 East, KK Nagar, Madurai, Tamil Nadu 625020',
}

export const MAP_LINK =
  'https://www.google.com/maps/search/?api=1&query=Minus%20Slimming%20Clinic%20KK%20Nagar%20Madurai'

export const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/minusclinic.madurai/' },
  { name: 'Facebook', href: 'https://www.facebook.com/p/MINUS-Slimming-Clinic-Madurai-61594350524583/' },
]

export const CONTACT_URL = `${import.meta.env.BASE_URL}contact`

export const NAV = [
  { label: 'Home', id: 'top' },
  { label: 'Welcome', id: 'welcome' },
  { label: 'Why Minus', id: 'why' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Treatments', id: 'treatments' },
  { label: 'Results', id: 'results' },
]

export const ALT = {
  hero: 'Best slimming clinic in Madurai — Minus Slimming Clinic body contouring',
  facility: 'Minus Slimming Clinic Madurai treatment facility and technology',
  collage: 'Non-surgical, minimally invasive and surgical treatments at Minus Madurai',
  beforeAfter: 'Body contouring before and after results at Minus Slimming Clinic Madurai',
  consultation: 'Consultation-first care at Minus Slimming Clinic Madurai',
}

export const WELCOME = [
  'Minus is a cutting-edge slimming and body contouring brand that redefines the way people achieve their desired body shape now local to Madurai, at our KK Nagar branch. Our mission is to empower individuals to feel confident in their bodies by offering the most advanced, safe, and effective slimming procedures, using equipment and technologies most of which were previously only available in Europe.',
  "Whether you're dealing with stubborn fat that hasn't responded to diet and exercise, loose skin after major weight loss, or a body-contouring goal that needs a surgical solution, Minus Madurai is built to diagnose the actual problem first then recommend the treatment that fits it.",
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
  'Real experiences from people who chose personalized care at Minus Slimming Clinic Madurai. Read what our patients have to say about their treatment journey and overall experience.'

export const TESTIMONIALS = [
  {
    name: 'Kanishka',
    text: 'I really appreciated the consultation-first approach at Minus. The team understood my concerns, explained the available options clearly, and helped me choose a treatment plan that felt right for me.',
  },
  {
    name: 'Shivasree',
    text: 'The clinic has a professional environment, and the treatment process was explained clearly at every step. I felt comfortable throughout my visits and appreciated the personalized attention.',
  },
  {
    name: 'Vetri Vel',
    text: 'What stood out to me was the range of treatment options available. The team took time to understand my individual concerns rather than suggesting the same solution for everyone.',
  },
  {
    name: 'Bharani',
    text: 'My experience at Minus Slimming Clinic Madurai was reassuring from the consultation onwards. The staff were approachable, the process was well explained, and I felt that my concerns were genuinely listened to.',
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

// 12 cards = 3 columns x 4 rows. Add `before` / `after` image URLs to show real photos.
export const BEFORE_AFTER = [
  'Belly fat reduction', 'Jawline definition', 'Double chin reduction',
  'Arm contouring', 'Thigh contouring', 'Calf muscle reduction',
  'Skin tightening', 'Waistline sculpting', 'Back & flank fat',
  'Post-pregnancy contour', 'Fluid retention & puffiness', 'Full body contouring',
].map((label, i) => ({ id: i, label }))

export const WHY_CHOOSE = [
  'Full-Spectrum Treatments',
  'European-Grade Technology',
  'Consultation-First Approach',
  'Trusted Multi-City Network',
  'Direct Local Access',
]
