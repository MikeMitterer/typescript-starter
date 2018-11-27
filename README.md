# TypeScript -
> [Understanding TypeScript - Udemy](https://www.udemy.com/understanding-typescript/learn/v4/overview)

## Install
    
    sudo npm install npm@latest -g
    npm install -g typescript
    
### Packages

    npm install <package> [--save-dev]
         
    npm install @types/mocha --save-dev
    npm install lite-server --save-dev
    
    # WebPack
    npm install webpack webpack-cli webpack-dev-server --save-dev
    
#### Update
> [Update local packages](https://docs.npmjs.com/getting-started/updating-local-packages)

    # Check
    npm outdated
    
    # Update
    npm update    
     
## Types for better Code (2)

## FunctionType (2/21)
Functiontype: (P1,p2) => rettype
Objekttypen: so ähnlich nur mit geschwungene Klammern

    type Complex = { ... }

### Union types (2/22)

    let age : number | string = 10

### Check types (2/23)

    it(typeof myvar == "string")

### never type (2/24)
Wenn ein Error geworfen wird

### nullable (2/25)
Per default sind alle vars nullable
Force tsconfig
Union type hebt die Einschränkung auf (Pipe)

## Compiler (3)
Empfohlene settings für `tsconfig`

   - noEmitOnError - No JS on error
   - noImplicitAny
   - sourceMap
   - noImplicitAny
   - strictNullChecks
   - noUnusedParameters

## Klassen (5)

### Abstract-Class

    abstract class Test {
        ...
        abstract changeName(name: string) : string
    }
    
Bei den properties ist auch `readonly` möglich.

#### readonly vs const
The easiest way to remember whether to use readonly or const is to ask 
whether you’re using it on a variable or a property. 
Variables use const whereas properties use readonly.

## Namespaces + Modules (6)

    namespace MyName {
        export namespace OtherName {
            export function abc() {}
            export function xyz() {}
        }            
    }
    
    MyName.OtherName.abc();
    
    
## Interfaces (7)
> [TypeScript - Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

Interfaces können auch mit Funktionen oder, als Function-Param, mit Objekten verwendet werden 
    
## Generics (8)
Funktioniert im Prinzip wie bei Java

Nicht zu vergessen:

    class Name<T extends BaseValue | number> {
        ...
    }    

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

## Links
   - [TS / Sass boilerplate](https://github.com/JaminMa/webpack-typescript-sass-app-boilerplate)
   
 
 
     