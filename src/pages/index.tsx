import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

interface FeatureItem {
  title: string;
  icon: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "Local Photo Access",
    icon: "🔒",
    description:
      "Access and manage your entire photo library directly from your device. Your photos stay on your device until you choose to sync them.",
  },
  {
    title: "Smart Sync",
    icon: "🔄",
    description:
      "SHA1-based deduplication ensures you never upload the same photo twice. Intelligent sync with PhotoPrism keeps everything organized.",
  },
  {
    title: "Full Media Support",
    icon: "📱",
    description:
      "Photos, videos, live photos - PhotoSpectra handles all your media formats seamlessly, preserving quality and metadata.",
  },
  {
    title: "Rich Metadata Viewer",
    icon: "📊",
    description:
      "View detailed information about your photos including EXIF data, location, camera settings, and more.",
  },
  {
    title: "Multi-Server Support",
    icon: "🌐",
    description:
      "Connect to multiple PhotoPrism servers. Perfect for managing personal and family photo libraries separately.",
  },

  {
    title: "Background Sync",
    icon: "⚡",
    description:
      "Set it and forget it. Automatic background synchronization keeps your photos backed up without manual intervention.",
  },
];

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            Securely manage and sync your photos with PhotoPrism. Take control
            of your memories with local access, intelligent deduplication, and
            seamless multi-server support.
          </p>
          <div className={styles.heroButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Get Started →
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="/features"
            >
              View Features
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4", styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Key Features
          </Heading>
          <p className={styles.sectionSubtitle}>
            Everything you need to manage your photo library privately and
            efficiently
          </p>
        </div>
        <div className="row">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <Heading as="h2" className={styles.ctaTitle}>
            Ready to Get Started?
          </Heading>
          <p className={styles.ctaDescription}>
            Take control of your photo library today with PhotoSpectra
          </p>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Read Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Securely manage and sync your photos with PhotoPrism. Local access, smart deduplication, and multi-server support."
    >
      <HeroSection />
      <main>
        <FeaturesSection />
        <CTASection />
      </main>
    </Layout>
  );
}
