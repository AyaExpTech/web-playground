/**
 * document.querySelectorのエイリアス
 * @param {String} selector - CSSセレクタ
 * @returns {Element}
 */
const $ = selector => document.querySelector(selector);

/**
 * document.querySelectorAllのエイリアス
 * @param {String} selector - CSSセレクタ
 * @returns {Element[]}
 */
const $$ = selector => document.querySelectorAll(selector);

/**
 * ページ読み込み時にタイトル画面を表示します
 */
window.addEventListener("load", () => {
    // service-workerの登録
    if ('serviceWorker' in navigator) {
        const registration = navigator.serviceWorker.register('_service-worker.js')
    }
    // youtube 自動再生を試みる
    let player = new YT.Player('ytplayer', {
        videoId: "ayg2A2JoRzg",
        playerVars: {
            "autoplay": 1
        }
    });
});