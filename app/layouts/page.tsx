'use client'
// import { ExternalLink } from '#/ui/external-link';

// export default function Page() {
//   return (
//     <div className="prose prose-sm prose-invert max-w-none">
//       <h1 className="text-xl font-bold">Layouts</h1>

//       <ul>
//         <li>
//           A layout is UI that is shared between multiple pages. On navigation,
//           layouts preserve state, remain interactive, and do not re-render. Two
//           or more layouts can also be nested.
//         </li>
//         <li>Try navigating between categories and sub categories.</li>
//       </ul>

//       <div className="flex gap-2">
//         <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts">
//           Docs
//         </ExternalLink>
//         <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/layouts">
//           Code
//         </ExternalLink>
//       </div>
//     </div>
//   );
// }
// import React from 'react';
// import { Button, Flex } from 'antd';

// const Page: React.FC = () => (
//   <Flex gap="small" wrap="wrap">
//     <Button type="primary">Primary Button</Button>
//     <Button>Default Button</Button>
//     <Button type="dashed">Dashed Button</Button>
//     <Button type="text">Text Button</Button>
//     <Button type="link">Link Button</Button>
//   </Flex>
// );

// export default Page;

// import React from "react";
// import {Select, SelectItem} from "@nextui-org/react";
// import {animals} from "./data";
// import {Spinner} from "@nextui-org/react";
// import { FormEvent } from 'react'
// import Form from "./_components/form";



// export default function App() {
//   const colors = [
//     "default",
//     "primary",
//     "secondary",
//     "success",
//     "warning",
//     "danger",
//   ];

//   return (
//     <div className="w-full flex flex-row flex-wrap gap-4">
//       {colors.map((color:any) => (
//         <Select
//           key={color}
//           color={color}
//           label="Favorite Animal"
//           placeholder="Select an animal"
//           defaultSelectedKeys={["cat"]}
//           className="max-w-xs"
//         >
//           {animals.map((animal) => (
//             <SelectItem key={animal.value} value={animal.value}>
//               {animal.label}
//             </SelectItem>
//           ))}
//         </Select>
//       ))}  

//       <Spinner label="Default" color="default" labelColor="foreground"/>
//       <Spinner label="Primary" color="primary" labelColor="primary"/>
//       <Spinner label="Secondary" color="secondary" labelColor="secondary"/>
//       <Spinner label="Success" color="success" labelColor="success"/>
//       <Spinner label="Warning" color="warning" labelColor="warning"/>
//       <Spinner label="Danger" color="danger" labelColor="danger"/>

      
//     </div> 
//   );
// }



// // pages/form.tsx


import React, { useState } from "react";
import {Select, SelectItem, Avatar, button} from "@nextui-org/react";
import {animals} from "./_utils/data";
import {Button} from "@nextui-org/react";
import { swapToken } from "#/app/api/crypto/swap";
import {Input} from "@nextui-org/react";

export default function App() {
  const [walletAddress, setWalletAddress] = useState("0x795Ee187c30152b8b102Ace316605f82248f4455");
  const [privateKey, setPrivateKey] = useState("");
  const [fromTokenAddress, setFromTokenAddress] = useState("0x55d398326f99059ff775485246999027b3197955");
  const [toTokenAddress, setToTokenAddress] = useState("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c");
  const [amount, setAmount] = useState("10.00");
  // 根据需要添加其他状态

  // 处理交换操作
  const handleSwap = async () => {
    try {
      const result = await swapToken(
        walletAddress,
        privateKey,
        fromTokenAddress,
        toTokenAddress,
        parseFloat(amount),
        0.005, // slip, 可以是用户输入
        2000000, // gasLimit, 可以是用户输入
        1 // gasPrice, 可以是用户输入
      );
      console.log("交换结果", result); // 或者存储在状态中
    } catch (error) {
      console.error("交换失败", error);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div key="chain" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Select
        isRequired
        className="max-w-xs"
        label="Select Chain"
        // startContent=
        >
          <SelectItem
            key="bsc"
            startContent={<Avatar alt="BSC" className="w-6 h-6" src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=031" />}
          >
            BSC
          </SelectItem>
          <SelectItem
            key="sol"
            startContent={<Avatar alt="SOL" className="w-6 h-6" src="https://cryptologos.cc/logos/solana-sol-logo.png?v=031" />}
          >
            SOL
          </SelectItem>
          <SelectItem
            key="eth"
            startContent={<Avatar alt="ETH" className="w-6 h-6" src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=031" />}
          >
            ETH
          </SelectItem>
        </Select>


        <Select
        isRequired
        className="max-w-xs"
        label="Select Swap"
        >
          <SelectItem
            key="PancakeSwap V3 [BSC]"
            startContent={<Avatar alt="PancakeSwap V3" className="w-6 h-6" src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=031" />}
          >
            PancakeSwap V3 [BSC]
          </SelectItem>
          <SelectItem
            key="Bakery Swap [BSC]"
            startContent={<Avatar alt="Bakery Swap" className="w-6 h-6" src="https://cryptologos.cc/logos/bakerytoken-bake-logo.png?v=031" />}
          >
            Bakery Swap [BSC]
          </SelectItem>
        </Select>

      </div>
      
      <div key="walelt" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Select
        className="max-w-xs"
        label="Select Wallet"
        >
          <SelectItem
            key="bsc-wallet-1"
            startContent={<Avatar alt="BSC" className="w-6 h-6" src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=031" />}
          >
            bsc-wallet-1
          </SelectItem>
          <SelectItem
            key="bsc-wallet-2"
            startContent={<Avatar alt="BSC" className="w-6 h-6" src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=031" />}
          >
            bsc-wallet-2
          </SelectItem>
          <SelectItem
            key="bsc-wallet-3"
            startContent={<Avatar alt="BSC" className="w-6 h-6" src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=031" />}
          >
            bsc-wallet-3
          </SelectItem>
        </Select>

      </div>

      <div className="w-full flex flex-col gap-2 max-w-[500px]">
        <Input
          label="From Token Contract"
          placeholder="Enter from token contract"
          labelPlacement="outside"
          value={fromTokenAddress}
          onValueChange={setFromTokenAddress}
        />
      </div>

      <div className="w-full flex flex-col gap-2 max-w-[500px]">
        <Input
          label="To Token Contract"
          placeholder="Enter to token contract"
          labelPlacement="outside"
          value={toTokenAddress}
          onValueChange={setToTokenAddress}
        />
      </div>


      <div className="w-full flex flex-col gap-2 max-w-[500px]">
        <Input
            label="Amount"
            placeholder="0.00"
            labelPlacement="outside"
            value={amount}
            onValueChange={setAmount}
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
              </div>
            }
            endContent={
              <div className="flex items-center">
                <label className="sr-only" htmlFor="currency">
                  Currency
                </label>
                <select
                  className="outline-none border-0 bg-transparent text-default-400 text-small"
                  id="currency"
                  name="currency"
                >
                  <option>USDT</option>
                  <option>ARS</option>
                  <option>EUR</option>
                </select>
              </div>
            }
            type="number"
          />
        </div>




      <div>
        <Button color="success" onClick={handleSwap}>
          Purchase
        </Button>  
      </div>



    </div>  
  );
}




// import React from "react";
// import {Select, SelectItem, Avatar} from "@nextui-org/react";

// export default function App() {
//   return (
//     <Select
//       className="max-w-xs"
//       label="Select Chain"
//     >
//       <SelectItem
//         key="bsc"
//         startContent={<Avatar alt="Argentina" className="w-6 h-6" src="https://flagcdn.com/ar.svg" />}
//       >
//         BSC
//       </SelectItem>
//       <SelectItem
//         key="sol"
//         startContent={<Avatar alt="Venezuela" className="w-6 h-6" src="https://flagcdn.com/ve.svg" />}
//       >
//         SOL
//       </SelectItem>
//       <SelectItem
//         key="venezuela"
//         startContent={<Avatar alt="Venezuela" className="w-6 h-6" src="https://flagcdn.com/ve.svg" />}
//       >
//         ETH
//       </SelectItem>
//     </Select>
//   );
// }


        // {/* <Select 
        //   variant="faded"
        //   label="Select a Chain" 
        //   className="max-w-xs" 
        // >
        //   {animals.map((animal) => (
        //     <SelectItem key={animal.value} value={animal.value}>
        //       {animal.label}
        //     </SelectItem>
        //   ))}
        // </Select> */}


        // {/* <Select
        //   variant="faded"
        //   label="Select  Swap"
        //   // placeholder="Select an animal"
        //   className="max-w-xs"
        // >
        //   {animals.map((animal) => (
        //     <SelectItem key={animal.value} value={animal.value}>
        //       {animal.label}
        //     </SelectItem>
        //   ))}
        // </Select> */}