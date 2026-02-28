import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./roadmap.module.css";

interface RoadmapItem {
  title: string;
  items: string[];
}

interface Phase {
  phase: string;
  title: string;
  status: "completed" | "in-progress" | "planned";
  items: RoadmapItem[];
}

const roadmapPhases: Phase[] = [
  {
    phase: "Phase 1",
    title: "Core Functionality",
    status: "completed",
    items: [
      {
        title: "Authentication & Connection",
        items: [
          "PhotoPrism server authentication",
          "Secure credential storage",
          "Multi-server support",
          "Session management",
        ],
      },
      {
        title: "Photo Management",
        items: [
          "Local photo library access",
          "SHA1-based deduplication",
          "Manual photo sync",
          "Sync status indicators",
        ],
      },
      {
        title: "Advanced Features",
        items: [
          "Background synchronization",
          "Remote album browsing",
          "Full media format support (photos, videos, live photos)",
          "Rich metadata viewer",
        ],
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Enhanced User Experience",
    status: "in-progress",
    items: [
      {
        title: "Performance",
        items: [
          "Optimizations for large photo libraries",
          "Improved caching strategies",
          "Faster sync operations",
        ],
      },
      {
        title: "User Interface",
        items: [
          "Enhanced filtering and search capabilities",
          "Improved error handling and user feedback",
        ],
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Enhanced Organization",
    status: "planned",
    items: [
      {
        title: "Organization Tools",
        items: [
          "Local Album Creation: Create and manage albums locally before syncing",
          "Tagging System: Add tags to photos before upload",
          "Favorites Management: Mark and sync favorite photos",
          "Smart Collections: Auto-organize photos by date, location, or type",
          "Search Functionality: Search photos by metadata, date, or location",
        ],
      },
    ],
  },
  {
    phase: "Phase 4",
    title: "Media Enhancements",
    status: "planned",
    items: [
      {
        title: "Editing & Export",
        items: [
          "Photo Editing: Basic editing tools (crop, rotate, filters)",
          "Video Trimming: Trim videos before upload",
          "Slideshow Creator: Create slideshows from albums",
          "Export Options: Export photos with custom settings",
        ],
      },
    ],
  },
];

function StatusBadge({ status }: { status: Phase["status"] }) {
  const statusConfig = {
    completed: { label: "Completed", className: styles.statusCompleted },
    "in-progress": { label: "In Progress", className: styles.statusInProgress },
    planned: { label: "Planned", className: styles.statusPlanned },
  };

  const config = statusConfig[status];

  return (
    <span className={`${styles.statusBadge} ${config.className}`}>
      {config.label}
    </span>
  );
}

function PhaseSection({ phase, title, status, items }: Phase) {
  return (
    <div className={styles.phaseSection}>
      <div className={styles.phaseHeader}>
        <div className={styles.phaseInfo}>
          <span className={styles.phaseLabel}>{phase}</span>
          <Heading as="h2" className={styles.phaseTitle}>
            {title}
          </Heading>
        </div>
        <StatusBadge status={status} />
      </div>

      <div className={styles.phaseContent}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.itemGroup}>
            {item.title && (
              <h3 className={styles.itemGroupTitle}>{item.title}</h3>
            )}
            <ul className={styles.itemList}>
              {item.items.map((feature, featureIdx) => (
                <li key={featureIdx} className={styles.item}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Roadmap(): ReactNode {
  return (
    <Layout
      title="Roadmap"
      description="Future plans and upcoming features for PhotoSpectra - your private photo library manager"
    >
      <div className={styles.roadmapPage}>
        <header className={styles.pageHeader}>
          <div className="container">
            <Heading as="h1" className={styles.pageTitle}>
              Roadmap
            </Heading>
            <p className={styles.pageSubtitle}>
              PhotoSpectra is actively being developed with exciting new
              features planned. Here's what we're working on and what's coming
              next.
            </p>
          </div>
        </header>

        <main className={styles.mainContent}>
          <div className="container">
            <div className={styles.timeline}>
              {roadmapPhases.map((phase, idx) => (
                <PhaseSection key={idx} {...phase} />
              ))}
            </div>

            <div className={styles.feedbackSection}>
              <Heading as="h2" className={styles.feedbackTitle}>
                Have an Idea?
              </Heading>
              <p className={styles.feedbackDescription}>
                We'd love to hear your feature requests and suggestions!
              </p>
              <a
                href="https://github.com/fdbhub/photo-spectra/issues"
                className="button button--primary button--lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Feature Request
              </a>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
