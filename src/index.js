import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// "未完了リストに追加する関数"
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const complete_li = document.createElement("li");
    complete_li.innerText = text;
    // 戻すボタン生成
    const return_button = document.createElement("button");
    return_button.innerText = "戻す";

    // 戻す関数の作成
    return_button.addEventListener("click", () => {
      // おされた戻すボタンの親タグを完了リストから削除
      const deleteTarget = return_button.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const return_text = return_button.parentNode.firstElementChild.innerText;
      createIncompleteList(return_text);
    });

    addTarget.appendChild(complete_li);
    addTarget.appendChild(return_button);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
