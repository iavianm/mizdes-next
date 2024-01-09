import styles from "./DevelopBlock.module.css";

type TextContent = {
  title: string;
  subtitle: string;
  items: Array<string>;
};

type Props = {
  content: TextContent;
};

function DevelopBlock({ content }: Props) {
  const { title, subtitle, items } = content;

  return (
    <div className={styles.dev__section}>
      <h2 className={styles.dev__title}>{title}</h2>
      <div className={styles.dev__content}>
        <p className={styles.dev__subtitle}>{subtitle}</p>
        <div className={styles.dev__options}>
          {items.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DevelopBlock;
