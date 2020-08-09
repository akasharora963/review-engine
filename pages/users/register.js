import React,{Component} from 'react';
import rating from '../../ethereum/instance';
import {Form,Input,Segment,Button,Container,Divider,Message,Icon} from 'semantic-ui-react'; //impotant functionality of semantic ui is used
import {Link,Router} from '../../routes';
import web3 from '../../ethereum/web3';
import { signAndSendTransaction } from '../../ethereum/helper';
import PrivateKeyModal from '../../component/private-key-modal/private-key-modal';
import { decode } from '../../component/helper';

class RegisterIndex extends Component{
  state = {
    newUserName: '',//user name,
    newUserNumber : '',
    userCount: 0,
    accounts: '',
    status: '', // user status
    loading : false, //  loading status
    errorMessage : '',
    privateKeyModal : false
  };

  //Things to be loaded first
  async componentDidMount(){
    if(!web3) return;
    this.setState({accounts: await web3.eth.getAccounts()});
    this.setState({userCount : await rating.methods.userCount().call()});
  }

 closeModal = () => {
   this.setState({ privateKeyModal: false });
 }

//Function to add products
 addUser = async (event) => {
   event.preventDefault();


  let privateKey = sessionStorage.getItem('pkencoded');

  if (!privateKey) {
      this.setState({ privateKeyModal: true });
      return;
  } else {
      privateKey = decode(privateKey);
  }

   this.setState({loading : true,errorMessage : ''})
   this.setState({status: 'Adding user...'});
   try{
      const rate = await rating.methods.addUser(this.state.newUserName,this.state.newUserNumber);
      const options = {
                to: rate._parent._address,
                data: rate.encodeABI(),
                gas: '1000000'
      };

      await signAndSendTransaction(options, privateKey);
     this.setState({status: 'User added!'});
     Router.pushRoute('/products/show');
   }catch(err){
     this.setState({errorMessage : err.message});
     this.setState({status: 'Try again!'});
   }
   this.setState({loading : false});

 }

  render() {
    //if MetaMask is not there a msg display
    if(!web3) return (
      <div>
        You need to install the MetaMask extension.
      </div>
    );
    const privateKeyModal = this.state.privateKeyModal ? <PrivateKeyModal closeModal={this.closeModal} /> : '';
    //main page outlook
    return (
      <React.Fragment>
        <div>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <Segment raised='true'>
              <div style={{ backgroundColor : 'lightblue'}}>
                <Container>
                  <div className="jumbotron">
                    <Segment inverted color='violet' textAlign='center'><h2>Blockchain Review Engine </h2></Segment>
                  </div>
                </Container>
                <Divider section/>
                <Container>
                <p> Total users : {this.state.userCount} </p>
                <Segment  inverted  >
                    <Form onSubmit={this.addUser} error={!!this.state.errorMessage}>
                      <Form.Field >
                        <Segment inverted><label>Username</label></Segment>
                        <Input  focus placeholder="Type user name..." value={this.state.newUserName} onChange={event => {this.setState({newUserName: event.target.value})}} />
                      </Form.Field>
                      <Form.Field >
                        <Segment inverted><label>Mobile Number</label></Segment>
                        <Input focus placeholder="Type user number..." value={this.state.newUserNumber} onChange={event => {this.setState({newUserNumber: event.target.value})}} />
                      </Form.Field>
                      <Button inverted color='facebook' loading = {this.state.loading}><Icon name="add circle"/>Register</Button>
                      <Message error header= "Oops!!" content = {this.state.errorMessage}/>
                    </Form>
                  </Segment>
                  {privateKeyModal}
                  <h3>{this.state.status}</h3>
                </Container>
                <Divider section/>

              </div>
            </Segment>
        </div>
      </React.Fragment>
    );
  }

}

 export default RegisterIndex;
