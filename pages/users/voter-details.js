import React,{Component} from 'react';
import rating from '../../ethereum/instance';
import {Form,Input,Grid,Segment,Button,Container,Statistic,Divider,Message,Header,Icon} from 'semantic-ui-react';
import {Link} from '../../routes';
import web3 from '../../ethereum/web3';

class VoterDetails extends Component{

  state = {
    products : [],
    accounts : '',
    productCount : 0,
    pageSize : 5 //default parameter to load page
  }

  async componentDidMount(){
    if(!web3) return;
    this.setState({accounts: await web3.eth.getAccounts()});
    this.getPage(0);
  }

  //Auxillary function load page
  async getPage(page) {
    if(page < 0) return;
    this.setState({productCount: await rating.methods.productCount().call()});
    const skip = page * this.state.pageSize;
    let limit = skip + this.state.pageSize;

    if(skip > this.state.productCount)
      return;
    if(limit > this.state.productCount){
      limit = this.state.productCount;
   }

   let products = []; //set products array
   this.setState({products});
   for(let i = skip; i < limit; i++) {
     let p = await rating.methods.getProduct(i).call({from: this.state.accounts[0]}); // get details of product
     products.push(p);
     this.setState({products});
   }

   console.log('products', this.state.products);
 }

//frontend to load details  page
  render(){
    return (
      <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <Segment raised ='true'>
          <div style={{ backgroundColor : 'lightblue'}}>
            <Link route ='/users/show'>
              <Button inverted color='facebook' ><Icon name="home"/>Go to Home page</Button>
            </Link>
            <h3> Voters Info : </h3>
            <ul className="list-group">
              {this.state.products.length ? null : <h2>No info available</h2>}
              {this.state.products.map(p =>
                  <div>
                    
                    <li className="list-group-item" key={p.id}>
                      <Header size='medium'>Product  : {p.title} </Header>
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
                          <Grid.Column>
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

export default VoterDetails;
