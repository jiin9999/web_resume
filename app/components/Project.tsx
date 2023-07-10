import Link from "next/link"
import styles from "./css/Project.module.css"
import card from "./css/Card.module.css"
import Image from "next/image"

import LinkButton from "./LinkButton"
import ProjectCarousel from "./ProjectCarousel"

export default function Project() {
  return (
    <section className={`${card.cardContainer} ${card.card}`}>
      <h2 className={card.title}>프로젝트</h2>
      <h3 className={card.subTitle}>Window 98 Todo Web</h3>
      <p className={styles.projectPeriod}>2023.03 ~ </p>
      <ProjectCarousel
        imageNames={[
          "window98Login",
          "window98Login",
          "window98Login",
          "window98Login",
        ]}
      />

      <div className={styles.projectButtonContainer}>
        <LinkButton
          type={"link"}
          href={"https://windows98-todo-8c748.web.app/"}
        />
        <LinkButton
          type={"github"}
          href={"https://github.com/jiin9999/windows98_todolist"}
        />
      </div>

      <div className={styles.projectIntroduce}>
        <h4 className={styles.projectIntroduceTitle}>간단 소개</h4>
        <p className={styles.projectIntroduceContent}>
          React와 TypeScript를 이용해 구현한 개인 프로젝트입니다. ()
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

      <h3 className={card.title}>쓰레기 재활용 커뮤니티 프로젝트</h3>
      <p className={styles.projectPeriod}>2023.05 ~ 2023.05</p>

      <div className={styles.projectButtonContainer}>
        <LinkButton type={"link"} href={"https://ssdss.vercel.app/"} />
        <LinkButton
          type={"github"}
          href={"https://github.com/codestates-seb/seb43_main_008"}
        />
      </div>

      <div className={styles.projectIntroduce}>
        <h4 className={styles.projectIntroduceTitle}>간단 소개</h4>
        <p className={styles.projectIntroduceContent}>
          Next.js와 TypeScript를 이용해 구현한 팀 프로젝트입니다. Team Lead와
          Front Lead를 맡았습니다.
        </p>
      </div>

      <div className={styles.projectIntroduce}>
        <h4 className={styles.projectIntroduceTitle}>맡은 역할</h4>
        <p className={styles.projectIntroduceContent}>
          프로젝트 초기 세팅, PWA , 소셜 로그인 , 로그아웃 , 회원가입 , 회원정보
          수정
        </p>
      </div>

      <div className={styles.projectIntroduce}>
        <h4 className={styles.projectIntroduceTitle}>사용 기술</h4>
        <p className={styles.projectIntroduceContent}>
          Next.js, TypeScript, PWA, Github Action, Axios, Styled-Components
        </p>
      </div>

      <div className={styles.projectIntroduce}>
        <h4 className={styles.projectIntroduceTitle}>주요 작업</h4>
        <ul className={styles.projectIntroduceContent}>
          <li>
            팀 리드로서 프로젝트 기간 동안 매일 1번의 회의를 주관하고, 풀스택
            경험을 이용해 API 요청과 기능 구분에서 발생하는 프론트엔드와 백엔드
            간의 문제를 해결
          </li>
          <li>
            모바일에 집중한 서비스의 특성을 고려해 서비스에 PWA를 추가해
            사용자가 네이티브 앱처럼 사용할 수 있도록 구현
          </li>
          <li>
            Axios의 interceptor 기능을 이용해 모든 API 요청에 앞서 인증 토큰과
            리프레시 토큰의 유효성을 확인하고 서버 응답 값에 따라 분기
            처리하도록 구현하여 코드 중복을 제거
          </li>
          <li>
            반복되는 배포 과정을 줄이기 위해 Github Action을 통해 CI/CD를 구현
          </li>
        </ul>
      </div>
    </section>
  )
}
