var x = 1;
function test(){
    var x = 2;
    document.write('함수 내부 x = ' + x + '<br>');
}
test();
document.write('전역 x = ' + x);
