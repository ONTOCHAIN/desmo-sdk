export const contractAddress = '0xdbb488DC105dC71DfA631ef554EC98d833c59350';

export const deploymentOutput = {
  compiler: {
    version: '0.8.7+commit.e28d00a7',
  },
  language: 'Solidity',
  output: {
    abi: [
      {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint256',
            name: 'requestID',
            type: 'uint256',
          },
        ],
        name: 'RequestID',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'key',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'url',
            type: 'string',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'disabled',
            type: 'bool',
          },
        ],
        name: 'TDDCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'key',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'url',
            type: 'string',
          },
        ],
        name: 'TDDDisabled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'key',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'url',
            type: 'string',
          },
        ],
        name: 'TDDEnabled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'key',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'url',
            type: 'string',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'disabled',
            type: 'bool',
          },
        ],
        name: 'TDDRetrieval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'string[]',
            name: 'TDDSubset',
            type: 'string[]',
          },
        ],
        name: 'TDDSubset',
        type: 'event',
      },
      {
        inputs: [],
        name: 'disableTDD',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'enableTDD',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getNewRequestID',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getTDD',
        outputs: [
          {
            components: [
              {
                internalType: 'string',
                name: 'url',
                type: 'string',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'bool',
                name: 'disabled',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'score',
                type: 'uint256',
              },
            ],
            internalType: 'struct DesmoLDHub.TDD',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'key',
            type: 'uint256',
          },
        ],
        name: 'getTDDByRequestID',
        outputs: [
          {
            internalType: 'string[]',
            name: '',
            type: 'string[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'string',
                name: 'url',
                type: 'string',
              },
              {
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                internalType: 'bool',
                name: 'disabled',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'score',
                type: 'uint256',
              },
            ],
            internalType: 'struct DesmoLDHub.TDD',
            name: 'tdd',
            type: 'tuple',
          },
        ],
        name: 'registerTDD',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
        ],
        name: 'viewSelected',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    devdoc: {
      kind: 'dev',
      methods: {},
      version: 1,
    },
    userdoc: {
      kind: 'user',
      methods: {},
      version: 1,
    },
  },
  settings: {
    compilationTarget: {
      'contracts/DesmoLdHub.sol': 'DesmoLDHub',
    },
    evmVersion: 'london',
    libraries: {},
    metadata: {
      bytecodeHash: 'ipfs',
    },
    optimizer: {
      enabled: false,
      runs: 200,
    },
    remappings: [],
  },
  sources: {
    'contracts/DesmoLdHub.sol': {
      keccak256:
        '0x01d2d2b18e1f311a34e502f6cdfe629aec2fb5555bff6de99f3ec9350d776dc0',
      urls: [
        'bzz-raw://659e437153cd825aecd330f680987410b51366844412c7eca241835ad481e182',
        'dweb:/ipfs/QmbNMTEGAKoBhWK2b4cXAuVV3dmCXHPPvdAnKcJ4hxhsgq',
      ],
    },
    'hardhat/console.sol': {
      keccak256:
        '0x72b6a1d297cd3b033d7c2e4a7e7864934bb767db6453623f1c3082c6534547f4',
      license: 'MIT',
      urls: [
        'bzz-raw://a8cb8681076e765c214e0d51cac989325f6b98e315eaae06ee0cbd5a9f084763',
        'dweb:/ipfs/QmNWGHi4zmjxQTYN3NMGnJd49jBT5dE4bxTdWEaDuJrC6N',
      ],
    },
  },
  version: 1,
};
