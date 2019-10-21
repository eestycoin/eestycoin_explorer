const chain = '0a33be5dea4303e59f73be10d43900cbb11230a69df6a9594743f4887bc4b234';
console.log("test");
export const environment = {
    production: true,
    appName: 'Eesty Coint',
    network: {
        blockchain: 'eos',
        host: '13.125.130.214',
        port: 8888,
        protocol: 'http',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Eos: {
        httpEndpoint: 'http://13.125.130.214:8888',
        chainId: chain,
        verbose: false
    },
    frontConfig: {
       coin: 'EEC',
       bp: 'bp.json',
       tokenContract: 'eosio.token',
       totalBalance: 'EEC',
       convertToUSD: true,
       customBalance: false,
       logo: '/assets/images/wax.png',
       name: {
          big: 'eec',
          small: 'web'
       },
       nets: [],
       disableNets: false,
       voteDonationAcc: '',
       disableVoteDonation: false,
       version: '1.0.0',
       producers: 1000,
       social: [],
       liveTXenable: true
    }
};