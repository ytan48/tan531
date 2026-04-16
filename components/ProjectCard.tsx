import Image from "next/image";
import type { ProjectItem } from "@/data/types";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: ProjectItem;
};

function getPreviewVariant(project: ProjectItem) {
  const haystack = `${project.title} ${project.tags.join(" ")}`.toLowerCase();

  if (haystack.includes("forecast")) return styles.variantForecast;
  if (
    haystack.includes("churn") ||
    haystack.includes("model") ||
    haystack.includes("segmentation")
  ) {
    return styles.variantModel;
  }
  if (
    haystack.includes("topic") ||
    haystack.includes("text") ||
    haystack.includes("nlp")
  ) {
    return styles.variantText;
  }

  return styles.variantDashboard;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const previewVariant = getPreviewVariant(project);
  const hasPreviewImage = Boolean(project.previewImage);
  const imageSrc = project.previewImage?.startsWith("http")
    ? project.previewImage
    : `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${project.previewImage ?? ""}`;

  return (
    <article className={styles.card}>
      {hasPreviewImage ? (
        <div className={styles.previewImageFrame}>
          <Image
            src={imageSrc}
            alt={`${project.title} preview`}
            fill
            className={styles.previewImage}
            sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className={`${styles.preview} ${previewVariant}`} aria-hidden="true">
          <div className={styles.previewTopRow}>
            <span className={styles.previewBadge} />
            <span className={styles.previewPill} />
            <span className={styles.previewPillShort} />
          </div>

          <div className={styles.previewMetricRow}>
            <span className={styles.previewMetric} />
            <span className={styles.previewMetric} />
            <span className={styles.previewMetricWide} />
          </div>

          <div className={styles.previewChart}>
            <span className={`${styles.previewBar} ${styles.previewBarOne}`} />
            <span className={`${styles.previewBar} ${styles.previewBarTwo}`} />
            <span className={`${styles.previewBar} ${styles.previewBarThree}`} />
            <span className={`${styles.previewBar} ${styles.previewBarFour}`} />
            <span className={styles.previewLine} />
          </div>
        </div>
      )}

      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>
      </div>

      <div className={styles.tagList}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {project.links.length > 0 ? (
        <div className={styles.linkRow}>
          {project.links.map((link) => (
            <a
              key={`${project.title}-${link.label}`}
              className={styles.textButton}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
