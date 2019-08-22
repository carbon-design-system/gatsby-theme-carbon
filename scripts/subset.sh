LATIN1="U+0000,U+000D,U+0020-007E,U+00A0-00A3,U+00A4-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+2074,U+20AC,U+2122,U+2212,U+FB01-FB02"
ARROWS="U2191-21c6"

pyftsubset IBMPlexSans-Italic-VF.ttf --unicodes=$LATIN1 --flavor="woff2" --output-file=IBMPlexSans-Italic-VF.woff2;
pyftsubset IBMPlexSans-VF.ttf --unicodes=$LATIN1,$ARROWS --flavor="woff2" --output-file=IBMPlexSans-VF.woff2;