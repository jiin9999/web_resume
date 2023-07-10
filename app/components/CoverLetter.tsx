import Link from "next/link"
import card from "./css/Card.module.css"
import styles from "./css/CoverLetter.module.css"

export default function CoverLetter() {
  return (
    <section className={`${card.cardContainer} ${card.card}`}>
      <h2 className={styles.coverLetter}>자기소개서</h2>
      <h3 className={styles.coverLetterTitle}>실행력</h3>
      <p className={styles.coverLetterContent}>
        저는 빠른 실행력으로{" "}
        <span className={styles.bold}>소비자가 원하는 것을 만드는 개발자</span>
        가 되기 위해 노력하고 있습니다. 시장에 맞춰 빠르게 배워 필요한 기능을
        만들어내는 것이 중요하다고 생각합니다. 이를 위해 새로운 도구나 방법을
        학습하는 것을 꺼리지 않으며, 그것이 더 나은 결과를 가져올 수 있다면
        적극적으로 받아들입니다.
      </p>

      <p className={styles.coverLetterContent}>
        현재는 시장 가설을 빠르게 검증할 수 있는 효율적인 도구인 크로스 플랫폼,
        <Link href="/">React Native에 대해 학습</Link>하고 있습니다. 이를 통해
        개발 리소스를 줄이고 효율성을 높여, 사용자의 요구를 더 빠르고 정확하게
        반영할 수 있게 될 것을 기대하고 있습니다.
      </p>

      <h3 className={styles.coverLetterTitle}>회사와 함께 성장</h3>
      <p className={styles.coverLetterContent}>
        저는{" "}
        <span className={styles.bold}>
          &apos;왜&apos;라는 질문을 통해 기술의 깊이 있는 이해를 추구하는 개발자
        </span>
        가 되기 위해 노력하고 있습니다. &apos;왜 이 기술을 선택해야
        하는지&apos;, &apos;왜 이렇게 동작하는지&apos;와 같은 질문을 통해
        기술적으로 깊이있게 고민하고 더 나은 방법을 고민합니다.
      </p>

      <p className={styles.coverLetterContent}>
        이를 위해, 기술적인 깊이를 더하는 것을 중요하게 생각하며, 실제로
        스터디를 통해{" "}
        <Link href="/">자바스크립트에 정말로 딥 다이브 해보는 경험</Link>을 하고
        있습니다. 저의 목표는 지속적인 학습을 통해 배운 것을 서비스에 적용하고,
        빠르게 변하는 기술 트렌드에 맞춰 회사와 함께 나아가는 것, 이를 통해{" "}
        <span className={styles.bold}>회사와 함께 성장하는 개발자</span>가 되는
        것입니다.
      </p>
    </section>
  )
}
