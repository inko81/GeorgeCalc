< !--先頭用空の文字列-->
	var newValue = '';

	< !--演算子用フラグ-->
	var plus = 0;
var minus = 0;
var multi = 0;
var division = 0;
var mod = 0;
var uho = 0;

	< !--引数はString型で受け取る-->
    function inputValue(number) {
	< !--文字列の連結-->
            newValue += number;
	< !--結果出力用部品のidを検索-->
            view = document.getElementById("view");
	< !--（'既存値' + '入力値'）を連結した値を代入-- >
            view.value = newValue;
    }
function clearView() {
	< !--結果出力用部品のidを検索-->
        view = document.getElementById("view");
	< !--先頭を空文字に戻す-->
        newValue = '';
	< !--0を代入する-- >
        view.value= 0;
}
function inputOper(oper) {

    if (plus == 0 && minus == 0 && multi == 0 && division == 0 && mod == 0) {
        switch (oper) {
            case '+':
                plus = 1;
                leftValue = newValue;
                newValue = '';
                break;

            case '-':
                minus = 1;
                leftValue = newValue;
                newValue = '';
                break;

            case '*':
                multi = 1;
                leftValue = newValue;
                newValue = '';
                break;

            case '/':
                division = 1;
                leftValue = newValue;
                newValue = '';
                break;

            case '%':
                mod = 1;
                leftValue = newValue;
                newValue = '';
                break;
        }
    }
}
function inputCalc() {
    if (plus == 1) {
        resultValue = parseFloat(leftValue) + parseFloat(newValue);
        view = document.getElementById("view");
        view.value = resultValue;
        newValue = resultValue;
        plus = 0;
    } else if (minus == 1) {
        resultValue = parseFloat(leftValue) - parseFloat(newValue);
        view = document.getElementById("view");
        view.value = resultValue;
        newValue = resultValue;
        minus = 0;
    } else if (multi == 1) {
        resultValue = parseFloat(leftValue) * parseFloat(newValue);
        view = document.getElementById("view");
        view.value = resultValue;
        newValue = resultValue;
        multi = 0;
    } else if (division == 1) {
        resultValue = parseFloat(leftValue) / parseFloat(newValue);
        view = document.getElementById("view");
        view.value = resultValue;
        newValue = resultValue;
        division = 0;
    } else if (mod == 1) {
        resultValue = parseFloat(leftValue) % parseFloat(newValue);
        view = document.getElementById("view");
        view.value = resultValue;
        newValue = resultValue;
        mod = 0;
    }

}

function george() {
    view = document.getElementById("view");
    newValue = '';
    view.value = 'ｳﾎｯ';
}