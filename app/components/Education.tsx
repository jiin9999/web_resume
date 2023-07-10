import card from "./css/Card.module.css"
import styles from "./css/Education.module.css"

export default function Education() {
  return (
    <section className={`${card.cardContainer} ${card.card}`}>
      <h2 className={card.title}>학력 및 교육</h2>
      <h3 className={styles.educationName}>
        프론트엔드 과정
        <span className={styles.educationPlace}>코드 스테이츠</span>
      </h3>
      <p className={styles.educationPeriod}>2022.12 ~ 2023.06</p>

      <h3 className={styles.educationName}>
        자바 풀스택 과정
        <span className={styles.educationPlace}>KH 정보교육원</span>
      </h3>
      <p className={styles.educationPeriod}>2022.06 ~ 2022.11</p>

      <h3 className={styles.educationName}>
        한국외국어대학교 글로벌캠퍼스
        <span className={styles.educationPlace}>
          Global Business & Technology 전공
        </span>
      </h3>
      <p className={styles.educationPeriod}>2015.03 ~ 2021.08</p>
    </section>
  )
}
