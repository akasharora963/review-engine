import React,{Component} from 'react';
import rating from '../ethereum/instance';
import {Form,Input,Segment,Button,Container,Divider,Message,Icon} from 'semantic-ui-react'; //impotant functionality of semantic ui is used
import {Link,Router} from '../routes';
import web3 from '../ethereum/web3';
import { signAndSendTransaction } from '../ethereum/helper';
import PrivateKeyModal from '../component/private-key-modal/private-key-modal';
import { decode } from '../component/helper';


class Index extends Component{

  state = {
    owner : '',
    userName : '',
    userNumber : '',
    userCount : 0,
    accounts: '',
    status: '', // user status
    errorMessage : '',
    loading : false,
    pageSize : 5,
    users : [],
    flag : '',
    privateKeyModal : false
  };

  //Things to be loaded first
  async componentDidMount(){
    if(!web3) return;
    this.setState({accounts: await web3.eth.getAccounts()});
    this.setState({owner : await rating.methods.owner().call()});
  }
//private key
closeModal = () => {
  this.setState({ privateKeyModal: false });
}

//Function to login
loginUser = async (event) => {
  event.preventDefault();
  let privateKey = sessionStorage.getItem('pkencoded');

  if (!privateKey) {
      this.setState({ privateKeyModal: true });
      return;
  } else {
      privateKey = decode(privateKey);
  }

   this.setState({loading : true,errorMessage : ''})
   this.setState({status: 'Logging in...'});
   try{
    const rate = await rating.methods.login(this.state.userName,this.state.userNumber);
    console.log(rate);
    const options = {
      to: rate._parent._address,
      data: rate.encodeABI(),
      gas: '1000000'
    };

    await signAndSendTransaction(options, privateKey);
    if(rate.arguments[0]==='Akash'&&rate.arguments[1]==='1234567890'){ //Enter admin details for checking
      Router.pushRoute('/products/');
    }else Router.pushRoute('/users/show');
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
    //main page outlook
    const privateKeyModal = this.state.privateKeyModal ? <PrivateKeyModal closeModal={this.closeModal} /> : '';

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
                <Link route='/users/register'>
                  <a><Button color='google plus'> Register </Button></a>
                </Link>
                <Segment  inverted  >
                    <Form onSubmit={this.loginUser} error={!!this.state.errorMessage}>
                      <Form.Field >
                        <Segment inverted><label>Username</label></Segment>
                        <Input  focus placeholder="Type user name.." value= {this.state.userName} onChange={event => {this.setState({userName : event.target.value})}}/>
                        <Segment inverted><label>Mobile Number</label></Segment>
                        <Input  focus placeholder="Type mobile number.." value= {this.state.userNumber} onChange={event => {this.setState({userNumber : event.target.value})}}/>
                      </Form.Field>
                        <Button inverted color='facebook' loading={this.state.loading}><Icon name="add circle"/>Log In</Button>
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

 export default Index;
