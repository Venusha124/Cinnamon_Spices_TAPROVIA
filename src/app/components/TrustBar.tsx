import styles from './TrustBar.module.css';

const certifications = [
  { id: 1, text: "100% Pure Ceylon", icon: <CheckCircleIcon /> },
  { id: 2, text: "Organic Certified", icon: <LeafIcon /> },
  { id: 3, text: "Fair Trade", icon: <HandshakeIcon /> },
  { id: 4, text: "Non-GMO", icon: <ShieldIcon /> },
  { id: 5, text: "Single Origin", icon: <MapPinIcon /> },
];

export default function TrustBar() {
  // We duplicate the items to create a seamless infinite scrolling effect
  const displayItems = [...certifications, ...certifications];

  return (
    <div className={styles.trustBar}>
      <div className={styles.scrollContainer}>
        {displayItems.map((cert, index) => (
          <div key={`${cert.id}-${index}`} className={styles.item}>
            <span className={styles.icon}>{cert.icon}</span>
            <span>{cert.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Icons
function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
      <path d="m21 3-6 6"></path>
      <path d="m21 14-6 6"></path>
      <path d="m3 21 6-6"></path>
      <path d="m3 10 6 6"></path>
      <path d="m10 3-6 6"></path>
      <path d="m10 14-6 6"></path>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}
