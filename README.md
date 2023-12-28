# Project setup guide for node and typescript

First of all check that typescript is installed

```
tsc -v

```
If not installed then install the typescript by running

```
npm install -g typescript

```

initiliasing the project using the following command

```
npm init --y

```
To configure the typescript with the project by running

```
tsc --init

```
By the above command a tsconfig.json file will be created, open it and paste the following lines.
```
{
"compilerOptions": {
"target": "ES6",  
 "module": "commonjs",  
 "rootDir": "./src",  
 "moduleResolution": "node",  
 "outDir": "./dist",  
 "esModuleInterop": true,  
 "forceConsistentCasingInFileNames": true,  
 "strict": true,  
 "skipLibCheck": true  
 },
"include": ["./src/**/*"]
}
```

After that install following dependencies

```
npm install @types/node
npm install -g ts-node

```

## Resources used in project
* [How to set up TypeScript with Node.js and Express](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)

- [Typescript paths with ts-node, ts-node-dev, and jest](https://medium.com/@fmoessle/typescript-paths-with-ts-node-ts-node-dev-and-jest-671deacf6428)

- [Delightful testing with Jest and TypeScript](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation)

## Resources for configure swagger documentation

- [Document a Node.js REST API with Swagger and Open API](https://blog.tericcabrel.com/document-a-node-js-rest-api-with-swagger-and-open-api/)

## Resources for configure CORS

- [CORS in Express using TypeScript](https://gist.github.com/adjeim/a2ddb5214c92ce5d708fb0a3d6f073f6)

