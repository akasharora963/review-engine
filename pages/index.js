import React,{Component} from 'react';
import rating from '../ethereum/instance';
import {Form,Input,Segment,Button,Container,Divider,Message,Icon} from 'semantic-ui-react'; //impotant functionality of semantic ui is used
import {Link,Router} from '../routes';
import web3 from '../ethereum/web3';
import { signAndSendTransaction } from '../ethereum/helper';
import PrivateKeyModal from '../component/private-key-modal/private-key-modal';
import { decode } from '../component/helper';

let users=[];
class ProductIndex extends Component{

  state = {
    owner : '',
    userName : '',
    userNumber : '',
    userCount : 0,
    accounts: '',
    status: '', // user status
    errorMessage : '',
    pageSize : 5,
    users : [],
    flag : ''
  };

  //Things to be loaded first
  async componentDidMount(){
    if(!web3) return;
    this.setState({accounts: await web3.eth.getAccounts()});
    this.setState({owner : await rating.methods.owner().call()});
    this.getPage(0);
  }

    async getPage(page){
    if(page < 0) return;

    this.setState({userCount : await rating.methods.userCount().call()}); //productCount is set
    //Logic for creaing product array
    const skip = page * this.state.pageSize; // helper variables
    let limit = skip + this.state.pageSize;

    if(skip > this.state.userCount)
      return;
    if(limit > this.state.userCount){
      limit = this.state.userCount;
   }
   // product array formation
   this.setState({users});
   for(let i = skip; i < limit; i++) {
     let p = await rating.methods.getUser(i).call({from: this.state.accounts[0]}); //product details fetched from contract
     users.push(p);
     this.setState({users});
   }
   console.log('users', this.state.users);

}

//Function to add products
loginUser = async (event) => {
  event.preventDefault();

  let i;
  for(i=0;i<this.state.userCount;i++){
    if(users[i].name===this.state.userName && users[i].number===this.state.userNumber){
      this.setState({flag : 'Good'});
      break;
    }
  }
  if(this.state.flag==='Good'){
    if(users[0].name===this.state.userName && users[0].number===this.state.userNumber)
        Router.pushRoute('/products/');
    else
        Router.pushRoute('/products/show');
  }else if(i>=this.state.userCount){
    this.setState({errorMessage : 'Unregistered or wrong details...'});
  }
}

  render() {
    //if MetaMask is not there a msg display
    if(!web3) return (
      <div>
        You need to install the MetaMask extension.
      </div>
    );
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
                        <Button inverted color='facebook' ><Icon name="add circle"/>Log In</Button>
                        <Message error header= "Oops!!" content = {this.state.errorMessage}/>
                    </Form>
                  </Segment>
                  <h3>{this.state.status}</h3>
                </Container>
                <Divider section/>
                <Link route='/products/show'>
                    <Button primary><Icon name="tv"/> Go to  Show Products </Button>
                </Link>
                <Link route='/products/'>
                    <Button primary><Icon name="tv"/> Go to  Add Products </Button>
                </Link>
              </div>
            </Segment>
        </div>
      </React.Fragment>
    );
  }

}

 export default ProductIndex;
