import Link from "next/link"
import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <article>
        <section>
          <h2 className={styles.introduceName}>
            안녕하세요, <br />
            프론트엔드 개발자 <b>천지인</b>입니다.
          </h2>

          <p>
            자바 기반의 풀스택 과정 중, 프론트엔드에 빠져 JavaScript, React,
            Next.js를 이용한 프로젝트를 진행했습니다. 최근에는 빠르게 제품을
            만들고 시장에서 테스트하는
            <Link href="/"> MVP 개발</Link>과 적은 리소스로 높은 생산성을 가질
            수 있는 <Link href="/">크로스 플랫폼</Link>,{" "}
            <Link href="">PWA</Link>에 관심이 많습니다.
          </p>
          <p>
            다른 직군과의 협업을 중시하며, 소통을 위해 개발뿐만 아니라{" "}
            <Link href="/">기획</Link>과 <Link href="/">디자인</Link>에 대해서도{" "}
            학습하고 있습니다. 협업을 통해 개인이라는 한계를 넘어 시너지를 만들
            수 있다고 믿습니다.
          </p>

          <div>
            <Link href="">cji3604@gmai.com</Link>
            <Link href="">Github</Link>
            <Link href="">Blog</Link>
          </div>
        </section>

        <section>
          <h2>프로젝트</h2>
          <h3>Windows 98 Web</h3>
          {/* <Image src=""></Image> */}
          <div>
            <button>
              <Link href="/">배포 아이콘</Link>
            </button>
            <button>
              <Link href="/">깃허브 아이콘</Link>
            </button>
          </div>
          <p>
            React와 TypeScript를 이용해 구현한 개인 프로젝트입니다. 로그인 시
            입력한 이름마다 다른 Todo를 저장할 수 있도록 CRUD를 구현했고, 웹
            API를 이용해 사용자의 위치를 받아 날씨를 출력하도록 구현했습니다.
          </p>

          <h4>사용 기술</h4>
          <p>
            React, TypeScript, Redux Toolkit, Firebase Hosting, FireStore,
            Axios, Styled-Components
          </p>

          <ul>
            <li>FireStore를 이용해 풀스택으로 구현했습니다.</li>

            <li>
              리팩토링 과정에서 중복 서비스 컴포넌트가 늘어날수록 계속 사용되는
              부분인 윈도우 창을 드래그하는 기능을 Custom Hook으로 바꿔 중복
              코드를 감소 시키고 확장성을 개선했습니다
            </li>

            <li>내용 추가하기</li>
          </ul>

          <h3>쓰쓰또쓰</h3>
          <div>2023.05 ~ 2023.05</div>
          {/* <Image src=""></Image> */}
        </section>

        <section>
          <h2>기술</h2>
          <h3>기술 스택</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>TypeScript, React, Next.js</li>
            <li>
              Styled-Components, Tailwind, <Link href="/">Module-CSS</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>교육</h2>
        </section>
      </article>
    </main>
  )
}
