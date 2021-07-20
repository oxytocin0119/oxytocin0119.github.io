let path = location.pathname;
if (path.indexOf("/index.html") != -1 || path == "/") {
    document.getElementById("footer").innerHTML =
        '<footer>' +
            '<p>'+
                '<ul>' +
                    '<li> <a href="index.html">メインページ(index)</a>' +
                    '<li> <a href="sub/sub.html">サブページ</a>' +
                '</ul>' +
            '</p>' +

            '<p>' +
                '<ul>' +
                    '<li> <a href="aegi/aegi.html">あえぎ声生成（試作品）</a>' +
                    '<li> <a href="casegen/casegen.html">ケース生成（試作品）</a>' +
                '</ul>'+
            '</p>' +

            '<p>' +
                '<ul>' +
                    '<li><a href="https://twitter.com/Satoh_Ikumichan">オキシのツイッター</a>' +
                    '<li><a href="http://blog.livedoor.jp/satoh_ikumichan/">オキシのブログ</a>' +
               '</ul>' +
            '</p>'+
        '</footer> ';
} else if (path.indexOf("sub") != -1 || path.indexOf("aegi") != -1 || path.indexOf("casegen") != -1) {
    document.getElementById("footer").innerHTML =
        '<footer>' +
            '<p>'+
                '<ul>' +
                    '<li> <a href="../index.html">メインページ(index)</a>' +
                    '<li> <a href="../sub/sub.html">サブページ</a>' +
                '</ul>' +
            '</p>' +

            '<p>' +
                '<ul>' +
                    '<li> <a href="../aegi/aegi.html">あえぎ声生成（試作品）</a>' +
                    '<li> <a href="../casegen/casegen.html">ケース生成（試作品）</a>' +
                '</ul>'+
            '</p>' +
            '<p>' +
                '<ul>' +
                    '<li><a href="https://twitter.com/Satoh_Ikumichan">オキシのツイッター</a>' +
                    '<li><a href="http://blog.livedoor.jp/satoh_ikumichan/">オキシのブログ</a>' +
                '</ul >' +
            '</p>' +
        '</footer>';
}