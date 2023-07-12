import styles from "./css/Introduce.module.css"
import card from "./css/Card.module.css"
import Link from "next/link"

import LinkButton from "./LinkButton"

export default function Introduce() {
  return (
    <section className={`${card.cardContainer} ${card.card}`}>
      <h2 className={styles.introduceName}>
        안녕하세요, <br />
        <b>프론트엔드 개발자 천지인</b>입니다.
      </h2>

      <p className={card.content}>
        자바 기반의 풀스택 과정 중, 프론트엔드에 빠져 JavaScript, React,
        Next.js를 이용한 프로젝트들을 진행했습니다. 최근에는 빠르게 제품을
        만들고 시장에서 테스트하는
        <Link href="/"> MVP 개발</Link>과 적은 리소스로 높은 생산성을 가질 수
        있는 크로스 플랫폼인{" "}
        <Link href="https://github.com/jiin9999/rn-practice" target="_blank">
          React-Native
        </Link>
        에 관심이 많습니다.
      </p>

      <p className={card.content}>
        다른 직군과의 협업을 중시하며, 소통을 위해 개발뿐만 아니라{" "}
        <Link href="/">기획</Link>과{" "}
        <Link
          href="https://velog.io/@cji3604/%EA%BD%83%EB%82%B4%EB%9E%91%EB%8B%98%EC%9D%98-%ED%94%BC%EA%B7%B8%EB%A7%88-%EC%8A%A4%ED%84%B0%EB%94%94-%ED%9B%84%EA%B8%B0"
          target="_blank"
        >
          디자인
        </Link>
        에 대해서도 학습하고 있습니다. 협업을 통해 개인이라는 한계를 넘어
        시너지를 만들 수 있다고 믿습니다.
      </p>

      <div className={styles.buttonContainer}>
        <button>cji3604@gmail.com</button>
        <LinkButton type={"blog"} href={"https://velog.io/@cji3604"} />
        <LinkButton type={"github"} href={"https://github.com/jiin9999"} />
      </div>
    </section>
  )
}
