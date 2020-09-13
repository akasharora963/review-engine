import web3 from '../web3';
// for implementing transection
export async function signAndSendTransaction(options, privateKey) {
    let signedTransaction = await web3.eth.accounts.signTransaction(options, privateKey);
    await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
}
