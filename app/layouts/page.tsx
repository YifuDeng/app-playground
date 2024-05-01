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


import React from "react";
import {Select, SelectItem, Avatar} from "@nextui-org/react";
import {animals} from "./data";

export default function App() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div key="faded" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Select
        className="max-w-xs"
        label="Select Chain"
        >
          <SelectItem
            key="bsc"
            startContent={<Avatar alt="Argentina" className="w-6 h-6" src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=031" />}
          >
            BSC
          </SelectItem>
          <SelectItem
            key="sol"
            startContent={<Avatar alt="Venezuela" className="w-6 h-6" src="https://cryptologos.cc/logos/solana-sol-logo.png?v=031" />}
          >
            SOL
          </SelectItem>
          <SelectItem
            key="eth"
            startContent={<Avatar alt="Venezuela" className="w-6 h-6" src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=031" />}
          >
            ETH
          </SelectItem>
        </Select>


        <Select
        className="max-w-xs"
        label="Select Swap"
        >
          <SelectItem
            key="PanakeSwap V3 [BSC]"
            startContent={<Avatar alt="Argentina" className="w-6 h-6" src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=031" />}
          >
            PanakeSwap V3 [BSC]
          </SelectItem>
          <SelectItem
            key="Bakery Swap [BSC]"
            startContent={<Avatar alt="Venezuela" className="w-6 h-6" src="https://cryptologos.cc/logos/bakerytoken-bake-logo.png?v=031" />}
          >
            Bakery Swap [BSC]
          </SelectItem>
        </Select>



        {/* <Select 
          variant="faded"
          label="Select a Chain" 
          className="max-w-xs" 
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select> */}


        {/* <Select
          variant="faded"
          label="Select  Swap"
          // placeholder="Select an animal"
          className="max-w-xs"
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select> */}
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
