import React,{Component} from 'react';
import rating from '../ethereum/instance';
import {Form,Input,Segment,Button,Container,Divider,Message,Icon} from 'semantic-ui-react'; //impotant functionality of semantic ui is used
import {Link} from '../routes';
import web3 from '../ethereum/web3';

class ProductIndex extends Component{
  state = {
    owner: '', // Host address in our case account[0]
    newProductName: '',//product name
    accounts: '',
    status: '', // product status
    loading : false, //  loading status
    errorMessage : ''
  };

  //Things to be loaded first
  async componentDidMount(){
    if(!web3) return;
    this.setState({accounts: await web3.eth.getAccounts()});
    this.setState({owner: await rating.methods.owner().call()});
  }

//Function to add products
 addProduct = async (event) => {
   event.preventDefault();
   this.setState({loading : true,errorMessage : ''})
   this.setState({status: 'Adding product...'});
   try{
     await rating.methods.addProduct(this.state.newProductName).send({from: this.state.accounts[0]});
     this.setState({status: 'Ratings added!'});
   }catch(err){
     this.setState({errorMessage : err.message});
     this.setState({status: 'Try again!'});
   }
   this.setState({loading : false});

 }
 //For frontend
  render() {
    if(!web3) return (
      <div>
        You need to install the MetaMask extension.
      </div>
    );

    return (
      <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <Segment raised='true'>
          <div style={{ backgroundColor : 'lightblue'}}>
            <Container>
              <div className="jumbotron">
                <Segment inverted color='violet' textAlign='center'><h2>COVID-19 VACCINE REVIEWS </h2></Segment>
                <Segment inverted>The owner of this contract is : <b>{this.state.owner} </b> </Segment>
              </div>
            </Container>
            <Divider section/>
            <Container>
              <Form onSubmit={this.addProduct} error={!!this.state.errorMessage}>
                <Form.Field>
                  <Input focus placeholder="Type ratings..." value={this.state.newProductName} onChange={event => {this.setState({newProductName: event.target.value})}} />
                </Form.Field>
                <Button inverted color='facebook' loading = {this.state.loading}><Icon name="add circle"/>Add new ratings</Button>
                <Message error header= "Oops!!" content = {this.state.errorMessage}/>
              </Form>
              <h3>{this.state.status}</h3>
            </Container>
            <Divider section/>
            <Link route='/products/show'>
              <Button primary><Icon name="tv"/> Show Ratings </Button>
            </Link>
          </div>
        </Segment>
      </div>
    );
  }

}

 export default ProductIndex;