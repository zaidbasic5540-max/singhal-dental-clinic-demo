/**
 * DR MEGHA GUPTA DENTIST - CENTRAL CONFIGURATION & DATA TEMPLATE
 * 
 * This file contains all business information, confirmed services, patient reviews,
 * and clinic schedules.
 * 
 * NOTE: Medical & business facts must be strictly verified before updating.
 */

const CLINIC_CONFIG = {
  // Business Metadata
  name: "Dr Megha Gupta Dentist",
  type: "Dental Clinic",
  tagline: "Gentle, Trusted Dental & Orthodontic Care in Jhansi",
  
  // Doctor Information
  doctor: {
    name: "Dr. Megha Gupta",
    qualifications: "[PLACEHOLDER — Doctor's degrees to be confirmed with clinic]",
    yearsOfExperience: "[PLACEHOLDER — Years of practice to be confirmed with clinic]",
    registrationNumber: "[PLACEHOLDER — Medical registration number to be confirmed]",
    specialties: ["Root Canal Treatment (RCT)", "Orthodontics & Braces", "Wisdom Teeth Extraction", "Dental Crowns & Capping"]
  },

  // Contact & Location Details
  contact: {
    address: "Sundar complex, and 2, opposite to MLBMC Gate number 1 Road, near kamla hospital, Bundelkhand University, Jhansi, Uttar Pradesh 284128",
    city: "Jhansi",
    state: "Uttar Pradesh",
    pincode: "284128",
    phoneDisplay: "099818 11345",
    phoneRaw: "09981811345",
    whatsapp: "09981811345",
    email: "[PLACEHOLDER — Clinic email address to be confirmed]",
    plusCode: "FJ58+C7 Jhansi, Uttar Pradesh",
    website: "https://instagram.com",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.5!2d78.58!3d25.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI2JzAwLjAiTiA3OMKwMzUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Dr+Megha+Gupta+Dentist+Sundar+complex+near+kamla+hospital+Bundelkhand+University+Jhansi+Uttar+Pradesh+284128"
  },

  // Business Reputation
  reputation: {
    googleRating: 4.9,
    reviewCount: 239,
    ratingSource: "Google Reviews",
    lgbtqFriendly: true,
    womenOwned: true
  },

  // Clinic Hours & Schedule
  hours: {
    sunday: "[CONFIRM WITH CLINIC — Weekly schedule]",
    monday: "[CONFIRM WITH CLINIC — Weekly schedule]",
    tuesday: "[CONFIRM WITH CLINIC — Weekly schedule]",
    wednesday: "[CONFIRM WITH CLINIC — Weekly schedule]",
    thursday: "[CONFIRM WITH CLINIC — Weekly schedule]",
    friday: "[CONFIRM WITH CLINIC — Weekly schedule]",
    saturday: "[CONFIRM WITH CLINIC — Weekly schedule]",
    scheduleNote: "[CONFIRM WITH CLINIC — Full weekly opening & closing schedule to be verified with clinic administration.]"
  },

  // Confirmed Services (Derived exclusively from verified patient reviews & business listing)
  services: [
    {
      id: "rct-capping",
      title: "Root Canal Treatment (RCT) & Capping",
      shortDesc: "Painless root canal procedures with effective numbing and properly fitted dental caps to save teeth and relieve pain.",
      fullDesc: "Dr. Megha Gupta provides gentle and painless root canal therapy with effective numbing, multiple patient check-ins during treatment, clear aftercare instructions, and properly fitted dental caps.",
      patientMentioned: true,
      icon: "tooth-shield"
    },
    {
      id: "orthodontics-braces",
      title: "Orthodontics & Braces Specialist Care",
      shortDesc: "Specialized orthodontic evaluations and braces treatments to align teeth and improve smile esthetics.",
      fullDesc: "Recognized by patients as a skilled braces specialist and orthodontist in Jhansi, offering expert guidance for tooth alignment and front teeth esthetic work.",
      patientMentioned: true,
      icon: "tooth-alignment"
    },
    {
      id: "tooth-extraction",
      title: "Tooth Extraction & Wisdom Teeth Care",
      shortDesc: "Smooth, painless extractions of wisdom teeth and relief from toothache using a gentle, expert approach.",
      fullDesc: "Patients highlight exceptional care, clear explanation of treatment options, and painless wisdom teeth extractions performed with expert treatment skills.",
      patientMentioned: true,
      icon: "tooth-extract"
    },
    {
      id: "checkup-consultation",
      title: "Free Dental Checkup & Consultations",
      shortDesc: "Free dental checkups, supportive advice, and gentle examination to maintain optimal oral health.",
      fullDesc: "Comprehensive oral evaluation with a gentle approach, supportive doctor consultation, and transparent explanation of all recommended procedures.",
      patientMentioned: true,
      icon: "clipboard-check"
    },
    {
      id: "esthetic-front-teeth",
      title: "Esthetic & Front Teeth Work",
      shortDesc: "Meticulous esthetic dental treatments and front teeth restoration for a natural, confident smile.",
      fullDesc: "Carefully executed esthetic dental care focusing on front teeth restoration and cosmetic alignment.",
      patientMentioned: true,
      icon: "sparkles"
    }
  ],
  servicesNote: "[CONFIRM FULL SERVICE LIST WITH CLINIC — this list reflects only what patients have described].",

  // Verified Google Patient Reviews (Exact review text & pull-quotes verbatim)
  reviews: [
    {
      id: 1,
      author: "Shivam Kushwaha",
      rating: 5,
      time: "a month ago",
      pullQuote: "Painless root canal treatment done by dr Megha Gupta Mam..cap is fitted properly..",
      text: "Come for root canal treatment of my teeth.. painless root canal treatment done by dr Megha Gupta Mam..cap is fitted properly.. highly recommended dentist & orthodontist in Jhansi as well as whole bundelkhand.",
      source: "Verified Google Review"
    },
    {
      id: 2,
      author: "Rahnuma Khan",
      rating: 5,
      time: "3 months ago",
      pullQuote: "Numbing was effective. I felt no pain during the procedure.",
      text: "I was really anxious about my root canal.but Dr megha Gupta made it easy.Numbing was effective. I felt no pain during the procedure. They checked in on me multiple times. Got clear instructions for aftercare. Healing well now. Thankyou Dr megha Gupta best dentist in jhansi highly recommend.....🥹 🙏",
      source: "Verified Google Review"
    },
    {
      id: 3,
      author: "Abhishek Yadav",
      rating: 5,
      time: "a year ago",
      pullQuote: "Extracted my wisdom teeth painlessly... best dentist & dental clinic in Jhansi.",
      text: "The dentist provided exceptional care with a gentle approach....i visited the clinic for toothache.mam extracted my wisdom teeth painlessly.I overwhelmed by her expert advice and treatment skills....best dentist & dental clinic in Jhansi.Dr Megha Gupta is very good braces specialist also..thank you mam.",
      source: "Verified Google Review"
    }
  ],

  // Photo Inventory & Site Mapping (Descriptive alt text, no photo reused > 2 times)
  images: {
    hero: {
      path: "Images/with happy customer 1.jpg",
      alt: "Dr. Megha Gupta giving a thumbs-up in a pink hoodie alongside a happy male patient seated in the dental chair"
    },
    doctorProfile: {
      path: "Images/herself.jpg",
      alt: "Dr. Megha Gupta in a white coat with stethoscope sitting next to a mint green dental chair in her clinic"
    },
    operating: {
      path: "Images/in operation.jpg",
      alt: "Dr. Megha Gupta in blue surgical attire performing a dental procedure on a patient supported by an assistant"
    },
    clinicEnv: {
      path: "Images/with happy customer 2.jpg",
      alt: "Dr. Megha Gupta in teal outfit giving a thumbs-up with a satisfied male patient showing a lab card in the clinic"
    },
    patientComfort: {
      path: "Images/with happy customer 3.jpg",
      alt: "Dr. Megha Gupta in a green patterned shirt giving a thumbs-up beside a smiling patient resting on the dental chair"
    }
  }
};

// Freeze object to prevent unintended runtime mutation
if (typeof Object.freeze === 'function') {
  Object.freeze(CLINIC_CONFIG);
}
