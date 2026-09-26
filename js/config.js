/**
 * DR SIDDHARTHA'S DENTAL CARE - CENTRAL CONFIGURATION & DATA TEMPLATE
 * 
 * This file contains all business information, confirmed services, patient reviews,
 * and clinic schedules. When reusing this codebase as a template for another dental clinic,
 * simply update the structured configuration values below.
 * 
 * NOTE: Medical & business facts must be strictly verified before updating.
 */

const CLINIC_CONFIG = {
  // Business Metadata
  name: "Dr Siddhartha's Dental Care",
  type: "Dental Clinic",
  tagline: "Gentle, Trusted Dental Care in Jhansi",
  
  // Doctor Information
  doctor: {
    name: "Dr. Siddhartha",
    qualifications: "[PLACEHOLDER — Doctor's degrees to be confirmed with clinic]",
    yearsOfExperience: "[PLACEHOLDER — Years of practice to be confirmed with clinic]",
    registrationNumber: "[PLACEHOLDER — Medical registration number to be confirmed]",
    specialties: ["Root Canal Treatment (RCT)", "Re-RCT", "Wisdom Tooth Extraction", "Dental Crowns & Capping"]
  },

  // Contact & Location Details
  contact: {
    address: "Abott market road, Orchha Gate Bahar, near Badi Kalimai Mata Mandir, Sant Kabeer Public School, Khushipura, Jhansi, Uttar Pradesh 284002",
    city: "Jhansi",
    state: "Uttar Pradesh",
    pincode: "284002",
    phoneDisplay: "099680 93949",
    phoneRaw: "09968093949",
    whatsapp: "09968093949", // Clean numeric format for tel/whatsapp links
    email: "[PLACEHOLDER — Clinic email address to be confirmed]",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8396262963384!2d78.5702!3d25.4484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI2JzU0LjIiTiA3OMKwMzQnMTIuNyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Dr+Siddhartha's+Dental+Care+Abott+market+road+Jhansi+Uttar+Pradesh+284002"
  },

  // Business Reputation
  reputation: {
    googleRating: 5.0,
    reviewCount: 414,
    ratingSource: "Google Reviews",
    wheelchairAccessible: true
  },

  // Clinic Hours & Schedule
  hours: {
    sunday: "Opens 10:00 AM – Closes ~8:00 PM",
    monday: "[CONFIRM WITH CLINIC — Weekly schedule]",
    tuesday: "[CONFIRM WITH CLINIC — Weekly schedule]",
    wednesday: "[CONFIRM WITH CLINIC — Weekly schedule]",
    thursday: "[CONFIRM WITH CLINIC — Weekly schedule]",
    friday: "[CONFIRM WITH CLINIC — Weekly schedule]",
    saturday: "[CONFIRM WITH CLINIC — Weekly schedule]",
    scheduleNote: "[CONFIRM WITH CLINIC — Full weekly opening & closing schedule to be verified with clinic administration.]"
  },

  // Confirmed Services (Derived exclusively from verified patient reviews)
  services: [
    {
      id: "rct-re-rct",
      title: "Root Canal Treatment (RCT) & Re-RCT",
      shortDesc: "Painless, precise root canal procedures and re-treatments designed to save damaged teeth and restore comfort.",
      fullDesc: "Dr. Siddhartha provides gentle, highly detailed root canal therapy and complex re-RCT procedures. Patients consistently highlight a calm, comfortable atmosphere with zero discomfort during treatment.",
      patientMentioned: true,
      icon: "tooth-shield"
    },
    {
      id: "tooth-extraction",
      title: "Tooth Extraction & Wisdom Tooth Care",
      shortDesc: "Safe, smooth tooth extractions including complex wisdom tooth procedures performed with patient ease in mind.",
      fullDesc: "Handled with extreme care, clear pre-procedure explanations, and zero negligence. Patients report smooth recoveries even for complex wisdom tooth removals.",
      patientMentioned: true,
      icon: "tooth-extract"
    },
    {
      id: "crowns-capping",
      title: "Dental Crowns & Tooth Capping",
      shortDesc: "Custom dental capping and crown restorations designed for natural appearance, exact fit, and long-lasting durability.",
      fullDesc: "High-precision capping services following root canal or structural tooth repair. Patients note exceptional attention to detail and comfortable fit.",
      patientMentioned: true,
      icon: "crown"
    },
    {
      id: "consultation-hygiene",
      title: "General Consultations & Oral Hygiene Care",
      shortDesc: "Comprehensive oral health checkups, transparent problem explanations, and personalized cleaning and flossing guidance.",
      fullDesc: "Dr. Siddhartha takes the time to thoroughly explain dental issues and discuss all potential treatment options before any work begins, alongside practical briefing on oral hygiene habits.",
      patientMentioned: true,
      icon: "clipboard-check"
    }
  ],

  // Verified Google Patient Reviews (Exact review text & pull-quotes)
  reviews: [
    {
      id: 1,
      rating: 5,
      pullQuote: "Completely painless, zero negligence",
      text: "I had two procedures done at this clinic - wisdom tooth extraction and re-RCT for one tooth. I was extremely anxious about both but Dr. Siddharth made me feel calm and comfortable throughout the entire process. Both procedures were completely painless and his professionalism, transparency and attention to detail were truly impressive. He handled everything with great care and zero negligence. Highly recommended to anyone looking for quality dental treatment.",
      source: "Verified Google Review"
    },
    {
      id: 2,
      rating: 5,
      pullQuote: "Well equipped with the latest technology",
      text: "He is very professional to his work, extremely soft spoken. Clinic is very well equipped with all latest technology. His understanding is very clear and suggests best suitable solution to his patients.",
      source: "Verified Google Review"
    },
    {
      id: 3,
      rating: 5,
      pullQuote: "You are in safe hands",
      text: "Best dental clinic in jhansi. The doctor is a perfectionist in his field, highly qualified and professional and the same time compassionate. He always insures that a procedure is done exactly right. Highly recommended to anyone who has a trouble with his mouth. You are in safe hands. Best part is that the environment of the clinic is not only hygienic but also cordial and friendly.",
      source: "Verified Google Review"
    },
    {
      id: 4,
      rating: 5,
      pullQuote: "No discomfort during the entire procedure",
      text: "He is an extremely soft spoken, super polite and friendly doctor. The overall experience has been extremely pleasant, and I am certain that you are in good hands for all of your dental care requirements. I needed either a root canal or tooth extracted. Before beginning treatment, Dr. Siddharth discussed my dental issue to me, including all potential solutions. I experienced no discomfort or pain during the entire procedure of RCT and capping. He also briefed me on proper tooth cleaning and flossing methods.",
      source: "Verified Google Review"
    }
  ],

  // Photo Inventory & Site Mapping
  images: {
    hero: {
      path: "Images/with customer 1.jpg",
      alt: "Dr. Siddhartha smiling at his consultation desk with a satisfied patient giving a thumbs-up on the dental chair"
    },
    clinicRoom: {
      path: "Images/setup 1.jpg",
      alt: "Clean, modern treatment room at Dr Siddhartha's Dental Care featuring blue dental chair and consultation desk"
    },
    operating: {
      path: "Images/with customer 2, operating.jpg",
      alt: "Dr. Siddhartha performing dental care procedure on a patient under surgical light"
    },
    doctorPatient: {
      path: "Images/with customer 3 happy customer.jpg",
      alt: "Dr. Siddhartha in surgical mask beside a smiling patient resting comfortably after treatment"
    },
    scalingTransform: {
      path: "Images/teeth transformation 1.jpg",
      alt: "Clinical before and after photograph of teeth cleaning and dental scaling transformation"
    },
    cappingTransform: {
      path: "Images/teeth transformation 2.jpg",
      alt: "Clinical before and after photograph showing front tooth gap capping and restoration"
    }
  }
};

// Freeze object to prevent unintended runtime mutation
if (typeof Object.freeze === 'function') {
  Object.freeze(CLINIC_CONFIG);
}
