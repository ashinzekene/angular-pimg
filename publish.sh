echo 'About to begin publishing 👨‍💻'

echo 'Copying artifacts...'

cp {CONTRIBUTING.md,ISSUE_TEMPLATE.md,pimg.svg,PULL_REQUEST-TEMPLATE.md,README.md,LICENSE.md} projects/angular-pimg/


echo 'Building app... Might take a while...'

ng build --prod

cd projects/angular-pimg

npm version $1