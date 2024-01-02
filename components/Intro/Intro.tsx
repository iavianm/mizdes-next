import styles from "./Intro.module.css";
import Link from "next/link";
import { Button } from "antd";

type IntroContent = {
  title: string;
  subtitle: string;
  description: string;
  features: Array<string>;
  buttonLabel: string;
  buttonLink: string;
  featureIconSrc: string;
};

type Props = {
  content: IntroContent;
};

const Intro = ({ content }: Props) => {
  const {
    title,
    subtitle,
    description,
    features,
    buttonLabel,
    buttonLink,
    featureIconSrc,
  } = content;

  return (
    <section className={styles.intro__section}>
      <div className={styles.intro__opacity}></div>
      <div className={styles.intro__content}>
        <h3>{title}</h3>
        <h1>{subtitle}</h1>
        <p>{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className={styles.intro__feature}>
              <img src={featureIconSrc} alt={feature} />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          type="primary"
          href={buttonLink}
          className={styles.intro__button}
        >
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
};

export default Intro;
