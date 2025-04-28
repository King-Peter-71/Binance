document.getElementById('receiptForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const amount = document.getElementById('inputAmount').value;
  const status = document.getElementById('inputStatus').value;
  const address = document.getElementById('inputAddress').value;
  const txid = document.getElementById('inputTxid').value;
  const realAmount = document.getElementById('inputRealAmount').value;
  const fee = document.getElementById('inputFee').value;
  const walletType = document.getElementById('inputWalletType').value;
  const date = new Date(document.getElementById('inputDate').value);
  const note = document.getElementById('inputNote').value;

  document.getElementById('amountText').textContent = amount;

  let statusText = "";
  if (status === 'completed') {
    statusText = "✅ Completed";
  } else if (status === 'pending') {
    statusText = "⏳ Pending";
  } else if (status === 'failed') {
    statusText = "❌ Failed";
  } else if (status === 'rejected') {
    statusText = "⚠️ Rejected";
  }
  document.getElementById('status').textContent = statusText;

  document.getElementById('addressText').textContent = address;
  document.getElementById('txidText').textContent = txid;
  document.getElementById('realAmountText').textContent = realAmount;
  document.getElementById('feeText').textContent = fee;
  document.getElementById('walletTypeText').textContent = walletType;
  document.getElementById('dateText').textContent = date.toISOString().slice(0, 19).replace('T', ' ');
  document.getElementById('noteText').textContent = note;
});
