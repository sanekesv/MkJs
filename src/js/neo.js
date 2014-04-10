var max = 0;

c1 = new textList(
    "hello, Neo...",
    "Ты снова балуешься с Матрицей?!...",
    "...Здесь могла быть Ваша реклама..."
)

function textList() {
    max = textList.arguments.length;

    for (i = 0; i < max; i++) {
        this[i] = textList.arguments[i];
    }

}

var x = 0;
var pos = 0;
var l = c1[0].length;

function printText() {
	l=c1[x].length;
    document.form.textarea.value = c1[x].substring(0, pos) +"_";
    if (++pos == l) {
        pos = 0;
        setTimeout("printText()", 2000);
        if (++x == max)
            x = 0;


    }  else
        setTimeout("printText()", 150);

}