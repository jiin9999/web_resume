import styles from "./css/Project.module.css"
import card from "./css/Card.module.css"

import LinkButton from "./LinkButton"
import ProjectCarousel from "./ProjectCarousel"
import Link from "next/link"

export default function Project() {
  return (
    <section className={`${card.cardContainer} ${card.card}`}>
      <h2 className={card.title}>프로젝트</h2>
      <h3 className={card.subTitle}>Tell Me</h3>
      <p className={styles.projectPeriod}>2023.07 ~ 2023.08</p>
      <ProjectCarousel
        imageNames={[
          "tellmeLogin",
          "tellmeSurvey",
          "tellmeProfile",
          "tellmeOhter",
        ]}
        mobile={true}
      />

      <div className={styles.projectButtonContainer}>
        <LinkButton type={"link"} href={"https://tell-me.store/"} />
        <LinkButton
          type={"github"}
          href={"https://github.com/tell-me-team/Front-End"}
        />
      </div>

      <div className={styles.projectIntroduce}>
        <h4 className={styles.projectIntroduceTitle}>간단 소개</h4>
        <p className={styles.projectIntroduceContent}>
          기업에서 제공한 요구사항을 구현해내는 프로젝트형 해커톤에 참가하여
          프론트엔드 전체 개발(1인)을 진행했습니다. 2주간 기획부터 개발까지
          진행하는 MVP 개발 경험과 기획자, 디자이너, 백엔드 개발자, 마케터와의
          협업 경험을 쌓을 수 있었습니다.
        </p>
      </div>

      <div className={styles.projectIntroduce}>
        <h4 className={styles.projectIntroduceTitle}>사용 기술</h4>
        <p className={styles.projectIntroduceContent}>
          Vite, React, TypeScript, React-Router, Recoil, @toss/slash, Axios,
          Styled-Components
        </p>
      </div>

      <div className={styles.projectIntroduce}>
        <h4 className={styles.projectIntroduceTitle}>주요 작업</h4>
        <ul className={styles.projectIntroduceContent}>
          <li>
            소셜 로그인, 유형 검사, 프로필 조회, 통계 페이지 등 서비스 내 모든
            화면과 기능 구현
          </li>
          <li>Recoil을 이용한 전역 상태 관리 사용</li>
          <li>
            @toss/storage 라이브러리를 통해 타입 안정성과 안전하게 웹 스토리지
            사용
          </li>
        </ul>
      </div>

      <h4 className={styles.projectSubTitle}>
        [라이브러리를 활용하여 토큰의 안정성 확보]
      </h4>

      <p className={styles.projectSubTitleContent}>
        프로젝트에서 소셜 로그인 기능을 구현하던 중, 토큰 저장을 위해 로컬
        스토리지를 활용하려 했습니다. 그러나, 브라우저의 시크릿 모드 사용 시
        로컬 스토리지 접근 제약으로 오류가 발생하는 문제에 직면했습니다.
      </p>

      <p className={styles.projectSubTitleContent}>
        이 문제를 해결하기 위해 두 가지 방법을 고려해보았습니다. 첫번째는, 직접
        예외 처리를 통해 문제를 해결하는 방식이고, 두번째는, @toss/slash
        라이브러리의 웹 스토리지 기능을 활용하는 방법입니다. 각 방법의 장단점을
        비교 분석한 결과, 프로젝트의 기간이 한 주로 짧았기 있기 때문에,
        라이브러리를 사용하는 것이 더 적절하다 판단하게 되었습니다.
      </p>

      <p className={styles.projectSubTitleContent}>
        하지만 라이브러리의 공식 문서에 내부 동작 방식에 대한 명확한 설명이
        부족하여,{" "}
        <Link
          href="https://velog.io/@cji3604/tossstorage-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EB%8A%94-%EC%96%B4%EB%96%A4%EC%8B%9D%EC%9C%BC%EB%A1%9C-%EC%9E%91%EB%8F%99%ED%95%A0%EA%B9%8C"
          target="_blank"
        >
          라이브러리의 내부 코드를 분석하고 동작 방식을 이해하기 위한 작업을
          진행했습니다.
        </Link>
        분석 결과, @toss/slash 라이브러리는 로컬 스토리지 접근이 제한된
        환경에서도 데이터를 안정적으로 관리하기 위해 Map 객체를 활용해 데이터를
        메모리 에 저장하는 메커니즘을 가지고 있음을 확인했습니다.
      </p>

      <p className={styles.projectSubTitleContent}>
        결과적으로 브라우저의 시크릿 모드나 테스트 환경과 같이 Web Storage를 쓸
        수 없는 환경에서도 에러 없이 기능이 작동하도록 구현함으로써, 서비스의
        안정성을 증가시킬 수 있었습니다.
      </p>

      <h3 className={card.subTitle}>Window 98 Todo Web</h3>
      <p className={styles.projectPeriod}>2023.03 ~ </p>
      <ProjectCarousel
        imageNames={[
          "windows98Login",
          "windows98Todo",
          "windows98Weather",
          "windows98Logout",
          "windows98Delete",
        ]}
        mobile={false}
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
          React와 TypeScript를 이용해 구현한 개인 프로젝트입니다. (로그인시 입력
          값에 따라 컬렉션 생성)
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

      <h4 className={styles.projectSubTitle}>
        [FireStore를 이용해 서버리스 아키텍쳐를 적용해 풀스택으로 구현]
      </h4>

      <p className={styles.projectSubTitleContent}>
        프로젝트를 리팩토링하며 Todo List를 개별 사용자별로 영구적으로 저장하기
        위해 작업할 때의 일이었습니다.
      </p>

      <p className={styles.projectSubTitleContent}>
        기존 시스템에서는 Todo를 상태로만 관리했습니다. 그래서 웹 세션을 종료할
        때마다 사용자의 Todo 데이터가 초기화되는 문제가 발생했고 프로젝트를
        일주일 내에 제출해야 하는 상황이었습니다.
      </p>

      <p className={styles.projectSubTitleContent}>
        문제 해결을 위해 웹 스토리지와 백엔드 서버 구축을 고려했으나, 웹
        스토리지는 사용자의 디바이스가 바뀌면 데이터가 초기화된다는 문제가
        있었고, 백엔드 서버를 구축하는 것은 구현 기간을 맞추지 못할 가능성이
        컸습니다. 이 때문에, 낮은 비용과 러닝 커브로 사용할 수 있는 다른 방법을
        찾던 중, 서버리스 아키텍처인 Firebase에 대해 알게 되었습니다.
      </p>

      <p className={styles.projectSubTitleContent}>
        특히 BAAS (Backend as a Service) 형태로 제공되는 Firebase는 초기 세팅과
        배포가 간단하고 빠르다는 것, 서버 구축 및 유지 보수에 대한 걱정이 없다는
        점, 인증과 같은 다양한 기능을 제공함으로써 확장성이 좋다는 점, 그리고
        실시간 데이터 동기화가 가능하다는 장점이 있었습니다. Todo 기능의 특성상
        고도의 커스터마이징이나 복잡한 쿼리가 필요하지 않았으며, 초기 사용자의
        규모가 작았기 때문에 사용량에 대한 비용도 문제가 되지 않았습니다.
      </p>

      <p className={styles.projectSubTitleContent}>
        결과적으로 Firebase의 BAAS(Backend as a Service)를 도입하여 DB와
        프로젝트를 연동함으로써, 서버 구축 없이도 Firebase의 FireStore(DB)와
        기존 프로젝트를 효율적으로 연결할 수 있었음은 물론, 서버를 구축하는 시간
        자체를 줄여 하루 만에 구현을 완료했고, 목표로 했던 각각의 사용자마다
        다른 Todo List를 저장하고, 웹 세션 종류 후에도 사용자의 데이터를
        안전하게 보관하는 기능을 구현할 수 있었습니다.
      </p>

      <h3 className={card.subTitle}>쓰레기 재활용 커뮤니티 프로젝트</h3>
      <p className={styles.projectPeriod}>2023.05 ~ 2023.05</p>
      <ProjectCarousel
        imageNames={[
          "ssdssLogin",
          "ssdssMemberEdit",
          "ssdssRegister",
          "ssdssComment",
        ]}
        mobile={true}
      />

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

      <h4 className={styles.projectSubTitle}>
        [토큰 유효성 검사를 위한 Interceptor 기능을 활용해 코드 중복 제거]
      </h4>

      <p className={styles.projectSubTitleContent}>
        쓰레기 재활용 커뮤니티의 프론트엔드 개발 중, API 요청에 앞서 인증 토큰과
        리프레시 토큰의 유효성 검증을 위한 별도의 API를 호출 해달라는 요청이
        백엔드 팀으로부터 있었습니다.
      </p>

      <p className={styles.projectSubTitleContent}>
        만약 기존 모든 API에 유효성을 검증하는 API를 호출하는 코드를 추가할
        경우, 코드의 중복성이 크게 증가하며, 확장성에도 문제가 생길 것으로
        판단되었습니다. 이 문제를 해결하기 위해 사용하고 있던 HTTP 라이브러리인
        Axios의 문서를 조사했고, Axios의 Interceptor라는 기능을 발견할 수
        있었습니다.
      </p>

      <p className={styles.projectSubTitleContent}>
        API 요청 전후로 특정 로직을 삽입할 수 있는 Interceptor에는 두 가지 적용
        방식이 있었습니다. 첫 번째 방식은 특정 Axios 인스턴스에만 적용되는
        방식으로, 유연성을 제공하며 다른 인스턴스에는 영향을 미치지 않았습니다.
        반면, 두 번째 방식인 axios config에 interceptor를 추가하는 방식은 모든
        API 호출에 동일한 로직을 적용할 수 있지만, 특정 요청에 대한 로직을
        변경하려면 매번 추가적인 코드 수정이 필요했습니다.
      </p>

      <p className={styles.projectSubTitleContent}>
        프로젝트의 확장성과 유연성을 고려하여, 최종적으로 특정 Axios
        인스턴스에만 Interceptor를 적용하는 방식을 선택해서 구현했습니다.
      </p>

      <p className={styles.projectSubTitleContent}>
        결과적으로, Axios의 Interceptor를 통해 인증 토큰과 리프레시 토큰의
        유효성을 체크하는 로직을 구현하면서, 코드의 중복을 크게 줄이고 백엔드
        팀의 요청도 성공적으로 구현할 수 있었습니다.
      </p>
    </section>
  )
}
