export interface ITransaction {
  transactionId: string;
  date: string;
  recipientName: string;
  phoneNo: string | number;
  country: string;
  amount: string | number;
  actions: string;
}
