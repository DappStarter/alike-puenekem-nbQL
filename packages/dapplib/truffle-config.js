require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski strike deny noble smile hidden clock equal gesture'; 
let testAccounts = [
"0xd4c29df5f05a965bcc6b0ade70ebff65d8190f1cddd307c5ce6ce6d75d0b7fe4",
"0x3356d1d5156695d70ec68956c28ffbc3c1a262c7d9a490454d69f002972af739",
"0x97383fd881dd1619a109653bf302e14cce8a275333edf47ff0646197ecb59611",
"0x6c3e53813cc478f42ec0c203ce0c044a03a849e0f4d38f5329dc87c581bd0b72",
"0x9cc00a2b244369fc80530a6c8e9757cdca657ebafb6f1d9b40020a14c55f4c0c",
"0xbad10bae422eb1bd638a68b59c51a8ce2e8f93159cd3cadb51b2abd79b101fee",
"0xdb306c6a90c60339e7a8db61307fa41a2647a737b4670babd33bc920b29a882b",
"0x9d3d930ace9c89615cfd876b69246a54891ad08488255e6912e558684c962697",
"0xe9397797515127d1d1961b46f394646a3cefae518ba326eb1f725abddf2af024",
"0x5b7eb29efc3e9cd88bd13aae3521860de644faa444936cd04073bc35ed4382a3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

