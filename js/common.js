function openLine(){
    window.open("https://lin.ee/7b7Ip2r");
}

function openTwitter(){
    window.open("https://twitter.com/kawabayu")
}

function openInstagram(){
    window.open("https://www.instagram.com/kawabayu/")
}

function openBlog(){
    window.open("http://kawabayu.asablo.jp/blog/")
}

// $(function(){
//     // #で始まるアンカーをクリックした場合に処理
//     $('#').click(function() {
//        // スクロールの速度
//        var speed = 350; // ミリ秒
//        // アンカーの値取得
//        var href= $(this).attr("href");
//        // 移動先を取得
//        var target = $(href == "#" || href == "" ? 'html' : href);
//        // 移動先を数値で取得
//        var position = target.offset().top;
//        // スムーススクロール
//        $('body,html').animate({scrollTop:position}, speed, 'swing');
//        return false;
//     });
//  });

$(function(){

    // $(window).on('scroll', function(){
    // // スクロール位置
    //     var dy = $(this).scrollTop();
    // // console.log('スクロール位置: ' + dy);
        
    // /**
    //  * pageTop
    //  */
    // if(dy > 200)
    // {
    //     // #pageTopにpage-topにfade-inクラスを付加
    //     $('#pageTop').addClass('fade-in')
    // }
    // else
    //     {
    //         $('#pageTop').removeClass('fade-in');
    //         addClassFlag = false;
    //     }
    // });
    
    /**
     * スライドショー
     */
    $('#slideContents').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        dots: true,
        pauseOnHover: false,
        paiseOnFocus: false,
        fade: true,
    });
        /**
     * スライドショー
     */
     $('#slideContents').slick({
        // 自動再生
        autoplay: true,
        // 再生スピード
        autoplaySpeed: 2000, // ミリ秒
        // ページ遷移のスピード
        speed: 500,
        // ページ送りの表示
        dots: true,
        // マウスホバー時にスライドを止めない
        pauseOnHover: false,
        // ドット選択時にスライドを止めない
        pauseOnFocus: false,
        // フェード
        fade: true,
    });
    /**
     * ページトップ
     */
    $('#pageTop').on('click', function(){
        console.log('ページトップした');

        $('html').animate({
            scrollTop: 0
        }, 1000);
        // aタグのリンク解除
        // return false;
    });
});
// $(function () {
//     $(window).scroll(function () {
//         const wHeight = $(window).height();
//         const scrollAmount = $(window).scrollTop();
//         $('.scrollanime').each(function () {
//             const targetPosition = $(this).offset().top;
//             if(scrollAmount > targetPosition - wHeight + 60) {
//                 $(this).addClass("fadeInDown");
//             }
//         });
//     });
// });