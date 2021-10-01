$(function() {

    let block1 = $(".block1");

    block1.width(500);
    block1.height(800);

    let block2 = $(".block2");

    block2.html("<h2>Заголовок</h2> <p>Какой-то текст</p>");

    let block3 = $(".block3");

    block3.width(900).height(200).fadeTo(5000, 0.5);

    let block4 =$(".block4");

    block4.fadeTo(5000, 0.3)
});