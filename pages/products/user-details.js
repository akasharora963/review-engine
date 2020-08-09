import React,{Component} from 'react';
import rating from '../../ethereum/instance';
import {Form,Input,Segment,Button,Container,Divider,Message,Icon,Header} from 'semantic-ui-react'; //impotant functionality of semantic ui is used
import {Link} from '../../routes';
import web3 from '../../ethereum/web3';

class UserDetails extends Component{
  state = {
    users : [],
    accounts : '',
    userCount : 0,
    pageSize : 5 //default parameter to load page
  }

  async componentDidMount(){
    if(!web3) return;
    this.setState({accounts: await web3.eth.getAccounts()});
    this.setState({userCount : await rating.methods.productCount().call()});
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
   let users=[];
   this.setState({users});
   for(let i = skip; i < limit; i++) {
     let p = await rating.methods.getUser(i).call({from: this.state.accounts[0]}); //product details fetched from contract
     users.push(p);
     this.setState({users});
   }
   console.log('users', this.state.users);
 }

 render(){
   return (
     <div>
       <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
       <Segment raised ='true'>
         <div style={{ backgroundColor : 'lightblue'}}>
           <Link route ='/products/'>
             <Button inverted color='facebook' ><Icon name="home"/>Go to Homes page</Button>
           </Link>
           <h3> Total Users :  {this.state.userCount} </h3>
           <h3> Users Info : </h3>
           <ul className="list-group">
             {this.state.users.length ? null : <h2>No info available</h2>}
             {this.state.users.map(u =>
                 <div>

                   <li className="list-group-item" key={u.id}>
                     <Header size='medium'> {u.name}</Header>
                     <ul>
                      <li> Mobil Number : {u.number} </li>
                     </ul>
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

export default UserDetails;
