
export interface Transaction {
  date: string;
  amount: number;
  type: "credit" | "debit";
  description: string;
}

export interface Account {
  id: number;
  accountNumber: string;
  accountCode: string;
  ownerName: string;
  balance: number;
  openDate: string;
  interestRate: number;
  isActive: boolean;
  accountType: string;
  currency: string;
  lastOperationDate: string;
  branchName: string;
  recentTransactions?: Transaction[];
}
