import Link from "next/link"
// import Image from "next/image"

export default function Project() {
  return (
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
        React와 TypeScript를 이용해 구현한 개인 프로젝트입니다. 로그인 시 입력한
        이름마다 다른 Todo를 저장할 수 있도록 CRUD를 구현했고, 웹 API를 이용해
        사용자의 위치를 받아 날씨를 출력하도록 구현했습니다.
      </p>

      <h4>사용 기술</h4>
      <p>
        React, TypeScript, Redux Toolkit, Firebase Hosting, FireStore, Axios,
        Styled-Components
      </p>

      <ul>
        <li>FireStore를 이용해 풀스택으로 구현했습니다.</li>

        <li>
          리팩토링 과정에서 중복 서비스 컴포넌트가 늘어날수록 계속 사용되는
          부분인 윈도우 창을 드래그하는 기능을 Custom Hook으로 바꿔 중복 코드를
          감소 시키고 확장성을 개선했습니다
        </li>

        <li>내용 추가하기</li>
      </ul>

      <h3>쓰쓰또쓰</h3>
      <div>2023.05 ~ 2023.05</div>
      {/* <Image src=""></Image> */}
    </section>
  )
}
