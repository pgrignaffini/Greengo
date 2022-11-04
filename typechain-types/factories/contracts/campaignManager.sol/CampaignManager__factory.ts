/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CampaignManager,
  CampaignManagerInterface,
} from "../../../contracts/campaignManager.sol/CampaignManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "GNGToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "CampaignCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_campaignName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_goalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "createCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getCampaignAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060035534801561001557600080fd5b506040516113a03803806113a0833981016040819052610034916100b2565b61003d33610062565b600180546001600160a01b0319166001600160a01b03929092169190911790556100e0565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100c3578081fd5b81516001600160a01b03811681146100d9578182fd5b9392505050565b6112b1806100ef6000396000f3fe60806040523480156200001157600080fd5b50600436106200006a5760003560e01c806312065fe0146200006f5780633020580b146200008c578063715018a614620000a55780638da5cb5b14620000af578063e1231ec514620000d5578063f2fde38b1462000101575b600080fd5b6200007962000118565b6040519081526020015b60405180910390f35b620000a36200009d3660046200046a565b6200019d565b005b620000a3620002c3565b6000546001600160a01b03165b6040516001600160a01b03909116815260200162000083565b620000bc620000e636600462000530565b6000908152600260205260409020546001600160a01b031690565b620000a36200011236600462000418565b620002db565b6001546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b1580156200015d57600080fd5b505afa15801562000172573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000198919062000549565b905090565b6000838383600160009054906101000a90046001600160a01b0316604051620001c6906200040a565b620001d5949392919062000562565b604051809103906000f080158015620001f2573d6000803e3d6000fd5b506003546000908152600260205260409081902080546001600160a01b0319166001600160a01b03848116918217909255600154925163a9059cbb60e01b8152600481019190915260248101879052929350169063a9059cbb90604401602060405180830381600087803b1580156200026a57600080fd5b505af11580156200027f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002a5919062000448565b5060038054906000620002b883620005df565b919050555050505050565b620002cd6200035e565b620002d96000620003ba565b565b620002e56200035e565b6001600160a01b038116620003505760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6200035b81620003ba565b50565b6000546001600160a01b03163314620002d95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000347565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610c5e806200061e83390190565b6000602082840312156200042a578081fd5b81356001600160a01b038116811462000441578182fd5b9392505050565b6000602082840312156200045a578081fd5b8151801515811462000441578182fd5b6000806000606084860312156200047f578182fd5b833567ffffffffffffffff8082111562000497578384fd5b818601915086601f830112620004ab578384fd5b813581811115620004c057620004c062000607565b604051601f8201601f19908116603f01168101908382118183101715620004eb57620004eb62000607565b8160405282815289602084870101111562000504578687fd5b826020860160208301379182016020908101969096525097938601359650505060409093013592509050565b60006020828403121562000542578081fd5b5035919050565b6000602082840312156200055b578081fd5b5051919050565b6080815260008551806080840152815b818110156200059157602081890181015160a086840101520162000572565b81811115620005a3578260a083860101525b506020830186905260408301859052601f01601f1916820160a0019050620005d660608301846001600160a01b03169052565b95945050505050565b60006000198214156200060057634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfe6080604052600180546001600160a01b03191673874069fa1eb16d44d622f2e0ca25eea172369bc1179055600060058190556008553480156200004157600080fd5b5060405162000c5e38038062000c5e8339810160408190526200006491620001e5565b6200006f33620000d2565b83516200008490600390602087019062000122565b506004839055620000998262015180620002ff565b620000a59042620002e4565b600655600280546001600160a01b0319166001600160a01b0392909216919091179055506200038a915050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620001309062000321565b90600052602060002090601f0160209004810192826200015457600085556200019f565b82601f106200016f57805160ff19168380011785556200019f565b828001600101855582156200019f579182015b828111156200019f57825182559160200191906001019062000182565b50620001ad929150620001b1565b5090565b5b80821115620001ad5760008155600101620001b2565b80516001600160a01b0381168114620001e057600080fd5b919050565b60008060008060808587031215620001fb578384fd5b84516001600160401b038082111562000212578586fd5b818701915087601f83011262000226578586fd5b8151818111156200023b576200023b62000374565b604051601f8201601f19908116603f0116810190838211818310171562000266576200026662000374565b81604052828152602093508a8484870101111562000282578889fd5b8891505b82821015620002a5578482018401518183018501529083019062000286565b82821115620002b657888484830101525b809850505050808701519450505060408501519150620002d960608601620001c8565b905092959194509250565b60008219821115620002fa57620002fa6200035e565b500190565b60008160001904831182151516156200031c576200031c6200035e565b500290565b600181811c908216806200033657607f821691505b602082108114156200035857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6108c4806200039a6000396000f3fe6080604052600436106100865760003560e01c80638d322406116100595780638d322406146100f05780638da5cb5b1461013b578063ac30777314610163578063f14faf6f14610178578063f2fde38b1461018b57600080fd5b80635f410b221461008b578063715018a6146100af578063828cfdfd146100c657806383da473e146100db575b600080fd5b34801561009757600080fd5b506004545b6040519081526020015b60405180910390f35b3480156100bb57600080fd5b506100c46101ab565b005b3480156100d257600080fd5b5060055461009c565b3480156100e757600080fd5b5060085461009c565b3480156100fc57600080fd5b5061011061010b366004610815565b6101bf565b6040805182516001600160a01b031681526020808401519082015291810151908201526060016100a6565b34801561014757600080fd5b506000546040516001600160a01b0390911681526020016100a6565b34801561016f57600080fd5b506100c461022e565b6100c4610186366004610815565b61035d565b34801561019757600080fd5b506100c46101a63660046107c7565b6106a4565b6101b361071d565b6101bd6000610777565b565b6101ec604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b50600090815260076020908152604091829020825160608101845281546001600160a01b03168152600182015492810192909252600201549181019190915290565b61023661071d565b6001546001600160a01b031663a9059cbb6102596000546001600160a01b031690565b6005546040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b1580156102a257600080fd5b505af11580156102b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102da91906107f5565b61031e5760405162461bcd60e51b815260206004820152601060248201526f2a3930b739b332b9103330b4b632b21760811b60448201526064015b60405180910390fd5b60055460405190815233907fa65a8b4f7f65a1063243d7f7e9e4da00ff767599acf21549ef2548a45d1695ae9060200160405180910390a26000600555565b600154604051636eb1769f60e11b81523360048201523060248201526000916001600160a01b03169063dd62ed3e9060440160206040518083038186803b1580156103a757600080fd5b505afa1580156103bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103df919061082d565b9050818110156104315760405162461bcd60e51b815260206004820152601860248201527f416c6c6f77616e6365206973206e6f7420656e6f7567682e00000000000000006044820152606401610315565b60065442106104965760405162461bcd60e51b815260206004820152602b60248201527f5468652066756e64696e67207068617365206f6620746869732070726f6a656360448201526a3a1034b99032b73232b21760a91b6064820152608401610315565b6001546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd90606401602060405180830381600087803b1580156104e857600080fd5b505af11580156104fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052091906107f5565b61055f5760405162461bcd60e51b815260206004820152601060248201526f2a3930b739b332b9103330b4b632b21760811b6044820152606401610315565b604080516060810182523381524260208083019182528284018681526008805460009081526007909352948220935184546001600160a01b0319166001600160a01b03909116178455915160018401559051600290920191909155815491906105c78361085d565b919050555081600560008282546105de9190610845565b909155505060025460405163a9059cbb60e01b8152336004820152602481018490526001600160a01b039091169063a9059cbb90604401602060405180830381600087803b15801561062f57600080fd5b505af1158015610643573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066791906107f5565b5060405182815260039033907f71adcff281b29ce9baf84e45b10a812e86c7aa9444c3cf519b37fae0aa7b26d29060200160405180910390a35050565b6106ac61071d565b6001600160a01b0381166107115760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610315565b61071a81610777565b50565b6000546001600160a01b031633146101bd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610315565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156107d8578081fd5b81356001600160a01b03811681146107ee578182fd5b9392505050565b600060208284031215610806578081fd5b815180151581146107ee578182fd5b600060208284031215610826578081fd5b5035919050565b60006020828403121561083e578081fd5b5051919050565b6000821982111561085857610858610878565b500190565b600060001982141561087157610871610878565b5060010190565b634e487b7160e01b600052601160045260246000fdfea264697066735822122027d3dd267573bac2a7c8646115dcd12e79ba5f49e0afc74ef743f2d815762a3364736f6c63430008040033a26469706673582212203b0739b625ed542aac2ad96a2bde043ed155041eaa9825ca4f8032cbc4a9d7a464736f6c63430008040033";

type CampaignManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CampaignManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CampaignManager__factory extends ContractFactory {
  constructor(...args: CampaignManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    GNGToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CampaignManager> {
    return super.deploy(GNGToken, overrides || {}) as Promise<CampaignManager>;
  }
  override getDeployTransaction(
    GNGToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(GNGToken, overrides || {});
  }
  override attach(address: string): CampaignManager {
    return super.attach(address) as CampaignManager;
  }
  override connect(signer: Signer): CampaignManager__factory {
    return super.connect(signer) as CampaignManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CampaignManagerInterface {
    return new utils.Interface(_abi) as CampaignManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CampaignManager {
    return new Contract(address, _abi, signerOrProvider) as CampaignManager;
  }
}
