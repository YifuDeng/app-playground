
import { getCategories } from '#/app/api/categories/getCategories';
import { ClickCounter } from '#/ui/click-counter';
import { TabGroup } from '#/ui/tab-group';
import React from 'react';
import WalletTable from './_components/table';
const title = 'Nested Layouts';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

// export default async function Layout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const categories = await getCategories();

//   return (
//     <div className="space-y-9">
//       <div className="flex justify-between">
//         <TabGroup
//           path="/layouts"
//           items={[
//             {
//               text: 'Home',
//             },
//             ...categories.map((x) => ({
//               text: x.name,
//               slug: x.slug,
//             })),
//           ]}
//         />

//         <div className="self-start">
//           <ClickCounter />
//         </div>
//       </div>

//       <div>{children}</div>
//     </div>
//   );
// }

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        {/* <TabGroup
          path="/layouts"
          items={[
            {
              text: 'Decentralized Wallet',
            },
            {
              text: 'Centralized Exchange Account',
            },
          ]}
        /> */}
        <TabGroup
          path="/wallet"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'Wallet',
              slug: 'dex',
              segment: 'edge',
            },
            {
              text: 'Exchange',
              slug: 'cex',
              segment: 'node',
            },
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
