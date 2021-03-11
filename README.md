## npm install

## Getting Started

First, run the development server:

```bash
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
```

### 미해결 내용

> > mobx를 적용해서 과제를 마무리 하지 못할 것 같아서 mobx보다 익순한 redux로 진행 했습니다.
> > 각 버튼에 대한 기능들은(사고이력 선택, 사고이력 내용, 제조사 선택, 가격 입력, 초기화) 기능완료 했으나,
> > 임시저장을 했을 때, axios 요청 기능 미완료 됐습니다.
> >
> > > \*임시저장 버튼을 누르면 서버에 post 요청을 보낸면, middleware에서 캐치하여 isLoading이라는 값을 redux에 만들고 isLoading
> > > 값이 true면 spindle을 띄우고 서버에서 응답에 따라 성공과 에러 분기로 나눠서 관리해야 할 것 같습니다.
> > > 성공이면 snackbar를 띄우고 아니면 에러메세지를 띄우면 될 것 같습니다.

> > 다중 사진올리기 기능에 대해서 도전하다가 미완료 된 상태 입니다.
> >
> > > \*post 요청을 보내면 middleware에서 캐치하여 isLoading이라는 값을 redux에 만들고 isLoading 값이 true면
> > > spindle을 띄우고 서버에서 응답에 따라 성공과 에러 분기로 나눠서 관리해야 할 것 같습니다.
> > > 성공이면 redux store에 배열형태로 저장을 하고 data && data.map(item => <img src={item.url}/>) 방식으로 화면을 만들면 될것같습니다.

> > vercel 배포까지 진행하지 못했습니다.
