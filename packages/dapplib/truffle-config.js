require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remain unknown hope area tail gather'; 
let testAccounts = [
"0x301218c30110fc467aa64f3716a7091fb1f69655f0b2bd7150f4f8ec452227b6",
"0x5d48ffe41f599223e5c471345d1c6f597fc59461f56736a4575311b56d3cc7ad",
"0x2340abec6f4dfc8a726d558008e9c23cb9450c22b398c9a8b59ed0b2256dc427",
"0xafc0374e4d4d636ec40c35715d4f72d9cdbcdd30acb99471c6fdba53cd5b8eef",
"0x3ea5205b563e39c2334870847d2ac5e0f2515017fa1fcd5e577633e250f99cfa",
"0x5648afdee46fee5d72f598304692ca9d173dbf5720bfbe02573e124728849d4e",
"0x12557e1caa820d6e927216674e2f7d6248200ec8e261dc4c0587715f1ee6d049",
"0x795033ff958d958c471076255755d8876a17ba5549cd216d42e8d7babc872b72",
"0x941745a7c517ca15e30c0ebb633ea62068be2cb816d20f4392b0aa663230e114",
"0xbd5555ad278162cab59c75a77247b92806a156680374ad7611fa41d78ca2b7f3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


