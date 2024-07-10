import styles from "./index.module.css";

type Props = {
  href: string;
  children: React.ReactNode;// React.ReactNode[]で指定すると、「子要素が2つ以上」とルールづけされる
}

export default function ButtonLink({ href, children }: Props) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  )
}