/* document.querySelector()で入力フォームの要素を取得し、定数を宣言 */
/* 定数は const 変数は let */
const addTask = document.querySelector('.add');

/* 空の配列が入ったtodosという変数を宣言 */
let todos = [];

function addTodo(text) {
    const todo = {
        id: Date.now(),
        text,
    };
    /* 配列に追加 */
    todos.push(todo)
}

/*
    enterが押されたタイミングを感知するため、EventTarget.addEventListener(type, listener) メソッドを使用
    第一引数のtypeにはイベントの種類を表す文字列。第二引数のlistenerにはイベント発生時に実行する関数を使用
*/
addTask.addEventListener('submit', e => {
    /* e.preventDefault() メソッドはデフォルトのアクションをキャンセル */
    e.preventDefault()
    /* .trim()は文字列の両端の空白を削除するメソッド */
    const text = addTask.addEventListener.value.trim();
    /* 入力値がある場合のみ処理に通すようにする */
    if (text != '') {
    }
});