"use client";

import { useMemo, useState } from "react";
import { FadeInSection } from "@/components/FadeInSection";
import type { ExperienceItem } from "@/data/types";
import styles from "./ExperienceSection.module.css";

type ExperienceSectionProps = {
  items: ExperienceItem[];
  initialVisibleCount?: number;
};

export function ExperienceSection({
  items,
  initialVisibleCount = 2,
}: ExperienceSectionProps) {
  const initialVisibleHighlights = 3;
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedHighlights, setExpandedHighlights] = useState<Record<string, boolean>>({});

  const visibleItems = useMemo(() => {
    if (isExpanded) return items;
    return items.slice(0, initialVisibleCount);
  }, [initialVisibleCount, isExpanded, items]);

  const hiddenCount = Math.max(items.length - initialVisibleCount, 0);
  const shouldShowToggle = hiddenCount > 0;

  return (
    <>
      <div className={styles.timeline}>
        {visibleItems.map((item, index) => {
          const itemKey = `${item.role}-${item.organization}-${item.period}`;
          const isHighlightExpanded = expandedHighlights[itemKey] ?? false;
          const hiddenHighlightsCount = Math.max(
            item.highlights.length - initialVisibleHighlights,
            0,
          );
          const visibleHighlights = isHighlightExpanded
            ? item.highlights
            : item.highlights.slice(0, initialVisibleHighlights);

          return (
            <FadeInSection
              key={itemKey}
              className={styles.timelineItem}
              delayMs={index * 80}
            >
              <div className={styles.timelineMeta}>
                <span className={styles.timelinePeriod}>{item.period}</span>
                <span className={styles.timelineLocation}>{item.location}</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>{item.role}</h3>
                <p className={styles.timelineOrg}>{item.organization}</p>
                {visibleHighlights.length > 0 ? (
                  <ul className={styles.highlightList}>
                    {visibleHighlights.map((highlight) => (
                      <li key={highlight} className={styles.highlightItem}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {hiddenHighlightsCount > 0 ? (
                  <div className={styles.highlightActions}>
                    <button
                      type="button"
                      className={styles.highlightToggle}
                      onClick={() =>
                        setExpandedHighlights((current) => ({
                          ...current,
                          [itemKey]: !isHighlightExpanded,
                        }))
                      }
                      aria-expanded={isHighlightExpanded}
                    >
                      {isHighlightExpanded ? "Show fewer highlights" : "Show more highlights"}
                    </button>
                  </div>
                ) : null}
              </div>
            </FadeInSection>
          );
        })}
      </div>

      {shouldShowToggle ? (
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.toggleButton}
            onClick={() => setIsExpanded((current) => !current)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Show fewer experiences" : `Show ${hiddenCount} more experiences`}
          </button>
        </div>
      ) : null}
    </>
  );
}
