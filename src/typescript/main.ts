import {
  box,
  form, mkAccount, findIdPw,
  idBox, pwBox, inputProblem, scroller, returns
} from "./dom";

import {doScroll} from "./scroller";

declare global {
  interface Window {
    dologin: () => void
  }
}

scroller?.scrollTo(scroller.clientWidth * 1, 0);

window.dologin = function () {
  inputProblem?.classList.remove("hide");
  inputProblem?.classList.add("show");

  box?.classList.remove("shake");
  window.requestAnimationFrame(() => box?.classList.add("shake"));

  idBox ? idBox.value = "" : null;
  pwBox ? pwBox.value = "" : null;
}

form?.addEventListener("submit", e => {
  e.preventDefault();
});

mkAccount?.addEventListener("click", () => {
  doScroll(scroller, scroller?.clientWidth * 2);
  // alert("계정 만드는 창으로 넘어가라!");
});

findIdPw?.addEventListener("click", () => {
  doScroll(scroller, scroller?.clientWidth * 0);
  // alert("진정하시고 심호흡 하세요. 당신의 아이디 또는 비밀번호를 기억하려 애쓰세요. 당신의 전화번호나 다른 플렛폼의 계정을 떠올려 보세요!");
});

for (const element of returns) {
  element.addEventListener("click", () => {
    doScroll(scroller, scroller?.clientWidth * 1);
  });
}