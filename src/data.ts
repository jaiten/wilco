import { Division, Job, Office, Project, WilcoCompanyLink } from "./types";

export const BRAND_NAME = "Wilco Civil Inc.";
export const SERVICE_AREA = "GVRD - Vancouver Island";
export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AP1WRLtH0vOyYXnmjQKsSREJ-thBxBxIwRfPYvZCYijgpEthy5UumpsHA0_L-zdhizoC1ef4oUstVDyKFwJ3JmveMkLGZAKCgsGMZmItsfW3MW8e47jCiNrzJytgmhTTY3jAC951KIZmd3r2Ca2GLCDt_AdEmnM-d_hnqbcBuDyX_bdeSvF2mcuWMSi85x6mIbtnCubMFbLBvUsZrxZDCQ18jLR5Cvdu590gtnJwc_m9WvuNUHZd9QXwNqN2FA";

export const IMAGES = {
  headerBg: new URL("../assets/generated/civil-hero.png", import.meta.url).href,
  sunsetWorkers: new URL("../assets/generated/site-team-sunset.png", import.meta.url).href,
  environmentalTrail: new URL("../assets/generated/environmental-trail.png", import.meta.url).href,
  playgroundCivil: new URL("../assets/generated/playground-civil.png", import.meta.url).href,
  heavyMachineryGrading: new URL("../assets/generated/heavy-machinery-grading.png", import.meta.url).href,
  lushParkPathway: new URL("../assets/generated/lush-park-pathway.png", import.meta.url).href,
  clarkParkAesthetic: new URL("../assets/generated/civic-park-hardscape.png", import.meta.url).href,
  yorksonCommunityAerial: new URL("../assets/generated/community-aerial.png", import.meta.url).href,
  pipelineCorridor: new URL("../assets/generated/pipeline-corridor.png", import.meta.url).href,
};

const categoryLabels: Record<Project["category"], string> = {
  buildings_structures: "Buildings & Structures",
  civil: "Civil Works",
  environmental: "Environmental",
  landscape: "Landscapes",
  parks: "Parks",
  sportsfields: "Sportsfields",
  streetscapes_roads: "Streetscapes and Roads",
  urban_spaces: "Urban Spaces",
};

const categoryImages: Record<Project["category"], string> = {
  buildings_structures: IMAGES.clarkParkAesthetic,
  civil: IMAGES.heavyMachineryGrading,
  environmental: IMAGES.environmentalTrail,
  landscape: IMAGES.lushParkPathway,
  parks: IMAGES.clarkParkAesthetic,
  sportsfields: IMAGES.playgroundCivil,
  streetscapes_roads: IMAGES.pipelineCorridor,
  urban_spaces: IMAGES.yorksonCommunityAerial,
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

function portfolioProject(
  title: string,
  location: string,
  category: Project["category"],
  completionYear = "N/A",
  featured = false,
): Project {
  const yearText = completionYear === "N/A" ? "" : `, listed with a ${completionYear} project year`;
  return {
    id: `proj_${slugify(title)}_${slugify(location)}`,
    title,
    category,
    categoryLabel: categoryLabels[category],
    location,
    description: `${title} is listed in Wilco Civil's portfolio for ${location}${yearText}.`,
    imageUrl: categoryImages[category],
    completionYear,
    featured,
    technicalSpecs: [
      categoryLabels[category],
      location,
      completionYear === "N/A" ? "Year not listed in supplied portfolio text" : `Listed project year: ${completionYear}`,
    ],
  };
}

export const PROJECTS: Project[] = [
  portfolioProject("Harewood Centennial Park Artificial Turf Fields Civil Works", "Nanaimo, BC", "sportsfields", "2024", true),
  portfolioProject("Mission Sportsfields", "Mission, BC", "sportsfields", "2007", true),
  portfolioProject("Yorkson Community Park Phase 1", "Langley, BC", "parks", "2017", true),
  portfolioProject("Westminster Pier Park", "New Westminster, BC", "urban_spaces", "2012", true),
  portfolioProject("Town Centre Park Tournament Site", "Coquitlam, BC", "sportsfields", "2008", true),
  portfolioProject("University of Guelph Athletic Field Multiplex", "Guelph, ON", "sportsfields", "2011"),
  portfolioProject("Aberdeen Neighbourhood Park - Phase 2", "Richmond, BC", "parks", "2022", true),
  portfolioProject("Town Centre Park - Lake Loop Landscape Construction", "Coquitlam, BC", "landscape", "2022", true),
  portfolioProject("Newton Athletic Park", "Surrey, BC", "sportsfields", "2013"),
  portfolioProject("Newton Exchange Improvements", "Surrey, BC", "streetscapes_roads", "2013"),
  portfolioProject("North Shore Indoor Training Center Air Structure Foundation & Civil Work", "North Vancouver, BC", "buildings_structures"),
  portfolioProject("Minoru Lakes Renewal", "Richmond, BC", "environmental", "2023"),
  portfolioProject("Willoughby Community Park Fields", "Langley, BC", "sportsfields", "2020"),
  portfolioProject("SEFC Olympic Village & Waterfront", "Vancouver, BC", "urban_spaces", "2009"),
  portfolioProject("Zellers Plaza", "Burnaby, BC", "urban_spaces", "2005"),
  portfolioProject("Brae Island", "Vancouver, BC", "parks", "2007"),
  portfolioProject("Burnaby Streets Beautification", "Burnaby, BC", "streetscapes_roads", "2011"),
  portfolioProject("UBC Thunderbird Park Sportsfield & Athletic Track Redevelopment", "Vancouver, BC", "sportsfields", "2010"),
  portfolioProject("Whistler Gateway Loop Development Phase 1 - Civil & Landscape", "Whistler, BC", "civil", "2017"),
  portfolioProject("Notre Dame Regional Secondary School Sports Field", "Vancouver, BC", "sportsfields", "2022"),
  portfolioProject("Willoughby Community Sports Fields", "Langley, BC", "sportsfields", "2008"),
  portfolioProject("Latimer Pond 15", "Langley, BC", "environmental", "2017"),
  portfolioProject("Pinetree Way Enhancements", "Coquitlam, BC", "streetscapes_roads", "2016"),
  portfolioProject("Clark Park East Replacement", "Vancouver, BC", "parks", "2018"),
  portfolioProject("Edmonds Community Plaza", "Burnaby, BC", "urban_spaces", "2014"),
  portfolioProject("Granville and 70th", "Vancouver, BC", "urban_spaces", "2013"),
  portfolioProject("Willoughby Community Park Site Improvements", "Langley, BC", "parks", "2020"),
  portfolioProject("Pandora Children's Spray Park", "Vancouver, BC", "parks", "2013"),
  portfolioProject("North Delta Track and Field Facility and Civil Works", "Delta, BC", "sportsfields", "2021"),
  portfolioProject("New Brighton Park Shoreline Habitat Restoration", "Vancouver, BC", "environmental", "2017"),
  portfolioProject("Olympic Oval Sport and Event Plaza Design Build", "Richmond, BC", "urban_spaces", "2023"),
  portfolioProject("Lions Park Phase 1 Overland Flow Protection System", "Medicine Hat, AB", "environmental", "2016"),
  portfolioProject("Alberni Secondary School Sportsfields", "Port Alberni, BC", "sportsfields", "2012"),
  portfolioProject("Minoru Sports Complex Design-Build", "Richmond, BC", "sportsfields", "2014"),
  portfolioProject("Squamish Nation Pedestrian Bridge", "Squamish, BC", "civil", "2012"),
  portfolioProject("Lynn Canyon Park Parking and Circulation Improvements", "North Vancouver, BC", "streetscapes_roads", "2020"),
  portfolioProject("Concord False Creek Pop Up", "Vancouver, BC", "urban_spaces"),
  portfolioProject("10th Ave Hospital Zone Phase 2", "Vancouver, BC", "streetscapes_roads", "2021"),
  portfolioProject("Fraser Highway Widening", "Surrey to Langley, BC", "streetscapes_roads", "2012"),
  portfolioProject("Mountain View Park", "Coquitlam, BC", "parks", "2018"),
  portfolioProject("Newton Town Centre Detention Pond", "Surrey, BC", "environmental", "2016"),
  portfolioProject("Hillcrest Park Construction and Riley Park Renovation", "Vancouver, BC", "parks", "2016"),
  portfolioProject("Centennial Beach", "Vancouver, BC", "parks", "2012"),
  portfolioProject("Richmond Oval", "Richmond, BC", "urban_spaces"),
  portfolioProject("Garrison Crossing Village", "Chilliwack, BC", "urban_spaces", "2009"),
  portfolioProject("Oceanfront Squamish", "Squamish, BC", "urban_spaces", "2024"),
  portfolioProject("Slocan Park Grass Sport Field Renewals", "Vancouver, BC", "sportsfields", "2020"),
  portfolioProject("Fraser River Flood Protection", "Surrey, BC", "environmental", "2011"),
  portfolioProject("Queen's University Design Build", "Kingston, ON", "sportsfields", "2011"),
  portfolioProject("Surrey Bend Regional Park Phase 2", "Surrey, BC", "parks", "2016"),
  portfolioProject("Triangle Park", "Vancouver, BC", "parks", "2012"),
  portfolioProject("River Green Parcel 9", "Richmond, BC", "urban_spaces", "2017"),
  portfolioProject("PRC Sports Field & Athletics Facility", "Coldstream, BC", "sportsfields", "2015"),
  portfolioProject("Shaw Tower", "Vancouver, BC", "buildings_structures", "2008"),
  portfolioProject("BC Parkway Upgrade Construction", "Vancouver, Burnaby, New Westminster, Surrey, BC", "streetscapes_roads", "2015"),
  portfolioProject("Evelyn Parcel Phase 1, 2 & 5", "West Vancouver, BC", "urban_spaces", "2013"),
];

export const DIVISIONS: Division[] = [
  {
    id: "div_civil",
    title: "Civil Construction",
    code: "GVRD - VANCOUVER ISLAND",
    description: "Wilco Civil Inc. supports Lower Mainland and Vancouver Island civil works, including site preparation, underground servicing, roadworks, drainage, grading, and public realm construction.",
    imageUrl: IMAGES.heavyMachineryGrading,
    services: [
      "Civil works and site preparation",
      "Road, pathway, and streetscape construction",
      "Drainage and stormwater infrastructure",
      "Sportsfield base and civil works"
    ],
    features: [
      "GVRD and Vancouver Island operating focus",
      "Municipal, institutional, and public realm delivery",
      "Portfolio-backed civil and landscape construction"
    ]
  },
  {
    id: "div_landscape",
    title: "Landscape Construction",
    code: "PARKS - SPORTS - PUBLIC REALM",
    description: "The local team builds parks, sportsfields, plazas, waterfronts, trails, and civic landscapes across Metro Vancouver, the Fraser Valley, Sea to Sky communities, and Vancouver Island.",
    imageUrl: IMAGES.lushParkPathway,
    services: [
      "Parks and urban spaces",
      "Sportsfields and athletic facilities",
      "Landscape construction and planting",
      "Environmental restoration and shoreline work"
    ],
    features: [
      "Public park and waterfront project experience",
      "Sportsfield and turf construction history",
      "Environmental and habitat restoration portfolio"
    ]
  }
];

export const PRIMARY_OFFICE: Office = {
  id: "off_wilco_civil",
  city: "Wilco Civil Inc.",
  role: "GVRD - Vancouver Island",
  address: "Serving Greater Vancouver Regional District and Vancouver Island",
  phone: "Use the local inquiry form",
  email: "info@wilcocivil.ca",
  coordinates: { x: 50, y: 50 },
};

export const OFFICES: Office[] = [PRIMARY_OFFICE];

export const WILCO_COMPANY_LINKS: WilcoCompanyLink[] = [
  {
    name: "Wilco Civil",
    region: "GVRD - Vancouver Island",
    url: "https://wilcocivil.ca/",
  },
  {
    name: "Wilco Northwest",
    region: "Northwestern Canada",
    url: "https://wilconw.ca/",
  },
  {
    name: "Wilco Southwest",
    region: "Southwestern Ontario",
    url: "https://wilcosouthwest.ca/",
  },
  {
    name: "Wilco Contractors Superior",
    region: "Winnipeg and Manitoba",
    url: "https://wilcosuperior.ca/",
  },
];

export const SAFETY_PRINCIPLES = [
  {
    title: "Individual Responsibility",
    description: "Every field member has authority and responsibility to stop work when a condition is unsafe."
  },
  {
    title: "Local Compliance",
    description: "Work is planned around British Columbia municipal, provincial, and site-specific safety requirements."
  },
  {
    title: "Continuous Field Audits",
    description: "Project teams use regular inspections and hazard reviews to keep active work fronts controlled."
  },
  {
    title: "Safety Leadership",
    description: "Supervisors and site leads participate directly in safety planning, daily coordination, and field reviews."
  }
];

export const CAREER_LISTINGS: Job[] = [
  {
    id: "job_01",
    title: "Civil Estimator",
    department: "Engineering",
    location: "Lower Mainland / Vancouver Island, BC",
    type: "Full-Time, Permanent",
    description: "Support civil and landscape construction estimating for municipal, institutional, sportsfield, and public realm work in the Wilco Civil Inc. service area.",
    requirements: [
      "Civil construction estimating or project coordination experience",
      "Familiarity with municipal specifications and construction drawings",
      "Strong quantity takeoff, pricing, and communication skills",
      "British Columbia project experience is preferred"
    ],
    benefits: [
      "Competitive compensation",
      "Local and regional project exposure",
      "Experienced civil and landscape construction team",
      "Career growth across public realm and infrastructure work"
    ]
  },
  {
    id: "job_02",
    title: "Heavy Equipment Operator",
    department: "Operations",
    location: "GVRD / Vancouver Island Field Sites",
    type: "Full-Time, Seasonal",
    description: "Operate civil construction equipment for grading, excavation, roadworks, sportsfield, and landscape construction projects.",
    requirements: [
      "Experience operating excavators, loaders, compactors, or graders",
      "Comfort working on active municipal and public realm sites",
      "Valid safety training for British Columbia construction sites",
      "Strong alignment with field safety practices"
    ],
    benefits: [
      "Regional field work",
      "Varied civil and landscape construction projects",
      "Safety-focused site culture",
      "Seasonal recall opportunities"
    ]
  },
  {
    id: "job_03",
    title: "Project Coordinator",
    department: "Management",
    location: "Lower Mainland, BC",
    type: "Full-Time, Permanent",
    description: "Coordinate project documentation, scheduling, submittals, field communication, and municipal stakeholder support for Wilco Civil Inc. projects.",
    requirements: [
      "Construction coordination or field engineering experience",
      "Strong familiarity with drawings, specifications, and change tracking",
      "Organized communication with field teams and project stakeholders",
      "Civil or landscape construction background is preferred"
    ],
    benefits: [
      "Hands-on public infrastructure project experience",
      "Collaborative project delivery environment",
      "Professional development opportunities",
      "Competitive benefits package"
    ]
  }
];

export const COMPANY_QA_TRANSCRIPTS = [
  {
    question: "What area does Wilco Civil Inc. serve?",
    answer: "This site is focused on Wilco Civil Inc. for the GVRD and Vancouver Island service area."
  },
  {
    question: "Are other Wilco companies handled through this contact form?",
    answer: "No. This inquiry path is for Wilco Civil Inc. only. Links to other Wilco regional companies are provided on the contact page."
  },
  {
    question: "What kind of work is shown in the portfolio?",
    answer: "The portfolio reflects supplied Wilco Civil project listings across civil works, sportsfields, parks, urban spaces, landscapes, streetscapes, roads, environmental work, and buildings or structures."
  }
];
