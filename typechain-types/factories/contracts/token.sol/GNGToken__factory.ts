/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  GNGToken,
  GNGTokenInterface,
} from "../../../contracts/token.sol/GNGToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040518060400160405280600981526020016823a723902a37b5b2b760b91b81525060405180604001604052806003815260200162474e4760e81b8152508160039080519060200190610065929190610081565b508051610079906004906020840190610081565b505050610155565b82805461008d9061011a565b90600052602060002090601f0160209004810192826100af57600085556100f5565b82601f106100c857805160ff19168380011785556100f5565b828001600101855582156100f5579182015b828111156100f55782518255916020019190600101906100da565b50610101929150610105565b5090565b5b808211156101015760008155600101610106565b600181811c9082168061012e57607f821691505b6020821081141561014f57634e487b7160e01b600052602260045260246000fd5b50919050565b61098c806101646000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a0823114610141578063748902871461016a57806395d89b411461017f578063a457c2d714610187578063a9059cbb1461019a578063dd62ed3e146101ad57600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f578063395093511461012e575b600080fd5b6100c16101c0565b6040516100ce91906108a4565b60405180910390f35b6100ea6100e536600461087b565b610252565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a366004610840565b61026a565b604051601281526020016100ce565b6100ea61013c36600461087b565b61028e565b6100fe61014f3660046107ed565b6001600160a01b031660009081526020819052604090205490565b61017d61017836600461087b565b6102b0565b005b6100c16102be565b6100ea61019536600461087b565b6102cd565b6100ea6101a836600461087b565b61034d565b6100fe6101bb36600461080e565b61035b565b6060600380546101cf9061091b565b80601f01602080910402602001604051908101604052809291908181526020018280546101fb9061091b565b80156102485780601f1061021d57610100808354040283529160200191610248565b820191906000526020600020905b81548152906001019060200180831161022b57829003601f168201915b5050505050905090565b600033610260818585610386565b5060019392505050565b6000336102788582856104aa565b610283858585610524565b506001949350505050565b6000336102608185856102a1838361035b565b6102ab91906108f7565b610386565b6102ba82826106f2565b5050565b6060600480546101cf9061091b565b600033816102db828661035b565b9050838110156103405760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102838286868403610386565b600033610260818585610524565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103e85760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610337565b6001600160a01b0382166104495760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610337565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104b6848461035b565b9050600019811461051e57818110156105115760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610337565b61051e8484848403610386565b50505050565b6001600160a01b0383166105885760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610337565b6001600160a01b0382166105ea5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610337565b6001600160a01b038316600090815260208190526040902054818110156106625760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610337565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106999084906108f7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106e591815260200190565b60405180910390a361051e565b6001600160a01b0382166107485760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610337565b806002600082825461075a91906108f7565b90915550506001600160a01b038216600090815260208190526040812080548392906107879084906108f7565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b80356001600160a01b03811681146107e857600080fd5b919050565b6000602082840312156107fe578081fd5b610807826107d1565b9392505050565b60008060408385031215610820578081fd5b610829836107d1565b9150610837602084016107d1565b90509250929050565b600080600060608486031215610854578081fd5b61085d846107d1565b925061086b602085016107d1565b9150604084013590509250925092565b6000806040838503121561088d578182fd5b610896836107d1565b946020939093013593505050565b6000602080835283518082850152825b818110156108d0578581018301518582016040015282016108b4565b818111156108e15783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561091657634e487b7160e01b81526011600452602481fd5b500190565b600181811c9082168061092f57607f821691505b6020821081141561095057634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220191f6faa341fb3e77bae3612fb949a2e173f26f51b0351a53757830a4f09d65f64736f6c63430008040033";

type GNGTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GNGTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GNGToken__factory extends ContractFactory {
  constructor(...args: GNGTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GNGToken> {
    return super.deploy(overrides || {}) as Promise<GNGToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GNGToken {
    return super.attach(address) as GNGToken;
  }
  override connect(signer: Signer): GNGToken__factory {
    return super.connect(signer) as GNGToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GNGTokenInterface {
    return new utils.Interface(_abi) as GNGTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GNGToken {
    return new Contract(address, _abi, signerOrProvider) as GNGToken;
  }
}
