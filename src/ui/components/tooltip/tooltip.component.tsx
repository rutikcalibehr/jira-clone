import { useState } from "react";
import styles from "./tooltip.module.scss";

export const Tooltip = ({ title, children }: TooltipProps): JSX.Element => {
  const [ isVisible, setIsVisible ] = useState<boolean>(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div className={styles.container}>
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        {children}
      </div>
      <div className={`${styles.tooltip} ${isVisible && styles.visible}`}>
        <div className={styles.content}>
          {title}
        </div>
      </div>
    </div>
  )
}

interface TooltipProps {
  title: string;
  children: JSX.Element;
}