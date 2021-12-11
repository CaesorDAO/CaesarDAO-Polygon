import web3 from "./web3";
import abi from "./build/CSRToken.json";

const CSRToken = new web3.eth.Contract(
  abi,
  // "0x1619CE768bC9a18D62c045CB3cCE1287989e594a" // rinkeby
  // "0x81917F2533918ccE9845392C24aF7387B92c4104"
  // "0xD7B83a267C8ba25414878DC9d310425Ce5a6bDd2" // for hackathon
  "0xBe29E7D65F8507FaaCC26504f668754E64002d9c" // mumbai testnet
);

export default CSRToken;
