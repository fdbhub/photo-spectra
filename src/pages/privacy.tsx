import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./privacy.module.css";

interface Section {
  icon: string;
  title: string;
  content: string[];
}

const privacySections: Section[] = [
  {
    icon: "🛡️",
    title: "Our Privacy Philosophy",
    content: [
      "PhotoSpectra is designed with privacy as a core principle:",
      "- Your photos stay on your device until you choose to sync",
      "- We don't collect or store your personal data",
      "- No analytics, tracking, or advertising",
      "- You control which servers you connect to",
      "- All data transmission is encrypted",
    ],
  },
  {
    icon: "❌",
    title: "Data We Do NOT Collect",
    content: [
      "PhotoSpectra does NOT collect, store, or transmit:",
      "- Your photos or videos (except when you explicitly sync to your PhotoPrism server)",
      "- Your personal information",
      "- Usage analytics or telemetry",
      "- Device identifiers for tracking",
      "- Location data (except what's already in your photo metadata)",
      "- Contacts or other personal data",
      "- Advertising identifiers",
    ],
  },
  {
    icon: "📱",
    title: "Data Stored Locally on Your Device",
    content: [
      "PhotoSpectra stores the following data locally on your device only:",
      "• Authentication Data: Server URLs, usernames, passwords (secure storage), session tokens",
      "• Application Settings: Sync preferences, server configurations, app preferences",
      "• Sync State Data: SHA1 hashes of synced photos, sync status, last sync timestamps",
      "Important: All this data is stored locally on your device and is never transmitted to us or any third party (except your PhotoPrism server when syncing).",
    ],
  },
  {
    icon: "🔄",
    title: "Data Transmitted to Your PhotoPrism Server",
    content: [
      "When you use PhotoSpectra to sync photos, the following data is transmitted directly to your PhotoPrism server (not to us):",
      "• Photos and Videos: The media files you choose to sync",
      "• Metadata: EXIF data, location information, and other metadata embedded in your photos",
      "• Authentication Credentials: Your username and password for server authentication",
      "Important: This data goes directly from your device to your PhotoPrism server. PhotoSpectra acts only as a client application and does not intercept, store, or process this data.",
    ],
  },
  {
    icon: "🔒",
    title: "Data Security",
    content: [
      "We take security seriously:",
      "• Secure Storage: Passwords and tokens are stored using platform-native secure storage mechanisms",
      "• No Cloud Storage: PhotoSpectra does not use any cloud services to store your data",
      "• Local Processing: All photo processing and hash calculations happen locally on your device",
    ],
  },
  {
    icon: "✋",
    title: "Your Rights and Control",
    content: [
      "You have complete control over your data:",
      "• Access: All your data is stored locally on your device and accessible to you",
      "• Deletion: Uninstalling the app removes all locally stored data",
      "• Export: You can manually access your PhotoPrism servers to export your synced photos",
      "• Server Management: You can add or remove servers at any time",
      "• Sync Control: You control when and what to sync",
    ],
  },
  {
    icon: "🌐",
    title: "Third-Party Services",
    content: [
      "PhotoPrism: PhotoSpectra connects to PhotoPrism servers that you configure. We do not control these servers or their privacy practices. Please review the privacy policy of your PhotoPrism server administrator.",
      "No Other Third Parties: PhotoSpectra does not integrate with any other third-party services, analytics platforms, or advertising networks.",
    ],
  },
];

function PrivacySection({ icon, title, content }: Section) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionIcon}>{icon}</span>
        <Heading as="h2" className={styles.sectionTitle}>
          {title}
        </Heading>
      </div>
      <div className={styles.sectionContent}>
        {content.map((paragraph, idx) => (
          <p key={idx} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Privacy(): ReactNode {
  return (
    <Layout
      title="Privacy Policy"
      description="PhotoSpectra Privacy Policy - How we handle your data with complete transparency"
    >
      <div className={styles.privacyPage}>
        <header className={styles.pageHeader}>
          <div className="container">
            <Heading as="h1" className={styles.pageTitle}>
              Privacy Policy
            </Heading>
            <p className={styles.lastUpdated}>
              Last Updated: February 28, 2026
            </p>
            <p className={styles.pageSubtitle}>
              PhotoSpectra is committed to protecting your privacy. This Privacy
              Policy explains how PhotoSpectra handles your data when you use
              our mobile application.
            </p>
          </div>
        </header>

        <main className={styles.mainContent}>         
          <div className="container">
            {privacySections.map((section, idx) => (
              <PrivacySection key={idx} {...section} />
            ))}

            <div className={styles.complianceSection}>
              <Heading as="h2" className={styles.complianceTitle}>
                Compliance
              </Heading>
              <div className={styles.complianceGrid}>
                <div className={styles.complianceCard}>
                  <div className={styles.complianceIcon}>🇪🇺</div>
                  <h3>GDPR</h3>
                  <p>General Data Protection Regulation compliant</p>
                </div>
                <div className={styles.complianceCard}>
                  <div className={styles.complianceIcon}>🇺🇸</div>
                  <h3>CCPA</h3>
                  <p>California Consumer Privacy Act compliant</p>
                </div>
                <div className={styles.complianceCard}>
                  <div className={styles.complianceIcon}>🔒</div>
                  <h3>Privacy by Design</h3>
                  <p>Built with privacy as a core principle</p>
                </div>
              </div>
            </div>

            <div className={styles.summarySection}>
              <Heading as="h2" className={styles.summaryTitle}>
                In Simple Terms
              </Heading>
              <div className={styles.summaryContent}>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryNumber}>1</span>
                  <p>
                    PhotoSpectra is a client app that connects your device to
                    your PhotoPrism server
                  </p>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryNumber}>2</span>
                  <p>
                    We don't collect, store, or have access to your photos or
                    personal data
                  </p>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryNumber}>3</span>
                  <p>
                    All data stays on your device or goes directly to your
                    PhotoPrism server
                  </p>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryNumber}>4</span>
                  <p>You have complete control over your data</p>
                </div>
              
              </div>
            </div>

            <div className={styles.contactSection}>
              <Heading as="h2" className={styles.contactTitle}>
                Contact us
              </Heading>
              <p className={styles.contactDescription}>
               If you have any questions, You can contact us:
              </p>
              <address className={styles.contactInfo}>
                By email: <a href="mailto:fccsoftware@proton.me">fccsoftware@proton.me</a>
              </address>        
            </div>

            <div className={styles.contactSection}>
              <Heading as="h2" className={styles.contactTitle}>
                Questions?
              </Heading>
              <p className={styles.contactDescription}>
                If you have questions about this Privacy Policy or
                PhotoSpectra's privacy practices, please open an issue on
                GitHub.
              </p>
              <a
                href="https://github.com/fdbhub/photo-spectra/issues"
                className="button button--primary button--lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us on GitHub
              </a>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
