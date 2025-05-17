
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  User, 
  DollarSign, 
  CalendarClock, 
  Percent,
  ClipboardCheck,
  BadgeCheck
} from "lucide-react";
import { Account } from "@/types/account";

interface AccountDetailsProps {
  account: Account;
  formatCurrency: (amount: number) => string;
  formatDate: (dateStr: string) => string;
}

const AccountDetails = ({ account, formatCurrency, formatDate }: AccountDetailsProps) => {
  return (
    <div className="space-y-6 py-2 animate-in">
      {/* Account Info Card */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="grid grid-cols-[20px_1fr] items-start gap-4 text-sm mb-3">
              <FileText className="text-primary h-5 w-5" />
              <div>
                <p className="font-medium">Номер счета</p>
                <p className="text-muted-foreground">{account.accountNumber}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-[20px_1fr] items-start gap-4 text-sm mb-3">
              <ClipboardCheck className="text-primary h-5 w-5" />
              <div>
                <p className="font-medium">Код счета</p>
                <p className="text-muted-foreground">{account.accountCode}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-[20px_1fr] items-start gap-4 text-sm">
              <User className="text-primary h-5 w-5" />
              <div>
                <p className="font-medium">ФИО владельца</p>
                <p className="text-muted-foreground">{account.ownerName}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="grid grid-cols-[20px_1fr] items-start gap-4 text-sm mb-3">
              <DollarSign className="text-primary h-5 w-5" />
              <div>
                <p className="font-medium">Баланс</p>
                <p className={`font-semibold text-lg ${account.balance > 0 ? "positive" : "neutral"}`}>
                  {formatCurrency(account.balance)}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-[20px_1fr] items-start gap-4 text-sm mb-3">
              <CalendarClock className="text-primary h-5 w-5" />
              <div>
                <p className="font-medium">Дата открытия</p>
                <p className="text-muted-foreground">{formatDate(account.openDate)}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-[20px_1fr] items-start gap-4 text-sm">
              <Percent className="text-primary h-5 w-5" />
              <div>
                <p className="font-medium">Годовой процент</p>
                <p className="text-muted-foreground">{account.interestRate.toFixed(2)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Info */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Статус счета</h3>
            <Badge 
              variant={account.isActive ? "default" : "secondary"}
              className={account.isActive ? "bg-[hsl(var(--positive))]" : ""}
            >
              {account.isActive ? "Активен" : "Закрыт"}
            </Badge>
          </div>
          
          <div className="text-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Тип счета:</span>
              <span>{account.accountType}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Валюта:</span>
              <span>{account.currency}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Последняя операция:</span>
              <span>{formatDate(account.lastOperationDate)}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Филиал банка:</span>
              <span>{account.branchName}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Transaction History Preview */}
      {account.recentTransactions && account.recentTransactions.length > 0 && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Последние операции</h3>
            <div className="space-y-3">
              {account.recentTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between text-sm border-b pb-2 last:border-0">
                  <div className="flex items-center gap-2">
                    <div 
                      className={`w-2 h-2 rounded-full ${
                        transaction.type === "credit" ? "bg-[hsl(var(--positive))]" : "bg-[hsl(var(--negative))]"
                      }`}
                    />
                    <span>{transaction.description}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span 
                      className={transaction.type === "credit" ? "positive" : "negative"}
                    >
                      {transaction.type === "credit" ? "+" : "-"}
                      {formatCurrency(transaction.amount)}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(transaction.date)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AccountDetails;
