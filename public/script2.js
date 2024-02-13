$(document).ready(function(){
    // 出力ボタンがクリックされた時の処理
    $("#button").click(function(){
        // textareaの値を取得し、変数に格納
        var inputText = $("#area").val();
        // コンソールに取得した文字列を出力
        console.log(inputText);
        var datetime = new Date();
        console.log(datetime);
    });
});
