"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP17ReceiverMock__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class KIP17ReceiverMock__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(retval, overrides) {
        return super.deploy(retval, overrides || {});
    }
    getDeployTransaction(retval, overrides) {
        return super.getDeployTransaction(retval, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.KIP17ReceiverMock__factory = KIP17ReceiverMock__factory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "operator",
                type: "address",
            },
            {
                name: "from",
                type: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
            },
            {
                name: "data",
                type: "bytes",
            },
        ],
        name: "onKIP17Received",
        outputs: [
            {
                name: "",
                type: "bytes4",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                name: "retval",
                type: "bytes4",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                name: "from",
                type: "address",
            },
            {
                indexed: false,
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                name: "data",
                type: "bytes",
            },
            {
                indexed: false,
                name: "gas",
                type: "uint256",
            },
        ],
        name: "Received",
        type: "event",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516020806103508339810180604052602081101561003057600080fd5b8101908080519060200190929190505050806000806101000a81548163ffffffff021916908360e01c0217905550506102e28061006e6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636745782b14610030575b600080fd5b6101336004803603608081101561004657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100ad57600080fd5b8201836020820111156100bf57600080fd5b803590602001918460018302840111640100000000831117156100e157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610187565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b60007f28fa6e16458f9c24aa59ddd4085264573006dbe30304837873c7deafc702b038858585855a604051808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561025f578082015181840152602081019050610244565b50505050905090810190601f16801561028c5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a16000809054906101000a900460e01b905094935050505056fea165627a7a723058204339277b5bf447a96d2ece3a3e6fcc22f2b8e4fed2fbce065c2e7cc79d3b8edf0029";
//# sourceMappingURL=KIP17ReceiverMock__factory.js.map