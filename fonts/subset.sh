LATIN="U+0020-00FF"
LATINEXT="U+0100-1EF9"
PUNCTUATION="U+2000-FB02"
ARROWS="U+2190-21c6"

pyftsubset src/IBMPlexSans-Italic-VF.ttf --unicodes=$LATIN --flavor="woff2" --output-file=IBMPlexSansLatin-Italic-VF.woff2;
pyftsubset src/IBMPlexSans-Italic-VF.ttf --unicodes=$LATINEXT --flavor="woff2" --output-file=IBMPlexSansLatinExt-Italic-VF.woff2;
pyftsubset src/IBMPlexSans-Italic-VF.ttf --unicodes=$PUNCTUATION --flavor="woff2" --output-file=IBMPlexSansOther-Italic-VF.woff2;

pyftsubset src/IBMPlexSans-VF.ttf --unicodes=$LATIN,$ARROWS --flavor="woff2" --output-file=IBMPlexSansLatin-VF.woff2;
pyftsubset src/IBMPlexSans-VF.ttf --unicodes=$LATINEXT --flavor="woff2" --output-file=IBMPlexSansLatinExt-VF.woff2;
pyftsubset src/IBMPlexSans-VF.ttf --unicodes=$PUNCTUATION --flavor="woff2" --output-file=IBMPlexSansOther-VF.woff2;