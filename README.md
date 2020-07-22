# Blockchain-Review-Engine
Blockchain usage in product / people review engine is not explored to a greater extent. Although there is a prevalence of the digital platforms, the perception of Trust & Data Privacy is limited for them. This could be an area where Blockchain can be used to establish Digital Trust. Blockchain which started to build trust for multiple unknown parties in crypto-currency space can be used to build trust in other business scenarios as well. 

There are apprehensions for the feedback shared on the platforms like Amazon, Times of India, Zomato, Twitter etc. given people also use these platforms to give fake & doctored reviews. People buy products even with false ratings given on these platforms leading to bad experience. On the other hand, even genuine products get bad ratings with wrong feedback posted by their competitors. 

This application explores Blockchain usage in Review Engine using Ethereum Rinkeby network. 

***
#### Understanding Blockchain Basics:

https://sway.office.com/moFQS2ef6Fjndk1V

***
#### Application Rules:
  - Application admin can add products
  - Application user can rate a product only once (To extend in future to give flexibility to update the rating, however rating history will be stored in Blockchain)
*** 
### Enviornment Set Up

#### Set up MetaMask
Download it from https://metamask.io/ and make its extention to browser  (reference https://medium.com/@followcoin/how-to-install-metamask-88cbdabc1d28)
***
#### Set up ethereum node with help of Infura
Go to "https://infura.io/" and get started (reference https://blog.infura.io/getting-started-with-infura-28e41844cc89)
***
#### Getting started

- Install Node.js from https://nodejs.org/en/
- Install git from https://git-scm.com/downloads

check version by following commands:
- node -v
- npm -v
- git --version
***
### Package Updates
Make a new folder and install following packages :
#### Ethereum side Packages
``` sh
$ npm install fs fs-extra
$ npm install solc@0.4.17
$ npm install web3
$ npm install @truffle/hdwallet-provider
$ npm install ganache-cli
$ npm install mocha
```
***
#### User interface side Packages
```sh
$ npm install next
$ npm install next-routes
$ npm install react react-dom
$ npm install semantic-ui-react
$ npm install semantic-ui-css
```
***
After installing packages : <br/>Open package.json <br/> In script tag, add 'test' : 'mocha' and 'dev' : 'node server.js'<br/>
***
### File Updates
#### File Details
- .next <br/>
Next.js *A React framework* is used to ensure an intuitive page-based routing system (with support for dynamic routes). <br/> <br/>
- ethereum : It contains ethereum related files <br/>
contracts : It contains the smart contract built in solidity. <br/>
compile.js : It is used to compile the contract using solc.<br/>
deploy.js : It deploys a contract.<br/>
instance.js : It is used to create a instance of contract so that an interaction is done using frontend.<br/>
web3.js : It is used to generate the web3 instance and to set a provider.<br/> <br/>
- pages : It contains the frontend files<br/>
index.js : It defines the Home Page <br/>
show.js : It defnes the Products Page <br/>
voter-details.js : It defines the Voters Details Page. <br/> <br/>
- test (ratingTest.js) : It is used to write test cases realated to contract. <br/> <br/>
- routes.js : It is used to set routes of the pages.<br/> <br/>
- server.js : It is used to set the server. <br/> <br/>
- package,json : It contains all the dependencies related to project. <br/> <br/>
***
### How to Test the environment?
To run test :
```sh
$ npm run test
```
#### Preview
![image](https://user-images.githubusercontent.com/45670997/87297355-e8e4ec00-c525-11ea-909f-84bfc9ec671c.png)
***
### How to Compile the contarct?
To compile, Go to Ethereum directory and use command :
```sh
$ node compile.js
```
### How to Deploy the contract?
Add your Metamask Mnemonics and your rinkeby infura link in the file.
#### Preview 
![image](https://user-images.githubusercontent.com/68531338/88138363-270b9b00-cc0b-11ea-8460-e423d2aeb640.png)
To deploy , Go to Ethereum directory and use command :
```sh
$ node deploy.js
```
#### Preview
![image](https://user-images.githubusercontent.com/45670997/87298242-7d9c1980-c527-11ea-9e88-4238001597f6.png)
Copy interface and contract address and put in instance.js
***
### How to start the Application?
To run server
```sh
$ npm run dev
```
#### Preview
![image](https://user-images.githubusercontent.com/45670997/87298711-41b58400-c528-11ea-8b69-c93edcbcb233.png)
***
### How to use the Application?
At the start
### Home page
![image](https://user-images.githubusercontent.com/45670997/87299133-12ebdd80-c529-11ea-8577-742553f79184.png)

### Products Page
![image](https://user-images.githubusercontent.com/45670997/87301132-a7a40a80-c52c-11ea-9a5e-d73e199e73ff.png)

###  Voter Details Page
![image](https://user-images.githubusercontent.com/45670997/87301187-bd193480-c52c-11ea-9b18-d4c6d3814e7e.png)
***
#### Adding product
![image](https://user-images.githubusercontent.com/45670997/87301983-28173b00-c52e-11ea-8314-f60f5b998939.png)

#### Products Page Status
![image](https://user-images.githubusercontent.com/45670997/87302222-9e1ba200-c52e-11ea-94e2-2b301643e583.png)

### Voting product
![image](https://user-images.githubusercontent.com/45670997/87302375-e76bf180-c52e-11ea-8220-e8ded20f596b.png)
![image](https://user-images.githubusercontent.com/45670997/87302546-32860480-c52f-11ea-9439-759c23fa7293.png)
![image](https://user-images.githubusercontent.com/45670997/87302610-53e6f080-c52f-11ea-8ff1-31be7f93c58e.png)
![image](https://user-images.githubusercontent.com/45670997/87302641-682aed80-c52f-11ea-92a0-660c8f3c06d4.png)

### Voter Details
![image](https://user-images.githubusercontent.com/45670997/87302718-8a247000-c52f-11ea-8aff-18737e12fb80.png)

Thank you!!
