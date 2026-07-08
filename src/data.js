// LorVen Systems - Complete Web Database Source of Truth
// Verbatim mapping from website-content-master.md

export const PRODUCTS = [
  {
    slug: 'rdpms',
    divisionSlug: 'snt',
    divisionTitle: 'Signalling & Telecom',
    category: 'SIGNALLING & TELECOM',
    heroTitle: 'RDPMS',
    heroDescription: 'Remote Diagnostic & Predictive Maintenance System for wayside track and signalling asset health monitoring.',
    introduction: 'Continuous predictive monitoring of safety-critical wayside assets.',
    paragraphs: [
      "The Remote Diagnostic & Predictive Maintenance System (RDPMS) is an IoT-based telemetry platform designed to monitor the operational health of railway signaling gears. The wayside remote terminal unit (RTU) intercepts analog current signatures, voltage thresholds, and contact resistance levels without interfering with vital interlocking logic circuits.",
      "Data is collected at 100Hz sampling rates and transmitted over redundant dual-SIM LTE cellular routes to a centralized monitoring server. By comparing live telemetry against historical baseline curves, the system flags mechanical wear, degradation, and electrical anomalies weeks before a wayside asset failure occurs."
    ],
    features: [
      { title: "100Hz Signal Sampling", desc: "Captures high-resolution electrical waveforms from point machine motors to detect friction increases and slide degradation." },
      { title: "Galvanic Isolation", desc: "Sensing input channels are opto-isolated up to 2.5kV to prevent wayside surge propagation and guarantee no logical interference with interlocking circuits." },
      { title: "Insulation Leakage Tracking", desc: "Monitors insulation resistance to ground on signaling cables, warning of degradation before short circuits shut down the line section." },
      { title: "Redundant Telemetry", desc: "Equipped with dual-SIM LTE routing that falls back to GSM-R or GPRS protocols if primary network connectivity is lost." },
      { title: "Edge Logging Core", desc: "Internal flash storage preserves up to 1 million diagnostic events locally to prevent data loss during network dropouts." },
      { title: "Environmental Supervision", desc: "Supervises wayside cabin ambient parameters including temperature, humidity, and door status for physical security." }
    ],
    specs: [
      { name: "Analog Inputs", value: "16 opto-isolated channels, 12-bit analog-to-digital resolution" },
      { name: "Digital Inputs", value: "32 opto-isolated channels, event tracking resolution < 10ms" },
      { name: "Sampling Frequency", value: "100 samples/second per analog channel simultaneously" },
      { name: "Operating Voltage", value: "24V DC / 110V AC wayside supply options" },
      { name: "Communication Port", value: "Dual redundant SIM card slots, 4G LTE with GPRS fallback" },
      { name: "Standards Compliance", value: "EN 50155 (electronic equipment on rolling stock), SIL-2 assessed" },
      { name: "Enclosure Sealing", value: "IP65 dust-tight and water-resistant lockable steel wall cabinet" }
    ],
    downloads: [
      { name: "RDPMS Technical Datasheet", size: "1.8 MB", type: "Datasheet", url: "#" },
      { name: "RDPMS Installation & Operations Manual", size: "4.2 MB", type: "Manual", url: "#" },
      { name: "Wayside Deployment Reference Guide", size: "2.4 MB", type: "Brochure", url: "#" }
    ],
    images: {
      hero: "snt-hero-real.jpg",
      overview: "pcb-macro.jpg"
    },
    seo: {
      title: "RDPMS — Remote Diagnostic System — LorVen Systems",
      description: "Proactive remote diagnostic and predictive maintenance for railway infrastructure."
    }
  },
  {
    slug: 'ifd',
    divisionSlug: 'snt',
    divisionTitle: 'Signalling & Telecom',
    category: 'SIGNALLING & TELECOM',
    heroTitle: 'IFD',
    heroDescription: 'Online Insulation Failure Detector system for continuous real-time monitoring of wayside signaling circuit insulation resistance.',
    introduction: 'Automated insulation resistance logging for safety-critical railway cables.',
    paragraphs: [
      "The Insulation Failure Detector (IFD) is an online monitoring system designed to supervise the insulation resistance (IR) of signaling cables and point machine conductors relative to earth. Cable insulation decay due to moisture ingress or mechanical wear is a primary cause of ground faults and unsafe signal state changes.",
      "The system injects a non-disruptive, low-voltage diagnostic signal into the lines under load, measuring insulation levels from 10kΩ to 10MΩ without interfering with active signaling commands. Degradation alerts are immediately logged, enabling proactive maintenance before ground faults occur."
    ],
    features: [
      { title: "Sequential Scanning Core", desc: "Sequentially scans up to 96 signaling circuits to supervise conductor insulation values from a single terminal unit." },
      { title: "Live Circuit Verification", desc: "Conducts insulation measurements under live operating conditions without disrupting safety-critical signaling commands." },
      { title: "Opto-Isolated Measurement", desc: "Measurement channels are galvanically isolated up to 2.5kV to protect signal lines from high-voltage surges." },
      { title: "RS-485 Modbus Telemetry", desc: "Transmits real-time measurements and alarm triggers to station loggers via RS-485 Modbus or Ethernet channels." },
      { title: "Local Status Control Panel", desc: "Onboard console permits channel configuration, threshold adjustments, and real-time resistance lookups." },
      { title: "Conductor Current Logging", desc: "Archives historical leakage current trends to trace conductor insulation decay curves over months." }
    ],
    specs: [
      { name: "Measurement Range", value: "10 kΩ to 10 MΩ with ±5% measurement accuracy" },
      { name: "Channel Capacity", value: "Up to 96 independent measurement channels per unit" },
      { name: "Test Signal Voltage", value: "< 24V DC test signal to avoid circuit interference" },
      { name: "Operating Supply", value: "110V AC or 24V DC station power options" },
      { name: "Telemetry Port", value: "RS-485 Modbus RTU / Ethernet interfaces" },
      { name: "Standards Compliance", value: "RDSO/SPN/212/2012 specification compliant" },
      { name: "Enclosure Class", value: "IP50 steel rack-mount chassis for indoor cabins" }
    ],
    downloads: [
      { name: "IFD System Technical Specs", size: "1.5 MB", type: "Datasheet", url: "#" },
      { name: "IFD Cab Cabin Installation Guide", size: "3.4 MB", type: "Manual", url: "#" },
      { name: "RDSO Approval Certification", size: "1.1 MB", type: "Brochure", url: "#" }
    ],
    images: {
      hero: "snt-hero-real.jpg",
      overview: "pcb-macro.jpg"
    },
    seo: {
      title: "Online IFD — Insulation Failure Detector — LorVen Systems",
      description: "Online insulation failure detector for continuous monitoring of railway cables."
    }
  },
  {
    slug: 'ips',
    divisionSlug: 'snt',
    divisionTitle: 'Signalling & Telecom',
    category: 'SIGNALLING & TELECOM',
    heroTitle: 'IPS',
    heroDescription: 'Fail-safe integrated power supply system delivering stabilized, redundant DC and AC rails to wayside signaling gear.',
    introduction: 'Centralized power consolidation for vital railway interlocking.',
    paragraphs: [
      "The Integrated Power Supply (IPS) system integrates switch-mode rectifiers, DC-to-DC converters, inverter panels, and diagnostic supervision circuitry into a single standardized switchboard enclosure. Engineered for safety-critical installations, it supplies pure DC and sine-wave AC power to vital relay interlocking racks, station telecom terminals, and wayside signal aspects.",
      "The modular chassis supports hot-swappable sub-modules, enabling depot maintenance and component swaps under load in less than three minutes. Natural convection cooling eliminates active fans, preventing air filter clogging and ensuring reliability in high-temperature wayside cabins."
    ],
    features: [
      { title: "Hot-Swappable Chassis", desc: "Rectifiers and converters can be replaced under live load conditions in under three minutes without dropping output rails." },
      { title: "Class D Surge Arrestors", desc: "Heavy-duty transient suppression networks isolate downstream signaling cards from wayside lightning surges." },
      { title: "Low Output Ripple", desc: "Regulated DC output rails filter high-frequency noise to prevent logic state errors in interlocking cards." },
      { title: "Natural Air Circulation", desc: "Designed to operate at 55°C ambient temperature without active fan cooling, eliminating mechanical wear points." },
      { title: "Continuous Supervision", desc: "Microprocessor-based monitor tracks battery health, charging currents, and panel status, transmitting alarm flags via RS-485." },
      { title: "Redundant Rectification", desc: "Features N+1 parallel redundant switch-mode rectifier arrays to prevent single-point failures." }
    ],
    specs: [
      { name: "Input Parameters", value: "230V AC ± 20%, 50Hz single-phase grid input" },
      { name: "DC Output Voltages", value: "110V DC, 24V DC, 12V DC regulated outputs" },
      { name: "AC Output Voltages", value: "110V AC sine wave inverter output, total harmonic distortion < 3%" },
      { name: "System Efficiency", value: "> 92% at nominal input and full system rating" },
      { name: "Operating Temperature", value: "-10°C to +55°C continuous ambient operating range" },
      { name: "Standards Compliance", value: "RDSO SPN/186/2016 specification compliant" },
      { name: "Enclosure Sealing", value: "IP54 steel dust-resistant floor cabinet with heavy copper busbars" }
    ],
    downloads: [
      { name: "IPS System Datasheet", size: "2.1 MB", type: "Datasheet", url: "#" },
      { name: "IPS Operational & Maintenance Manual", size: "5.6 MB", type: "Manual", url: "#" },
      { name: "RDSO Approval Certification", size: "1.2 MB", type: "Brochure", url: "#" }
    ],
    images: {
      hero: "electrical-cabinet.jpg",
      overview: "smt-line.jpg"
    },
    seo: {
      title: "IPS — Integrated Power Supply — LorVen Systems",
      description: "Stabilized, redundant power supply system for railway signalling."
    }
  },
  {
    slug: 'simulators',
    divisionSlug: 'electric-locomotive',
    divisionTitle: 'Electric Locomotive',
    category: 'ELECTRIC LOCOMOTIVE',
    heroTitle: 'Driving Simulators',
    heroDescription: 'High-fidelity locomotive cab simulation system for pilot training, fault mitigation drills, and safety recertification.',
    introduction: 'Full-scale cab replication for advanced pilot recertification.',
    paragraphs: [
      "The Driving Simulator provides traction crews with an immersive training environment replicating WAP-class and WAG-class electric locomotive cabins. Utilizing genuine OEM-grade controls, switchgear, and air brake handles, it builds muscle memory and tests operator response profiles during simulated route hazards and mechanical faults.",
      "The visual system projects a seamless 200-degree field of view rendered at 60Hz. It is synchronized with an electric motion platform that translates acceleration forces, track joints, and braking vibrations directly to the pilot seat."
    ],
    features: [
      { title: "OEM Control Integration", desc: "Integrates authentic throttle wheels, pneumatic brake valves, and indicators matching actual cab layouts." },
      { title: "Electric Motion Base", desc: "Optional 3-DOF or 6-DOF dynamic motion platform simulates acceleration, curve transition, and joint impact." },
      { title: "Scenario Control Suite", desc: "Instructor terminal permits real-time injection of over 100 mechanical, electrical, and signaling failure states." },
      { title: "High-Fidelity Audio", desc: "5.1 surround sound array reproduces traction motor hums, wheel flange squeals, and air compressor cycles." },
      { title: "Geographical Routes", desc: "3D route database containing precise grade profiles, station signals, and trackside features." },
      { title: "DIS/HLA Compliance", desc: "Supports standard distributed simulation networks to link multiple pilot and dispatcher training cabins." }
    ],
    specs: [
      { name: "Visual System", value: "3-channel 60Hz projection array or flat panel LED wall, 200° FOV" },
      { name: "Motion System", value: "Electric actuator platform, latency < 20ms, travel limits tailored to cab class" },
      { name: "Audio Output", value: "Digital surround array simulating localized cab and track audio" },
      { name: "Instructor Interface", value: "Dual monitors tracking driver controls, path coordinates, and event logs" },
      { name: "Standards Compliance", value: "DIS / HLA network architecture ready, EN 50155 control electronics" },
      { name: "Power Requirements", value: "415V AC, 3-phase, 50Hz, isolated grounding terminals" },
      { name: "Cab Type", value: "Full-scale replica matching WAP-7 / WAG-9 electric locomotives" }
    ],
    downloads: [
      { name: "Driving Simulator System Datasheet", size: "3.4 MB", type: "Datasheet", url: "#" },
      { name: "Instructor Operator Interface Guide", size: "4.8 MB", type: "Manual", url: "#" },
      { name: "Zonal Sim Training Deployments", size: "1.9 MB", type: "Brochure", url: "#" }
    ],
    images: {
      hero: "simulator.jpg",
      overview: "hero-locomotive.jpg"
    },
    seo: {
      title: "Driving Simulators — LorVen Systems",
      description: "Full-cab driver-training simulators for electric locomotives."
    }
  },
  {
    slug: 'ift',
    divisionSlug: 'electric-locomotive',
    divisionTitle: 'Electric Locomotive',
    category: 'ELECTRIC LOCOMOTIVE',
    heroTitle: 'IFT',
    heroDescription: 'Integrated Functional Tester for automated diagnostic verification of locomotive electronic sub-assemblies.',
    introduction: 'Consolidated diagnostic test racks for locomotive overhaul yards.',
    paragraphs: [
      "The Integrated Functional Tester (IFT) consolidated electronic testing rig replaces multiple bench instruments with a single automated diagnostic workstation. Built to qualify locomotive traction control cards, vehicle control units (VCU), and driver display modules during scheduled overhauls and manufacturing runs.",
      "The system runs automated testing scripts that exercise all input/output channels, communication buses, and power supplies. A full pass/fail record is automatically generated and archived against the component's unique serial number."
    ],
    features: [
      { title: "Stimulus Array", desc: "Built-in signal generators output CAN, RS-485, MVB, and PWM waveforms alongside adjustable AC/DC power rails." },
      { title: "Short-Circuit Protection", desc: "Over-current and reverse-polarity protection circuits prevent test-rig damage if under-test cards short out." },
      { title: "Scripted Test Sequencer", desc: "Software environment runs predefined validation scripts, locking test sequences to ensure process repeatability." },
      { title: "Pass/Fail Database", desc: "Stores diagnostic measurements, parameters, and output states, exporting logs directly to network databases." },
      { title: "Interface Adapters", desc: "Supports modular connector interfaces, enabling fast changeovers between different locomotive PCB families." },
      { title: "Traceable Standards", desc: "Internal reference voltage and resistance standards are calibratable and traceable to national laboratories." }
    ],
    specs: [
      { name: "Digital I/O Channels", value: "128 independent channels, software configurable thresholds" },
      { name: "Analog I/O Channels", value: "32 independent measurement and source channels, 16-bit ADC/DAC" },
      { name: "Buses Supported", value: "CAN 2.0B, Multifunction Vehicle Bus (MVB), RS-485, RS-232, SPI" },
      { name: "Power Output", value: "0–110V DC programmable supply lines, up to 10A current limit" },
      { name: "Calibration System", value: "Built-in automated self-calibration loop with traceable reference standard" },
      { name: "Standards Compliance", value: "IEC 60571 (railway electronic equipment), CE marked" },
      { name: "Form Factor", value: "Standard 19-inch ruggedized rack cabinet with cooling fans and locking wheels" }
    ],
    downloads: [
      { name: "IFT System Technical Specs", size: "2.5 MB", type: "Datasheet", url: "#" },
      { name: "IFT Script Development Manual", size: "3.9 MB", type: "Manual", url: "#" },
      { name: "Loco Depot Case Study Notes", size: "1.7 MB", type: "Brochure", url: "#" }
    ],
    images: {
      hero: "loco-hero-real.jpg",
      overview: "engineers.jpg"
    },
    seo: {
      title: "Integrated Functional Tester (IFT) — LorVen Systems",
      description: "Diagnostic testers for locomotive control units."
    }
  },
  {
    slug: 'wli',
    divisionSlug: 'wagons',
    divisionTitle: 'Coaches & Wagons',
    category: 'COACHES & WAGONS',
    heroTitle: 'WLI',
    heroDescription: 'Onboard Wagon Load Indicator system for real-time axle weight monitoring and payload cargo diagnostics.',
    introduction: 'Continuous onboard axle load telemetry and cargo balance tracking.',
    paragraphs: [
      "The Wagon Load Indicator (WLI) is an onboard payload measurement system that utilizes bogie-mounted strain sensors. Engineered for heavy haul freight wagons, it monitors cargo weight and balance distribution in real time, preventing overloading damage and cargo imbalance derailments.",
      "The system broadcasts loading data using sub-1GHz wireless links, sending cargo weights directly to yard screens and locomotive cabs without connecting cables between wagon frames. High-visibility external LED displays show cargo level status during bulk loading runs."
    ],
    features: [
      { title: "Bogie-Mounted Sensors", desc: "Heavy-duty strain sensors are welded or clamped directly to critical bogie support members for direct load path capture." },
      { title: "Wireless Telemetry Hub", desc: "Sub-1GHz wireless RF transmitter links cargo weight telemetry directly to loading yard display terminals." },
      { title: "External LED Indicators", desc: "IP66 side-mounted display show status parameters directly on the wagon wall during bulk silo loading." },
      { title: "Hermetic Steel Seals", desc: "Sensing hardware is housed in laser-welded stainless steel cases to survive gravel strikes and water washdowns." },
      { title: "Low-Power Processor", desc: "Smart power-management core keeps sensors in sleep mode, waking up only when cargo weight shift or motion is registered." },
      { title: "Grade Compensation", desc: "Internal inclinometers measure vehicle angle to dynamically compensate payload figures for track grade." }
    ],
    specs: [
      { name: "Weight Accuracy", value: "±0.5% of total wagon cargo load capacity" },
      { name: "Sensing Array", value: "4 calibrated strain-gauge sensors per bogie assembly" },
      { name: "Wireless Protocol", value: "Sub-1GHz proprietary RF link, transmission range up to 150m" },
      { name: "Battery Life", value: "Up to 5 years typical operating life under standard sleep cycles" },
      { name: "Operating Temperature", value: "-20°C to +70°C ambient operating range" },
      { name: "Standards Compliance", value: "AAR cargo loading rules, EN 50155 rolling stock electronics" },
      { name: "Enclosure Sealing", value: "IP68 hermetic rating for bogie sensors, IP66 for side display box" }
    ],
    downloads: [
      { name: "WLI Onboard System Specs", size: "1.6 MB", type: "Datasheet", url: "#" },
      { name: "WLI Bogie Installation Guide", size: "3.2 MB", type: "Manual", url: "#" },
      { name: "WLI Cargo Yard Integration Info", size: "1.4 MB", type: "Brochure", url: "#" }
    ],
    images: {
      hero: "wagons-hero.jpg",
      overview: "wagons-hero-real.jpg"
    },
    seo: {
      title: "WLI — Wagon Load Indicator — LorVen Systems",
      description: "Axle load indicator system for freight wagons."
    }
  },
  {
    slug: 'ahabd',
    divisionSlug: 'wagons',
    divisionTitle: 'Coaches & Wagons',
    category: 'COACHES & WAGONS',
    heroTitle: 'AHABD',
    heroDescription: 'Wayside Acoustic Hot Axle Box Detector system identifying bearing defects and micro-fractures in passing trains.',
    introduction: 'Wayside acoustic diagnostics for bearing defect mitigation.',
    paragraphs: [
      "The Acoustic Hot Axle Box Detector (AHABD) is a wayside safety array that listens to the acoustic signatures of passing train bearings at speed. By utilizing Spatial Filtering and Directional Microphones, it isolates axle sounds to flag micro-fractures, inner race defects, and lubrication spalls weeks before thermal detectors trigger alarms.",
      "Trackside sensor arrays process bearing noises at speeds up to 120 km/h. Edge processing circuits match acoustic spectral signatures to defect templates, alerting dispatch centers of critical axle numbers requiring routing changes."
    ],
    features: [
      { title: "Directional Phased Array", desc: "Calibrated acoustic array isolates bearing noises from track roar and rolling wheels." },
      { title: "Acoustic Signature Match", desc: "DSP spectral analysis compares bearing noises against standard bearing frequency defect logs." },
      { title: "Automatic Axle Track", desc: "Wheel detectors index passing wheels to correlate bearing acoustic profiles with the exact axle." },
      { title: "All-Weather Housing", desc: "Stainless steel wayside enclosure protects directional sensors from wind, dust, and water ingress." },
      { title: "Remote Telemetry Core", desc: "Transmits alarm alerts and diagnostic logs directly to depot diagnostic networks via cellular links." },
      { title: "Wayside Solar Mode", desc: "Low operating current requirement permits remote trackside installation powered by simple solar panel arrays." }
    ],
    specs: [
      { name: "Microphone Array", value: "8 directional calibrated microphones, linear frequency response" },
      { name: "Frequency Range", value: "10 Hz to 20 kHz linear response profile" },
      { name: "Train Speed Limit", value: "5 km/h to 120 km/h operational detection speed" },
      { name: "Detection Accuracy", value: "> 99.9% correlation between defect log and axle index" },
      { name: "Operating Temperature", value: "-20°C to +60°C trackside ambient" },
      { name: "Power Requirements", value: "12V DC battery buffer system with wayside solar array" },
      { name: "Enclosure Sealing", value: "IP67 stainless steel acoustic sensor enclosures, IP65 RTU cabinet" }
    ],
    downloads: [
      { name: "AHABD Wayside Array Specs", size: "2.8 MB", type: "Datasheet", url: "#" },
      { name: "AHABD Trackside Installation Guide", size: "4.1 MB", type: "Manual", url: "#" },
      { name: "AHABD Acoustic DSP Analysis Note", size: "1.5 MB", type: "Brochure", url: "#" }
    ],
    images: {
      hero: "coach-build.jpg",
      overview: "wagons-hero-real.jpg"
    },
    seo: {
      title: "AHABD — Acoustic Hot Axle Box Detector — LorVen Systems",
      description: "Wayside acoustic detector for identifying train bearing defects."
    }
  }
];

export const CATEGORIES = [
  {
    slug: 'snt',
    title: 'Signalling & Telecom',
    description: 'Fail-safe wayside monitoring and integrated power configurations designed for critical interlocking loops.',
    heroImage: 'snt-hero-real.jpg',
    overviewImage: 'pcb-macro.jpg',
    products: ['rdpms', 'ifd', 'ips']
  },
  {
    slug: 'electric-locomotive',
    title: 'Electric Locomotive',
    description: 'High-fidelity driving simulation rigs, test consoles, and robust auxiliary traction cabinetry.',
    heroImage: 'depot.jpg',
    overviewImage: 'electrical-cabinet.jpg',
    products: ['simulators', 'ift']
  },
  {
    slug: 'wagons',
    title: 'Coaches & Wagons',
    description: 'Axle load sensors, telemetry hubs, and wayside acoustic bearing inspectors to prevent mainline failures.',
    heroImage: 'snt-hero.jpg',
    overviewImage: 'depot.jpg',
    products: ['wli', 'ahabd']
  }
];

export const SERVICES = [
  {
    slug: 'design',
    category: 'ENGINEERING SERVICES',
    title: 'Engineering Design',
    description: 'Specialized engineering design for custom circuit configurations, cabinet integration, wiring harnesses, and enclosure systems complying with global railway standards.',
    overviewTitle: 'From functional schematics to ready-to-manufacture integration designs.',
    paragraphs: [
      "Our design division converts custom railway telemetry requirements into robust mechanical and electrical designs. We configure layouts, wiring topologies, and cabinet enclosures to survive the extreme vibration, thermal cycles, and electromagnetic conditions of railway operations.",
      "Utilizing modern CAD tools and thermal simulators, we ensure that power distribution cabinets, interlocking cabins, and locomotive assemblies adhere strictly to EN50155, RDSO, and IPC-A-610 Class 3 standards for long service lives."
    ],
    features: [
      { title: "Electrical CAD Schematics", desc: "Complete circuit diagram generation for power supplies, relays, and diagnostic sensor interfaces." },
      { title: "3D Cabinet Modeling", desc: "Precision mechanical design of IP-rated metal cabinets tailored to station rack footprints or onboard cabins." },
      { title: "Wiring Topology Pre-Kitting", desc: "Layout planning and connector assignment schemes to simplify wire routing and avoid manual onsite errors." },
      { title: "Thermal & Vibration Simulation", desc: "Finite element analysis under extreme loads to verify cabinet structural integrity and heat dissipation profile." }
    ],
    specs: [
      { name: "Engineering Standards", value: "EN50155, IPC-A-610 Class 3, RDSO/SPN/212/2012 compliance" },
      { name: "Design Environment", value: "SolidWorks, AutoCAD Electrical, Altium Designer CAD suits" },
      { name: "Cabinet Configuration", value: "Standard 19-inch steel racks or custom space-constrained enclosures" },
      { name: "Cabinet Protection", value: "IP50 (indoor cabins) up to IP65 (wayside environments)" }
    ],
    downloads: [
      { name: "LorVen Design Division Profile", size: "2.1 MB", type: "Datasheet", url: "#" },
      { name: "Railway Enclosure Design Standards", size: "1.4 MB", type: "Manual", url: "#" }
    ],
    images: {
      hero: "engineers.jpg",
      overview: "service-design.png"
    }
  },
  {
    slug: 'installation',
    category: 'ENGINEERING SERVICES',
    title: 'Site Installation',
    description: 'Onsite commissioning, physical cabinet assembly, cable loop wire routing, and validation checks carried out by certified railway field engineers.',
    overviewTitle: 'Rigorous onsite deployment and safety commissioning for railway electronics.',
    paragraphs: [
      "Our field service engineers execute physical cabinet mounting, wiring terminations, and final logic check-out inside active station interlocking rooms, depots, and loco sheds. We operate within tight night blocks and possession windows to install systems without disrupting traffic schedules.",
      "Every installation loop is checked using specialized verification rigs (like the IFT system) to test and log cable insulation, logic routing, and connection integrity before sign-off, guaranteeing immediate operation from day one."
    ],
    features: [
      { title: "Site Integration Supervision", desc: "Onsite coordination of physical cabinet positioning, structural attachment, and grounding tests." },
      { title: "Conductor Terminal Wiring", desc: "Routing and termination of multi-core signaling lines with comprehensive opto-isolated isolation checks." },
      { title: "Integrated Functional Loop Tests", desc: "Validating logic loop feedback and interface ports under simulated interlocking signals before active hand-off." },
      { title: "Overnight possession operations", desc: "Highly organized field crews trained to commission wayside nodes under active line block schedules." }
    ],
    specs: [
      { name: "Deployment Zones", value: "Electric loco sheds, stations, interlocking cabins, and carriage depots" },
      { name: "Validation Equipment", value: "Integrated Functional Testers (IFT), Insulation Testers, Logical Loop Analyzers" },
      { name: "Safety Compliance", value: "Certified under Indian Railways safety protocols and track protection rules" },
      { name: "Support Availability", value: "24/7 deployment standby during pre-scheduled line shutdown blocks" }
    ],
    downloads: [
      { name: "Site Commissioning Standards", size: "3.8 MB", type: "Datasheet", url: "#" },
      { name: "Quality Check & Hand-off Protocol", size: "1.2 MB", type: "Manual", url: "#" }
    ],
    images: {
      hero: "depot.jpg",
      overview: "service-installation.png"
    }
  }
];

export const PROJECTS = [
  {
    code: "P/41",
    title: "Mainline RDPMS rollout — 400 coaches",
    client: "Indian Railways",
    year: 2024,
    sector: "Mainline",
    region: "South",
    image: "depot.jpg",
    copy: "Programme retrofit of RDPMS across 400 coaches in three zonal railways, with depot dashboards and predictive scheduling."
  },
  {
    code: "P/40",
    title: "Coach electrical refit",
    client: "ICF Chennai",
    year: 2024,
    sector: "Manufacturing",
    region: "South",
    image: "coach-build.jpg",
    copy: "Junction box and harness sets supplied to the Vande Bharat build line on a pre-kitted basis."
  },
  {
    code: "P/38",
    title: "Full-cab driving simulator",
    client: "ZRTI Mumbai",
    year: 2023,
    sector: "Mainline",
    region: "West",
    image: "simulator.jpg",
    copy: "WAP-class simulator with 200° visual, motion base and operator-authored route library."
  },
  {
    code: "P/36",
    title: "Depot LV switchgear",
    client: "BMRCL",
    year: 2023,
    sector: "Metro",
    region: "South",
    image: "electrical-cabinet.jpg",
    copy: "Form 4b LV distribution for the Yelachenahalli rolling-stock depot."
  },
  {
    code: "P/34",
    title: "SMT capacity expansion",
    client: "Internal",
    year: 2022,
    sector: "Manufacturing",
    region: "South",
    image: "smt-line.jpg",
    copy: "Fourth SMT line commissioned at Bengaluru; qualified IPC-A-610 Class 3 inside 90 days."
  },
  {
    code: "P/31",
    title: "Freight wagon brake electronics",
    client: "RITES / IR",
    year: 2022,
    sector: "Freight",
    region: "North",
    image: "wagons.jpg",
    copy: "Brake-control electronics supplied for a 1,200-wagon programme, type-tested at RDSO Lucknow."
  },
  {
    code: "P/29",
    title: "IFT roll-out at depots",
    client: "Indian Railways",
    year: 2021,
    sector: "Mainline",
    region: "East",
    image: "engineers.jpg",
    copy: "Integrated functional testers commissioned across six electric-loco sheds."
  }
];
