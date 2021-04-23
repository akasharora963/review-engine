import React,{Component} from 'react'
import rating from '../../ethereum/instance';
import {Form,Input,Segment,Button,Container,Statistic,Divider,Message,Header,Icon} from 'semantic-ui-react';
import {Link} from '../../routes';
import web3 from '../../ethereum/web3';
import { signAndSendTransaction } from '../../ethereum/helper';
import PrivateKeyModal from '../../component/private-key-modal/private-key-modal';
import { decode } from '../../component/helper';

class UserShow extends Component{
  state = {
    productCount : 0,
    userCount : 0,
    products : [], // Auxillary array to store product details
    accounts : '',
    pageSize : 5,
    loading : false,
    errorMessage: '',
    privateKeyModal : false // default parameter to load page and create products array
  }
 //things to be load first
  async componentDidMount(){
    if(!web3) return;
    this.setState({accounts: await web3.eth.getAccounts()});
    this.setState({userCount : await rating.methods.userCount().call()});
    this.getPage(0);
  }
 //Auxillary function to load page and create products array
  async getPage(page) {
    if(page < 0) return;

    this.setState({productCount: await rating.methods.productCount().call()}); //productCount is set
    //Logic for creating product array
    const skip = page * this.state.pageSize; // helper variables
    let limit = skip + this.state.pageSize;

    if(skip > this.state.productCount)
      return;
    if(limit > this.state.productCount){
      limit = this.state.productCount;
   }
   // product array formation
   let products = [];
   this.setState({products});
   for(let i = skip; i < limit; i++) {
     let p = await rating.methods.getProduct(i).call({from: this.state.accounts[0]}); //product details fetched from contract
     products.push(p);
     this.setState({products});
   }

   console.log('products', this.state.products); //to know product array status
 }

 closeModal = () => {
   this.setState({ privateKeyModal: false });
 }
//function to add  REVIEW:
  addReview = async (event) => {
      event.preventDefault();
      let privateKey = sessionStorage.getItem('pkencoded');

      if (!privateKey) {
          this.setState({ privateKeyModal: true });
          return;
      } else {
          privateKey = decode(privateKey);
      }

      let productId = event.target.value;
      let productRating = window.prompt("Choose a rating between 0 and 5:");
      this.setState({loading : true,errorMessage : ''});
      if(!productRating) return;
      window.alert("Adding Review, Please wait..");  // to alert  user
      try{
        let x = await rating.methods.addReview(productId,productRating);
        const options = {
                  to: x._parent._address,
                  data: x.encodeABI(),
                  gas: '1000000'
        };

        await signAndSendTransaction(options, privateKey);
      
        console.log("oq voltou", x);; //ethereum block status details
        window.alert("Review Added, Refresh to see changes");
      }catch(err){
        console.log(err);
        this.setState({errorMessage : err });
        window.alert("Error Occured !!");
      }
      this.setState({loading : false});
   }
// frontend for show user page
  render(){
    const privateKeyModal = this.state.privateKeyModal ? <PrivateKeyModal closeModal={this.closeModal} /> : '';
    return (
      <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <Segment raised ='true'>
          <div style={{ backgroundColor : 'lightblue'}}>
            <Container>
              <div className="jumbotron">
                <Segment inverted color='violet' textAlign='center'><h2>Blockchain Review Engine </h2></Segment>
              </div>
            </Container>
            <Link route ='/'>
              <Button inverted color='facebook' floated='right'><Icon name="home"/>Sign Out</Button>
            </Link>
            
            <h3> Products Info : </h3>
            <h5>Total Product Count  : {this.state.productCount}</h5>
            <h5>Total Voters : {this.state.userCount-1}</h5>
            <Link route='/users/voter-details'>
              <Button color='pink'><Icon name="eye"/> Voter Details </Button>
            </Link>
            <ul className="list-group">
              {this.state.products.length ? null : <h2><li>No Product Added</li></h2>}
              {this.state.products.map(p =>
                  <li className="list-group-item" key={p.id}>
                    <Divider section/>
                    <Button primary value={p.id} onClick={this.addReview} loading={this.state.loading}><Icon name="arrow alternate circle up outline"/>Rate this product </Button>
                    <Statistic horizontal label='Counts' value={p.reviewsCount} size="large" floated='right'/>
                    <Segment inverted compact='true'>{p.title}</Segment>
                    <Segment inverted compact='true'>Avg Rating :{(p.avgRating/10).toFixed(1)}</Segment>
                  </li>
              )}
            </ul>
            <Message error header= "" content = {this.state.errorMessage}/>
            {privateKeyModal}
          </div>
        </Segment>
      </div>
    );
  }
}

export default UserShow;
