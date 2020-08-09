import React,{Component} from 'react';
import rating from '../../ethereum/instance';
import {Form,Input,Segment,Button,Container,Divider,Message,Icon} from 'semantic-ui-react'; //impotant functionality of semantic ui is used
import {Link} from '../../routes';
import web3 from '../../ethereum/web3';
import { signAndSendTransaction } from '../../ethereum/helper';
import PrivateKeyModal from '../../component/private-key-modal/private-key-modal';
import { decode } from '../../component/helper';

class ProductIndex extends Component{
  state = {
    owner: '', // Host address in our case account[0]
    newProductName: '',//product name
    accounts: '',
    status: '', // product status
    loading : false, //  loading status
    errorMessage : '',
    privateKeyModal : false
  };

  //Things to be loaded first
  async componentDidMount(){
    if(!web3) return;
    this.setState({accounts: await web3.eth.getAccounts()});
    this.setState({owner: await rating.methods.owner().call()});
  }

 closeModal = () => {
   this.setState({ privateKeyModal: false });
 }

//Function to add products
 addProduct = async (event) => {
   event.preventDefault();


  let privateKey = sessionStorage.getItem('pkencoded');

  if (!privateKey) {
      this.setState({ privateKeyModal: true });
      return;
  } else {
      privateKey = decode(privateKey);
  }

   this.setState({loading : true,errorMessage : ''})
   this.setState({status: 'Adding product...'});
   try{
      const rate = await rating.methods.addProduct(this.state.newProductName);
      const options = {
                to: rate._parent._address,
                data: rate.encodeABI(),
                gas: '1000000'
      };

      await signAndSendTransaction(options, privateKey);
     this.setState({status: 'Product added!'});
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
                  <Form onSubmit={this.addProduct} error={!!this.state.errorMessage}>
                    <Form.Field>
                      <Input focus placeholder="Type product name..." value={this.state.newProductName} onChange={event => {this.setState({newProductName: event.target.value})}} />
                    </Form.Field>
                    <Button inverted color='facebook' loading = {this.state.loading}><Icon name="add circle"/>Add new product</Button>
                    <Message error header= "Oops!!" content = {this.state.errorMessage}/>
                  </Form>
                  {privateKeyModal}
                  <h3>{this.state.status}</h3>

                </Container>
                <Divider section/>
                <Link route='/products/user-details'>
                    <Button primary><Icon name="tv"/> View User Details </Button>
                </Link>
                <Link route='/products/show'>
                    <Button primary><Icon name="tv"/> View Product Details </Button>
                </Link>
                <Link route='/'>
                    <Button secondary ><Icon name="tv"/> Sign Out </Button>
                </Link>
              </div>
            </Segment>
        </div>
      </React.Fragment>
    );
  }

}

 export default ProductIndex;
