# This script is used to update the a repository containing the starter kit 
# https://github.com/carbon-design-system/gatsby-starter-carbon-theme
# This project should be located in the same directory as the starter project

# Copy all files in the example directory to the starter (except for .DS_Store)
find ./packages/example -type f -maxdepth 1 ! -iname '.DS_Store' -exec cp {} ../gatsby-starter-carbon-theme/ \;

# delete and copy over directories
rm -rf ../gatsby-starter-carbon-theme/{src,static}
cp -r ./packages/example/src ../gatsby-starter-carbon-theme/src
cp -r ./packages/example/static ../gatsby-starter-carbon-theme/static