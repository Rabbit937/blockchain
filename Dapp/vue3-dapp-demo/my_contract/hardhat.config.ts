import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    artifacts: "../src/artifacts"
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        "0x76004afc59a0a7e627321319dc95bb4b058a738f9f961600af8b4bfc6afccaa6"
      ]
    }
  }
};

export default config;
