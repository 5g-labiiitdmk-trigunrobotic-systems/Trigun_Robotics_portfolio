/* ============================================================
   Trigun Robotic Systems — main.js
   ------------------------------------------------------------
   ASSETS / LINKS TO REPLACE BEFORE GOING LIVE
   Every external file or URL the site uses is defined below —
   swap the placeholder value and you are done (no markup hunt):

     LOGO_SRC         — company logo image (nav + footer)
     HERO_VIDEO_SRC   — hero background loop (mp4)
     HERO_POSTER_SRC  — hero video poster frame (jpg/png)
     ABOUT_VIDEO_SRC  — about-section loop (mp4, optional)
     LINKEDIN_URL     — LinkedIn profile link
     TWITTER_URL      — X / Twitter profile link

   ...plus, inside each object of the `products` array:
     image — card thumbnail / modal image (png)
     video — optional hover-loop mp4 (null = static image only)

   ...and (referenced from styles.css, not here):
     assets/fonts/Flaviotte-Regular.woff2 / .otf — placeholder
     files; replace with the real licensed font before going live.
   ============================================================ */

const LOGO_SRC = "assets/logo.png";
const HERO_VIDEO_SRC = "assets/hero.mp4";
const HERO_POSTER_SRC = "assets/hero-poster.jpg";
const ABOUT_VIDEO_SRC = "assets/about.mp4";
const GOOGLE_FORM_URL = "https://forms.gle/roAWfBpsm5H1n7Wj8";
const LINKEDIN_URL = "#"; // TODO: real LinkedIn URL
const TWITTER_URL = "#"; // TODO: real X/Twitter URL

/* ---------- Product data ---------- */

const products = [
  {
    title: "Smart Health Drones",
    category: "Drones",
    description: "Smart drones for healthcare management, emergency response, and medical logistics.",
    detail: `
      <h4 class="modal-detail-title">Drone based Emergency Medical System</h4>
      <p>In emergency healthcare, the &ldquo;golden hour&rdquo; is a critical window where timely intervention can drastically reduce mortality and long-term complications. However, in rural and underserved regions, systemic delays&mdash;such as limited ambulance access, shortage of medical personnel, and lack of real-time coordination&mdash;continue to hinder effective response.</p>
      <p>To address these challenges, Trigun Robotic Systems Private Limited, incubated at IIITDM Kurnool, has developed a drone-based emergency medical support system that integrates ambulance patrolling, public announcement, and telemedicine capabilities into a unified aerial platform. This innovation is designed to bridge healthcare gaps, enhance public communication, and support civic infrastructure in both urban and rural settings.</p>
      <h5 class="modal-subhead">System Overview: DRUVA Platform</h5>
      <p>The DRUVA drone system is a multipurpose aerial solution engineered to deliver four critical public services:</p>
      <ul>
        <li>Ambulance Patrolling System
          <ul>
            <li>Functions as an aerial scout to establish green corridors for ambulances.</li>
            <li>Provides live traffic surveillance and route optimization to reduce response times.</li>
            <li>Enhances coordination between emergency services and traffic authorities.</li>
            <li>Delivers multilingual voice broadcasts across large and remote areas.</li>
            <li>Supports emergency alerts, public health advisories, and event coordination.</li>
            <li>Enables rapid delivery of medicines and first-aid kits to inaccessible zones.</li>
            <li>Facilitates live video monitoring and remote consultation with medical professionals.</li>
            <li>Supports tele-prescription and on-site triage guidance for immediate care.</li>
            <li>Offers real-time surveillance, anomaly detection, and infrastructure assessment.</li>
            <li>Bridges gaps in municipal reporting and enhances civic decision-making.</li>
            <li>Integrates with local governance systems for data-driven emergency response.</li>
          </ul>
        </li>
      </ul>
    `,
    image: "assets/products/smart-health-drones.png",
    video: null,
  },
  {
    title: "AI Based Yoga Application",
    category: "Wellness",
    description: "Real-time posture correction and personalized routines for yoga practice.",
    detail: `
      <h4 class="modal-detail-title">AI Based Yoga Application</h4>
      <p>Trigun Robotic Systems Private Limited has successfully developed an AI-based Yoga Application, which was prominently featured during the International Yoga Day 2025 celebrations, with active support from the Department of Ayush, Government of Andhra Pradesh.</p>
      <h5 class="modal-subhead">Highlights of the AI-Based Yoga Application</h5>
      <ul>
        <li><strong>Real-Time Posture Correction:</strong> Uses computer vision and AI algorithms to guide users through yoga poses with instant feedback on alignment and technique.</li>
        <li><strong>Personalized Routines:</strong> Tailors yoga sessions based on age, fitness level, and health goals, ensuring inclusivity across diverse user groups.</li>
        <li><strong>Voice-Guided Sessions:</strong> Offers multilingual audio instructions and meditative cues for immersive practice.</li>
        <li><strong>Progress Tracking:</strong> Monitors flexibility, balance, and breathing patterns over time, helping users visualize their wellness journey.</li>
      </ul>
      <h5 class="modal-subhead">Impact at International Yoga Day 2025</h5>
      <ul>
        <li>Deployed across multiple venues in Andhra Pradesh as part of the Yoga Sangam initiative led by the Ministry of Ayush.</li>
        <li>Enabled mass participation with synchronized Common Yoga Protocol sessions, guided by AI for consistency and accessibility.</li>
        <li>Recognized as a symbol of technological integration with traditional wellness, aligning with the 2025 theme: &ldquo;Yoga for One Earth, One Health&rdquo;.</li>
      </ul>
      <p>This achievement reflects Trigun&rsquo;s broader mission to fuse symbolic heritage with modern innovation, delivering solutions that are both culturally resonant and technologically advanced.</p>
    `,
    image: "assets/products/ai-yoga.png",
    video: null,
  },
  {
    title: "Advanced Anti-Drone System",
    category: "Defense",
    description: "Military-grade protection against unauthorized UAVs with 360° radar coverage.",
    detail: `
      <h4 class="modal-detail-title">Anti Drone System</h4>
      <p>Trigun Robotic Systems Private Limited has engineered a cutting-edge Anti-Drone System at IIITDM Kurnool, recognized as one of the most advanced Electronic Warfare (EW) platforms of its kind developed indigenously in India. This in-house product exemplifies Trigun&rsquo;s commitment to national security, institutional innovation, and technological sovereignty.</p>
      <h5 class="modal-subhead">Anti-Drone System: A Benchmark in Electronic Warfare</h5>
      <ul>
        <li><strong>Multi-Spectral Detection:</strong> Combines RF signal interception, motion tracking, and AI-based threat classification to identify and neutralize unauthorized UAVs.</li>
        <li><strong>Real-Time Countermeasures:</strong> Capable of jamming control channels, disrupting GNSS signals, and triggering autonomous defense protocols.</li>
        <li><strong>Campus-Integrated Deployment:</strong> Seamlessly embedded into IIITDM Kurnool&rsquo;s surveillance grid, offering live threat analytics and perimeter protection.</li>
      </ul>
      <h5 class="modal-subhead">Next-Gen Models in Development</h5>
      <p>Trigun is actively developing RF and Optical variants to expand operational capabilities:</p>
      <ul>
        <li><strong>RF-Based Systems:</strong> Targeting wide-band drone communications with adaptive jamming, signal triangulation, and swarm neutralization.</li>
        <li><strong>Optical Tracking Models:</strong> Featuring high-resolution imaging, infrared sensors, and AI-powered object recognition for silent or low-visibility UAVs.</li>
      </ul>
      <p>These models are designed for deployment across defense installations, industrial zones, academic campuses, and critical infrastructure, offering scalable and modular EW solutions.</p>
      <h5 class="modal-subhead">Strategic Significance</h5>
      <p>This initiative reflects Trigun&rsquo;s broader mission to:</p>
      <ul>
        <li>Lead in indigenous defense innovation with symbolic and procedural integrity.</li>
        <li>Deliver multi-domain security platforms that integrate robotics, AI, and real-time analytics.</li>
        <li>Support institutional reform and national resilience through technology-driven governance.</li>
      </ul>
    `,
    image: "assets/products/anti-drone.png",
    video: null,
  },
  {
    title: "AR Indoor Navigation System",
    category: "Navigation",
    description: "AR-enhanced navigation with centimeter-accurate positioning for healthcare, industrial, and retail.",
    detail: `
      <h4 class="modal-detail-title">Indoor Navigation</h4>
      <p>Trigun Robotic Systems Private Limited has developed a pioneering Indoor Navigation technology that fuses Radio Frequency (RF) and Augmented Reality (AR) to deliver precise, immersive, and user-friendly navigation within enclosed environments.</p>
      <h5 class="modal-subhead">Key Features of Trigun&rsquo;s Indoor Navigation System</h5>
      <h5 class="modal-subhead">RF-Based Positioning</h5>
      <ul>
        <li>Utilizes RF signal triangulation to determine user location with high accuracy, even in GPS-denied zones.</li>
        <li>Integrates with Bluetooth beacons, Wi-Fi graphs, or proprietary RF nodes to map indoor layouts dynamically.</li>
      </ul>
      <h5 class="modal-subhead">AR-Enhanced Guidance</h5>
      <ul>
        <li>Employs AR overlays to visually guide users through hallways, rooms, and complex indoor spaces.</li>
        <li>Compatible with mobile devices and smart glasses, offering real-time directional cues, landmark identification, and interactive prompts.</li>
      </ul>
      <h5 class="modal-subhead">Sensor Fusion &amp; Adaptability</h5>
      <ul>
        <li>Combines RF data with inertial sensors, camera feeds, and environmental inputs for robust path computation.</li>
        <li>Adapts to changing layouts, crowd density, and lighting conditions, ensuring consistent performance.</li>
      </ul>
      <h5 class="modal-subhead">Use Cases &amp; Strategic Impact</h5>
      <ul>
        <li><strong>Academic Institutions:</strong> Helps students and visitors navigate large campuses, labs, and administrative blocks.</li>
        <li><strong>Hospitals &amp; Public Buildings:</strong> Assists patients and staff in locating departments, emergency exits, and service counters.</li>
        <li><strong>Industrial Facilities:</strong> Supports logistics, asset tracking, and workforce coordination in complex indoor zones.</li>
        <li><strong>Smart Museums &amp; Exhibitions:</strong> Offers immersive tours with AR-enhanced storytelling and spatial awareness.</li>
      </ul>
      <p>This technology reflects Trigun&rsquo;s signature approach: blending symbolic design, procedural integrity, and technical excellence to solve real-world challenges.</p>
    `,
    image: "assets/products/ar-indoor-nav.png",
    video: null,
  },
  {
    title: "Autonomous Underwater Drone",
    category: "Drones",
    description: "Advanced underwater vehicle for infrastructure inspection, environmental monitoring, and search & rescue.",
    detail: `
      <h4 class="modal-detail-title">Product: Underwater Drone Technology Services</h4>
      <p>Trigun Robotic Systems Private Limited has established a strong track record in the development and deployment of Underwater Drone applications, leveraging advanced robotics, IoT integration, and real-time data systems to address critical challenges in aquatic environments.</p>
      <p>Underwater drones&mdash;whether remotely operated vehicles (ROVs), autonomous underwater vehicles (AUVs), or hybrids&mdash;are transforming how we explore, monitor, and interact with aquatic environments. Here&rsquo;s a breakdown of their most impactful applications:</p>
      <h5 class="modal-subhead">Marine Surveillance &amp; Exploration</h5>
      <ul>
        <li>Designed compact, maneuverable drones capable of navigating tight underwater spaces for marine life observation, habitat mapping, and photographic documentation.</li>
        <li>Integrated Wi-Fi-enabled cameras and servo-controlled propulsion systems for precise maneuvering and live data transmission.</li>
      </ul>
      <h5 class="modal-subhead">Infrastructure &amp; Environmental Monitoring</h5>
      <ul>
        <li>Deployed drones for structural inspections of submerged assets like dams, pipelines, and bridge foundations.</li>
        <li>Utilized IoT sensors to monitor water quality, detect pollutants, and assess environmental wear.</li>
      </ul>
      <h5 class="modal-subhead">Search &amp; Rescue Operations</h5>
      <ul>
        <li>Engineered ROVs (Remotely Operated Vehicles) for emergency response, capable of locating survivors and delivering medical aid in aquatic disasters.</li>
        <li>Equipped with thermal imaging and robotic arms for underwater object retrieval and rescue support.</li>
      </ul>
      <h5 class="modal-subhead">Aquatic Weed &amp; Waste Management</h5>
      <ul>
        <li>Applied underwater drones to remove invasive water weeds in agricultural reservoirs and urban lakes, improving ecosystem balance and infrastructure safety.</li>
        <li>Enabled plastic waste collection and pollution control in oceans and freshwater bodies, reducing manual labor and operational costs.</li>
      </ul>
      <p>Trigun&rsquo;s underwater drone systems reflect its broader mission: to fuse symbolic design, technical precision, and procedural integrity in service of real-world impact.</p>
    `,
    image: "assets/products/underwater-drone.png",
    video: null,
  },
  {
    title: "Precision Agriculture Drone",
    category: "Agriculture",
    description: "AI-enabled drones for crop monitoring, smart spraying, and soil analysis.",
    detail: `
      <h4 class="modal-detail-title">Agriculture Drone Service</h4>
      <p>Trigun Robotic Systems Private Limited has established deep expertise in the domain of agriculture drones, offering end-to-end capabilities in design, development, deployment, and Drone-as-a-Service (DaaS). Their work reflects a fusion of technical precision, field-tested reliability, and a commitment to transforming Indian agri-tech through scalable aerial solutions.</p>
      <h5 class="modal-subhead">Core Competencies in Agricultural Drone Technology</h5>
      <h5 class="modal-subhead">Design &amp; Development</h5>
      <ul>
        <li>Custom-built drones tailored for crop spraying, soil analysis, and plant health monitoring.</li>
        <li>Integration of multi-spectral cameras, GPS-guided navigation, and AI-based analytics for precision farming.</li>
        <li>Modular architecture enabling rapid adaptation to diverse crop types and terrains.</li>
      </ul>
      <h5 class="modal-subhead">Drone-as-a-Service (DaaS)</h5>
      <ul>
        <li>On-demand drone operations for farmers, institutions, and cooperatives&mdash;eliminating the need for ownership.</li>
        <li>Services include spraying, field mapping, yield estimation, and pest detection, backed by trained operators and real-time data delivery.</li>
        <li>Compliance with DGCA norms and integration with government-backed digital agriculture initiatives.</li>
      </ul>
      <h5 class="modal-subhead">Field Impact</h5>
      <ul>
        <li>Enhanced resource efficiency through targeted spraying and irrigation.</li>
        <li>Improved crop yield and disease management via aerial diagnostics.</li>
        <li>Support for sustainable farming practices and climate-resilient agriculture.</li>
      </ul>
      <p>Trigun&rsquo;s approach goes beyond hardware&mdash;it&rsquo;s about delivering symbolically rich, procedurally sound solutions that empower rural communities and institutional stakeholders alike.</p>
    `,
    image: "assets/products/agri-drone.png",
    video: null,
  },
  {
    title: "AI Based Gym Trainer",
    category: "Fitness",
    description: "Personalized workout plans and real-time form correction using AI vision.",
    detail: `
      <h4 class="modal-detail-title">AI-Based Gym Trainer: Intelligent Pose Guidance</h4>
      <p>The AI-Based Gym Trainer is an advanced fitness solution that uses computer vision, machine learning, and real-time feedback to help users perform exercises with perfect form. By leveraging pose estimation algorithms (like MediaPipe or OpenPose), this system analyzes joint positions, body alignment, and movement to ensure safe and effective workouts.</p>
      <h5 class="modal-subhead">Core Features</h5>
      <ul>
        <li><strong>Real-Time Pose Detection:</strong> Tracks 33+ body landmarks with high accuracy.</li>
        <li><strong>Voice &amp; Visual Guidance:</strong> Provides immediate audio and visual cues to correct form.</li>
        <li><strong>Repetition Counting:</strong> Automatically counts reps and sets.</li>
        <li><strong>Injury Prevention:</strong> Alerts users when unsafe posture or movement patterns are detected.</li>
        <li><strong>Progress Tracking:</strong> Logs performance data over time for personalized improvements.</li>
        <li><strong>Multi-Language Support:</strong> Offers guidance in Telugu, Hindi, and English.</li>
      </ul>
      <h5 class="modal-subhead">Exercise-Specific Guidance</h5>
      <ul>
        <li>Push-Up
          <ul>
            <li><strong>Key Focus:</strong> Maintain a straight body line from head to heels, elbows at ~45&deg; angle.</li>
            <li><strong>AI Feedback:</strong> Detects hip sagging or elevated hips; monitors elbow extension range.</li>
          </ul>
        </li>
        <li>Planking
          <ul>
            <li><strong>Key Focus:</strong> Spine alignment, neutral neck, and core engagement.</li>
            <li><strong>AI Feedback:</strong> Warns if hips are too high or low; suggests adjustments for shoulder position.</li>
          </ul>
        </li>
        <li>Dumbbell Bent-Over Row
          <ul>
            <li><strong>Key Focus:</strong> Flat back, hinge at hips, controlled arm movement.</li>
            <li><strong>AI Feedback:</strong> Checks torso angle (~45&deg;), detects shoulder rounding, monitors elbow trajectory.</li>
          </ul>
        </li>
        <li>Pull-Up
          <ul>
            <li><strong>Key Focus:</strong> Full extension at the bottom, chin over bar at the top.</li>
            <li><strong>AI Feedback:</strong> Detects swinging, improper grip, or incomplete range of motion.</li>
          </ul>
        </li>
        <li>Overhead Press
          <ul>
            <li><strong>Key Focus:</strong> Bar path close to body, neutral spine, locked-out elbows.</li>
            <li><strong>AI Feedback:</strong> Alerts if lower back arches excessively; monitors elbow lockout.</li>
          </ul>
        </li>
        <li>Shoulder Press
          <ul>
            <li><strong>Key Focus:</strong> Shoulders down and back, wrists aligned over elbows.</li>
            <li><strong>AI Feedback:</strong> Highlights shoulder elevation issues and asymmetry in movement.</li>
          </ul>
        </li>
        <li>Dumbbell Wrist Curl
          <ul>
            <li><strong>Key Focus:</strong> Controlled wrist flexion/extension, elbows steady.</li>
            <li><strong>AI Feedback:</strong> Tracks wrist angle and rep tempo; warns if movement is jerky.</li>
          </ul>
        </li>
        <li>Cable Curl
          <ul>
            <li><strong>Key Focus:</strong> Upper arms stationary, controlled curl motion.</li>
            <li><strong>AI Feedback:</strong> Detects swinging elbows and improper tension control.</li>
          </ul>
        </li>
        <li>Dumbbell Chest Press
          <ul>
            <li><strong>Key Focus:</strong> Neutral wrists, elbows at 75&deg;&ndash;90&deg;, full chest engagement.</li>
            <li><strong>AI Feedback:</strong> Monitors bar path symmetry and wrist stability.</li>
          </ul>
        </li>
        <li>Pec Deck (PEC DEC)
          <ul>
            <li><strong>Key Focus:</strong> Squeeze chest at contraction, elbows slightly bent.</li>
            <li><strong>AI Feedback:</strong> Tracks range of motion and shoulder joint stress.</li>
          </ul>
        </li>
        <li>Calf Raise
          <ul>
            <li><strong>Key Focus:</strong> Full plantar flexion, controlled lowering.</li>
            <li><strong>AI Feedback:</strong> Monitors balance and range of ankle motion.</li>
          </ul>
        </li>
        <li>Calf Jump
          <ul>
            <li><strong>Key Focus:</strong> Explosive concentric phase with controlled landing.</li>
            <li><strong>AI Feedback:</strong> Detects landing mechanics, knee alignment, and jump height.</li>
          </ul>
        </li>
      </ul>
      <h5 class="modal-subhead">Technology Stack</h5>
      <ul>
        <li><strong>Pose Estimation:</strong> TensorFlow Lite, MediaPipe Pose.</li>
        <li><strong>Voice Guidance:</strong> Google Cloud TTS, Azure Cognitive Services.</li>
        <li><strong>Mobile/Desktop Support:</strong> Flutter for cross-platform apps, React for dashboards.</li>
        <li><strong>Wearable Integration:</strong> Smartwatches for HR &amp; calorie tracking.</li>
        <li><strong>Cloud Backend:</strong> Firebase or AWS for data sync and analytics.</li>
      </ul>
      <h5 class="modal-subhead">Benefits</h5>
      <ul>
        <li>Reduces injury risk by correcting form in real-time.</li>
        <li>Encourages self-paced learning with instant feedback.</li>
        <li>Enhances accessibility with multi-language voice guidance.</li>
        <li>Tracks progress for both casual users and professional athletes.</li>
        <li>Makes personalized coaching affordable and scalable.</li>
      </ul>
      <h5 class="modal-subhead">Disclaimer</h5>
      <p>The AI-Based Gym Trainer application is intended for informational and fitness guidance purposes only. While it uses advanced computer vision and AI algorithms to provide pose correction, performance analysis, and exercise suggestions, it is not a substitute for professional medical or fitness advice.</p>
      <ul>
        <li>Users are advised to consult a certified fitness trainer or healthcare provider before beginning any exercise program, especially if they have prior injuries or medical conditions.</li>
        <li>The app provides guidance based on camera-based pose detection, which may be subject to environmental factors (lighting, camera placement, clothing) and therefore should not be relied on as the sole source of exercise safety.</li>
        <li>Trigun Robotic Systems Pvt. Ltd. and its affiliates are not responsible for injuries, accidents, or health issues arising from misuse of the application or incorrect implementation of exercise instructions.</li>
        <li>The app should be used as a supportive fitness tool and not as a certified medical or rehabilitation device.</li>
      </ul>
      <p>By using this application, users acknowledge and accept that they are engaging in exercise activities at their own risk.</p>
    `,
    image: "assets/products/ai-gym.png",
    video: null,
  },
  {
    title: "AI-Powered Drones for Smart Cities",
    category: "Drones",
    description: "Autonomous drones for urban management, emergency response, and medical logistics.",
    detail: `
      <h4 class="modal-detail-title">Smart City Applications Using IoT and Drones</h4>
      <p>Trigun Robotic Systems Private Limited has been actively advancing Smart City applications by integrating cutting-edge technologies like IoT, drones, AI, and automation to address urban challenges with precision and scalability. Their work reflects a commitment to creating data-driven, responsive, and inclusive urban ecosystems.</p>
      <h5 class="modal-subhead">1. Traffic Monitoring &amp; Management</h5>
      <ul>
        <li>IoT sensors embedded in roads and vehicles track congestion, speed, and flow.</li>
        <li>Drones provide aerial views of traffic hotspots, accidents, and bottlenecks.</li>
        <li>Enables dynamic traffic light control and real-time rerouting for emergency vehicles.</li>
      </ul>
      <h5 class="modal-subhead">2. Emergency Response &amp; Disaster Management</h5>
      <ul>
        <li>Drones equipped with thermal cameras and sensors locate survivors in floods, fires, or earthquakes.</li>
        <li>IoT networks relay real-time data to command centers for faster decision-making.</li>
        <li>Supports evacuation planning and post-disaster damage assessment.</li>
      </ul>
      <h5 class="modal-subhead">3. Infrastructure Inspection</h5>
      <ul>
        <li>Drones inspect bridges, towers, and buildings for structural integrity.</li>
        <li>IoT sensors monitor vibration, stress, and environmental wear.</li>
        <li>Reduces manual labor and enhances safety in high-risk zones.</li>
      </ul>
      <h5 class="modal-subhead">4. Air Quality &amp; Environmental Monitoring</h5>
      <ul>
        <li>IoT-enabled stations track pollutants, pollen, and weather conditions.</li>
        <li>Drones collect air samples and map pollution hotspots from above.</li>
        <li>Supports urban planning and public health alerts.</li>
      </ul>
      <h5 class="modal-subhead">5. Smart Waste Management</h5>
      <ul>
        <li>IoT bins report fill levels and optimize collection routes.</li>
        <li>Drones monitor illegal dumping and landfill conditions.</li>
        <li>Improves sanitation and reduces operational costs.</li>
      </ul>
      <h5 class="modal-subhead">6. Healthcare Logistics</h5>
      <ul>
        <li>Drones deliver emergency medical supplies (e.g., blood, vaccines) to congested or remote areas.</li>
        <li>IoT wearables monitor patient vitals and transmit alerts to hospitals.</li>
        <li>Enhances access and response time in urban healthcare systems.</li>
      </ul>
      <h5 class="modal-subhead">7. Urban Agriculture &amp; Green Space Monitoring</h5>
      <ul>
        <li>IoT soil sensors optimize irrigation and crop health in rooftop farms or vertical gardens.</li>
        <li>Drones survey plant growth, pest activity, and water distribution.</li>
        <li>Promotes sustainability and food security in dense cities.</li>
      </ul>
      <h5 class="modal-subhead">8. Public Safety &amp; Surveillance</h5>
      <ul>
        <li>IoT-connected CCTV and motion sensors detect anomalies.</li>
        <li>Drones patrol high-risk zones, monitor crowds, and support law enforcement.</li>
        <li>Enhances situational awareness and rapid response capabilities.</li>
      </ul>
      <p>Trigun&rsquo;s approach is not just technical&mdash;it&rsquo;s deeply symbolic and reformative, aligning with its broader mission to fuse Indian heritage with modern innovation, and to promote equity, transparency, and institutional excellence.</p>
    `,
    image: "assets/products/smart-city-drones.png",
    video: null,
  },
  {
    title: "Wireless ROV System",
    category: "Navigation",
    description: "Remotely Operated Vehicle with GNSS-denied navigation for industrial, scientific, and defense applications.",
    detail: `
      <h4 class="modal-detail-title">Product: Agriculture RoV</h4>
      <p>Trigun Robotic Systems Private Limited has developed an innovative Remotely Operated Vehicle (RoV) for agricultural applications, designed to operate with steering-based control and visual navigation capabilities. This in-house solution reflects Trigun&rsquo;s commitment to precision farming, sustainability, and indigenous agri-tech innovation.</p>
      <h5 class="modal-subhead">Key Features of Trigun&rsquo;s Agricultural RoV</h5>
      <h5 class="modal-subhead">Steering-Based Operation</h5>
      <ul>
        <li>Equipped with servo-controlled steering mechanisms for precise maneuvering across varied terrain.</li>
        <li>Supports row-following logic, enabling the RoV to navigate between crop lines with minimal human intervention.</li>
        <li>Designed for modular attachment, allowing tools for spraying, weeding, or soil sampling to be mounted and controlled remotely.</li>
      </ul>
      <h5 class="modal-subhead">Visual Provision System</h5>
      <ul>
        <li>Integrated camera-based vision module for real-time monitoring and navigation.</li>
        <li>Uses image processing algorithms to detect crop rows, obstacles, and terrain features.</li>
        <li>Enables remote operators to make informed decisions based on live visual feedback.</li>
      </ul>
      <h5 class="modal-subhead">Agricultural Use Cases</h5>
      <ul>
        <li>Under-canopy navigation for crop inspection and targeted intervention.</li>
        <li>Precision spraying of fertilizers or pesticides, reducing waste and environmental impact.</li>
        <li>Soil health monitoring using visual cues and sensor feedback.</li>
        <li>Pest and weed detection through AI-enhanced image analysis.</li>
      </ul>
      <p>This RoV platform is a strategic step toward autonomous field robotics, aligning with Trigun&rsquo;s long-term vision of symbolically rich, technically rigorous agri-tech systems.</p>
    `,
    image: "assets/products/rov-system.png",
    video: null,
  },
  {
    title: "Augmented Reality in Healthcare",
    category: "Healthcare",
    description: "Enhancing medical diagnostics and procedural guidance with AR Doctor applications.",
    detail: `
      <h4 class="modal-detail-title">Augmented Reality (AR) in Healthcare</h4>
      <p>Trigun Robotic Systems Private Limited has pioneered the development of AR Doctor applications, integrating augmented reality into medical diagnostics and procedural guidance. These innovations aim to enhance clinical precision, reduce diagnostic latency, and democratize access to expert-level care.</p>
      <h5 class="modal-subhead">Key Features of AR Doctor Applications</h5>
      <ul>
        <li><strong>Real-time anatomical overlays:</strong> Enables doctors to visualize internal structures directly on the patient&rsquo;s body using AR glasses or tablets.</li>
        <li><strong>Interactive diagnostics:</strong> Combines sensor data with visual cues to assist in identifying conditions with greater accuracy.</li>
        <li><strong>Remote consultation:</strong> Facilitates expert guidance during procedures, especially in rural or resource-limited settings.</li>
        <li><strong>Training modules:</strong> Offers immersive simulations for medical students and practitioners to rehearse procedures with haptic and visual feedback.</li>
      </ul>
      <p>By fusing robotics, AI, and AR, Trigun&rsquo;s AR Doctor platform reflects its broader mission: to deliver technologically empowered, symbolically rich solutions that serve both institutional reform and real-world impact.</p>
      <p>Some powerful applications include:</p>
      <ul>
        <li><strong>AR-assisted surgery:</strong> Surgeons can visualize internal organs and bone structures in real time without making incisions.</li>
        <li><strong>Medical training:</strong> Students interact with 3D anatomical models for immersive learning.</li>
        <li><strong>Patient education:</strong> AR helps explain conditions and procedures more clearly, improving engagement.</li>
        <li><strong>Rehabilitation and therapy:</strong> AR gamifies physical therapy, improving recovery outcomes.</li>
      </ul>
      <h5 class="modal-subhead">Applications</h5>
      <h5 class="modal-subhead">Surgical Planning and Assistance</h5>
      <ul>
        <li>AR overlays 3D anatomical data onto the patient&rsquo;s body in real time.</li>
        <li>Surgeons can visualize organs, bones, and blood vessels without making incisions.</li>
        <li>Improves precision in complex procedures like neurosurgery or orthopedic reconstruction.</li>
      </ul>
      <h5 class="modal-subhead">Medical Education and Training</h5>
      <ul>
        <li>Students interact with lifelike 3D models of anatomy and pathology.</li>
        <li>AR simulations allow practice of procedures without risk to patients.</li>
        <li>Enhances spatial understanding and retention compared to 2D textbooks.</li>
      </ul>
      <h5 class="modal-subhead">Patient Diagnosis and Visualization</h5>
      <ul>
        <li>Doctors use AR to explain conditions using interactive visuals.</li>
        <li>Patients can see how diseases affect their bodies (e.g., blocked arteries or lung damage).</li>
        <li>Boosts patient engagement and informed decision-making.</li>
      </ul>
      <h5 class="modal-subhead">Therapeutic Applications</h5>
      <ul>
        <li>AR is used in physical therapy to gamify rehabilitation exercises.</li>
        <li>Helps patients with PTSD, anxiety, or phobias through immersive exposure therapy.</li>
        <li>Encourages consistent participation and faster recovery.</li>
      </ul>
      <h5 class="modal-subhead">Remote Collaboration and Telemedicine</h5>
      <ul>
        <li>AR enables remote specialists to guide procedures by projecting instructions or annotations.</li>
        <li>Useful in rural or underserved areas where expert access is limited.</li>
        <li>Enhances real-time decision-making and reduces medical errors.</li>
      </ul>
      <h5 class="modal-subhead">Pathology and Radiology Interpretation</h5>
      <ul>
        <li>AR tools convert 2D scans (MRI, CT) into interactive 3D models.</li>
        <li>Helps clinicians interpret complex cases with greater accuracy.</li>
        <li>Reduces diagnostic delays and improves treatment planning.</li>
      </ul>
    `,
    image: "assets/products/ar-healthcare.png",
    video: null,
  },
  {
    title: "IoT Applications",
    category: "IoT",
    description: "Visionary IoT solutions for Healthcare, Agriculture, Academics, and Industry.",
    detail: `
      <h4 class="modal-detail-title">IoT Applications</h4>
      <p>Trigun Robotic Systems Private Limited has emerged as a visionary force in the development of IoT applications across four critical sectors: Healthcare, Agriculture, Academics, and Industry. By fusing real-time data acquisition, intelligent automation, and scalable cloud integration, Trigun is reshaping how institutions and communities interact with technology.</p>
      <h5 class="modal-subhead">IoT in Academics</h5>
      <p>IoT is transforming education into a smart, adaptive ecosystem:</p>
      <ul>
        <li><strong>Smart Classrooms:</strong> Interactive boards, AR/VR tools, and sensor-based attendance systems enhance engagement.</li>
        <li><strong>Personalized Learning:</strong> IoT platforms analyze student performance and tailor content to individual needs.</li>
        <li><strong>Campus Safety &amp; Monitoring:</strong> Real-time tracking of student movement, biometric access, and emergency alerts.</li>
        <li><strong>Asset &amp; Energy Management:</strong> IoT sensors optimize lighting, HVAC, and resource usage across campus.</li>
        <li><strong>Remote Proctoring &amp; Smart Libraries:</strong> RFID and camera-based systems ensure exam integrity and automate book tracking.</li>
      </ul>
      <h5 class="modal-subhead">IoT in Healthcare</h5>
      <p>IoT is revolutionizing patient care, diagnostics, and hospital operations:</p>
      <ul>
        <li><strong>Remote Patient Monitoring:</strong> Wearables track vitals like heart rate, glucose, and oxygen saturation.</li>
        <li><strong>Smart Beds &amp; Equipment:</strong> IoT-enabled hospital beds adjust posture and monitor patient movement.</li>
        <li><strong>Medication Management:</strong> Smart pill dispensers and temperature-controlled drug storage ensure compliance.</li>
        <li><strong>Telemedicine Integration:</strong> IoT devices support virtual consultations with real-time data sharing.</li>
        <li><strong>Predictive Maintenance:</strong> Equipment health is monitored to prevent failures and reduce downtime.</li>
      </ul>
      <h5 class="modal-subhead">IoT in Industry</h5>
      <p>Industrial IoT (IIoT) is the backbone of Industry 4.0:</p>
      <ul>
        <li><strong>Predictive Maintenance:</strong> Sensors detect anomalies in machinery before breakdowns occur.</li>
        <li><strong>Energy Optimization:</strong> Real-time monitoring of power usage reduces costs and carbon footprint.</li>
        <li><strong>Supply Chain Visibility:</strong> IoT tags track goods from production to delivery, improving logistics.</li>
        <li><strong>Worker Safety:</strong> Wearables monitor exposure to hazards and ensure compliance with safety protocols.</li>
        <li><strong>Process Automation:</strong> IoT enables real-time control of manufacturing lines and robotic systems.</li>
      </ul>
      <h5 class="modal-subhead">IoT in Agriculture</h5>
      <p>Smart farming is reshaping food production and sustainability:</p>
      <ul>
        <li><strong>Precision Farming:</strong> IoT sensors optimize irrigation, fertilization, and crop health monitoring.</li>
        <li><strong>Livestock Monitoring:</strong> Wearables track animal health, location, and productivity.</li>
        <li><strong>Smart Irrigation Systems:</strong> Soil moisture sensors automate watering schedules to conserve water.</li>
        <li><strong>Pest &amp; Disease Detection:</strong> Early alerts from field sensors enable targeted interventions.</li>
        <li><strong>Supply Chain &amp; Traceability:</strong> IoT ensures food safety and reduces post-harvest losses.</li>
      </ul>
      <p>Trigun&rsquo;s approach is not just technical&mdash;it&rsquo;s deeply symbolic and reformative. Each application reflects a commitment to equity, transparency, and innovation, aligning with the company&rsquo;s broader mission to lead in Indian agri-tech and institutional transformation.</p>
    `,
    image: "assets/products/iot-applications.png",
    video: null,
  },
  {
    title: "AR-based Aircraft Maintenance System",
    category: "Maintenance",
    description: "Augmented Reality solutions for guided aircraft inspection, repair, and training, enhancing efficiency and safety.",
    detail: `
      <h4 class="modal-detail-title">Augmented Reality-based Aircraft Maintenance System</h4>
      <p>The product presents an Augmented Reality (AR)&ndash;based maintenance system for an Aircraft and a Helicopter, illustrating how AR can revolutionize defense and aviation maintenance through interactive visualization, remote assistance, and immersive training.</p>
      <h5 class="modal-subhead">Motivation and Objectives</h5>
      <p>Traditional aircraft maintenance relies on printed manuals and static diagrams, often leading to inefficiency and human error. The core motivation of this project is to modernize and digitize maintenance operations using AR, allowing technicians to visualize instructions directly overlaid on the physical components.</p>
      <p>The main objectives are:</p>
      <ul>
        <li>To implement AR-based interactive visual maintenance for training and inspection.</li>
        <li>To create scalable 3D models of aircraft parts for realistic visualization.</li>
        <li>To enable remote expert guidance and real-time fault detection using image comparison and segmentation.</li>
      </ul>
      <h5 class="modal-subhead">Problem Definition</h5>
      <p>Field technicians frequently interrupt their workflow to consult manuals or reference materials, increasing maintenance time and risk of oversight. The AR system eliminates this gap by overlaying real-time annotations, visual cues, and labels directly on the components. Thus, the project aims to provide a hands-free, context-aware maintenance system for efficient aircraft servicing.</p>
      <h5 class="modal-subhead">System Design and Software Framework</h5>
      <p>The AR application was developed using:</p>
      <ul>
        <li>Unity 3D for 3D model rendering and Android/iOS deployment.</li>
        <li>Vuforia SDK for marker-based image recognition and tracking.</li>
        <li>Blender for model remodeling, texture refinement, and scaling.</li>
        <li>Turbosquid as the source for base 3D models of aircraft and the UH-60 helicopter.</li>
      </ul>
      <p>Lean Touch tools and C# scripting were integrated to allow intuitive interactions&mdash;rotate, zoom, drag&mdash;and manage the interface logic. The system detects specific image targets (such as aircraft, wheel, or rotor images) and dynamically projects corresponding 3D models in real time.</p>
      <h5 class="modal-subhead">Design Workflow</h5>
      <ul>
        <li><strong>User Interface:</strong> A canvas-based layout supports multiple viewing modes (aircraft, wheel, helicopter modules).</li>
        <li><strong>3D Model Integration:</strong> Models are aligned and anchored to reference markers, ensuring precise overlay with the real object.</li>
        <li><strong>Interactive Maintenance:</strong> Users can view, manipulate, and explore parts with detailed textual and video-based guidance.</li>
        <li><strong>Remodeling &amp; Scaling:</strong> Models are fine-tuned for accurate dimensions and realistic visuals. Comparison tools assist in identifying damaged sections.</li>
        <li><strong>Segmentation:</strong> The UH-60 Black Hawk model demonstrates modular visualization&mdash;rotor, engine, cockpit, landing gear&mdash;offering guided disassembly and reassembly demonstrations.</li>
      </ul>
      <h5 class="modal-subhead">Results and Validation</h5>
      <p>The AR prototype was deployed on Android devices for evaluation. Testing confirmed that:</p>
      <ul>
        <li>The aircraft and helicopter models were accurately augmented in real-world environments.</li>
        <li>AR instructions improved task accuracy and reduced maintenance time.</li>
        <li>The interface supported remote expert feedback and multi-perspective visualization.</li>
        <li>The system performed efficiently with minimal latency even on mid-range devices.</li>
      </ul>
      <h5 class="modal-subhead">Key Outcomes</h5>
      <ul>
        <li>Successfully replaces static manuals with interactive, real-time digital overlays.</li>
        <li>Enhances situational awareness, reduces errors, and improves technician training.</li>
        <li>Establishes a scalable framework for defense and aerospace maintenance training.</li>
        <li>Operates offline once deployed&mdash;ideal for use in restricted or field environments.</li>
      </ul>
      <h5 class="modal-subhead">Conclusion</h5>
      <p>The project demonstrates a working prototype for AR-enabled maintenance of aircraft systems. Future work focuses on:</p>
      <ul>
        <li>Integrating AI-based fault detection and predictive analytics.</li>
        <li>Adopting markerless AR (ARCore) for improved mobility.</li>
        <li>Expanding to multiple aircraft platforms with IoT-based condition monitoring.</li>
        <li>Enabling voice-command operation and live data visualization.</li>
      </ul>
    `,
    image: "assets/products/ar-aircraft-maintenance.png",
    video: null,
  },
  {
    title: "Eagle Eye AI Surveillance System",
    category: "IoT",
    description: "Intelligent multi-camera AI surveillance platform for real-time detection, recognition, and analytics.",
    detail: `
      <h4 class="modal-detail-title">Eagle Eye AI Surveillance System</h4>
      <p>Eagle Eye AI Surveillance System is an intelligent multi-camera monitoring platform that uses Artificial Intelligence and Computer Vision for real-time people detection, vehicle detection, face recognition, and occupancy analytics. The system provides centralized monitoring through a web dashboard with live video streaming, analytics, and person log management. It enhances security by automating surveillance operations and reducing manual effort.</p>
      <h5 class="modal-subhead">Motivation</h5>
      <p>Traditional surveillance systems require continuous human monitoring and are often inefficient in large environments. Our motivation was to develop an AI-driven solution capable of automatic detection, recognition, and analytics generation. The project aims to improve security, scalability, and real-time decision-making using modern deep learning technologies.</p>
      <h5 class="modal-subhead">Objective</h5>
      <p>The primary objective is to build a smart surveillance system that performs real-time object detection, face recognition, entry-exit monitoring, and occupancy analysis. The system also provides multi-camera support, centralized dashboard management, and automated person log generation. It is designed to deliver accurate, reliable, and scalable security monitoring.</p>
      <h5 class="modal-subhead">Problem Definition</h5>
      <p>Conventional CCTV systems only record videos and depend heavily on human supervision for event analysis. They lack intelligent features such as automatic recognition, occupancy tracking, and real-time analytics. The proposed Eagle Eye AI system addresses these limitations by integrating AI-based detection, tracking, and web-based monitoring into a unified platform.</p>
      <h5 class="modal-subhead">System Design and Software Framework</h5>
      <p>The system is developed using Python and Flask as the backend framework, with HTML, CSS, and JavaScript for the web dashboard. OpenCV is used for video processing, YOLOv8 for object detection, ByteTrack for object tracking, Face Recognition for person identification, and SQLite for data storage. The framework supports live streaming, analytics APIs, and multi-camera management.</p>
      <h5 class="modal-subhead">Design Workflow</h5>
      <p>Video frames are captured from cameras and processed using OpenCV. YOLOv8 detects people and vehicles, while ByteTrack assigns unique identities and monitors movement across entry and exit lines. The face recognition module identifies registered individuals, and analytics are stored in SQLite. Finally, Flask APIs deliver real-time information to the web dashboard for visualization and management.</p>
      <h5 class="modal-subhead">Result</h5>
      <p>The developed system successfully performs real-time people detection, vehicle detection, face recognition, occupancy monitoring, and multi-camera surveillance. The dashboard provides live analytics, person logs, and camera management features. Experimental testing demonstrated reliable detection accuracy, efficient tracking performance, and smooth real-time monitoring capabilities.</p>
      <h5 class="modal-subhead">Key Outcomes</h5>
      <p>The project achieved intelligent surveillance automation with accurate object detection and recognition. It provides centralized monitoring, real-time analytics, occupancy estimation, and secure data management. The system demonstrates scalability, reduced manual supervision, and practical applicability in institutions, industries, and smart city environments.</p>
      <h5 class="modal-subhead">Conclusion</h5>
      <p>Eagle Eye AI Surveillance System effectively integrates Artificial Intelligence, Computer Vision, and Web technologies to create an advanced security monitoring platform. The system improves operational efficiency, enhances safety, and provides actionable insights through automated analytics. It offers a scalable and cost-effective solution for modern intelligent surveillance applications.</p>
    `,
    image: "assets/products/eagle-eye.png",
    video: null,
  },
  {
    title: "Current — Secure Messenger",
    category: "IoT",
    description: "End-to-end encrypted messenger with zero server-side storage, voice/video calling, and full data privacy by design.",
    detail: `
      <h4 class="modal-detail-title">Current &mdash; Private. Secure. Yours.</h4>
      <p>Current is a privacy-first messaging application built by Trigun Robotic Systems, designed around a simple but uncompromising principle: your conversations belong to you, and no one else &mdash; not even us.</p>
      <p>Unlike conventional messaging platforms, Current never stores message content on its servers, not even in encrypted form, not even temporarily. Chat and call history exist only on each user&rsquo;s own device, protected by on-device encryption.</p>
      <h5 class="modal-subhead">Key Capabilities</h5>
      <ul>
        <li>End-to-End Encrypted Messaging
          <ul>
            <li>Per-recipient key exchange for both one-to-one and group conversations</li>
            <li>A strict contact-approval system eliminates unsolicited messages entirely</li>
          </ul>
        </li>
        <li>Real-Time Voice &amp; Video Calling
          <ul>
            <li>Low-latency encrypted relay architecture with NAT traversal for cross-network calling</li>
          </ul>
        </li>
        <li>On-Device Encrypted Storage
          <ul>
            <li>Chat and call history are encrypted and stored only on your own device</li>
            <li>Nothing is ever cached or backed up on Trigun&rsquo;s servers</li>
          </ul>
        </li>
      </ul>
    `,
    image: "assets/products/current-messenger.png",
    video: null,
  },
];

const FILTER_CATEGORIES = [
  "All", "Drones", "Defense", "Agriculture", "Navigation",
  "Healthcare", "IoT", "Wellness", "Fitness", "Maintenance",
];

/* ---------- About focus pillars ---------- */

const ICON = (paths) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="#3E6FB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

const pillars = [
  {
    text: "Smart health drones for emergency medical delivery",
    icon: ICON('<path d="M12 3v4M3 12h4M17 12h4M12 17v4"/><circle cx="12" cy="12" r="3.5"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>'),
  },
  {
    text: "Anti-drone defense systems for security and defense",
    icon: ICON('<path d="M12 3 4 6.5v5c0 4.6 3.4 8.4 8 9.5 4.6-1.1 8-4.9 8-9.5v-5L12 3Z"/><path d="m9 12 2 2 4-4"/>'),
  },
  {
    text: "Precision agriculture UAVs for crop management and analytics",
    icon: ICON('<path d="M12 21c4-2.5 7-6.5 7-11a7 7 0 0 0-14 0c0 4.5 3 8.5 7 11Z"/><path d="M12 8v6M9.5 10.5 12 13l2.5-2.5"/>'),
  },
  {
    text: "Autonomous underwater vehicles (ROVs) for GNSS-denied environments",
    icon: ICON('<path d="M2 15c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0"/><path d="M2 19c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0"/><ellipse cx="12" cy="8" rx="6" ry="3.5"/><path d="M18 8h3"/>'),
  },
  {
    text: "AR-based indoor navigation systems for complex facilities",
    icon: ICON('<path d="M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3"/><path d="m12 8 4 2.3v4.4L12 17l-4-2.3v-4.4L12 8Z"/>'),
  },
];

/* ---------- Training accordion data ---------- */

const trainingTracks = [
  {
    num: "01",
    title: "Drone Technology",
    items: [
      { label: "Flight Dynamics & Control Systems", desc: "Covers aerodynamics, propulsion, and autonomous flight algorithms." },
      { label: "Payload Integration & Mission Planning", desc: "Training on sensor mounting, agricultural spraying, surveillance, and logistics." },
      { label: "Regulatory Compliance", desc: "DGCA norms, NPNT protocols, and airspace safety procedures." },
      { label: "Drone-as-a-Service (DaaS)", desc: "Operational training for SHGs, startups, and field technicians." },
    ],
  },
  {
    num: "02",
    title: "Navigation Systems",
    items: [
      { label: "RF-Based Indoor Navigation", desc: "Signal triangulation, beacon mapping, and sensor fusion." },
      { label: "GPS & GNSS Modules", desc: "Real-time tracking, route optimization, and geofencing." },
      { label: "SLAM & Path Planning", desc: "Algorithms like A*, Dijkstra, and RRT for autonomous mobility." },
      { label: "AR Integration", desc: "Visual overlays for immersive indoor guidance and spatial awareness." },
    ],
  },
  {
    num: "03",
    title: "Robotics",
    items: [
      { label: "Embedded Systems & Actuation", desc: "Microcontroller programming, motor control, and sensor interfacing." },
      { label: "ROS (Robot Operating System)", desc: "Simulation, control loops, and multi-agent coordination." },
      { label: "AI for Robotics", desc: "Object recognition, decision-making, and adaptive behavior." },
      { label: "Field Robotics", desc: "Agricultural RoVs, underwater drones, and anti-drone systems." },
    ],
  },
  {
    num: "04",
    title: "Customization & Delivery",
    intro: "Programs are modular, scalable, and customized to suit:",
    subitems: [
      { label: "Academic institutions", desc: "labs, faculty development, student workshops" },
      { label: "Government bodies", desc: "skill development, smart city integration" },
      { label: "Industrial partners", desc: "deployment training, maintenance protocols" },
    ],
  },
];

/* ============================================================
   Wiring
   ============================================================ */

/* ---------- Motion stack (GSAP + ScrollTrigger + Lenis via CDN) ----------
   Every library is optional: if a CDN script fails to load, the site
   falls back to the IntersectionObserver / CSS-transition code paths
   below and stays fully visible and functional. Users with
   prefers-reduced-motion get instant, animation-free rendering. */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
const hasLenis = typeof window.Lenis !== "undefined";
const motionOn = hasGsap && !prefersReducedMotion;

if (motionOn) {
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add("gsap-motion");
}

let lenis = null;
if (hasLenis && !prefersReducedMotion) {
  lenis = new Lenis();
  if (motionOn) {
    // Keep ScrollTrigger in lockstep with Lenis, and drive Lenis's RAF
    // through gsap.ticker so both share one clock (no drift/jank).
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }
  // Route same-page anchor clicks through Lenis (native smooth-scroll is
  // disabled while Lenis owns the scroll).
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link || link.getAttribute("href").length < 2) return;
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      lenis.scrollTo(target, { offset: -70 });
    }
  });
}

/* ---------- Asset constants → DOM ---------- */

document.getElementById("nav-logo").src = LOGO_SRC;
document.getElementById("footer-logo").src = LOGO_SRC;

const heroVideo = document.getElementById("hero-video");
heroVideo.src = HERO_VIDEO_SRC;
heroVideo.poster = HERO_POSTER_SRC;

const aboutVideo = document.getElementById("about-video");
aboutVideo.src = ABOUT_VIDEO_SRC;

// Some browsers defer offscreen muted autoplay — nudge each loop video
// to play once it can, and again when it scrolls into view.
[heroVideo, aboutVideo].forEach((v) => {
  v.addEventListener("canplay", () => v.paused && v.play().catch(() => {}));
  new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting && v.paused) v.play().catch(() => {});
    });
  }).observe(v);
});

document.getElementById("partnership-cta").href = GOOGLE_FORM_URL;
document.getElementById("contact-form-cta").href = GOOGLE_FORM_URL;

/* ---------- Sticky nav ---------- */

const nav = document.getElementById("site-nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ---------- About pillars ---------- */

const pillarsEl = document.getElementById("pillars");
pillarsEl.innerHTML = pillars
  .map((p) => `<div class="pillar-card" data-reveal>${p.icon}<p>${p.text}</p></div>`)
  .join("");

/* ---------- Product grid + filters ---------- */

const gridEl = document.getElementById("product-grid");
gridEl.innerHTML = products
  .map(
    (p, i) => `
  <article class="product-card" data-index="${i}" data-category="${p.category}" data-reveal tabindex="0" role="button" aria-label="${p.title}">
    <div class="product-media">
      <img src="${p.image}" alt="${p.title}" loading="lazy" />
      ${p.video ? `<video src="${p.video}" muted loop playsinline preload="none"></video>` : ""}
    </div>
    <div class="product-body">
      <span class="badge">${p.category}</span>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
    </div>
  </article>`
  )
  .join("");

const chipsEl = document.getElementById("filter-chips");
chipsEl.innerHTML = FILTER_CATEGORIES.map(
  (c, i) => `<button class="chip${i === 0 ? " active" : ""}" data-filter="${c}" role="tab" aria-selected="${i === 0}">${c}</button>`
).join("");

chipsEl.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  chipsEl.querySelectorAll(".chip").forEach((c) => {
    c.classList.toggle("active", c === chip);
    c.setAttribute("aria-selected", String(c === chip));
  });
  const filter = chip.dataset.filter;
  gridEl.querySelectorAll(".product-card").forEach((card) => {
    card.classList.toggle("filter-hide", filter !== "All" && card.dataset.category !== filter);
  });
  // grid height changed — reposition scroll triggers
  if (motionOn) ScrollTrigger.refresh();
});

/* ---------- Product card hover video crossfade ---------- */

gridEl.querySelectorAll(".product-card").forEach((card) => {
  const vid = card.querySelector("video");
  if (!vid) return;
  card.addEventListener("mouseenter", () => {
    card.classList.add("video-playing");
    vid.play().catch(() => {});
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("video-playing");
    vid.pause();
    vid.currentTime = 0;
  });
});

/* ---------- Product modal (scale+fade from card position) ---------- */

const backdrop = document.getElementById("modal-backdrop");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalBadge = document.getElementById("modal-badge");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");

function openModal(card) {
  const p = products[Number(card.dataset.index)];
  modalImg.src = p.image;
  modalImg.alt = p.title;
  modalBadge.textContent = p.category;
  modalTitle.textContent = p.title;
  modalDesc.innerHTML =
    (p.detail && p.detail.trim() ? p.detail : `<p>${p.description}</p>`) +
    `<div class="modal-contact-cta">
      <a href="#contact" class="btn btn-fill modal-contact-link">Contact for more details</a>
    </div>`;
  backdrop.hidden = false;
  backdrop.scrollTop = 0;
  document.body.style.overflow = "hidden";
  if (lenis) lenis.stop();

  // Animate from the clicked card's position: start the modal transformed
  // to overlap the card, then release to identity on the next frame.
  const cardRect = card.getBoundingClientRect();
  const modalRect = modal.getBoundingClientRect();
  const dx = cardRect.left + cardRect.width / 2 - (modalRect.left + modalRect.width / 2);
  const dy = cardRect.top + cardRect.height / 2 - (modalRect.top + modalRect.height / 2);
  const scale = Math.max(0.25, cardRect.width / modalRect.width);

  modal.style.transition = "none";
  modal.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
  modal.style.opacity = "0.4";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modal.style.transition = "";
      modal.style.transform = "translate(0, 0) scale(1)";
      modal.style.opacity = "1";
      backdrop.classList.add("open");
    });
  });
}

function closeModal() {
  backdrop.classList.remove("open");
  modal.style.transform = "scale(0.92)";
  modal.style.opacity = "0";
  setTimeout(() => {
    backdrop.hidden = true;
    document.body.style.overflow = "";
    if (lenis) lenis.start();
    modal.style.transform = "";
    modal.style.opacity = "";
  }, 300);
}

modalDesc.addEventListener("click", (e) => {
  const link = e.target.closest(".modal-contact-link");
  if (!link) return;
  e.preventDefault();
  e.stopPropagation();
  closeModal();
  setTimeout(() => {
    const target = document.querySelector("#contact");
    if (!target) return;
    if (lenis) lenis.scrollTo(target, { offset: -70 });
    else target.scrollIntoView({ behavior: "smooth" });
  }, 320);
});

gridEl.addEventListener("click", (e) => {
  const card = e.target.closest(".product-card");
  if (card) openModal(card);
});
gridEl.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest(".product-card");
  if (card) {
    e.preventDefault();
    openModal(card);
  }
});

document.getElementById("modal-close").addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !backdrop.hidden) closeModal();
});

/* ---------- Training accordion ---------- */

function renderTrackContent(t) {
  if (t.intro) {
    // Track 04: an intro line followed by a nested sub-list.
    return `
      <p class="acc-intro">${t.intro}</p>
      <ul class="acc-list acc-sublist">
        ${t.subitems.map((s) => `<li><strong>${s.label}</strong> (${s.desc})</li>`).join("")}
      </ul>`;
  }
  return `
    <ul class="acc-list">
      ${t.items.map((s) => `<li><strong>${s.label}:</strong> ${s.desc}</li>`).join("")}
    </ul>`;
}

const accEl = document.getElementById("accordion");
accEl.innerHTML = trainingTracks
  .map(
    (t, i) => `
  <div class="acc-item" data-reveal>
    <button class="acc-header" aria-expanded="false" aria-controls="acc-panel-${i}">
      <span class="acc-num">${t.num}</span>
      <span class="acc-title">${t.title}</span>
      <span class="acc-icon" aria-hidden="true"></span>
    </button>
    <div class="acc-panel" id="acc-panel-${i}">
      <div class="acc-panel-inner">
        ${renderTrackContent(t)}
      </div>
    </div>
  </div>`
  )
  .join("");

function collapseItem(item) {
  item.classList.remove("open");
  item.querySelector(".acc-header").setAttribute("aria-expanded", "false");
  const panel = item.querySelector(".acc-panel");
  if (motionOn) {
    gsap.to(panel, { height: 0, duration: 0.45, ease: "power2.inOut" });
  } else {
    panel.style.maxHeight = "";
  }
}

function expandItem(item) {
  item.classList.add("open");
  item.querySelector(".acc-header").setAttribute("aria-expanded", "true");
  const panel = item.querySelector(".acc-panel");
  if (motionOn) {
    gsap.to(panel, {
      height: "auto",
      duration: 0.5,
      ease: "power2.inOut",
      // panels change the page height — reposition scroll triggers after
      onComplete: () => ScrollTrigger.refresh(),
    });
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

accEl.addEventListener("click", (e) => {
  const header = e.target.closest(".acc-header");
  if (!header) return;
  const item = header.parentElement;
  const wasOpen = item.classList.contains("open");

  // only one open at a time
  accEl.querySelectorAll(".acc-item.open").forEach(collapseItem);
  if (!wasOpen) expandItem(item);
});

/* ---------- Footer: product links + social icons ---------- */

document.getElementById("footer-product-links").innerHTML = products
  .map((p) => `<li><a href="#products">${p.title}</a></li>`)
  .join("");

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 11v5M8 8v.01M12 16v-5"/><path d="M16 16v-3a2 2 0 0 0-4 0"/></svg>',
  },
  {
    label: "X (Twitter)",
    href: TWITTER_URL,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l16 16M20 4 4 20"/></svg>',
  },
  {
    label: "Email",
    href: "mailto:trigunroboticsystems@gmail.com",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m2 7 10 7L22 7"/></svg>',
  },
];

document.getElementById("footer-social").innerHTML = SOCIAL_LINKS.map(
  (s) => `<a href="${s.href}" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${s.icon}</a>`
).join("");

/* ---------- Scroll reveal + stats count-up ---------- */

const statsCard = document.querySelector(".stats-card");

if (prefersReducedMotion) {
  // No animation: show everything, set final stat values immediately.
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("revealed"));
  statsCard.querySelectorAll("[data-count]").forEach((el) => {
    el.textContent = el.dataset.count;
  });
} else if (motionOn) {
  // GSAP + ScrollTrigger path.
  // Sibling groups animate as one staggered sequence; everything else
  // gets its own trigger.
  const staggerGroups = ["#pillars", "#product-grid", "#accordion"];
  const grouped = new Set();

  staggerGroups.forEach((sel) => {
    const parent = document.querySelector(sel);
    const items = Array.from(parent.children);
    items.forEach((el) => grouped.add(el));
    gsap.fromTo(
      items,
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: parent, start: "top 85%" },
      }
    );
  });

  // Stat items stagger inside the glass card.
  gsap.fromTo(
    statsCard.querySelectorAll(".stat"),
    { opacity: 0, y: 26 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: { trigger: statsCard, start: "top 88%" },
    }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    if (grouped.has(el)) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      }
    );
  });

  // Count-up via GSAP number tweening (snap keeps values integral).
  statsCard.querySelectorAll("[data-count]").forEach((el) => {
    gsap.to(el, {
      textContent: Number(el.dataset.count),
      duration: 1.4,
      ease: "power3.out",
      snap: { textContent: 1 },
      scrollTrigger: { trigger: statsCard, start: "top 88%", once: true },
    });
  });
} else {
  // Fallback path: IntersectionObserver + CSS transitions (CDN failed).
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll("[data-reveal]").forEach((el, i) => {
    el.style.setProperty("--reveal-delay", `${(i % 6) * 0.08}s`);
    revealObserver.observe(el);
  });

  const countUp = (el, target, duration = 1400) => {
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // cubic ease-out
      el.textContent = Math.round(eased * target);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll("[data-count]").forEach((el) => {
          countUp(el, Number(el.dataset.count));
        });
        statsObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );
  statsObserver.observe(statsCard);
}
