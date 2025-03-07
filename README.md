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
- component <br/>
helper : for encoding and decoding <br/>
private key modal : It contains the private key implementation <br/>
- ethereum : It contains ethereum related files <br/>
contracts : It contains the smart contract built in solidity. <br/>
helper : It contains  a helper file for sign and send Transaction <br/>
compile.js : It is used to compile the contract using solc.<br/>
deploy.js : It deploys a contract.<br/>
instance.js : It is used to create a instance of contract so that an interaction is done using frontend.<br/>
web3.js : It is used to generate the web3 instance and to set a provider.<br/> <br/>
- pages : It contains the frontend files<br/>
products <br/>
index.js : It defines the Admin Home Page <br/>
show.js :  It defines the product details page <br/>
user-details.js : It defines the user information <br/>
users <br/>
register.js : It defines the registeration page <br/>
show.js : It defines the user home page <br/>
voter-details.js : It defines the Voters Details Page. <br/> <br/>
index.js : It defines the home page(login page)<br/>
- test (ratingTest.js) : It is used to write test cases realated to contract. <br/> <br/>
- routes.js : It is used to set routes of the pages.<br/> <br/>
- server.js : It is used to set the server. <br/> <br/>
- package.json : It contains all the dependencies related to project. <br/> <br/>
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
Add your Metamask Mnemonics and your rinkeby infura link in the file.<br/> <br/>
#### For metamask mnemonics:<br/> <br/>
Open metamask and go to settings:<br/> <br/>
![image](https://user-images.githubusercontent.com/68531338/88142886-e6644f80-cc13-11ea-8b35-39b9d8f9bb8b.png) <br/> <br/>
Go to security and privacy :<br/> <br/>
![image](https://user-images.githubusercontent.com/68531338/88142512-41e20d80-cc13-11ea-950d-52ca314d8157.png)<br/> <br/>
Go on reveal seeds and type your password to get your mnemonic phrase <br/> <br/>
![image](https://user-images.githubusercontent.com/68531338/88142558-5cb48200-cc13-11ea-9975-277b7683f06f.png)<br/> <br/>
![image](https://user-images.githubusercontent.com/68531338/88143026-27f4fa80-cc14-11ea-919e-789177ac6515.png) <br/> <br/>

#### For Infura link :
Login to your infura account : <br/> <br/>
![image](https://user-images.githubusercontent.com/68531338/88143703-545d4680-cc15-11ea-9782-71c5d8473473.png) <br/><br/>
Go to ethereum and your created project: <br/><br/>
![image](https://user-images.githubusercontent.com/68531338/88144049-ee24f380-cc15-11ea-8216-3efddf913053.png) <br/> <br/>
Open settings : <br/> <br/>
![image](https://user-images.githubusercontent.com/68531338/88145137-9c7d6880-cc17-11ea-9978-d3c3614a431e.png) <br/>


#### Preview 
![image](https://user-images.githubusercontent.com/68531338/88141720-c7fd5480-cc11-11ea-9ce0-4cb243ec4287.png)

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
![image](https://user-images.githubusercontent.com/68531338/95194002-55ece280-07f2-11eb-8035-215f29742c00.png)

### Registration Page
![image](https://user-images.githubusercontent.com/68531338/95194199-a06e5f00-07f2-11eb-9b35-f83fc1293588.png)

### Login 
![image](https://user-images.githubusercontent.com/68531338/95195133-c1837f80-07f3-11eb-9e93-2abf164a441e.png)
![image](https://user-images.githubusercontent.com/68531338/95195309-fb548600-07f3-11eb-98c0-9e96b6e60577.png)
***
#### Admin Home Page
![image](https://user-images.githubusercontent.com/68531338/95195489-3bb40400-07f4-11eb-9e9a-1ac27479dbbc.png)

### User Details
![image](https://user-images.githubusercontent.com/68531338/95196112-32776700-07f5-11eb-8b51-e19d88f9e689.png)

### AddingProduct
![image](https://user-images.githubusercontent.com/68531338/95196979-7c148180-07f6-11eb-9cca-7b11f4805700.png)

### Product Details
![image](https://user-images.githubusercontent.com/68531338/95196345-871ae200-07f5-11eb-9a75-97e3d287ab2b.png)

### User Home Page
![image](https://user-images.githubusercontent.com/68531338/95197510-550a7f80-07f7-11eb-839f-c6147021034e.png)

### Rate the product
![image](https://user-images.githubusercontent.com/68531338/95200577-3e1a5c00-07fc-11eb-81a6-bb0deb06e794.png)
![image](https://user-images.githubusercontent.com/68531338/95200410-fb588400-07fb-11eb-8b62-db8ee090d328.png)
count increases and avg rating changes<br/>
![image](https://user-images.githubusercontent.com/68531338/95200801-981b2180-07fc-11eb-8aa1-115a0daa37bd.png)

### Voter Details
![image](https://user-images.githubusercontent.com/68531338/95200983-e6302500-07fc-11eb-88b4-da60266e8802.png)

Thank you!!
