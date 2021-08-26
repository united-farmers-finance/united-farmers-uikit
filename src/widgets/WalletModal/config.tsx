import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import BinanceChain from "./icons/BinanceChain";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  // {
  //   title: "TrustWallet",
  //   icon: TrustWallet,
  //   connectorId: "injected",
  // },
  // {
  //   title: "MathWallet",
  //   icon: MathWallet,
  //   connectorId: "injected",
  // },
  // {
  //   title: "TokenPocket",
  //   icon: TokenPocket,
  //   connectorId: "injected",
  // },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  // {
  //   title: "Binance Chain Wallet",
  //   icon: BinanceChain,
  //   connectorId: "bsc",
  // },
];

export default connectors;
export const localStorageKey = "accountStatus";
