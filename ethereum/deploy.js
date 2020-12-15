const HDwalletProvider = require("@truffle/hdwallet-provider");

const Web3 = require('web3');

const {interface, bytecode} = require('./compile'); //fetch contract attributes

const provider = new HDwalletProvider(
  'thank purse shallow flash young sting decline math unveil story rubber coach',//Add  Mnemonic phrase of Host account
  'https://rinkeby.infura.io/v3/40fe8bbd00db49f980863386af612f14'//Add your infra link
);

const web3 = new Web3(provider);
const privateKey= 'deae0ccdccd1150f2e133390af27e822083fccf06efd98d4be935e154c150ff9';
const deploy = async () =>{

  const accounts= await web3.eth.getAccounts();
  console.log('Attempt to deploy from account ', accounts[0]);//host address

  const result = await  new web3.eth.Contract(JSON.parse(interface))
                           .deploy({ data : '0x' + bytecode });

  let options = {
                  data: result.encodeABI(),
                  gas: '2000000'
  };

  let signedTransaction = await web3.eth.accounts.signTransaction(options, privateKey);
  const depLoy= await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

  console.log(interface); //contract interface attribute
  console.log('Contract deploy to ', depLoy.contractAddress); //Contract address
};

deploy();
