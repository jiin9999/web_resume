import Link from "next/link"
import styles from "./css/Project.module.css"
import card from "./css/Card.module.css"
import LinkButton from "./LinkButton"
import Image from "next/image"

export default function Project() {
  return (
    <section className={`${card.cardContainer} ${card.card}`}>
      <h2 className={styles.project}>프로젝트</h2>
      <h3 className={styles.projectTitle}>Window 98 Todo Web</h3>
      <div className={styles.projectImage}>
        {/* Todo: 아래 이미지 태그는 캐러셀로 바꾸기! */}
        <Image
          src="/projectImage/window98Login.avif"
          alt="윈도우 98 컨셉 프로젝트 소개 이미지"
          fill={true}
        ></Image>
      </div>

      <div className={styles.projectButtonContainer}>
        <LinkButton
          type={"link"}
          href={"https://github.com/jiin9999/windows98_todolist"}
        />
        <LinkButton
          type={"github"}
          href={"https://github.com/jiin9999/windows98_todolist"}
        />
      </div>

      <div className={styles.projectIntroduce}>
        <h4 className={styles.projectIntroduceTitle}>간단 소개</h4>
        <p className={styles.projectIntroduceContent}>
          React와 TypeScript를 이용해 구현한 개인 프로젝트입니다.
        </p>
      </div>

      <div className={styles.projectIntroduce}>
        <h4 className={styles.projectIntroduceTitle}>사용 기술</h4>
        <p className={styles.projectIntroduceContent}>
          React, TypeScript, Redux Toolkit, Firebase Hosting, FireStore, Axios,
          Styled-Components
        </p>
      </div>

      <div className={styles.projectIntroduce}>
        <h4 className={styles.projectIntroduceTitle}>주요 작업</h4>
        <ul className={styles.projectIntroduceContent}>
          <li>FireStore를 이용해 풀스택으로 구현</li>
          <li>웹 API를 이용해 사용자의 위치를 받아 날씨를 출력하도록 구현</li>
          <li>
            로그인 시 입력한 이름마다 다른 Todo를 DB에 저장하도록 CRUD를 구현
          </li>
          <li>
            윈도우 창을 드래그하는 기능을 Custom Hook으로 바꿔 중복 코드를 감소,
            확장성을 개선
          </li>
        </ul>
      </div>

      {/* <h3>쓰쓰또쓰</h3>
      <div>2023.05 ~ 2023.05</div> */}
      {/* <Image src=""></Image> */}
    </section>
  )
}
