import Link from "next/link";
import { FadeInSection } from "@/components/FadeInSection";
import { ProjectCard } from "@/components/ProjectCard";
import { siteContent } from "@/data/siteContent";
import styles from "./page.module.css";

const { featuredProjects, moreProjects, profile } = siteContent;

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <FadeInSection className={styles.topBar}>
          <Link className={styles.backLink} href="/">
            Back to home
          </Link>
          <a className={styles.contactLink} href={`mailto:${profile.email}`}>
            Contact
          </a>
        </FadeInSection>

        <FadeInSection className={styles.hero} delayMs={60}>
          <span className={styles.eyebrow}>Projects archive</span>
          <h1 className={styles.title}>More analytics, BI, and data science work.</h1>
          <p className={styles.description}>
            This page collects a broader range of portfolio work beyond the featured
            selection on the homepage. Replace or expand any project in the shared
            content file as your portfolio grows.
          </p>
        </FadeInSection>

        <section className={styles.section}>
          <FadeInSection className={styles.sectionHeader}>
            <div>
              <span className={styles.eyebrow}>Featured</span>
              <h2 className={styles.sectionTitle}>Core portfolio projects.</h2>
            </div>
            <p className={styles.sectionCopy}>
              These are the strongest examples for recruiter review and homepage
              highlights.
            </p>
          </FadeInSection>

          <div className={styles.grid}>
            {featuredProjects.map((project, index) => (
              <FadeInSection
                key={project.title}
                delayMs={index * 90}
                className={styles.cardReveal}
              >
                <ProjectCard project={project} />
              </FadeInSection>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <FadeInSection className={styles.sectionHeader}>
            <div>
              <span className={styles.eyebrow}>More work</span>
              <h2 className={styles.sectionTitle}>Additional projects to explore.</h2>
            </div>
            <p className={styles.sectionCopy}>
              Supplementary work that shows range across forecasting, experimentation,
              text analytics, and dashboard design.
            </p>
          </FadeInSection>

          <div className={styles.grid}>
            {moreProjects.map((project, index) => (
              <FadeInSection
                key={project.title}
                delayMs={index * 90}
                className={styles.cardReveal}
              >
                <ProjectCard project={project} />
              </FadeInSection>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

