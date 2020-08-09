pragma solidity ^0.4.17;//solidity version

contract Rating  {
    //User attributes
    struct User{
      uint id;
      string name;
      string number;
    }
   //Product attributes
    struct Product {
        uint id;
        string title;
        uint reviewsCount;
        uint sumRating;
        address[] pvoters; //product voters
        mapping(address => string) voterDetail;
        mapping(address => bool) hasReviewed;
    }
//User Event
    event UserAdded(
      uint id,
      string name,
      string number
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
    address[] public voters; //Total voters array
    address[] public existingUsers;
    mapping(uint => Product) products;
    mapping(uint => User) users;
    uint public productCount = 0;
    uint public userCount=0;
    //only owner can add prduct (in our case account[0])
    modifier restricted{
      require(msg.sender==owner);
      _;
    }
    //User added
    function addUser(string _name,string _number) public {
      require(keccak256(bytes(_name)) != keccak256(""));
      require(keccak256(bytes(_number)) != keccak256(""));
      User memory user= User({
          id : userCount,
          name : _name,
          number : _number
      });
      for(uint i=0;i<existingUsers.length;i++){
        require(!(msg.sender==existingUsers[i]));
      }

      users[userCount]=user;
      existingUsers.push(msg.sender);
      userCount++;
      UserAdded(user.id,user.name,user.number);

    }

    //Add product function
    function addProduct(string _title) public restricted {
        require(keccak256(bytes(_title)) != keccak256(""));

        Product memory product = Product({
            id: productCount,
            title: _title,
            reviewsCount: 0,
            sumRating : 0,
            pvoters : new address[](0)
        });

        products[productCount] = product;
        productCount++;
        ProductAdded(product.id, product.title);
    }
//Add review function
    function addReview(uint _productId,uint id,uint8 _rating) public {
        Product storage product = products[_productId];
        User storage user = users[id];
        for(uint i=0;i<voters.length;i++){
          require(!(msg.sender==voters[i]));
        }
        require(keccak256(bytes(product.title)) != keccak256(""));
        require(_rating >= 0 && _rating <= 5);
        require(!product.hasReviewed[msg.sender]);

        voters.push(msg.sender);
        product.pvoters.push(msg.sender);
        product.sumRating += _rating * 10;
        product.hasReviewed[msg.sender] = true;
        product.voterDetail[msg.sender]= user.name;
        product.reviewsCount++;

        ProductReviewed(product.id,product.sumRating/product.reviewsCount);
    }
// get user details
    function getUser(uint userId) public view returns (uint id, string name, string number){
      User storage user = users[userId];
      return (
        user.id,
        user.name,
        user.number
      );
    }



//To get product details
    function getProduct(uint productId) public view returns (uint id, string title, uint reviewsCount,uint avgRating,bool hasReviewed,address[] pvoters) {
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
            product.pvoters
        );
    }
//To get total voters
    function totalVoters() public view returns(uint){
      return voters.length;
    }
}
