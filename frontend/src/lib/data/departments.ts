export const departments = {
    neurology: {
      name: "Pediatric Neurology",
      heading: "Amritsar’s Best Pediatric Neurology Experts",
      intro:
        "Pediatric neurology focuses on diagnosing and treating neurological disorders in children, including conditions affecting the brain, spinal cord, and nervous system. Our expert pediatric neurologists provide specialized care for children with neurological conditions, ensuring early intervention and the best possible outcomes.",
      services: [
        "Neuro ICU for Children – Advanced intensive care for pediatric neurological emergencies.",
        "Pediatric EEG – Monitoring brain activity to diagnose epilepsy and other neurological conditions.",
        "Nerve Conduction Studies (NCV)",
        "Visual Evoked Potential (VEP)",
        "Brainstem Evoked Response Audiometry (BERA)",
        "Sleep Study for Children",
        "Neurovascular Imaging",
      ],
      technology: [
        "Transcranial Doppler Ultrasound",
        "MRI & CT Scans",
        "CT Angiography",
        "Dedicated Pediatric Sleep Study Lab",
      ],
      conditions: [
        "Cerebral Palsy & Developmental Delays",
        "Seizures & Epilepsy",
        "Autism Spectrum Disorder (ASD)",
        "Genetic Brain Disorders",
        "Neuromuscular Disorders",
        "Pediatric Headaches",
        "Neuroinfections",
      ],
      doctor: {
        name: "Dr Ashna Kumar",
        image: "/static/images/Ashna.PNG",
      },
      image: "/static/images/1.jpg",
    },
    gynecology: {
      name: "Gynecology",
      heading: "Compassionate & Comprehensive Women’s Health",
      intro:
        "Our gynecology department offers personalized care to women of all ages, focusing on reproductive health, hormonal balance, preventive screenings, and surgical solutions. Our specialists are dedicated to empowering women through advanced diagnosis, treatment, and support.",
      services: [
        "Routine Gynecological Exams",
        "Pap Smears & HPV Testing",
        "High-Risk Pregnancy Care",
        "Infertility Evaluation & Treatment",
        "Laparoscopic & Minimally Invasive Surgeries",
        "Menopause & Hormonal Management",
        "Pelvic Pain & Endometriosis Treatment",
      ],
      technology: [
        "3D/4D Ultrasound Imaging",
        "Colposcopy & Hysteroscopy",
        "Fetal Monitoring Units",
        "Minimally Invasive Surgery Units",
      ],
      conditions: [
        "PCOS (Polycystic Ovary Syndrome)",
        "Uterine Fibroids",
        "Endometriosis",
        "Menstrual Irregularities",
        "Infertility",
        "Pelvic Floor Disorders",
        "Pregnancy Complications",
      ],
      doctor: {
        name: "Dr Manpreet Kaur",
        image: "/static/images/manpreet.JPG",
      },
      image: "/static/images/gyno.jpg",
    },
    "child-development": {
      name: "Child Development",
      heading: "Enabling Growth Through Early Intervention",
      intro:
        "Our Child Development unit provides comprehensive evaluations and interventions for children with developmental delays or behavioral issues. We focus on cognitive, emotional, social, and physical growth through personalized programs and expert collaboration.",
      services: [
        "Developmental Screenings",
        "Speech & Language Therapy",
        "Occupational & Sensory Therapy",
        "Autism Evaluation Programs",
        "Behavioral Counseling & Parent Support",
        "School Readiness Programs",
      ],
      technology: [
        "Standardized Developmental Assessment Tools",
        "Sensory Integration Equipment",
        "Interactive Learning Modules",
        "Child-Friendly Therapy Rooms",
      ],
      conditions: [
        "Speech Delays",
        "Autism Spectrum Disorders",
        "Learning Disabilities",
        "ADHD & Behavioral Disorders",
        "Developmental Coordination Disorder",
        "Feeding Difficulties",
      ],
      doctor: {
        name: "Mrs Shikha Arora", 
        image: "/static/images/sikha.PNG",
      },
      image: "/static/images/1.jpg",
    },
    "general-surgery": {
      name: "General Surgery",
      heading: "Precision, Safety & Speed in Every Procedure",
      intro:
        "Our general surgery department performs a wide range of routine and complex surgeries with a strong focus on patient safety and minimal recovery time. Using the latest techniques and technologies, our surgeons deliver excellence in both emergency and elective care.",
      services: [
        "Appendectomy & Gallbladder Surgery",
        "Hernia Repair",
        "Colorectal & GI Surgeries",
        "Emergency Trauma Surgeries",
        "Wound Management & Drainage Procedures",
        "Laparoscopic (Keyhole) Surgeries",
      ],
      technology: [
        "High-Definition Laparoscopy Units",
        "Advanced Surgical Theaters",
        "Anesthesia Monitoring Systems",
        "Sterile & Modular Operating Rooms",
      ],
      conditions: [
        "Appendicitis",
        "Hernias",
        "Gallstones",
        "Hemorrhoids & Anal Fissures",
        "Intestinal Blockage",
        "Abdominal Infections",
      ],
      doctor: {
        name: "Dr Anuj Ved Gupta",
        image: "/static/images/anug.JPG",
      },
      image: "/static/images/1.jpg",
    },
    cardiology: {
      name: "Cardiology",
      heading: "Heart Care You Can Trust",
      intro:
        "Our cardiology department is equipped with advanced diagnostic and treatment facilities for all heart-related conditions. From routine checkups to emergency interventions, our heart specialists ensure precise and compassionate care every step of the way.",
      services: [
        "Cardiac Consultations & Screenings",
        "ECG, ECHO, and TMT Testing",
        "Interventional Cardiology (Angioplasty, Stenting)",
        "Pacemaker Implantation",
        "Heart Failure Management",
        "Cardiac Rehab & Lifestyle Counseling",
      ],
      technology: [
        "Advanced Cath Lab",
        "24/7 ECG & ECHO Monitoring",
        "High-Resolution Cardiac Ultrasound",
        "Ambulatory Blood Pressure Monitoring",
      ],
      conditions: [
        "Hypertension",
        "Coronary Artery Disease",
        "Arrhythmias",
        "Heart Failure",
        "Valve Disorders",
        "Congenital Heart Disease",
      ],
      doctor: {
        name: "Dr Anuj Ved Gupta",
        image: "/static/images/anug.JPG",
      },
      image: "/static/images/cydo.jpg",
    },
  } as const;
  
  export type DepartmentSlug = keyof typeof departments;
  