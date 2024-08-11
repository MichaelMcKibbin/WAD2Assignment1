#!/bin/bash
# to run type: bash moviescript.sh
# or change permissions on moviescript.sh using: chmod a+x moviescript.sh
# and then run: ./moviescript.sh
#
npm install
npm install uuid --save
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material --save
npx storybook@latest init
npm run storybook
npm install react-router-dom
npm install --save react-query
npm install react-hook-form --save
npm install firebase
npm install styled-components
npm start
