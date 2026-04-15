import type { ProjectItem } from "@/data/types";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
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
    </article>
  );
}
