import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    artifacts: "../src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [
        "0xe535ef81ad4ae4840af1d383221c4552e68854a514b79538f7cbaabf8554bf82"
      ]
    }
  }
};

export default config;
