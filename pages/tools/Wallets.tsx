import React, { useEffect, useRef, useState } from "react";
import { ethers } from "ethers";

function WalletsTool() {
  const [userInput, setUserInput] = useState();
  const [result, setResult] = useState({'address': null, 'balance': null});
  const [statusMessage, setStatusMessage] = useState({'opacity':'0', 'color':null, 'message': '.'});

  const getBalance = async (address) => {
      const provider = new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth');
      const balance = await provider.getBalance(address);
      const balanceInEth = ethers.utils.formatEther(balance);
      return balanceInEth;
  }

  function handleInput(e){
    setUserInput(e.target.value)
    setStatusMessage({'opacity':'0', 'color':null, 'message': '.'});
  }
  function handleClic(){
    try {
      let _userInput = userInput;
      if(!_userInput.startsWith('0x')){
        _userInput = '0x'+ _userInput;
      }
      let publicKey = ethers.utils.computeAddress(_userInput);
      getBalance(publicKey).then( (balance) => {
        setResult({'address': publicKey, 'balance': balance});
      })
    } catch(err){
      setStatusMessage({'opacity':'100', 'color':'yellow-300', 'message':'Invalid private key'});
    }
  }

  useEffect(() => {
  }, [userInput]);
  return (
    <div className="select-none w-full h-full m-auto font-mono flex flex-col">
      <div className="flex flex-col justify-start gap-0">
        <h1 className="font-bold text-xl py-4">Private key to wallet</h1>
        <p className="text-sm leading-relaxed text-zinc-400">
          Derive public key from a private key. 
        </p>
        <i className="text-xs text-zinc-400">Note: You should not trust a private key given by a public website for personal uses.</i>
      </div>
      <div className="h-full w-full flex flex-col justify-center gap-y-8 items-center content-center">
        <div className="p-8 w-full flex flex-row justify-evenly gap-y-8 items-center content-center">
          <input className="p-4 rounded-lg border border-1 border-white/50 w-3/6 bg-transparent" value={userInput} onChange={handleInput} />
          <button className="text-sm p-4 rounded-lg border border-1 border-white/50 bg-white/20 hover:bg-white/30 active:bg-white/60 transition ease-in-out duration-300" onClick={handleClic}>
            Compute public key
          </button>
        </div>
        <p className={`text-sm text-${statusMessage.color} opacity-${statusMessage.opacity}`}>{statusMessage.message}</p>
        <div className="w-3/6 flex flex-col justify-start gap-y-8 items-center content-center">
          <span className="flex flex-col w-full gap-4">
            <p>Public key:</p>
            <p className="select-text">{result.address}</p>
          </span>
          <hr/>
          <span className="flex flex-col w-full gap-4">
            <p>Balance:</p>
            <p>{result.balance} ETH</p>
          </span>

        </div>
      </div>
    </div>
  );
}

export default WalletsTool;
