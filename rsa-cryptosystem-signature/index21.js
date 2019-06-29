const firstPrime = 2;
const secondPrime = 5;
const N = firstPrime * secondPrime;

/*
`Φ(N) or phi of N` outputs number of integers upto `N` that are coprime with `N`.

Let's find `Φ(10)`: (1, 10) (3, 10) (7, 10) (9, 10) are coprimes with `N` upto `N`. Here `N = 10`
So, coprimes of 10 upto 10 are 1, 3, 7 and 9. Number of coprimes of 10 upto 10 = 4. 
Hence, `Φ(10)` = 4. 

Set `phiOfN` to 4.
*/

const phiOfN = 0;
let publicKey = 0;

function hashTheMessage(message) {
  let hashValue = 0;
  for (let i = 0, msgLength = message.length; i < msgLength; ++i) {
    hashValue += message.charCodeAt(i);
  }
  return hashValue;
}

function isCoPrime(smallerNum, largerNum) {
  for (let i = 2; i <= smallerNum; ++i) {
    if (smallerNum % i === 0 && largerNum % i === 0) {
      return false;
    }
  }
  return true;
}

function generatePrivateKey() {
  for (let privateKey = 2; privateKey < phiOfN; ++privateKey) {}
}

function generatePublicKey() {}

function generateSignature() {}

function decryptSignature() {}
