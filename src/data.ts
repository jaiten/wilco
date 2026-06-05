import { Project, Division, Office, Job } from "./types";

export const BRAND_NAME = "Wilco Civil Group";

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AP1WRLtH0vOyYXnmjQKsSREJ-thBxBxIwRfPYvZCYijgpEthy5UumpsHA0_L-zdhizoC1ef4oUstVDyKFwJ3JmveMkLGZAKCgsGMZmItsfW3MW8e47jCiNrzJytgmhTTY3jAC951KIZmd3r2Ca2GLCDt_AdEmnM-d_hnqbcBuDyX_bdeSvF2mcuWMSi85x6mIbtnCubMFbLBvUsZrxZDCQ18jLR5Cvdu590gtnJwc_m9WvuNUHZd9QXwNqN2FA";

export const IMAGES = {
  headerBg: "https://lh3.googleusercontent.com/aida/AP1WRLtGydLnfj6tSbc9NxP8BF6E359JWHN-AplE6ic9uATy9RGL81amsNtbMZ75_55QIuKA6N9LxLgBUbm2T6n7CM3DI6ekkK8lyH0nSAn_o_VOfxHgtpPYbvYU2Fq5B3mAkl1qUe-xg5qOB35UW4tBNUYCu41ZZS-UlwVrDBPEAV7oh7wrbiJmZbhsbx0ATTL-wELWQ8EW6A1kLKbZeBDjYS1X4Tr5JNxquM8coqlV9qHRhxgccXpdrkNNig",
  sunsetWorkers: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbIP70zCfF6QK_C4w0NySQuzuosITgi_VXsY5gnM2scH1EYuOo5YQ1DdpS247-gUaz6GPqW_3PypQJC3E8cN03LTaAydfUy3jzA-udCqrXsyAcCF6FGwCHpCFM8ZJHfLXjp_-w1mNPa3KtGnrd9aQ4gCMfdKA4wrCGmcO5w6p2F-oXiNT3TLJt3TmbTFQ1Xp00P_nlP3U2PcBKM-zt1HNfw7m0d5yvISP0oLBA26QR7MVq9fXzVPPdnBIQO4puNj6uE21BVKyBoHg",
  environmentalTrail: "https://lh3.googleusercontent.com/aida/AP1WRLshEaSne3xZ1de_ZWY9rEKsxIKHVlyxdHZt2oqXBYZrXd3bdJljHDeRQcIu_g9KIUtDt5XM-I-s4E7LQU5ZxaTjPmovD-8XDeDuBw_v6NQFVdF877wcI4B75Y-eu-o-Ub4SrzgbCu5fQRAJhjm7xQh56x2wtekzsjKORVil1266JeS4Zc-1ozsmlw-gKOIUqqyGFrOQ7FIUr9v2PtDHpqY5DivlGXpd48zqJlLaczv9JqosORkenbCT0Hk",
  playgroundCivil: "https://lh3.googleusercontent.com/aida/AP1WRLvp--K1gazV4FXXENf_EcLkSeGt295oEY1sOcnH8tEhVTcDgePlJ9szFgrKNdRPQt8dvzJnw7VWXrFOcDtftCTBYrUe1ek8sEl7lSQ4-kOizPGo_zex9Hpf3VScHOn2kaje0IaGLF-esvvIfhnOvjGTwLkgWaf81mR3XywlobG3Ra_snxjtzIkhc0CpH2SUTc5A7dD4CPhuMC5Y2gcOqjzsIVm7wY5cm0GAO-m3mZLt_-Iggyc2b6-1tG4",
  heavyMachineryGrading: "https://lh3.googleusercontent.com/aida/AP1WRLsm-5BxtIcVCrcsRw9f3q4P6ude7qT1rwZ_0wN3EWhcNzTfc43q41Pjk-_hM7XhCOiTreUx2K-c6xp9ohc06yjJL8avcFgj_oE5t0wCARCEVn1op54FlO6jhzG8NJi2s-bHkiL_O-CdcMsds_AxtZSn394ZMWxWaLSWHxC068k2hYhEFUWp17JKs0UIU-grIctPrkUBvP-XHcZml1CtJjGHUsQkgrcLhl9sDt_KE5ypPPzmz2Vr1n1xEg",
  lushParkPathway: "https://lh3.googleusercontent.com/aida/AP1WRLs4g70PO0IrJdaB2oGKBru8fm2JBxaJ3cjxhMLoMAiVCjTRLDRi2f18ZX89fPo1a-4mLUxvqVir3CRCLLlj3S0ijtlqHRmNXAlOTyjLsIVW0K30zrhqIpWmr0l3mJ099T8FTNhCWj_aiJq_QJprZMd9EloYz249416zMKE9VCYCjoIexR6Iq372eBeCD-ZlGbT3EGnVz1_4gwaHHvRyUg23jzK4tN5tGNA3VHKDLatV1Rofi7ULGSK6-Q",
  clarkParkAesthetic: "https://lh3.googleusercontent.com/aida/AP1WRLvxl1ne3AaMjEbIKXvktafrF2XgUCWDVW92z6-cfcY23bU6fppi1jFrKgnAFqsT2ub2tdUNVO_RylqpN_IpPaSqHTYxPLe0kx77U87r9NS1EFSic6cvuW3CyWKy-8XJmhwOsWVLaxQQ4lYf5F7D9-S0hwsZgkw92ytfh7tjnOORUpAysZ_WjdQ6aG1n01_9ZU5J4RzKsHtHXyGzktcMhDmSRyUj2bq1iBqi5GlXFUTQTzFOwCA3DwYOR8U",
  yorksonCommunityAerial: "https://lh3.googleusercontent.com/aida/AP1WRLsdEacbGEH6VW3KWgR2G1U4h6G9qz-smf0xRJHpGQ2UW6RqJOv67yUvQvBqwY4Kir2rflq3GbeY6cezra7Tfw-F57RI4DI5QTqUwzez9EK_Wfeov-cpx1UYr0Uy5CaOo6fBrrjXhxB6OtWy2-yAtp8uwEk4_DHTj3o-XiAMHXuT4MIKkzf4e2a8DwYF9KE8Y67f4znnbA__kL3Wf5crJHytlEymDKLELzq1hQNUsxGPEb60go7ULKLWWjc",
};

export const PROJECTS: Project[] = [
  {
    id: "proj_harewood",
    title: "Harewood Centennial Park",
    category: "parks",
    categoryLabel: "Parks & Recreation",
    location: "Nanaimo, BC",
    description: "Complete park redevelopment including detailed earthwork contouring, specialized concrete retaining walls, integrated custom playground modules, water control setups, and comprehensive civil-grade sports courts infrastructure.",
    imageUrl: IMAGES.clarkParkAesthetic,
    completionYear: "2024",
    client: "City of Nanaimo / Provincial Parks Group",
    size: "12 Acres",
    featured: true,
    technicalSpecs: [
      "22,000 m³ mass grading and terrain shaping",
      "Custom architectural softscape with 120+ native mature trees",
      "High-spec underground drainage and sub-surface irrigation loops",
      "Bespoke structural wood structures integrated into active zones"
    ]
  },
  {
    id: "proj_yorkson",
    title: "Yorkson Community Park",
    category: "urban_spaces",
    categoryLabel: "Urban Spaces / Community",
    location: "Langley, BC",
    description: "Multidisciplinary civil development encompassing advanced mass grading, deep utility networks installation, sustainable water retention basins, and top-tier community landscape architectural builds.",
    imageUrl: IMAGES.yorksonCommunityAerial,
    completionYear: "2023",
    client: "Township of Langley & Private Developer JV",
    size: "45 Hectares",
    featured: true,
    technicalSpecs: [
      "GPS-guided 3D grading precision for water runoff safety",
      "Over 4.5km of high-density storm and sanitary lines",
      "Architectural concrete walkways and structural seat barriers",
      "Sustainable biological filtration wetlands implementation"
    ]
  },
  {
    id: "proj_wlc_popup",
    title: "WLC Pop-Up Plaza & Urban Garden",
    category: "landscape",
    categoryLabel: "Landscape Architecture",
    location: "Vancouver, BC",
    description: "A showcase of modular urban landscape design combining contemporary heavy Timber elements with concrete paving, lush modular planter boxes, and integrated smart stormwater capture buffers.",
    imageUrl: IMAGES.environmentalTrail,
    completionYear: "2025",
    client: "Metro Vancouver Public Space Initiative",
    size: "1.2 Acres",
    featured: false,
    technicalSpecs: [
      "Precast structural block foundations on quick-drain gravel beds",
      "Integrated micro-drip smart sensor irrigation control",
      "100% recycled structural composite accents",
      "Pedestrian paving matching strict slip-resistance engineering standards"
    ]
  },
  {
    id: "proj_regional_pipeline",
    title: "Regional Pipeline Integration & Ground Prep",
    category: "civil",
    categoryLabel: "Civil Infrastructure",
    location: "Edmonton Region, AB",
    description: "Heavy civil infrastructure preparation involving complex corridor clearing, deep trenching in variable shale geology, and precision backfill/site restoration protocols over dozens of kilometers.",
    imageUrl: IMAGES.headerBg,
    completionYear: "2024",
    client: "Western Infrastructure Partners",
    size: "34 km corridor",
    featured: true,
    technicalSpecs: [
      "140,000 m³ of precision rock extraction and grading",
      "Continuous environmental monitoring with 0 ecological incidents",
      "Trench stabilization using innovative steel shielding system",
      "Complete native subsoil restoration and top-grade seeding"
    ]
  },
  {
    id: "proj_saskatoon_sports",
    title: "Saskatoon Multi-Sport Turf Complex",
    category: "sportsfields",
    categoryLabel: "Sportsfields & Arenas",
    location: "Saskatoon, SK",
    description: "The premier municipal athletic facility of its kind, incorporating precision laser-graded base beds, automated sub-surface drainage arrays, and professional-grade synthetic turf engineered for Extreme climate resilience.",
    imageUrl: IMAGES.playgroundCivil,
    completionYear: "2023",
    client: "City of Saskatoon",
    size: "4 Turf Pitches",
    featured: true,
    technicalSpecs: [
      "Sub-base laser grading held within +/- 2mm tolerances",
      "Automated heavy-storm drainage routing to underground storage",
      "Resilient shockpad layers optimized for impact absorption criteria",
      "Integration of high-intensity commercial field lighting bases"
    ]
  },
  {
    id: "proj_regina_bypass",
    title: "Regina Industrial Bypass Site Work",
    category: "civil",
    categoryLabel: "Heavy Civil Operations",
    location: "Regina, SK",
    description: "Substantial industrial subdivision grading, foundational compaction for heavy machinery loads, and major arterial roadbed construction designed to manage heavy logistical flows.",
    imageUrl: IMAGES.heavyMachineryGrading,
    completionYear: "2025",
    client: "Saskatchewan Ministry of Infrastructure",
    size: "80 Hectares subdivided",
    featured: false,
    technicalSpecs: [
      "Dynamic field compaction reaching 98% Standard Proctor Density",
      "Installation of oil-grit separators for water-safety compliance",
      "Engineered road sub-base to withstand 30-year heavy transit cycles",
      "Advanced dust and erosion controls during dry winds"
    ]
  }
];

export const DIVISIONS: Division[] = [
  {
    id: "div_civil",
    title: "Civil Engineering",
    code: "DIVISION 01",
    description: "Our civil division provides heavy-duty site preparation, underground utility systems installation, and highly complex earthworks. We specialize in transforming raw rugged terrain into foundation-ready, high-integrity sites for municipal complexes, industrial centers, and massive urban developments.",
    imageUrl: IMAGES.heavyMachineryGrading,
    services: [
      "Bulk Earthworks & GPS Site Grading",
      "Deep Trench Under-Ground Utilities Infrastructure",
      "Industrial Road Base Construction & Heavy Paving Prep",
      "Advanced Water Management & Retention Systems"
    ],
    features: [
      "3D digital model GPS grading on modern fleets",
      "Strict compaction verification using nuclear density gauges",
      "Sewer/Storm deep utility excavation specialists"
    ]
  },
  {
    id: "div_landscape",
    title: "Landscape Architecture",
    code: "DIVISION 02",
    description: "Beyond core structural engineering, we construct aesthetic, durable, and highly functional environments. Our commercial landscape division handles master-planned community park developments, premier sports facilities, and high-end municipal plazas that foster connected public spaces.",
    imageUrl: IMAGES.playgroundCivil,
    services: [
      "Commercial Softscape, Turf Systems & Intelligent Irrigation",
      "Parks, Playgrounds, and Custom Structural Timber Builds",
      "Hardscape, Pattern Concrete, and Retaining Block Systems",
      "Ecological Restoration & Habitat Remediation Projects"
    ],
    features: [
      "Full COR-compliant park build capabilities",
      "Extensive specialized carpentry for custom park features",
      "Deep logistics management of heavy nursery assets"
    ]
  }
];

export const OFFICES: Office[] = [
  {
    id: "off_calgary",
    city: "Calgary Office",
    role: "Corporate Head Office",
    address: "123 Civil Way SE, Calgary, AB T2P 1A1",
    phone: "(403) 555-0100",
    email: "calgary@wilcocivil.ca",
    coordinates: { x: 35, y: 70 }
  },
  {
    id: "off_saskatoon",
    city: "Saskatoon Office",
    role: "Saskatchewan Regional Hub",
    address: "456 Bridge Ave, Saskatoon, SK S7K 1V9",
    phone: "(306) 555-0122",
    email: "saskatoon@wilcocivil.ca",
    coordinates: { x: 55, y: 55 }
  },
  {
    id: "off_regina",
    city: "Regina Office",
    role: "Southern Prairie Branch",
    address: "789 Prairie Blvd, Regina, SK S4P 3Y2",
    phone: "(306) 555-0199",
    email: "regina@wilcocivil.ca",
    coordinates: { x: 60, y: 72 }
  },
  {
    id: "off_edmonton",
    city: "Edmonton Office",
    role: "Northern Alberta Operations",
    address: "101 Capital Plaza, Edmonton, AB T5J 2Z2",
    phone: "(780) 555-0188",
    email: "edmonton@wilcocivil.ca",
    coordinates: { x: 30, y: 45 }
  },
  {
    id: "off_fortmcmurray",
    city: "Fort McMurray Office",
    role: "Industrial Mining Support",
    address: "202 Oil Sands Way, Fort McMurray, AB T9H 1A1",
    phone: "(780) 555-0177",
    email: "fortmcmurray@wilcocivil.ca",
    coordinates: { x: 40, y: 20 }
  }
];

export const SAFETY_PRINCIPLES = [
  {
    title: "Individual Responsibility",
    description: "Every single team member in the field has the ultimate authority and the ethical duty to instantly STOP WORK if they identify an unsafe condition or hazard."
  },
  {
    title: "Zero Tolerance",
    description: "We work under a uncompromising zero-incident goal on every single job site—whether it is a simple city pathway or a complex industrial development."
  },
  {
    title: "Continuous Field Audits",
    description: "Our protocols are continuously subjected to rigorous weekly internal inspections and bi-annual independent audits to ensure absolute standard compliance."
  },
  {
    title: "Safety Leadership",
    description: "Management actively participates in weekly field inspections, daily safety briefings (FLHAs), and local safety steering committee sessions."
  }
];

export const CAREER_LISTINGS: Job[] = [
  {
    id: "job_01",
    title: "Senior Heavy Estimator - Civil",
    department: "Engineering",
    location: "Calgary, AB",
    type: "Full-Time, Permanent",
    description: "We are seeking an experienced Civil Estimator to lead major infrastructure bid preparations. The candidate will work closely with digital terrain models, mass earthwork analysis, and deep utility design bids to secure high-value civic projects.",
    requirements: [
      "Minimum 7 years of heavy civil estimation experience in Western Canada",
      "High proficiency with standard bidding software (e.g., HeavyBid, Bid2Win)",
      "Strong background in analyzing mass earthwork balancing and deep utility quotes",
      "Degree in Civil Engineering or Construction Management is preferred"
    ],
    benefits: [
      "Highly competitive salary with annual Performance Bonus structures",
      "Comprehensive employer-paid health, dental, and vision coverage",
      "Matching RRSP program up to 5%",
      "Flexible hybrid head-office work structure"
    ]
  },
  {
    id: "job_02",
    title: "Heavy Equipment Operator (Excavator / Subgrade)",
    department: "Operations",
    location: "Edmonton & Field Sites, AB",
    type: "Full-Time, Seasonal",
    description: "Seeking skilled Excavator Operators with active experience utilizing GPS-guided controls (Trimble/TopoCon) for precise ditching, pipe laying, mass grading, and subgrade preparations.",
    requirements: [
      "Clean class 5 license and minimum 5 years operating 20-40 ton excavators",
      "Direct expertise operating laser and GPS-integrated subgrade controls",
      "Active CSTS-2020 (Construction Safety Training) and Ground Disturbance II",
      "Strong alignment with zero-incident group safety values"
    ],
    benefits: [
      "Premium progressive hourly wages with robust overtime schedules",
      "Living out allowance (LOA) for travel and remote operations",
      "Excellent company-provided safety gear and winter outfitting",
      "Guaranteed priority recall for following spring operations"
    ]
  },
  {
    id: "job_03",
    title: "Civil Project Quality Manager",
    department: "Management",
    location: "Saskatoon, SK",
    type: "Full-Time, Permanent",
    description: "Seeking a field-focused Construction Project Manager or Quality Lead to oversee Saskatoon-area commercial park developments, sportsfields, and waterfront stabilization operations.",
    requirements: [
      "Minimum 4 years project management or field engineering experience",
      "Strong familiarity with municipal quality specs for soil, compaction, and concrete",
      "Proficient using Microsoft Projects and Resource Tracking platforms",
      "Outstanding communication and client coordination abilities"
    ],
    benefits: [
      "Generous vehicle allowance or provided quality utility vehicle",
      "Comprehensive medical benefits package with family options",
      "Annual technical and professional education paid sponsorship",
      "Collaborative, high-morale company culture and career growth path"
    ]
  }
];

export const COMPANY_QA_TRANSCRIPTS = [
  {
    question: "How long has Wilco Civil been active?",
    answer: "For over 30 years (founded in 1993), delivering state-of-the-art civil engineering, mass earthworks, and elite commercial landscape development projects across Western Canada."
  },
  {
    question: "Do you hold active COR safety certifications?",
    answer: "Yes. Wilco Civil holds continuous, nationally recognized Certificate of Recognition (COR) credentials across Alberta, Saskatchewan, and British Columbia, affirming that our safety systems exceed provincial standards."
  },
  {
    question: "What project management frameworks do you use?",
    answer: "We utilize industry-standard CPM scheduling through Microsoft Projects paired with real-time field data accounting on the Explorer Construction System to secure absolute transparency and schedule fidelity."
  }
];
