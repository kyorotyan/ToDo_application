/* document.querySelector()で入力フォームの要素を取得し、定数を宣言 */
/* 定数は const 変数は let */
const addTask = document.querySelector('.add');

/*
    enterが押されたタイミングを感知するため、EventTarget.addEventListener(type, listener) メソッドを使用
    第一引数のtypeにはイベントの種類を表す文字列。第二引数のlistenerにはイベント発生時に実行する関数を使用
*/
addTask.addEventListener('submit', e => {
    /* e.preventDefault() メソッドはデフォルトのアクションをキャンセル */
    e.preventDefault()
    const text = addTask.addEventListener.value.trim();
    if (text != '') {
    }
});