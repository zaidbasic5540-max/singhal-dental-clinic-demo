/**
 * SINGHAL DENTAL CLINIC AND IMPLANT CENTRE - CENTRAL CONFIGURATION & DATA
 * 
 * This file contains all business information, confirmed services, patient reviews,
 * and clinic schedules.
 * 
 * NOTE: Medical & business facts are strictly derived from verified Google Maps business details.
 */

const CLINIC_CONFIG = {
  // Business Metadata
  name: "Singhal dental Clinic and implant centre",
  hindiName: "सिंघल क्लिनिक",
  type: "Dental Clinic",
  tagline: "Trusted Dental Implants, Root Canal & Orthodontic Care in Jhansi",
  
  // Doctor Information (Strictly per instructions: do not invent doctor name, degrees, or experience)
  doctor: {
    name: "[PLACEHOLDER — Doctor's name to be confirmed with clinic]",
    qualifications: "[PLACEHOLDER — Doctor's degrees to be confirmed with clinic]",
    yearsOfExperience: "[PLACEHOLDER — Years of practice to be confirmed with clinic]",
    registrationNumber: "[PLACEHOLDER — Medical registration number to be confirmed]",
    specialties: ["Dental Implants", "Root Canal Treatment (RCT)", "Braces Treatment & Teeth Alignment"]
  },

  // Contact & Location Details
  contact: {
    address: "inside Bada Gaon Gate, near by sahu temple, Verma Colony, Purana Sahar, Jhansi, Uttar Pradesh 284002",
    city: "Jhansi",
    state: "Uttar Pradesh",
    pincode: "284002",
    phoneDisplay: "092369 80914",
    phoneRaw: "09236980914",
    whatsapp: "09236980914",
    email: "[PLACEHOLDER — Clinic email address to be confirmed]",
    plusCode: "FH7P+7C Jhansi, Uttar Pradesh",
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Singhal+dental+Clinic+and+implant+centre+inside+Bada+Gaon+Gate+near+by+sahu+temple+Verma+Colony+Purana+Sahar+Jhansi+Uttar+Pradesh+284002"
  },

  // Business Reputation
  reputation: {
    googleRating: 4.8,
    reviewCount: 192,
    ratingSource: "Google Reviews"
  },

  // Clinic Hours & Schedule (From Google Maps listing)
  hours: {
    sunday: "10:00 AM – 12:00 PM",
    monday: "10:00 AM – 2:00 PM, 5:00 PM – 8:30 PM",
    tuesday: "10:00 AM – 2:00 PM, 5:00 PM – 8:30 PM",
    wednesday: "10:00 AM – 2:00 PM, 5:00 PM – 8:30 PM",
    thursday: "10:00 AM – 2:00 PM, 5:00 PM – 8:30 PM",
    friday: "10:00 AM – 2:00 PM, 5:00 PM – 8:30 PM",
    saturday: "10:00 AM – 2:00 PM, 5:00 PM – 8:30 PM",
    scheduleNote: "Sunday: 10:00 AM – 12:00 PM | Monday to Saturday: 10:00 AM – 2:00 PM & 5:00 PM – 8:30 PM"
  },

  // Confirmed Services (Derived exclusively from verified patient reviews & business listing)
  services: [
    {
      id: "dental-implants",
      title: "Dental Implants & Implant Centre",
      shortDesc: "Specialized dental implant procedures to restore tooth function and smile aesthetics in a modern implant centre.",
      fullDesc: "Singhal Dental Clinic & Implant Centre offers specialized dental implant care to replace missing teeth and provide long-lasting structural dental restoration.",
      patientMentioned: true,
      icon: "tooth-shield"
    },
    {
      id: "rct-treatment",
      title: "Root Canal Treatment (RCT)",
      shortDesc: "Smooth, painless root canal procedures with clear dentist explanations and efficient completion.",
      fullDesc: "Patients appreciate fast and smooth RCT procedures completed within a few days with clear explanations and gentle care from the dentist.",
      patientMentioned: true,
      icon: "tooth-extract"
    },
    {
      id: "braces-alignment",
      title: "Braces Treatment & Teeth Alignment",
      shortDesc: "Orthodontic evaluations, braces treatments, and teeth alignment to correct tooth alignment and enhance smiles.",
      fullDesc: "Expert orthodontic care for braces treatment and teeth alignment, highlighted by patients seeking aesthetic and functional dental alignment.",
      patientMentioned: true,
      icon: "tooth-alignment"
    },
    {
      id: "dental-consultation",
      title: "General Dental Consultation & Examination",
      shortDesc: "Comprehensive oral examinations and dental care provided by experienced doctors and supportive clinic staff.",
      fullDesc: "Professional consultation in a spacious clinic environment with cooperative doctors and supportive medical staff.",
      patientMentioned: true,
      icon: "clipboard-check"
    }
  ],
  servicesNote: "[This list reflects only what patients have described]",

  // Verified Google Patient Reviews (Exact review text & pull-quotes verbatim)
  reviews: [
    {
      id: 1,
      author: "Rohit Kushwaha",
      rating: 5,
      time: "3 months ago",
      pullQuote: "The treatment was smooth and the dentist explained everything clearly.",
      text: "Very happy with the experience. My RCT was completed within a few days as I was going out of town, which I really appreciated. The treatment was smooth and the dentist explained everything clearly.",
      source: "Verified Google Review"
    }
  ],

  // Photo Inventory & Site Mapping (Descriptive alt text, no photo reused > 2 times)
  images: {
    hero: {
      path: "Images/sitting area.jpg",
      alt: "Singhal Dental Clinic reception and patient waiting lounge with grey leather seating, wall TV, and AC"
    },
    reception: {
      path: "Images/sitting area.jpg",
      alt: "Patient waiting room and lounge area at Singhal Dental Clinic and Implant Centre"
    },
    treatmentRoom1: {
      path: "Images/setup 1.jpg",
      alt: "Modern green dental chair and operatory light setup at Singhal Dental Clinic"
    },
    treatmentRoom2: {
      path: "Images/setup 2.jpg",
      alt: "Dental treatment station with black dental chair, consultation desk, and treatment posters"
    },
    sterilizationLab: {
      path: "Images/setup 3.jpg",
      alt: "Sterilization and procedure room with blue cabinetry and blue dental chair"
    },
    mainHall: {
      path: "Images/setup 4.jpg",
      alt: "Spacious multi-chair dental operatory hall at Singhal Dental Clinic"
    },
    doctorDesk: {
      path: "Images/office.jpg",
      alt: "Doctor consultation desk and office area with X-ray scanner and sink"
    }
  }
};

// Freeze object to prevent unintended runtime mutation
if (typeof Object.freeze === 'function') {
  Object.freeze(CLINIC_CONFIG);
}
