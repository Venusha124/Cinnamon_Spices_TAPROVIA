const fs = require('fs');

const html = fs.readFileSync('map.html', 'utf8');

// Regex to extract all path elements
const pathRegex = /<path d="([^"]+)" id="([^"]+)" name="([^"]+)">/g;
let match;
const districtsData = [];

while ((match = pathRegex.exec(html)) !== null) {
  districtsData.push({
    d: match[1],
    id: match[2],
    name: match[3]
  });
}

// Target districts with their approximate center coordinates in the 1000x1745 viewbox
const targetDistricts = {
  'Kuruṇægala': { cx: 400, cy: 900, label: 'Kurunegala' },
  'Gampaha': { cx: 280, cy: 1100, label: 'Gampaha' },
  'Kŏḷamba': { cx: 240, cy: 1200, label: 'Colombo' },
  'Kaḷutara': { cx: 280, cy: 1300, label: 'Kalutara' },
  'Ratnapura': { cx: 450, cy: 1250, label: 'Ratnapura' },
  'Badulla': { cx: 650, cy: 1100, label: 'Badulla' },
  'Mŏṇarāgala': { cx: 750, cy: 1250, label: 'Monaragala' },
  'Gālla': { cx: 350, cy: 1450, label: 'Galle' },
  'Mātara': { cx: 450, cy: 1520, label: 'Matara' },
  'Hambantŏṭa': { cx: 650, cy: 1450, label: 'Hambantota' }
};

let pathsJsx = districtsData.map(d => {
  return `            <path
              className={styles.land}
              d="${d.d}"
              id="${d.id}"
            />`;
}).join('\n');

let markersJsx = Object.keys(targetDistricts).map((key, index) => {
  const t = targetDistricts[key];
  return `            <g key="${t.label}">
              <circle cx="${t.cx}" cy="${t.cy}" r="15" className={\`\${styles.marker} \${isVisible ? styles.animate : ''}\`} style={{ transitionDelay: '${index * 0.1}s' }} />
              <text x="${t.cx + 25}" y="${t.cy + 10}" className={\`\${styles.markerText} \${isVisible ? styles.animate : ''}\`} style={{ transitionDelay: '${index * 0.1 + 0.05}s' }}>${t.label}</text>
            </g>`;
}).join('\n');

// Path for the spice journey
// From Badulla(650,1100) -> Ratnapura(450,1250) -> Galle(350,1450) -> Colombo(240,1200) -> Delivery(100,800)
const animatedPath = `M 650 1100 Q 550 1200 450 1250 Q 350 1350 350 1450 Q 250 1350 240 1200 Q 150 1000 100 800`;

const componentCode = `'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './InteractiveMap.module.css';

export default function InteractiveMap() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Origin Story</span>
          <h2 className={styles.title}>
            Journey of the <span className="italic text-muted">Spice.</span>
          </h2>
        </div>

        <div className={styles.mapContainer}>
          <svg viewBox="0 0 1000 1745" className={styles.mapSvg}>
            {/* Sri Lanka Districts */}
${pathsJsx}
            
            {/* Animated Path */}
            <path
              className={\`\${styles.path} \${isVisible ? styles.animate : ''}\`}
              d="${animatedPath}"
            />
            
            {/* Markers */}
${markersJsx}

            {/* Global Delivery Marker */}
            <g>
              <circle cx="100" cy="800" r="20" className={\`\${styles.marker} \${styles.globalMarker} \${isVisible ? styles.animate : ''}\`} style={{ transitionDelay: '1.5s' }} />
              <text x="30" y="750" className={\`\${styles.markerText} \${styles.globalText} \${isVisible ? styles.animate : ''}\`} style={{ transitionDelay: '1.6s' }}>Global Delivery</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/app/components/InteractiveMap.tsx', componentCode);
console.log('Successfully generated InteractiveMap.tsx');
