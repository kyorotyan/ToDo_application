/* document.querySelector()で入力フォームの要素を取得し、定数を宣言 */
/* 定数は const 変数は let */
const addTask = document.querySelector('.add');
const list = document.querySelector('.tasks')

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

/* 全てのToDoのオブジェクトが格納されているtodos配列から、オブジェクトを呼び出し表示する */
function renderTodo() {
    let temp = '';
    /* forEachメソッドは 配列.forEach(引数 => {処理})となり、与えられた配列に格納されている要素を順に呼び出し、処理を実行 */
    todos.forEach(todo => {
        const html =`
        <li key="${todo.id}">
            <span>${todo.text}</span>'
        </li>
        `;
        temp += html;
    });
    /* element.innerHTML = html はelementで指定された要素の中身を右辺のHTMLコードに変更 */
    list.innerHTML = temp;
}

/*
    enterが押されたタイミングを感知するため、EventTarget.addEventListener(type, listener) メソッドを使用
    第一引数のtypeにはイベントの種類を表す文字列。第二引数のlistenerにはイベント発生時に実行する関数を使用
*/
addTask.addEventListener('submit', e => {
    /* e.preventDefault() メソッドはデフォルトのアクションをキャンセル */
    e.preventDefault()
    /* .trim()は文字列の両端の空白を削除するメソッド */
    const text = addTask.add.value.trim();
    /* 入力値がある場合のみ処理に通すようにする */
    if (text != '') {
        addTodo(text);
        addTask.reset();
        renderTodo();
    }
});