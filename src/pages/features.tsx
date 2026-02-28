import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./features.module.css";

interface Feature {
  icon: string;
  title: string;
  description: string;
  items: string[];
}

const featuresList: Feature[] = [
  {
    icon: "🔒",
    title: "Local Photo Access & Management",
    description:
      "Access your entire photo library directly from your device with full privacy control.",
    items: [
      "Complete Library Access: Browse all photos and videos stored on your device",
      "Album Organization: View photos organized by albums, just like in your native gallery",
      "Local Folders: Access photos from DCIM and other local folders",
      "Privacy First: Your photos remain on your device until you explicitly choose to sync",
    ],
  },
  {
    icon: "🔄",
    title: "Smart Synchronization",
    description:
      "Intelligent sync with PhotoPrism using SHA1-based deduplication.",
    items: [
      "SHA1 Hash Verification: Each photo is uniquely identified by its SHA1 hash",
      "No Duplicates: Automatically detects and skips photos already on the server",
      "Selective Sync: Choose which photos to sync - manual or automatic",
      "Sync Status Indicators: Pending, Synchronized, Verifying",
      "Pull to Refresh: Quickly update sync status for all photos",
    ],
  },
  {
    icon: "📱",
    title: "Full Media Format Support",
    description: "PhotoSpectra handles all your media types seamlessly.",
    items: [
      "Photos: JPEG, PNG, HEIC, and more",
      "Videos: MP4, MOV, and other common formats",
      "Live Photos: Full support for iOS Live Photos with all associated files",
      "RAW Images: Support for professional camera RAW formats",
      "Metadata Preservation: All EXIF data and metadata is preserved during sync",
    ],
  },
  {
    icon: "📊",
    title: "Rich Metadata Viewer",
    description: "View detailed information about your photos and media.",
    items: [
      "EXIF Data: Camera settings, ISO, aperture, shutter speed",
      "Location Information: GPS coordinates and location data",
      "Date & Time: Capture date and time information",
      "File Details: Size, format, dimensions, and more",
      "Camera Information: Device model and camera specifications",
    ],
  },
  {
    icon: "🖼️",
    title: "Remote Album Browsing",
    description:
      "Access and browse your PhotoPrism server albums directly from the app.",
    items: [
      "Server Albums: View all albums stored on your PhotoPrism server",
      "Photo Count: See how many photos are in each album",
      "Album Thumbnails: Visual preview of album contents",
      "Full-Screen Viewer: View server photos in high quality",
    ],
  },
  {
    icon: "🌐",
    title: "Multi-Server Support",
    description:
      "Connect and manage multiple PhotoPrism servers from a single app.",
    items: [
      "Multiple Connections: Add as many PhotoPrism servers as you need",
      "Server Switching: Easily switch between different servers",
      "Independent Management: Each server maintains its own sync state",
      "Perfect for Families: Manage personal and family photo libraries separately",
    ],
  },
  {
    icon: "⚡",
    title: "Background Synchronization",
    description:
      "Set it and forget it - your photos sync automatically in the background.",
    items: [
      "24-Hour Auto-Sync: Configurable automatic sync every 24 hours",
      "WiFi Only Option: Save mobile data by syncing only on WiFi",
    ],
  },
  {
    icon: "🎯",
    title: "Advanced Features",
    description: "Additional powerful features for power users.",
    items: [
      "Filter Options: Filter photos by sync status",
      "Batch Operations: Sync multiple photos at once",
      "Progress Tracking: Real-time upload progress for each photo",
      "Error Handling: Clear error messages and retry options"
    ],
  },
];

function FeatureSection({ icon, title, description, items }: Feature) {
  return (
    <div className={styles.featureSection}>
      <div className={styles.featureHeader}>
        <span className={styles.featureIcon}>{icon}</span>
        <div>
          <Heading as="h2" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
      <ul className={styles.featureList}>
        {items.map((item, idx) => {
          const [label, ...rest] = item.split(":");
          const content = rest.join(":");
          return (
            <li key={idx} className={styles.featureItem}>
              {content ? (
                <>
                  <strong>{label}:</strong>
                  {content}
                </>
              ) : (
                label
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Features(): ReactNode {
  return (
    <Layout
      title="Features"
      description="Explore all the powerful features of PhotoSpectra - your private photo library manager"
    >
      <div className={styles.featuresPage}>
        <header className={styles.pageHeader}>
          <div className="container">
            <Heading as="h1" className={styles.pageTitle}>
              Features
            </Heading>
            <p className={styles.pageSubtitle}>
              PhotoSpectra is a comprehensive photo management solution that
              puts you in control of your photo library. Explore everything you
              can do with PhotoSpectra.
            </p>
          </div>
        </header>

        <main className={styles.mainContent}>
          <div className="container">
            {featuresList.map((feature, idx) => (
              <FeatureSection key={idx} {...feature} />
            ))}
          </div>
        </main>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <Heading as="h2" className={styles.ctaTitle}>
                Ready to Get Started?
              </Heading>
              <p className={styles.ctaDescription}>
                Experience all these features today with PhotoSpectra
              </p>
              <a
                href="/docs/intro"
                className="button button--primary button--lg"
              >
                Read Documentation
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
