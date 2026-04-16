import Image from "next/image";
import Link from "next/link";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FadeInSection } from "@/components/FadeInSection";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { siteContent } from "@/data/siteContent";
import styles from "./page.module.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const {
    profile,
    about,
    education,
    experience,
    activities,
    featuredProjects,
    contactLinks,
  } = siteContent;

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.nav}>
          <a className={styles.brandBlock} href="#top" aria-label="Back to top">
            <span className={styles.brand}>{profile.name}</span>
            <span className={styles.brandMeta}>{profile.role}</span>
          </a>

          <nav className={styles.navLinks} aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} className={styles.navLink} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <details className={styles.menuToggle}>
            <summary>Menu</summary>
            <nav className={styles.menuPanel} aria-label="Mobile">
              {navItems.map((item) => (
                <a key={item.href} className={styles.navLink} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </header>

        <div className={styles.anchor} id="top" />
        <section className={styles.hero}>
          <FadeInSection className={styles.heroPanel}>
            <span className={styles.eyebrow}>Portfolio</span>
            <h1 className={styles.title}>{profile.headline}</h1>
            <p className={styles.roleLine}>{profile.role.replace(" and ", "  |  ")}</p>
            <p className={styles.subtitle}>{profile.shortBio}</p>

            <div className={styles.ctaRow}>
              <a className={styles.primaryButton} href="#projects">
                View Portfolio
              </a>
              <a className={styles.secondaryButton} href="#contact">
                Get in Touch
              </a>
            </div>
          </FadeInSection>

          <FadeInSection className={styles.heroAside} delayMs={120}>
            <div className={styles.chartCard}>
              <div className={styles.chartBars}>
                <span className={`${styles.chartBar} ${styles.chartBarOne}`} />
                <span className={`${styles.chartBar} ${styles.chartBarTwo}`} />
                <span className={`${styles.chartBar} ${styles.chartBarThree}`} />
                <span className={`${styles.chartBar} ${styles.chartBarFour}`} />
                <span className={styles.chartBadge} />
              </div>
              <div className={styles.chartDivider} />
              <div className={styles.chartLines}>
                <span className={`${styles.chartLine} ${styles.chartLineLong}`} />
                <span className={`${styles.chartLine} ${styles.chartLineMedium}`} />
                <span className={`${styles.chartLine} ${styles.chartLineShort}`} />
              </div>
            </div>
          </FadeInSection>
        </section>

        <div className={styles.sections}>
          <div className={styles.anchor} id="about" />
          <FadeInSection className={`${styles.sectionCard} ${styles.aboutSection}`}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutCopy}>
                <div className={`${styles.sectionHeader} ${styles.aboutHeader}`}>
                  <div>
                    <span className={styles.eyebrow}>About</span>
                    <h2 className={styles.sectionTitle}>Turning Data Into Direction.</h2>
                  </div>
                  <p className={styles.sectionDescription}>{about.intro}</p>
                </div>

                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={styles.aboutParagraph}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <aside className={styles.competencyPanel}>
                <h3 className={styles.competencyTitle}>Skills</h3>
                <div className={styles.competencyGrid}>
                  {about.capabilities.map((item, index) => (
                    <div key={item} className={styles.competencyItem}>
                      <span
                        className={`${styles.competencyDot} ${
                          [
                            styles.dotBlue,
                            styles.dotSlate,
                            styles.dotIndigo,
                            styles.dotPurple,
                            styles.dotGreen,
                            styles.dotOrange,
                          ][index % 6]
                        }`}
                      />
                      <span className={styles.competencyText}>{item}</span>
                    </div>
                  ))}
                </div>

                <details className={styles.funFactsPanel}>
                  <summary className={styles.funFactsSummary}>
                    <span className={styles.funFactsEyebrow}>Fun facts</span>
                    <span className={styles.funFactsPrompt}>A few things beyond data</span>
                  </summary>

                  <ul className={styles.funFactsList}>
                    {about.funFacts.map((fact) => (
                      <li key={fact} className={styles.funFactsItem}>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </details>
              </aside>
            </div>
          </FadeInSection>

          <div className={styles.anchor} id="education" />
          <FadeInSection className={`${styles.sectionCard} ${styles.educationSection}`}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.eyebrow}>Education</span>
                <h2 className={styles.sectionTitle}>Academic foundation in statistics and data science.</h2>
              </div>
            </div>

            <div className={styles.educationGrid}>
              {education.map((item, index) => (
                <FadeInSection
                  key={`${item.institution}-${item.degree}`}
                  className={styles.educationCard}
                  delayMs={index * 80}
                >
                  <span className={styles.educationPeriod}>{item.graduation}</span>
                  <h3 className={styles.educationTitle}>{item.institution}</h3>
                  <p className={styles.educationDegree}>{item.degree}</p>
                  {item.minor ? (
                    <p className={styles.educationMinor}>{item.minor}</p>
                  ) : null}
                  {item.coursework?.length ? (
                    <div className={styles.educationDetails}>
                      <span className={styles.educationLabel}>Relevant Coursework</span>
                      <div className={styles.educationCoursework}>
                        {item.coursework.map((course) => (
                          <span key={course} className={styles.courseworkChip}>
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </FadeInSection>
              ))}
            </div>
          </FadeInSection>

          <div className={styles.anchor} id="experience" />
          <FadeInSection className={`${styles.sectionCard} ${styles.experienceSection}`}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.eyebrow}>Experience</span>
                <h2 className={styles.sectionTitle}>Work Experience.</h2>
              </div>
            </div>

            <ExperienceSection items={experience} />
          </FadeInSection>

          <div className={styles.anchor} id="projects" />
          <FadeInSection className={`${styles.sectionCard} ${styles.projectsSection}`}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.eyebrow}>Projects</span>
                <h2 className={styles.sectionTitle}>Recent Projects.</h2>
              </div>
            </div>

            <div className={styles.projectsGrid}>
              {featuredProjects.map((project, index) => (
                <FadeInSection
                  key={project.title}
                  delayMs={index * 90}
                  className={styles.projectReveal}
                >
                  <ProjectCard project={project} />
                </FadeInSection>
              ))}
            </div>
            <div className={styles.sectionActions}>
              <Link className={styles.secondaryButton} href="/projects">
                Browse more projects
              </Link>
            </div>
          </FadeInSection>

          <div className={styles.anchor} id="activities" />
          <FadeInSection className={`${styles.sectionCard} ${styles.activitiesSection}`}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.eyebrow}>Activities</span>
                <h2 className={styles.sectionTitle}>Activities and Community Involvement.</h2>
              </div>
            </div>

            <div className={styles.activitiesGrid}>
              {activities.map((item, index) => (
                <FadeInSection
                  key={`${item.title}-${item.organization}`}
                  className={styles.activityCard}
                  delayMs={index * 80}
                >
                  <span className={styles.activityPeriod}>{item.period}</span>
                  <h3 className={styles.activityTitle}>{item.title}</h3>
                  <p className={styles.activityOrg}>{item.organization}</p>
                  <p className={styles.activityDescription}>{item.description}</p>
                </FadeInSection>
              ))}
            </div>
          </FadeInSection>

          <div className={styles.anchor} id="contact" />
          <FadeInSection className={`${styles.contactCard} ${styles.contactSection}`}>
            <div>
              <span className={styles.eyebrow}>Contact</span>
              <h2 className={styles.sectionTitle}>Open to analyst and data science roles.</h2>
              <p className={styles.sectionDescription}>{siteContent.contactLead}</p>
              <div className={styles.ctaRow}>
                <div className={styles.contactCtaGroup}>
                  <a className={styles.primaryButton} href={`mailto:${profile.email}`}>
                    Email {profile.name}
                  </a>
                  <div className={styles.pixelCatBadge} aria-hidden="true">
                    <Image
                      src="/contact/pixel-cat.svg"
                      alt=""
                      width={48}
                      height={48}
                      className={styles.pixelCatImage}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contactLinks}>
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  className={styles.contactLink}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  <span className={styles.contactLabel}>
                    <span className={styles.contactType}>{item.label}</span>
                    <span className={styles.contactValue}>{item.value}</span>
                  </span>
                  <span className={styles.contactType}>Open</span>
                </a>
              ))}
            </div>
          </FadeInSection>
        </div>

      </div>
      <ScrollToTopButton />
    </main>
  );
}
