const quotes = [
  {
    quote: "「늘 배고프고, 늘 어리석어라(Stay Hungry. Stay Foolish)」",
    author: "스티브 잡스 [Jobs, Stieves]",
  },
  {
    quote: "「여태까지 영감이 모자랐던 적은 없었다.」",
    author:
      "토발즈 [Torvalds, Linus Benedict, 1969.12.28~] 리눅스의 창시자, 리눅스의 아버지",
  },
  {
    quote: "「인생이란 원래 공평하지 못하다.」",
    author: "빌 게이츠 [Gates, Bill, 1955.10.28~]",
  },
  {
    quote: "「세계에서 자신의 삶을 만들 수 있다.」",
    author: "리차드 게리엇 - RPG의 황제인 울티마의 제작자",
  },
  {
    quote:
      "「사람을 뽑을 때 나는 정신적인 성취감을 물질적인 성취감보다 조금이라도 더 중요하게 여기는 사람을 선호한다.」",
    author: "[CEO 안철수, 영혼이 있는 승부] 책중에서...",
  },
  {
    quote: "「유닉스, C는 장난이었다!」",
    author: "데니스 리치(Dennis Ritchie) - C 언어 및 유닉스 개발자",
  },
  {
    quote: "「저는 Windows 95를 저의 최대 성공으로 생각합니다.」",
    author: "Bjarne Stroustrup - C++ 의 창시자",
  },
  {
    quote: "「중요한 것은 실패하더라도 시도해보는 것이라고 생각한다.」",
    author: "제임스 고슬링 - 자바 언어의 창시자",
  },
  {
    quote:
      "「언어는 종교적인 것이며, 프로그래머들에게는 삶의 방식을 선택하는 것이기도 합니다.」",
    author: "엔더스 헤즐스버그 - 볼랜드에서 델파이 개발, MS에서 C# 개발",
  },
  {
    quote: "「If I can make good games, I don't care about anything else.」",
    author:
      "존 카맥 - 3D 게임계의 신이라고 할수 있는...둠 시리즈 개발 및 게임 엔진 개발",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//random(), round(), ceil(), floor()
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
