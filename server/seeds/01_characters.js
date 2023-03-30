/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("characters").del();
    await knex("characters").insert([
        {
            japanese: "きゃ",
            romaji: "kya",
            type: "hiragana",
            consonant: "ky"
        },
        {
            japanese: "きゅ",
            romaji: "kyu",
            type: "hiragana",
            consonant: "ky"
        },
        {
            japanese: "きょ",
            romaji: "kyo",
            type: "hiragana",
            consonant: "ky"
        },
        {
            japanese: "ぎゃ",
            romaji: "gya",
            type: "hiragana",
            consonant: "gy"
        },
        {
            japanese: "ぎゅ",
            romaji: "gyu",
            type: "hiragana",
            consonant: "gy"
        },
        {
            japanese: "ぎょ",
            romaji: "gyo",
            type: "hiragana",
            consonant: "gy"
        },
        {
            japanese: "しゃ",
            romaji: "sha",
            type: "hiragana",
            consonant: "sh"
        },
        {
            japanese: "しゅ",
            romaji: "shu",
            type: "hiragana",
            consonant: "sh"
        },
        {
            japanese: "しょ",
            romaji: "sho",
            type: "hiragana",
            consonant: "sh"
        },
        {
            japanese: "じゃ",
            romaji: "ja",
            type: "hiragana",
            consonant: "j"
        },
        {
            japanese: "じゅ",
            romaji: "ju",
            type: "hiragana",
            consonant: "j"
        },
        {
            japanese: "じょ",
            romaji: "jo",
            type: "hiragana",
            consonant: "j"
        },
        {
            japanese: "ちゃ",
            romaji: "cha",
            type: "hiragana",
            consonant: "ch"
        },
        {
            japanese: "ちゅ",
            romaji: "chu",
            type: "hiragana",
            consonant: "ch"
        },
        {
            japanese: "ちょ",
            romaji: "cho",
            type: "hiragana",
            consonant: "ch"
        },
        {
            japanese: "にゃ",
            romaji: "nya",
            type: "hiragana",
            consonant: "ny"
        },
        {
            japanese: "にゅ",
            romaji: "nyu",
            type: "hiragana",
            consonant: "ny"
        },
        {
            japanese: "にょ",
            romaji: "nyo",
            type: "hiragana",
            consonant: "ny"
        },
        {
            japanese: "ひゃ",
            romaji: "hya",
            type: "hiragana",
            consonant: "hy"
        },
        {
            japanese: "ひゅ",
            romaji: "hyu",
            type: "hiragana",
            consonant: "hy"
        },
        {
            japanese: "ひょ",
            romaji: "hyo",
            type: "hiragana",
            consonant: "hy"
        },
        {
            japanese: "びゃ",
            romaji: "bya",
            type: "hiragana",
            consonant: "by"
        },
        {
            japanese: "びゅ",
            romaji: "byu",
            type: "hiragana",
            consonant: "by"
        },
        {
            japanese: "びょ",
            romaji: "byo",
            type: "hiragana",
            consonant: "by"
        },
        {
            japanese: "ぴゃ",
            romaji: "pya",
            type: "hiragana",
            consonant: "py"
        },
        {
            japanese: "ぴゅ",
            romaji: "pyu",
            type: "hiragana",
            consonant: "py"
        },
        {
            japanese: "ぴょ",
            romaji: "pyo",
            type: "hiragana",
            consonant: "py"
        },
        {
            japanese: "みゃ",
            romaji: "mya",
            type: "hiragana",
            consonant: "my"
        },
        {
            japanese: "みゅ",
            romaji: "myu",
            type: "hiragana",
            consonant: "my"
        },
        {
            japanese: "みょ",
            romaji: "myo",
            type: "hiragana",
            consonant: "my"
        },
        {
            japanese: "りゃ",
            romaji: "rya",
            type: "hiragana",
            consonant: "ry"
        },
        {
            japanese: "りゅ",
            romaji: "ryu",
            type: "hiragana",
            consonant: "ry"
        },
        {
            japanese: "りょ",
            romaji: "ryo",
            type: "hiragana",
            consonant: "ry"
        },
        {
            japanese: "キャ",
            romaji: "kya",
            type: "katakana",
            consonant: "ky"
        },
        {
            japanese: "キュ",
            romaji: "kyu",
            type: "katakana",
            consonant: "ky"
        },
        {
            japanese: "キョ",
            romaji: "kyo",
            type: "katakana",
            consonant: "ky"
        },
        {
            japanese: "ギャ",
            romaji: "gya",
            type: "katakana",
            consonant: "gy"
        },
        {
            japanese: "ギュ",
            romaji: "gyu",
            type: "katakana",
            consonant: "gy"
        },
        {
            japanese: "ギョ",
            romaji: "gyo",
            type: "katakana",
            consonant: "gy"
        },
        {
            japanese: "シャ",
            romaji: "sha",
            type: "katakana",
            consonant: "sh"
        },
        {
            japanese: "シュ",
            romaji: "shu",
            type: "katakana",
            consonant: "sh"
        },
        {
            japanese: "ショ",
            romaji: "sho",
            type: "katakana",
            consonant: "sh"
        },
        {
            japanese: "ジャ",
            romaji: "ja",
            type: "katakana",
            consonant: "j"
        },
        {
            japanese: "ジュ",
            romaji: "ju",
            type: "katakana",
            consonant: "j"
        },
        {
            japanese: "ジョ",
            romaji: "jo",
            type: "katakana",
            consonant: "j"
        },
        {
            japanese: "チャ",
            romaji: "cha",
            type: "katakana",
            consonant: "ch"
        },
        {
            japanese: "チュ",
            romaji: "chu",
            type: "katakana",
            consonant: "ch"
        },
        {
            japanese: "チョ",
            romaji: "cho",
            type: "katakana",
            consonant: "ch"
        },
        {
            japanese: "ニャ",
            romaji: "nya",
            type: "katakana",
            consonant: "ny"
        },
        {
            japanese: "ニュ",
            romaji: "nyu",
            type: "katakana",
            consonant: "ny"
        },
        {
            japanese: "ニョ",
            romaji: "nyo",
            type: "katakana",
            consonant: "ny"
        },
        {
            japanese: "ヒャ",
            romaji: "hya",
            type: "katakana",
            consonant: "hy"
        },
        {
            japanese: "ヒュ",
            romaji: "hyu",
            type: "katakana",
            consonant: "hy"
        },
        {
            japanese: "ヒョ",
            romaji: "hyo",
            type: "katakana",
            consonant: "hy"
        },
        {
            japanese: "ビャ",
            romaji: "bya",
            type: "katakana",
            consonant: "by"
        },
        {
            japanese: "ビュ",
            romaji: "byu",
            type: "katakana",
            consonant: "by"
        },
        {
            japanese: "ビョ",
            romaji: "byo",
            type: "katakana",
            consonant: "by"
        },
        {
            japanese: "ピャ",
            romaji: "pya",
            type: "katakana",
            consonant: "py"
        },
        {
            japanese: "ピュ",
            romaji: "pyu",
            type: "katakana",
            consonant: "py"
        },
        {
            japanese: "ピョ",
            romaji: "pyo",
            type: "katakana",
            consonant: "py"
        },
        {
            japanese: "ミャ",
            romaji: "mya",
            type: "katakana",
            consonant: "my"
        },
        {
            japanese: "ミュ",
            romaji: "myu",
            type: "katakana",
            consonant: "my"
        },
        {
            japanese: "ミョ",
            romaji: "myo",
            type: "katakana",
            consonant: "my"
        },
        {
            japanese: "リャ",
            romaji: "rya",
            type: "katakana",
            consonant: "ry"
        },
        {
            japanese: "リュ",
            romaji: "ryu",
            type: "katakana",
            consonant: "ry"
        },
        {
            japanese: "リョ",
            romaji: "ryo",
            type: "katakana",
            consonant: "ry"
        },
        {
            japanese: "あ",
            romaji: "a",
            type: "hiragana",
            consonant: "none"
        },
        {
            japanese: "い",
            romaji: "i",
            type: "hiragana",
            consonant: "none"
        },
        {
            japanese: "う",
            romaji: "u",
            type: "hiragana",
            consonant: "none"
        },
        {
            japanese: "え",
            romaji: "e",
            type: "hiragana",
            consonant: "none"
        },
        {
            japanese: "お",
            romaji: "o",
            type: "hiragana",
            consonant: "none"
        },
        {
            japanese: "か",
            romaji: "ka",
            type: "hiragana",
            consonant: "k"
        },
        {
            japanese: "き",
            romaji: "ki",
            type: "hiragana",
            consonant: "k"
        },
        {
            japanese: "く",
            romaji: "ku",
            type: "hiragana",
            consonant: "k"
        },
        {
            japanese: "け",
            romaji: "ke",
            type: "hiragana",
            consonant: "k"
        },
        {
            japanese: "こ",
            romaji: "ko",
            type: "hiragana",
            consonant: "k"
        },
        {
            japanese: "が",
            romaji: "ga",
            type: "hiragana",
            consonant: "g"
        },
        {
            japanese: "ぎ",
            romaji: "gi",
            type: "hiragana",
            consonant: "g"
        },
        {
            japanese: "ぐ",
            romaji: "gu",
            type: "hiragana",
            consonant: "g"
        },
        {
            japanese: "げ",
            romaji: "ge",
            type: "hiragana",
            consonant: "g"
        },
        {
            japanese: "ご",
            romaji: "go",
            type: "hiragana",
            consonant: "g"
        },
        {
            japanese: "さ",
            romaji: "sa",
            type: "hiragana",
            consonant: "s"
        },
        {
            japanese: "し",
            romaji: "shi",
            type: "hiragana",
            consonant: "s"
        },
        {
            japanese: "す",
            romaji: "su",
            type: "hiragana",
            consonant: "s"
        },
        {
            japanese: "せ",
            romaji: "se",
            type: "hiragana",
            consonant: "s"
        },
        {
            japanese: "そ",
            romaji: "so",
            type: "hiragana",
            consonant: "s"
        },
        {
            japanese: "ざ",
            romaji: "za",
            type: "hiragana",
            consonant: "z"
        },
        {
            japanese: "じ",
            romaji: "ji",
            type: "hiragana",
            consonant: "z"
        },
        {
            japanese: "ず",
            romaji: "zu",
            type: "hiragana",
            consonant: "z"
        },
        {
            japanese: "ぜ",
            romaji: "ze",
            type: "hiragana",
            consonant: "z"
        },
        {
            japanese: "ぞ",
            romaji: "zo",
            type: "hiragana",
            consonant: "z"
        },
        {
            japanese: "た",
            romaji: "ta",
            type: "hiragana",
            consonant: "t"
        },
        {
            japanese: "ち",
            romaji: "chi",
            type: "hiragana",
            consonant: "t"
        },
        {
            japanese: "つ",
            romaji: "tsu",
            type: "hiragana",
            consonant: "t"
        },
        {
            japanese: "て",
            romaji: "te",
            type: "hiragana",
            consonant: "t"
        },
        {
            japanese: "と",
            romaji: "to",
            type: "hiragana",
            consonant: "t"
        },
        {
            japanese: "だ",
            romaji: "da",
            type: "hiragana",
            consonant: "d"
        },
        {
            japanese: "ぢ",
            romaji: "ji",
            type: "hiragana",
            consonant: "d"
        },
        {
            japanese: "づ",
            romaji: "zu",
            type: "hiragana",
            consonant: "d"
        },
        {
            japanese: "で",
            romaji: "de",
            type: "hiragana",
            consonant: "d"
        },
        {
            japanese: "ど",
            romaji: "do",
            type: "hiragana",
            consonant: "d"
        },
        {
            japanese: "な",
            romaji: "na",
            type: "hiragana",
            consonant: "n"
        },
        {
            japanese: "に",
            romaji: "ni",
            type: "hiragana",
            consonant: "n"
        },
        {
            japanese: "ぬ",
            romaji: "nu",
            type: "hiragana",
            consonant: "n"
        },
        {
            japanese: "ね",
            romaji: "ne",
            type: "hiragana",
            consonant: "n"
        },
        {
            japanese: "の",
            romaji: "no",
            type: "hiragana",
            consonant: "n"
        },
        {
            japanese: "は",
            romaji: "ha",
            type: "hiragana",
            consonant: "f"
        },
        {
            japanese: "ひ",
            romaji: "hi",
            type: "hiragana",
            consonant: "f"
        },
        {
            japanese: "ふ",
            romaji: "fu",
            type: "hiragana",
            consonant: "f"
        },
        {
            japanese: "へ",
            romaji: "he",
            type: "hiragana",
            consonant: "f"
        },
        {
            japanese: "ほ",
            romaji: "ho",
            type: "hiragana",
            consonant: "f"
        },
        {
            japanese: "ば",
            romaji: "ba",
            type: "hiragana",
            consonant: "b"
        },
        {
            japanese: "び",
            romaji: "bi",
            type: "hiragana",
            consonant: "b"
        },
        {
            japanese: "ぶ",
            romaji: "bu",
            type: "hiragana",
            consonant: "b"
        },
        {
            japanese: "べ",
            romaji: "be",
            type: "hiragana",
            consonant: "b"
        },
        {
            japanese: "ぼ",
            romaji: "bo",
            type: "hiragana",
            consonant: "b"
        },
        {
            japanese: "ぱ",
            romaji: "pa",
            type: "hiragana",
            consonant: "p"
        },
        {
            japanese: "ぴ",
            romaji: "pi",
            type: "hiragana",
            consonant: "p"
        },
        {
            japanese: "ぷ",
            romaji: "pu",
            type: "hiragana",
            consonant: "p"
        },
        {
            japanese: "ぺ",
            romaji: "pe",
            type: "hiragana",
            consonant: "p"
        },
        {
            japanese: "ぽ",
            romaji: "po",
            type: "hiragana",
            consonant: "p"
        },
        {
            japanese: "ま",
            romaji: "ma",
            type: "hiragana",
            consonant: "m"
        },
        {
            japanese: "み",
            romaji: "mi",
            type: "hiragana",
            consonant: "m"
        },
        {
            japanese: "む",
            romaji: "mu",
            type: "hiragana",
            consonant: "m"
        },
        {
            japanese: "め",
            romaji: "me",
            type: "hiragana",
            consonant: "m"
        },
        {
            japanese: "も",
            romaji: "mo",
            type: "hiragana",
            consonant: "m"
        },
        {
            japanese: "や",
            romaji: "ya",
            type: "hiragana",
            consonant: "y"
        },
        {
            japanese: "ゆ",
            romaji: "yu",
            type: "hiragana",
            consonant: "y"
        },
        {
            japanese: "よ",
            romaji: "yo",
            type: "hiragana",
            consonant: "y"
        },
        {
            japanese: "ら",
            romaji: "ra",
            type: "hiragana",
            consonant: "r"
        },
        {
            japanese: "り",
            romaji: "ri",
            type: "hiragana",
            consonant: "r"
        },
        {
            japanese: "る",
            romaji: "ru",
            type: "hiragana",
            consonant: "r"
        },
        {
            japanese: "れ",
            romaji: "re",
            type: "hiragana",
            consonant: "r"
        },
        {
            japanese: "ろ",
            romaji: "ro",
            type: "hiragana",
            consonant: "r"
        },
        {
            japanese: "わ",
            romaji: "wa",
            type: "hiragana",
            consonant: "w"
        },
        {
            japanese: "を",
            romaji: "wo",
            type: "hiragana",
            consonant: "w"
        },
        {
            japanese: "ん",
            romaji: "n/m",
            type: "hiragana",
            consonant: "n/m"
        },
        {
            japanese: "ア",
            romaji: "a",
            type: "katakana",
            consonant: "none"
        },
        {
            japanese: "イ",
            romaji: "i",
            type: "katakana",
            consonant: "none"
        },
        {
            japanese: "ウ",
            romaji: "u",
            type: "katakana",
            consonant: "none"
        },
        {
            japanese: "エ",
            romaji: "e",
            type: "katakana",
            consonant: "none"
        },
        {
            japanese: "オ",
            romaji: "o",
            type: "katakana",
            consonant: "none"
        },
        {
            japanese: "カ",
            romaji: "ka",
            type: "katakana",
            consonant: "k"
        },
        {
            japanese: "キ",
            romaji: "ki",
            type: "katakana",
            consonant: "k"
        },
        {
            japanese: "ク",
            romaji: "ku",
            type: "katakana",
            consonant: "k"
        },
        {
            japanese: "ケ",
            romaji: "ke",
            type: "katakana",
            consonant: "k"
        },
        {
            japanese: "コ",
            romaji: "ko",
            type: "katakana",
            consonant: "k"
        },
        {
            japanese: "ガ",
            romaji: "ga",
            type: "katakana",
            consonant: "g"
        },
        {
            japanese: "ギ",
            romaji: "gi",
            type: "katakana",
            consonant: "g"
        },
        {
            japanese: "グ",
            romaji: "gu",
            type: "katakana",
            consonant: "g"
        },
        {
            japanese: "ゲ",
            romaji: "ge",
            type: "katakana",
            consonant: "g"
        },
        {
            japanese: "ゴ",
            romaji: "go",
            type: "katakana",
            consonant: "g"
        },
        {
            japanese: "サ",
            romaji: "sa",
            type: "katakana",
            consonant: "s"
        },
        {
            japanese: "シ",
            romaji: "shi",
            type: "katakana",
            consonant: "s"
        },
        {
            japanese: "ス",
            romaji: "su",
            type: "katakana",
            consonant: "s"
        },
        {
            japanese: "セ",
            romaji: "se",
            type: "katakana",
            consonant: "s"
        },
        {
            japanese: "ソ",
            romaji: "so",
            type: "katakana",
            consonant: "s"
        },
        {
            japanese: "ザ",
            romaji: "za",
            type: "katakana",
            consonant: "z"
        },
        {
            japanese: "ジ",
            romaji: "ji",
            type: "katakana",
            consonant: "z"
        },
        {
            japanese: "ズ",
            romaji: "zu",
            type: "katakana",
            consonant: "z"
        },
        {
            japanese: "ゼ",
            romaji: "ze",
            type: "katakana",
            consonant: "z"
        },
        {
            japanese: "ゾ",
            romaji: "zo",
            type: "katakana",
            consonant: "z"
        },
        {
            japanese: "タ",
            romaji: "ta",
            type: "katakana",
            consonant: "t"
        },
        {
            japanese: "チ",
            romaji: "chi",
            type: "katakana",
            consonant: "t"
        },
        {
            japanese: "ツ",
            romaji: "tsu",
            type: "katakana",
            consonant: "t"
        },
        {
            japanese: "テ",
            romaji: "te",
            type: "katakana",
            consonant: "t"
        },
        {
            japanese: "ト",
            romaji: "to",
            type: "katakana",
            consonant: "t"
        },
        {
            japanese: "ダ",
            romaji: "da",
            type: "katakana",
            consonant: "d"
        },
        {
            japanese: "ヂ",
            romaji: "ji",
            type: "katakana",
            consonant: "d"
        },
        {
            japanese: "ヅ",
            romaji: "zu",
            type: "katakana",
            consonant: "d"
        },
        {
            japanese: "デ",
            romaji: "de",
            type: "katakana",
            consonant: "d"
        },
        {
            japanese: "ド",
            romaji: "do",
            type: "katakana",
            consonant: "d"
        },
        {
            japanese: "ナ",
            romaji: "na",
            type: "katakana",
            consonant: "n"
        },
        {
            japanese: "ニ",
            romaji: "ni",
            type: "katakana",
            consonant: "n"
        },
        {
            japanese: "ヌ",
            romaji: "nu",
            type: "katakana",
            consonant: "n"
        },
        {
            japanese: "ネ",
            romaji: "ne",
            type: "katakana",
            consonant: "n"
        },
        {
            japanese: "ノ",
            romaji: "no",
            type: "katakana",
            consonant: "n"
        },
        {
            japanese: "ハ",
            romaji: "ha",
            type: "katakana",
            consonant: "h"
        },
        {
            japanese: "ヒ",
            romaji: "hi",
            type: "katakana",
            consonant: "h"
        },
        {
            japanese: "フ",
            romaji: "fu",
            type: "katakana",
            consonant: "h"
        },
        {
            japanese: "ヘ",
            romaji: "he",
            type: "katakana",
            consonant: "h"
        },
        {
            japanese: "ホ",
            romaji: "ho",
            type: "katakana",
            consonant: "h"
        },
        {
            japanese: "バ",
            romaji: "ba",
            type: "katakana",
            consonant: "b"
        },
        {
            japanese: "ビ",
            romaji: "bi",
            type: "katakana",
            consonant: "b"
        },
        {
            japanese: "ブ",
            romaji: "bu",
            type: "katakana",
            consonant: "b"
        },
        {
            japanese: "ベ",
            romaji: "be",
            type: "katakana",
            consonant: "b"
        },
        {
            japanese: "ボ",
            romaji: "bo",
            type: "katakana",
            consonant: "b"
        },
        {
            japanese: "パ",
            romaji: "pa",
            type: "katakana",
            consonant: "p"
        },
        {
            japanese: "ピ",
            romaji: "pi",
            type: "katakana",
            consonant: "p"
        },
        {
            japanese: "プ",
            romaji: "pu",
            type: "katakana",
            consonant: "p"
        },
        {
            japanese: "ぺ",
            romaji: "pe",
            type: "katakana",
            consonant: "p"
        },
        {
            japanese: "ポ",
            romaji: "po",
            type: "katakana",
            consonant: "p"
        },
        {
            japanese: "マ",
            romaji: "ma",
            type: "katakana",
            consonant: "m"
        },
        {
            japanese: "ミ",
            romaji: "mi",
            type: "katakana",
            consonant: "m"
        },
        {
            japanese: "ム",
            romaji: "mu",
            type: "katakana",
            consonant: "m"
        },
        {
            japanese: "メ",
            romaji: "me",
            type: "katakana",
            consonant: "m"
        },
        {
            japanese: "モ",
            romaji: "mo",
            type: "katakana",
            consonant: "m"
        },
        {
            japanese: "ヤ",
            romaji: "ya",
            type: "katakana",
            consonant: "y"
        },
        {
            japanese: "ユ",
            romaji: "yu",
            type: "katakana",
            consonant: "y"
        },
        {
            japanese: "ヨ",
            romaji: "yo",
            type: "katakana",
            consonant: "y"
        },
        {
            japanese: "ラ",
            romaji: "ra",
            type: "katakana",
            consonant: "r"
        },
        {
            japanese: "リ",
            romaji: "ri",
            type: "katakana",
            consonant: "r"
        },
        {
            japanese: "ル",
            romaji: "ru",
            type: "katakana",
            consonant: "r"
        },
        {
            japanese: "レ",
            romaji: "re",
            type: "katakana",
            consonant: "r"
        },
        {
            japanese: "ロ",
            romaji: "ro",
            type: "katakana",
            consonant: "r"
        },
        {
            japanese: "ワ",
            romaji: "wa",
            type: "katakana",
            consonant: "w"
        },
        {
            japanese: "ヲ",
            romaji: "wo",
            type: "katakana",
            consonant: "w"
        },
        {
            japanese: "ン",
            romaji: "n/m",
            type: "katakana",
            consonant: "n/m"
        }
    ]);
};