// api.js

const BASE_URL = "http://127.0.0.1:5000"; // Or your actual backend server URL

// 获取余额
export async function getBalance(
    walletAddress: string,
    tokenAddress: string
): Promise<any> {
  const url = new URL(`${BASE_URL}/balance`);
  url.search = new URLSearchParams({ wallet_address: walletAddress, token: tokenAddress }).toString();

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw error;
  }
}

// 获取价格
export async function getPrice(
    fromTokenAddress: string,
     toTokenAddress: string
): Promise<any> {
  const url = new URL(`${BASE_URL}/price`);
  url.search = new URLSearchParams({ from_token_address: fromTokenAddress, to_token_address: toTokenAddress }).toString();

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching price:', error);
    throw error;
  }
}

// 代币交换
export async function swapToken(
    walletAddress: string,
    privateKey: string,
    fromTokenAddress: string,
    toTokenAddress: string,
    amount: number,
    slip: number = 0.005,
    gasLimit: number = 2000000,
    gasPrice: number = 1
): Promise<any> {
  const url = `${BASE_URL}/swap`;
  const payload = {
    wallet_address: walletAddress,
    private_key: privateKey,
    from_token_address: fromTokenAddress,
    to_token_address: toTokenAddress,
    amount: amount,
    slip: slip,
    gaslimit: gasLimit,
    gasprice: gasPrice,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error performing swap:', error);
    throw error;
  }
}
