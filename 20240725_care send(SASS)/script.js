//================ハンバーガーメニュー&ナビゲーション(SP)================//
$(".openbtn").click(function () { //ボタンがクリックされたら
    $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
    $(".header__nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$(".header__nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $(".header__nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});



//======================スムーススクロール================//


$('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    var elmHash = $(this).attr('href'); // クリックされたリンク先のhref属性からIDを取得
    var pos;

    // レスポンシブ対応のため、ウィンドウの幅に応じてスクロール位置を調整
    if ($(window).width() <= 768) {
        // 768px以下の場合、idの上部の距離からHeaderの高さ（64px）を引いた位置にスクロール
        pos = $(elmHash).offset().top - 64;
    } else {
        // 768pxより大きい場合、idの上部の距離からHeaderの高さ（96px）を引いた位置にスクロール
        pos = $(elmHash).offset().top - 96;
    }

    // アニメーションでスクロールを実行
    $('body,html').animate({ scrollTop: pos }, 700);//取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール

    return false; // リンクのデフォルト動作を無効化してページ遷移を防止
});

//======================フォームのsubmit制御（上）================//

$(document).ready(function () {

    const $submitBtn = $('#js-submit01')
    $('#form01 input,#form01 textarea').on('change', function () {
        if (
            $('#form01 input[type="text"]').val() !== "" &&
            $('#form01 input[type="email"]').val() !== "" &&
            $('#form01 input[type="tel"]').val() !== "" &&
            $('#form01 input[type="checkbox"]').val() !== ""
        ) {
            $submitBtn.prop('disabled', false);

        } else {
            $submitBtn.prop('disabled', true);
        }
    });

});

//===============フォーム送信後の完了メッセージ（上）================//

$(document).ready(function () {

    $('#form01').submit(function (event) {
        var formData = $(this).serialize();
        $.ajax({
            url: "https://docs.google.com/forms/hogehoge",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $(".message01 .end-message").slideDown();
                    $("#js-submit01").fadeOut();
                    //window.location.href = "thanks.html";
                },
                200: function () {
                    $(".message01 .false-message").slideDown();
                }
            }
        });
        event.preventDefault();
    });

});


//======================フォームのsubmit制御（下）================//

$(document).ready(function () {

    const $submitBtn = $('#js-submit02')
    $('#form02 input,#form02 textarea').on('change', function () {
        if (
            $('#form02 input[type="text"]').val() !== "" &&
            $('#form02 input[type="email"]').val() !== "" &&
            $('#form02 input[type="tel"]').val() !== "" &&
            $('#form02 input[type="checkbox"]').val() !== ""
        ) {
            $submitBtn.prop('disabled', false);

        } else {
            $submitBtn.prop('disabled', true);
        }
    });

});

//===============フォーム送信後の完了メッセージ（下）================//

$(document).ready(function () {

    $('#form02').submit(function (event) {
        var formData = $(this).serialize();
        $.ajax({
            url: "https://docs.google.com/forms/hogehoge",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $(".message02 .end-message").slideDown();
                    $("#js-submit02").fadeOut();
                    //window.location.href = "thanks.html";
                },
                200: function () {
                    $(".message02 .false-message").slideDown();
                }
            }
        });
        event.preventDefault();
    });

});



//======================スライダー================//


document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.jisseki__wrapper');
    const images = Array.from(wrapper.querySelectorAll('img'));
    const numImages = images.length;

    // 画像を複製して追加
    for (let i = 0; i < numImages; i++) {
        const clone = images[i].cloneNode(true);
        wrapper.appendChild(clone);
    }

    // wrapperの幅を設定
    wrapper.style.width = `${numImages * 2 * (248 + 80) - 80}px`;
});

//======================swiper================//

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto', // スライドの幅を自動設定
        loop: true, // スライドをループ
        spaceBetween: 18, // スライド間のスペース
        slidesPerGroup: 1, // 一度に移動するスライド数(レスポンシブ時の数値)
        speed: 1000, // スライドのスピード（ミリ秒単位、ここでは1秒に設定）
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1025: {
                slidesPerGroup: 2, // 768px以上の画面幅ではスライドグループを2枚に変更
            }
        }
    });
});

//======================アコーディオン(FaQ)================//

$(document).ready(function () {
    // アコーディオンをクリックした時の動作
    $('.faq__accordion-ttl').on('click', function () { // タイトル要素をクリックしたら
        var findElm = $(this).next(".faq__accordion-box"); // 直後のアコーディオンを行うエリアを取得し
        $(findElm).slideToggle(); // アコーディオンの上下動作

        if ($(this).hasClass('close')) { // タイトル要素にクラス名closeがあれば
            $(this).removeClass('close'); // クラス名を除去し
        } else { // それ以外は
            $(this).addClass('close'); // クラス名closeを付与
        }
    });
});


//====================ふわっ========================//
function delayScrollAnime() {
    var time = 0.3;//遅延時間を増やす秒数の値
    var value = time;
    $('.delayScroll').each(function () {
        var parent = this;//親要素を取得
        var elemPos = $(this).offset().top;//要素の位置まで来たら
        var scroll = $(window).scrollTop();//スクロール値を取得
        var windowHeight = $(window).height();//画面の高さを取得
        var childs = $(this).children();  //子要素を取得

        if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
            $(childs).each(function () {

                if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック

                    $(parent).addClass("play"); //親要素にクラス名playを追加
                    $(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
                    $(this).addClass("fadeUp");//アニメーションのクラス名を追加
                    value = value + time;//delay時間を増加させる

                    //全ての処理を終わったらplayを外す
                    var index = $(childs).index(this);
                    if ((childs.length - 1) == index) {
                        $(parent).removeClass("play");
                    }
                }
            })
        } else {
            $(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
            value = time;//delay初期値の数値に戻す
        }
    })
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述




//=====================1文字ずつ文字が出現============================//

// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
    $('.eachTextAnime').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("appeartext");
        } else {
            $(this).removeClass("appeartext");
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
//     EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
// }); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    // spanタグを追加する
    var element = $(".eachTextAnime");
    element.each(function () {
        var htmlContent = $(this).html(); // HTMLの内容を取得
        var textbox = "";
        var isTag = false;

        // 文字列を1文字ずつ処理
        htmlContent.split('').forEach(function (t, i) {
            if (t === '<') {
                isTag = true; // タグの開始を検出
            } else if (t === '>') {
                isTag = false; // タグの終了を検出
                textbox += t;
                return;
            }

            if (isTag) {
                textbox += t; // タグ内の文字をそのまま追加
                return;
            }

            // スペース以外の文字に対してspanタグを追加
            if (t !== " ") {
                if (i < 10) {
                    textbox += '<span style="animation-delay:.' + (i * 0.05) + 's;">' + t + '</span>';
                } else {
                    var n = (i * 0.05);
                    textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
                }
            } else {
                textbox += t; // スペースはそのまま追加
            }
        });

        $(this).html(textbox); // 修正後のHTMLを設定
    });

    EachTextAnimeControl(); /* アニメーション用の関数を呼ぶ */
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述