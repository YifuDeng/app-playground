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




// import React, { useState } from 'react';
// import { Button, Form, InputNumber, Input, Select, Slider, Space, Switch } from 'antd';

// const { Option } = Select;

// const formItemLayout = {
//   labelCol: { span: 6 },
//   wrapperCol: { span: 14 },
// };

// const onFinish = (values:any) => {
//   console.log('Received values of form: ', values);
// };

// const CryptoTradeForm = () => {
//   const [slippage, setSlippage] = useState(20);

//   const onSlippageChange = (value:any) => {
//     setSlippage(value);
//   };
//   const elementStyle = { color: 'white' };
  
//   return (
//     <Form
//       name="crypto_trade_form"
//       {...formItemLayout}
//       onFinish={onFinish}
//       initialValues={{
//         wallet: 'Wallet1',
//         blockchain: 'BSC',
//         dexSwap: 'PancakeSwap',
//         gasPrice: 1,
//         slippage: 20,
//         tokenContract: '',
//         tokenAmount: '',
//         enableMonitoring: false,
//       }}
//       style={{ maxWidth: 600, color:'white' }}
//     >
//       <Form.Item label="科学家买土狗">
//         <span className="ant-form-text">印钞机</span>
//       </Form.Item>
//       <Form.Item
//         name="wallet"
//         label="钱包 (Wallet)"
//         hasFeedback
//         rules={[{ required: true, message: '请选择要交易的钱包' }]}
//       >
//         <Select placeholder="请选择要交易的钱包 (Select your wallet)">
//           <Option value="Wallet1">Wallet1</Option>
//           <Option value="Wallet2">Wallet2</Option>
//         </Select>
//       </Form.Item>
//       <Form.Item
//         name="blockchain"
//         label="链 (Chain)"
//         hasFeedback
//         rules={[{ required: true, message: '请选择要交易的链' }]}
//       >
//         <Select placeholder="请选择要交易的链 (Select the blockchain)">
//           <Option value="BSC">BSC (币安智能链)</Option>
//           <Option value="SOL">SOL (Solana)</Option>
//         </Select>
//       </Form.Item>
//       <Form.Item
//         name="dexSwap"
//         label="DEX Swap"
//         hasFeedback
//         rules={[{ required: true, message: '请选择要交易的去中心化Swap!' }]}
//       >
//         <Select placeholder="请选择要交易的去中心化Swap (Select DEX for swap)">
//           <Option value="PancakeSwap">PancakeSwap</Option>
//           <Option value="JupiterSwap">JupiterSwap</Option>
//         </Select>
//       </Form.Item>

      
//       <Form.Item label=" 矿工费（Gas Price）">
//         <Form.Item name="gasPrice" noStyle>
//           <InputNumber min={1} max={10} />
//         </Form.Item>
//         <span className="ant-form-text" style={{ marginLeft: 8 }}>
//           Gwei
//         </span>
//       </Form.Item>


//       <Form.Item label="滑点 (Slippage)">
//           <InputNumber
//             name="slippage"
//             min={0}
//             max={100}
//             step={0.1}
//             value={slippage}
//             onChange={onSlippageChange}
//             style={{ width: '20%' }}
//           />
//           <span> %</span>
//           <Slider
//             min={0}
//             max={100}
//             step={0.1}
//             value={typeof slippage === 'number' ? slippage : 0}
//             onChange={onSlippageChange}
//             marks={{
//               0: '0%',
//               20: '20%',
//               40: '40%',
//               60: '60%',
//               80: '80%',
//               100: '100%',
//             }}
//             style={{ width: '90%' }}
//           />
//         </Form.Item>


//       <Form.Item label="合约地址 (Contract)">
//         <Form.Item name="tokenContract" noStyle>
//           <Input placeholder="请输入代币合约地址 (Enter token contract address)" />
//         </Form.Item>
//       </Form.Item>
//       <Form.Item label="代币数量 (Token Amount)">
//         <Form.Item name="tokenAmount" noStyle>
//           <Input placeholder="请输入代币数量 (Enter token amount)" />
//         </Form.Item>
//       </Form.Item>
//       <Form.Item
//         name="enableMonitoring"
//         label="监控 (Monitor)"
//         valuePropName="checked"
//       >
//         <Switch />
//       </Form.Item>
//       <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
//         <Space>
//           <Button type="primary" htmlType="submit">
//             提交 (Submit)
//           </Button>
//           <Button
//             htmlType="button"
//             onClick={() => {
//               Form.resetFields();
//             }}
//           >
//             重设 (Reset)
//           </Button>
//         </Space>
//       </Form.Item>
//     </Form>
//   );
// };

// export default CryptoTradeForm;


// import { CryptoPrice } from '@ant-design/web3';
// import { BitcoinCircleColorful } from '@ant-design/web3-icons';
// import { Space } from 'antd';

import { Address } from '@ant-design/web3';
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import WalletTable from "./_components/table";

export default function App() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <div>
      <WalletTable></WalletTable>
    </div>
  );
}
