import { Division, Job, Office, Project, WilcoCompanyLink } from "./types";

export const BRAND_NAME = "Wilco Civil Inc.";
export const SERVICE_AREA = "GVRD - Vancouver Island";
export const LOGO_URL = new URL("../assets/wilco-portfolio-images/WilcoLogoRetina.png", import.meta.url).href;

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

// Actual portfolio project photographs
const p = (file: string) => new URL(`../assets/wilco-portfolio-images/${file}`, import.meta.url).href;

export const PORTFOLIO_IMAGES = {
  // Sportsfields
  harewoodCentennialPark:   p("Harewood Centennial Park Artificial Turf Fields - Nanaimo BC 2024.jpg"),
  missionSportsfields:      p("Mission Sportsfields - Mission BC 2007.jpg"),
  townCentreTournament:     p("Town Centre Park Tournament Site - Coquitlam BC 2008.jpg"),
  universityOfGuelph:       p("University of Guelph Athletic Field Multiplex - Guelph ON 2011.jpg"),
  newtonAthletic:           p("Newton Athletic Park - Surrey BC 2013.png"),
  willoughbyParkFields:     p("Willoughby Community Park Fields - Langley BC 2020.jpg"),
  ubcThunderbird:           p("UBC Thunderbird Park Sportsfield and Athletic Track - Vancouver BC 2010.jpg"),
  notreDame:                p("Notre Dame Regional Secondary School Sports Field - Vancouver BC 2022.jpg"),
  willoughbySportsFields:   p("Willoughby Community Sports Fields - Langley BC 2008.jpg"),
  alberni:                  p("Alberni Secondary School Sportsfields - Port Alberni BC 2012.jpg"),
  minorSports:              p("Minoru Sports Complex Design-Build - Richmond BC 2014.jpg"),
  northDeltaTrack:          p("North Delta Track and Field Facility - Delta BC 2021.jpg"),
  slocanPark:               p("Slocan Park Grass Sport Field Renewals - Vancouver BC 2020.jpg"),
  queensUniversity:         p("Queens University Design Build - Kingston ON 2011.jpg"),
  prcSportsField:           p("PRC Sports Field and Athletics Facility - Coldstream BC 2015.jpg"),
  // Parks
  yorksonCommunity:         p("Yorkson Community Park Phase 1 - Langley BC 2017.jpg"),
  aberdeenPark:             p("Aberdeen Neighbourhood Park Phase 2 - Richmond BC 2022.jpg"),
  clarkParkEast:            p("Clark Park East Replacement - Vancouver BC 2018.jpg"),
  willoughbySiteImprov:     p("Willoughby Community Park Site Improvements - Langley BC 2020.jpg"),
  pandoraSprayPark:         p("Pandora Childrens Spray Park - Vancouver BC 2013.jpg"),
  mountainViewPark:         p("Mountain View Park - Coquitlam BC 2018.jpg"),
  hillcrestPark:            p("Hillcrest Park Construction and Riley Park Renovation - Vancouver BC 2016.jpg"),
  braeIsland:               p("Brae Island - Vancouver BC 2007.jpg"),
  centennialBeach:          p("Centennial Beach - Vancouver BC 2012.jpg"),
  trianglePark:             p("Triangle Park - Vancouver BC 2012.jpg"),
  surreybBendPark:          p("Surrey Bend Regional Park Phase 2 - Surrey BC 2016.jpg"),
  lynnCanyon:               p("Lynn Canyon Park Parking and Circulation - North Vancouver BC 2020.jpg"),
  // Urban Spaces
  westminsterPier:          p("Westminster Pier Park - New Westminster BC 2012.jpg"),
  sefcOlympicVillage:       p("SEFC Olympic Village and Waterfront - Vancouver BC 2009.jpg"),
  edmondsPlaza:             p("Edmonds Community Plaza - Burnaby BC 2014.jpg"),
  granville70th:            p("Granville and 70th - Vancouver BC 2013.jpg"),
  zellersPlaza:             p("Zellers Plaza - Burnaby BC 2005.jpg"),
  richmondOval:             p("Richmond Oval - Richmond BC.jpg"),
  garrisonCrossing:         p("Garrison Crossing Village - Chilliwack BC 2009.jpg"),
  olympicOvalPlaza:         p("Olympic Oval Sport and Event Plaza Design Build - Richmond BC 2023.jpg"),
  riverGreenParcel:         p("River Green Parcel 9 - Richmond BC 2017.jpg"),
  concordFalseCreek:        p("Concord False Creek Pop Up - Vancouver BC.jpg"),
  evelynParcel:             p("Evelyn Parcel Phase 1 2 5 - West Vancouver BC 2013.jpg"),
  oceanfrontSquamish:       p("Oceanfront Squamish - Squamish BC 2024.jpg"),
  // Landscape
  townCentreLakeLoop:       p("Town Centre Park Lake Loop - Coquitlam BC 2022.jpg"),
  // Environmental
  minorLakes:               p("Minoru Lakes Renewal - Richmond BC 2023.jpg"),
  latimerPond:              p("Latimer Pond 15 - Langley BC 2017.jpg"),
  newBrightonPark:          p("New Brighton Park Shoreline Habitat Restoration - Vancouver BC 2017.jpg"),
  newtonDetentionPond:      p("Newton Town Centre Detention Pond - Surrey BC 2016.jpg"),
  lionsOverlandFlow:        p("Lions Park Phase 1 Overland Flow Protection - Medicine Hat AB 2016.jpg"),
  fraserFloodProtection:    p("Fraser River Flood Protection - Surrey BC 2011.jpg"),
  // Streetscapes & Roads
  newtonExchange:           p("Newton Exchange Improvements - Surrey BC 2013.jpg"),
  burnabyStreets:           p("Burnaby Streets Beautification - Burnaby BC 2011.jpg"),
  fraserHighwayWidening:    p("Fraser Highway Widening - Surrey to Langley BC 2012.jpg"),
  pinetreeWay:              p("Pinetree Way Enhancements - Coquitlam BC 2016.png"),
  bcParkway:                p("BC Parkway Upgrade Construction - Vancouver BC 2015.jpg"),
  tenthAveHospital:         p("10th Ave Hospital Zone Phase 2 - Vancouver BC 2021.jpg"),
  // Civil
  squamishBridge:           p("Squamish Nation Pedestrian Bridge - Squamish BC 2012.jpg"),
  whistlerGateway:          p("Whistler Gateway Loop Development Phase 1 - Whistler BC 2017.jpg"),
  // Buildings & Structures
  northShoreIndoor:         p("North Shore Indoor Training Center - North Vancouver BC.jpg"),
  shawTower:                p("Shaw Tower - Vancouver BC 2008.jpg"),
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
  buildings_structures: PORTFOLIO_IMAGES.northShoreIndoor,
  civil: PORTFOLIO_IMAGES.squamishBridge,
  environmental: PORTFOLIO_IMAGES.fraserFloodProtection,
  landscape: PORTFOLIO_IMAGES.townCentreLakeLoop,
  parks: PORTFOLIO_IMAGES.yorksonCommunity,
  sportsfields: PORTFOLIO_IMAGES.harewoodCentennialPark,
  streetscapes_roads: PORTFOLIO_IMAGES.bcParkway,
  urban_spaces: PORTFOLIO_IMAGES.westminsterPier,
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
  imageUrl?: string,
): Project {
  const yearText = completionYear === "N/A" ? "" : `, listed with a ${completionYear} project year`;
  return {
    id: `proj_${slugify(title)}_${slugify(location)}`,
    title,
    category,
    categoryLabel: categoryLabels[category],
    location,
    description: `${title} is listed in Wilco Civil's portfolio for ${location}${yearText}.`,
    imageUrl: imageUrl ?? categoryImages[category],
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
  portfolioProject("Harewood Centennial Park Artificial Turf Fields Civil Works", "Nanaimo, BC", "sportsfields", "2024", true, PORTFOLIO_IMAGES.harewoodCentennialPark),
  portfolioProject("Mission Sportsfields", "Mission, BC", "sportsfields", "2007", true, PORTFOLIO_IMAGES.missionSportsfields),
  portfolioProject("Yorkson Community Park Phase 1", "Langley, BC", "parks", "2017", true, PORTFOLIO_IMAGES.yorksonCommunity),
  portfolioProject("Westminster Pier Park", "New Westminster, BC", "urban_spaces", "2012", true, PORTFOLIO_IMAGES.westminsterPier),
  portfolioProject("Town Centre Park Tournament Site", "Coquitlam, BC", "sportsfields", "2008", true, PORTFOLIO_IMAGES.townCentreTournament),
  portfolioProject("University of Guelph Athletic Field Multiplex", "Guelph, ON", "sportsfields", "2011", false, PORTFOLIO_IMAGES.universityOfGuelph),
  portfolioProject("Aberdeen Neighbourhood Park - Phase 2", "Richmond, BC", "parks", "2022", true, PORTFOLIO_IMAGES.aberdeenPark),
  portfolioProject("Town Centre Park - Lake Loop Landscape Construction", "Coquitlam, BC", "landscape", "2022", true, PORTFOLIO_IMAGES.townCentreLakeLoop),
  portfolioProject("Newton Athletic Park", "Surrey, BC", "sportsfields", "2013", false, PORTFOLIO_IMAGES.newtonAthletic),
  portfolioProject("Newton Exchange Improvements", "Surrey, BC", "streetscapes_roads", "2013", false, PORTFOLIO_IMAGES.newtonExchange),
  portfolioProject("North Shore Indoor Training Center Air Structure Foundation & Civil Work", "North Vancouver, BC", "buildings_structures", "N/A", false, PORTFOLIO_IMAGES.northShoreIndoor),
  portfolioProject("Minoru Lakes Renewal", "Richmond, BC", "environmental", "2023", false, PORTFOLIO_IMAGES.minorLakes),
  portfolioProject("Willoughby Community Park Fields", "Langley, BC", "sportsfields", "2020", false, PORTFOLIO_IMAGES.willoughbyParkFields),
  portfolioProject("SEFC Olympic Village & Waterfront", "Vancouver, BC", "urban_spaces", "2009", false, PORTFOLIO_IMAGES.sefcOlympicVillage),
  portfolioProject("Zellers Plaza", "Burnaby, BC", "urban_spaces", "2005", false, PORTFOLIO_IMAGES.zellersPlaza),
  portfolioProject("Brae Island", "Vancouver, BC", "parks", "2007", false, PORTFOLIO_IMAGES.braeIsland),
  portfolioProject("Burnaby Streets Beautification", "Burnaby, BC", "streetscapes_roads", "2011", false, PORTFOLIO_IMAGES.burnabyStreets),
  portfolioProject("UBC Thunderbird Park Sportsfield & Athletic Track Redevelopment", "Vancouver, BC", "sportsfields", "2010", false, PORTFOLIO_IMAGES.ubcThunderbird),
  portfolioProject("Whistler Gateway Loop Development Phase 1 - Civil & Landscape", "Whistler, BC", "civil", "2017", false, PORTFOLIO_IMAGES.whistlerGateway),
  portfolioProject("Notre Dame Regional Secondary School Sports Field", "Vancouver, BC", "sportsfields", "2022", false, PORTFOLIO_IMAGES.notreDame),
  portfolioProject("Willoughby Community Sports Fields", "Langley, BC", "sportsfields", "2008", false, PORTFOLIO_IMAGES.willoughbySportsFields),
  portfolioProject("Latimer Pond 15", "Langley, BC", "environmental", "2017", false, PORTFOLIO_IMAGES.latimerPond),
  portfolioProject("Pinetree Way Enhancements", "Coquitlam, BC", "streetscapes_roads", "2016", false, PORTFOLIO_IMAGES.pinetreeWay),
  portfolioProject("Clark Park East Replacement", "Vancouver, BC", "parks", "2018", false, PORTFOLIO_IMAGES.clarkParkEast),
  portfolioProject("Edmonds Community Plaza", "Burnaby, BC", "urban_spaces", "2014", false, PORTFOLIO_IMAGES.edmondsPlaza),
  portfolioProject("Granville and 70th", "Vancouver, BC", "urban_spaces", "2013", false, PORTFOLIO_IMAGES.granville70th),
  portfolioProject("Willoughby Community Park Site Improvements", "Langley, BC", "parks", "2020", false, PORTFOLIO_IMAGES.willoughbySiteImprov),
  portfolioProject("Pandora Children's Spray Park", "Vancouver, BC", "parks", "2013", false, PORTFOLIO_IMAGES.pandoraSprayPark),
  portfolioProject("North Delta Track and Field Facility and Civil Works", "Delta, BC", "sportsfields", "2021", false, PORTFOLIO_IMAGES.northDeltaTrack),
  portfolioProject("New Brighton Park Shoreline Habitat Restoration", "Vancouver, BC", "environmental", "2017", false, PORTFOLIO_IMAGES.newBrightonPark),
  portfolioProject("Olympic Oval Sport and Event Plaza Design Build", "Richmond, BC", "urban_spaces", "2023", false, PORTFOLIO_IMAGES.olympicOvalPlaza),
  portfolioProject("Lions Park Phase 1 Overland Flow Protection System", "Medicine Hat, AB", "environmental", "2016", false, PORTFOLIO_IMAGES.lionsOverlandFlow),
  portfolioProject("Alberni Secondary School Sportsfields", "Port Alberni, BC", "sportsfields", "2012", false, PORTFOLIO_IMAGES.alberni),
  portfolioProject("Minoru Sports Complex Design-Build", "Richmond, BC", "sportsfields", "2014", false, PORTFOLIO_IMAGES.minorSports),
  portfolioProject("Squamish Nation Pedestrian Bridge", "Squamish, BC", "civil", "2012", false, PORTFOLIO_IMAGES.squamishBridge),
  portfolioProject("Lynn Canyon Park Parking and Circulation Improvements", "North Vancouver, BC", "streetscapes_roads", "2020", false, PORTFOLIO_IMAGES.lynnCanyon),
  portfolioProject("Concord False Creek Pop Up", "Vancouver, BC", "urban_spaces", "N/A", false, PORTFOLIO_IMAGES.concordFalseCreek),
  portfolioProject("10th Ave Hospital Zone Phase 2", "Vancouver, BC", "streetscapes_roads", "2021", false, PORTFOLIO_IMAGES.tenthAveHospital),
  portfolioProject("Fraser Highway Widening", "Surrey to Langley, BC", "streetscapes_roads", "2012", false, PORTFOLIO_IMAGES.fraserHighwayWidening),
  portfolioProject("Mountain View Park", "Coquitlam, BC", "parks", "2018", false, PORTFOLIO_IMAGES.mountainViewPark),
  portfolioProject("Newton Town Centre Detention Pond", "Surrey, BC", "environmental", "2016", false, PORTFOLIO_IMAGES.newtonDetentionPond),
  portfolioProject("Hillcrest Park Construction and Riley Park Renovation", "Vancouver, BC", "parks", "2016", false, PORTFOLIO_IMAGES.hillcrestPark),
  portfolioProject("Centennial Beach", "Vancouver, BC", "parks", "2012", false, PORTFOLIO_IMAGES.centennialBeach),
  portfolioProject("Richmond Oval", "Richmond, BC", "urban_spaces", "N/A", false, PORTFOLIO_IMAGES.richmondOval),
  portfolioProject("Garrison Crossing Village", "Chilliwack, BC", "urban_spaces", "2009", false, PORTFOLIO_IMAGES.garrisonCrossing),
  portfolioProject("Oceanfront Squamish", "Squamish, BC", "urban_spaces", "2024", false, PORTFOLIO_IMAGES.oceanfrontSquamish),
  portfolioProject("Slocan Park Grass Sport Field Renewals", "Vancouver, BC", "sportsfields", "2020", false, PORTFOLIO_IMAGES.slocanPark),
  portfolioProject("Fraser River Flood Protection", "Surrey, BC", "environmental", "2011", false, PORTFOLIO_IMAGES.fraserFloodProtection),
  portfolioProject("Queen's University Design Build", "Kingston, ON", "sportsfields", "2011", false, PORTFOLIO_IMAGES.queensUniversity),
  portfolioProject("Surrey Bend Regional Park Phase 2", "Surrey, BC", "parks", "2016", false, PORTFOLIO_IMAGES.surreybBendPark),
  portfolioProject("Triangle Park", "Vancouver, BC", "parks", "2012", false, PORTFOLIO_IMAGES.trianglePark),
  portfolioProject("River Green Parcel 9", "Richmond, BC", "urban_spaces", "2017", false, PORTFOLIO_IMAGES.riverGreenParcel),
  portfolioProject("PRC Sports Field & Athletics Facility", "Coldstream, BC", "sportsfields", "2015", false, PORTFOLIO_IMAGES.prcSportsField),
  portfolioProject("Shaw Tower", "Vancouver, BC", "buildings_structures", "2008", false, PORTFOLIO_IMAGES.shawTower),
  portfolioProject("BC Parkway Upgrade Construction", "Vancouver, Burnaby, New Westminster, Surrey, BC", "streetscapes_roads", "2015", false, PORTFOLIO_IMAGES.bcParkway),
  portfolioProject("Evelyn Parcel Phase 1, 2 & 5", "West Vancouver, BC", "urban_spaces", "2013", false, PORTFOLIO_IMAGES.evelynParcel),
];

// Four curated projects for the homepage bento grid (distinct categories, high-quality photos)
export const FEATURED_HOME_PROJECTS = [
  "proj_yorkson_community_park_phase_1_langley_bc",
  "proj_westminster_pier_park_new_westminster_bc",
  "proj_mission_sportsfields_mission_bc",
  "proj_new_brighton_park_shoreline_habitat_restoration_vancouver_bc",
].map(id => PROJECTS.find(p => p.id === id)!);

export const DIVISIONS: Division[] = [
  {
    id: "div_civil",
    title: "Civil Construction",
    code: "GVRD - VANCOUVER ISLAND",
    description: "Wilco Civil Inc. supports Lower Mainland and Vancouver Island civil works, including site preparation, underground servicing, roadworks, drainage, grading, and public realm construction.",
    imageUrl: PORTFOLIO_IMAGES.fraserHighwayWidening,
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
    description: "The local team builds parks, sportsfields, plazas, waterfronts, trails, highrise podium landscapes, and civic landscapes across Metro Vancouver, the Fraser Valley, Sea to Sky communities, and Vancouver Island.",
    imageUrl: PORTFOLIO_IMAGES.hillcrestPark,
    services: [
      "Parks and urban spaces",
      "Sportsfields and athletic facilities",
      "Landscape construction and planting",
      "Environmental restoration and shoreline work",
      "Highrise and podium landscape construction",
      "Waterfront and marine landscape works"
    ],
    features: [
      "Public park and waterfront project experience",
      "Sportsfield and turf construction history",
      "Environmental and habitat restoration portfolio",
      "Highrise podium and mixed-use landscape delivery"
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
