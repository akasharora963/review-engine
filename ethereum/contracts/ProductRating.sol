pragma solidity ^0.4.17;

contract Rating  {
    //User attributes
   /* enum Type{
      admin,
      reviewer
    }*/
    struct User{
      uint id;
      string name;
      uint number;
      bool registered;
      uint rate;
      //Type types;
    }
   //Product attributes
    struct Product {
        uint id;
        string title;
        uint reviewsCount;
        uint sumRating;
        address[] pvoters; //product voters
        uint[] pvoter_number;
        uint[] rating;
       //mapping(address => string) voterDetail;
        mapping(address => bool) hasReviewed;
    }
//User Event
    event UserAdded(
      address indexed userAdd,
      uint id,
      string indexed name,
      uint  indexed number
    );

    event LoginAttempt(
      address indexed userAdd,
      string indexed name,
      uint indexed number
    );
//add Product  event
    event ProductAdded(
        uint id,
        string title
    );
//review event
    event ProductReviewed(
        uint indexed id,
        uint avgRating
    );

    address public owner= msg.sender; //address of host
    mapping(uint => Product) products;
    mapping(uint=>User) private udata;
    mapping (address => User) private data;
    mapping (string => address) private nameXadd;
    mapping (uint => address) private numberXadd;
    uint public productCount = 0;
    uint public userCount=0;
    //only owner can add prduct (in our case account[0])
    modifier restricted{
      require(msg.sender==owner);
      _;
    }

    modifier alreadyRegistered() {
        require(!data[msg.sender].registered);
        _;
    }

    modifier numberAlreadyRegistered(uint _number) {
        require(numberXadd[_number] == 0x00);
        _;
    }
    //User added
    function addUser(string _name,uint _number) public alreadyRegistered numberAlreadyRegistered(_number) {
      require(keccak256(bytes(_name)) != keccak256(""));
      //require(keccak256(bytes(_number)) != keccak256(""));
       
      data[msg.sender]=User(userCount++,_name,_number,true,0);     
      nameXadd[_name]=msg.sender;
      numberXadd[_number]=msg.sender;
      udata[userCount-1]=data[msg.sender];
      UserAdded(msg.sender,userCount,_name,_number);
    }

    //login
    function login(string name,uint number) public returns(address){
      require(data[msg.sender].registered);
      require(nameXadd[name]==msg.sender);
      require(numberXadd[number]==msg.sender);
      LoginAttempt(msg.sender,name,number);
      return msg.sender;
    }

    //Add product function
    function addProduct(string _title) public restricted {
        require(keccak256(bytes(_title)) != keccak256(""));

        Product memory product = Product({
            id: productCount,
            title: _title,
            reviewsCount: 0,
            sumRating : 0,
            pvoters : new address[](0),
            pvoter_number : new uint[](0),
            rating : new uint[](0)
        });

        products[productCount] = product;
        productCount++;
        ProductAdded(product.id, product.title);
    }
//Add review function
    function addReview(uint _productId,uint8 _rating) public {
        Product storage product = products[_productId];

        require(keccak256(bytes(product.title)) != keccak256(""));
        require(_rating >= 0 && _rating <= 5);
        //require(!product.hasReviewed[msg.sender]);

        product.pvoters.push(msg.sender);
        product.pvoter_number.push(data[msg.sender].number);
        product.rating.push(_rating);
       
        //product.voterDetail[msg.sender]=data[msg.sender].name;
        if(product.hasReviewed[msg.sender]) product.sumRating-=data[msg.sender].rate*10;
        data[msg.sender].rate= _rating;
        product.sumRating += _rating * 10;
        if(!product.hasReviewed[msg.sender]) product.reviewsCount++;
        product.hasReviewed[msg.sender] = true;
        
        ProductReviewed(product.id,product.sumRating/product.reviewsCount);
    }


    function getAllusers(uint _id) public view returns(uint id, string name, uint number){
      User storage u = udata[_id];
     
      return (
        u.id,
        u.name,
        u.number
      );
    }



//To get product details
    function getProduct(uint productId) public view returns (uint id, string title, uint reviewsCount,uint avgRating,bool hasReviewed,address[] pvoters,uint[] pvoter_number,uint[] rating) {
        Product storage product = products[productId];
        uint _avgRating = 0;

        if(product.reviewsCount > 0)
            _avgRating = product.sumRating / product.reviewsCount;

        return (
            product.id,
            product.title,
            product.reviewsCount,
            _avgRating,
            product.hasReviewed[msg.sender],
            product.pvoters,
            product.pvoter_number,
            product.rating
            //product.voterDetail[msg.sender]
        );
    }

}
