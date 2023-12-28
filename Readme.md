#This is episode 1
Questions

1. What is CDN
2. What is Cross Origin

#Episode 2

git and github diff
package.json is configuaration
npm full form is not node package manager

npm is a package manager

most important package in our project is bundler

bundler (webpack,parcel,weed etc)
bundler bundle the packages for production

create react app use web-pack behind the scene

parcel comes as a node package

to install any parcel

npm install package name
like

npm install -D parcel

what is -D
so one is dev dependency and one is normal(production) dependency

tilde(~) and caret(^) in npm?

if there is minor update like 2.8.3 to 2.8.4 so ^ automatically updates

~ is use for major version

what is difference between package.json and package-lock.json?

package.json records approx verion
package-lock.json have exact version

Node modules is very heavy(see memes)

what are other things that comes with parcel?
the things are downloaded with parcel have transitive dependency
like parcel uses babel

we are not sending node modules to github because we have package.json and package-lock.json so we can regenrate all things

what is npx parcel index.html?

npm used to install and npx used to execute

cdn link is not prefered way because it is a heavy task
to call other network

so we install react as a package

npm install react

and also

npm install react-dom or npm i react-dom

i is nothing but a short form of install

what parcel do?

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorith - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code splitting
- Differential Bundling - support older browsers
- Doagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

**_ Parcel is a Beast _**

npx parcel build index.html
this will give error because in package.json we have one tage name "main": "App.js" so remove this
because it tells entry point but with parcel we give file name so it creates conflict

dist contains production ready file

we don't need to push dist and parcel-cache to git because we can regenrate it

// explore browserlist website

we can configure browser for out app in package.json

"browserlist":[
"last 2 versions"
]

there are multiple ways to do it explore browserlist website for that
