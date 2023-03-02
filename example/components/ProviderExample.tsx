import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { BitKeep } from '@web3-react/bitkeep'
import { Network } from '@web3-react/network'
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'

import { coinbaseWallet, hooks as coinbaseWalletHooks } from '../connectors/coinbaseWallet'
import { hooks as metaMaskHooks, metaMask } from '../connectors/metaMask'
import { hooks as networkHooks, network } from '../connectors/network'
import { hooks as walletConnectV2Hooks, walletConnectV2 } from '../connectors/walletConnect'
import { hooks as bitKeepHooks, bitKeep } from '../connectors/bitKeep'
import { getName } from '../utils'

const connectors: [MetaMask | WalletConnectV2 | CoinbaseWallet | Network | BitKeep, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnectV2, walletConnectV2Hooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks],
  [bitKeep, bitKeepHooks],
]

function Child() {
  const { connector } = useWeb3React()
  console.log(`Priority Connector is: ${getName(connector)}`)
  return null
}

export default function ProviderExample() {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Child />
    </Web3ReactProvider>
  )
}
