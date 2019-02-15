# TypeScript - Starter

npm install url-loader --save-dev
npm uninstall image-webpack-loader
node build/fs-test.js
webpack --config webpack.node.js && node build/fs-test.js
BABEL_ENV=node webpack --config webpack.node.js && node build/fs-test.js
type ts
babel --extensions ".ts" tools/fs-test.ts
babel --extensions ".ts" tools/fs-test.ts > test.js
node test.js
npm install -D @babel/preset-env
webpack --config webpack.node.js && node build/fs-test.js 
BABEL_ENV=node babel --extensions ".ts" tools/fs-test.ts tools/part/fs-part.ts 
BABEL_ENV=node babel --extensions ".ts, .tsx" tools/fs-test.ts | node 
BABEL_ENV=node babel --extensions ".ts, .tsx" tools | node
BABEL_ENV=node NODE_ENV=production webpack --config webpack.node.js --mode production

## NPM
> https://medium.freecodecamp.org/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78

.bashrc:

    ### Environment
    #
    # NODE / JS / TypeScript Settings
    #
    
    export PATH="$PATH:./node_modules/.bin"
    
    alias npx="npx --no-install"
    alias ts="npx --no-install  babel-node --extensions \".ts, .tsx\""

### Basis

    # Login
    npm login
       
    # Publish
    npm publish --access=public
    
    # Globale packages anzeigen
    npm list -g --depth 0
        
## Test

Läuft mit JEST

Watch funkt nicht richtig - Solution:

    npm r -g watchman && brew install watchman
    
Watch-Mode

    npm test -- --watch basics    
    
## Publish
> [GitHub](https://github.com/inikulin/publish-please)
> [TypeScript package to NPM](https://medium.com/cameron-nokes/the-30-second-guide-to-publishing-a-typescript-package-to-npm-89d93ff7bccd)

Einmalig muss ein login gemacht werden

    # Login
    npm login
    
    # publish please
    npm install --save-dev publish-please
    
Anzeige der Files die "gepublished" werden        

    npm pack --dry-run
    
### Flat TS package

    # Dist-Folder wird erstellt
    #   - im package.json werden alle Verweise auf 'dist' gelöscht
    npm run build
    
    # Publish findet aus dem dist-Folder statt
    cd dist/
    
    # Check ob alle Files dabei sind
    npm pack --dry-run
    
    # publish ins REPO
    npm publish --access public
    
Am Client

    # Update des Packages
    npm update @mike.mitterer/typescript-starter     
         
    # Build & Test
    npm run build && npm run test:unit
                
## Babel + Node
    
    # Führt das Command aus    
    ./node_modules/@babel/node/bin/babel-node.js --extensions ".ts" tools/babel-test.ts
    ./node_modules/.bin/babel-node --extensions ".ts" tools/babel-test.ts
    
    # Oder - wenn der Pfad in .bashrc eingetragen ist
    #       export PATH="$PATH:./node_modules/.bin"
    babel-node --extensions ".ts" tools/babel-test.ts    
    npx --no-install babel-node --extensions ".ts" tools/babel-test.ts
                    
## WebStorm

In Languages & Frameworks / TypeScript den richtigen Interpreter einstellen

`source/tsconfig.json` ist wichtig da hier als output-dir `dist` spezifiziert wird

## Dart + TS
https://codeburst.io/how-to-use-javascript-libraries-in-your-dart-applications-e44668b8595d

[TypeScript: exposing module types in the global context](https://designprincipia.com/typescript-exposing-module-types-in-the-global-context-and-why-to-avoid-it/)
[EXPOSE GLOBAL VARIABLES, METHODS, AND MODULES IN JAVASCRIPT](http://www.matthiassommer.it/programming/web/javascript/expose-global-variables-methods-modules-javascript/)

[Expose Loader](https://www.npmjs.com/package/expose-loader)

## Problems

   - Browser shows `object` instead of image in browser
   
   "@babel/plugin-transform-modules-commonjs" was installed and included in .babelrc

## Links
   - [TS / Sass boilerplate](https://github.com/JaminMa/webpack-typescript-sass-app-boilerplate)
   
 
 
     