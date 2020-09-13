import React,{Component} from 'react';
import rating from '../../ethereum/instance';
import {Form,Input,Grid,Segment,Button,Container,Divider,Message,Icon,Header} from 'semantic-ui-react'; //impotant functionality of semantic ui is used
import {Link} from '../../routes';
import web3 from '../../ethereum/web3';

class ProductDetails extends Component{
  state = {
    products : [],
    accounts : '',
    productCount : 0,
    pageSize : 5 //default parameter to load page
  }
// things to load first
  async componentDidMount(){
    if(!web3) return;
    this.setState({accounts: await web3.eth.getAccounts()});
    this.setState({productCount : await rating.methods.productCount().call()});
    this.getPage(0);
  }
//to get data from blockchain
  async getPage(page) {
    if(page < 0) return;

    this.setState({productCount: await rating.methods.productCount().call()}); //productCount is set
    //Logic for creaing product array
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
//frontend to get product details
 render(){
   return (
     <div>
       <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
       <Segment raised ='true'>
         <div style={{ backgroundColor : 'lightblue'}}>
           <Link route ='/products/'>
             <Button inverted color='facebook' ><Icon name="home"/>Go to Homes page</Button>
           </Link>
           <h3> Total Products :  {this.state.productCount} </h3>
           <h3> Products Info : </h3>
           <ul className="list-group">
             {this.state.products.length ? null : <h2>No info available</h2>}
             {this.state.products.map(p =>
                 <div>

                   <li className="list-group-item" key={p.id}>
                     <Header size='medium'> {p.title}</Header>
                     <ul>
                      <li> Reviews Count : {p.reviewsCount} </li>
                      <li> Avg Rating : {(p.avgRating/10).toFixed(1)}</li>
                     </ul>
                     {p.pvoters.length ?
                      <Grid columns={3} divided>
                        <Grid.Row>
                          <Grid.Column>
                            <Header>Address</Header>
                          </Grid.Column>
                          <Grid.Column>
                            <Header>Mobile Number</Header>
                          </Grid.Column>
                          <Grid.Column>
                            <Header>Rating</Header>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column >
                          {p.pvoters.map(arr=>(
                            <p>{arr}</p>
                          ))}
                          </Grid.Column>
                          <Grid.Column>
                          {p.pvoter_number.map(arr=>(
                            <p>{arr}</p>
                          ))}
                          </Grid.Column>
                          <Grid.Column>
                          {p.rating.map(arr=>(
                            <p>{arr}</p>
                          ))}
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>: null}
                     <Divider section/>
                   </li>
                 </div>
             )}
           </ul>

         </div>
       </Segment>
     </div>
   );
 }
}

export default ProductDetails;
/*
                     {p.pvoters.length ?
                     <Segment inverted compact='true'>
                       {p.pvoters.map(arr=>(
                         <p>{arr}</p>
                       ))}
                     </Segment> : null}*/