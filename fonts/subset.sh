LATIN="U+0020-00FF"
PUNCTUATION="U+2000-206F"
ARROWS="U+2190-21c6"
LATINEXT="U+0100-024F"
GREEK="U+0370-03FF"
CYR="U+0400-04FF"
CYREXT="U+0500-052F"

pyftsubset src/IBMPlexSans-Italic-VF.ttf --unicodes=$LATIN --flavor="woff2" --output-file=IBMPlexSansLatin-Italic-VF.woff2;
pyftsubset src/IBMPlexSans-Italic-VF.ttf --unicodes=$LATINEXT --flavor="woff2" --output-file=IBMPlexSansLatinExt-Italic-VF.woff2;
pyftsubset src/IBMPlexSans-Italic-VF.ttf --unicodes=$VIETNAMESE --flavor="woff2" --output-file=IBMPlexSansVietnamese-Italic-VF.woff2;
pyftsubset src/IBMPlexSans-Italic-VF.ttf --unicodes=$GREEK --flavor="woff2" --output-file=IBMPlexSansGreek-Italic-VF.woff2;
pyftsubset src/IBMPlexSans-Italic-VF.ttf --unicodes=$CYR --flavor="woff2" --output-file=IBMPlexSansCyr-Italic-VF.woff2;
pyftsubset src/IBMPlexSans-Italic-VF.ttf --unicodes=$CYREXT --flavor="woff2" --output-file=IBMPlexSansCyrExt-Italic-VF.woff2;

pyftsubset src/IBMPlexSans-VF.ttf --unicodes=$LATIN,$ARROWS,$PUNCTUATION --flavor="woff2" --output-file=IBMPlexSansLatin-VF.woff2;
pyftsubset src/IBMPlexSans-VF.ttf --unicodes=$LATINEXT --flavor="woff2" --output-file=IBMPlexSansLatinExt-VF.woff2;
pyftsubset src/IBMPlexSans-VF.ttf --unicodes=$VIETNAMESE --flavor="woff2" --output-file=IBMPlexSansVietnamese-VF.woff2;
pyftsubset src/IBMPlexSans-VF.ttf --unicodes=$GREEK --flavor="woff2" --output-file=IBMPlexSansGreek-VF.woff2;
pyftsubset src/IBMPlexSans-VF.ttf --unicodes=$CYR --flavor="woff2" --output-file=IBMPlexSansCyr-VF.woff2;
pyftsubset src/IBMPlexSans-VF.ttf --unicodes=$CYREXT --flavor="woff2" --output-file=IBMPlexSansCyrExt-VF.woff2;