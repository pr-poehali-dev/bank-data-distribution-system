
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  SortAsc, 
  SortDesc, 
  FileText, 
  User, 
  DollarSign, 
  CalendarClock, 
  Percent 
} from "lucide-react";
import Icon from "@/components/ui/icon";
import AccountDetails from "@/components/AccountDetails";
import { MOCK_ACCOUNTS } from "@/data/mockAccounts";
import { Account } from "@/types/account";

const Dashboard = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [filteredAccounts, setFilteredAccounts] = useState<Account[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Account;
    direction: "asc" | "desc";
  } | null>(null);

  // Load mock data on component mount
  useEffect(() => {
    // Simulating API fetch with setTimeout
    const timer = setTimeout(() => {
      setAccounts(MOCK_ACCOUNTS);
      setFilteredAccounts(MOCK_ACCOUNTS);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredAccounts(accounts);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = accounts.filter(
        (account) =>
          account.accountNumber.toLowerCase().includes(query) ||
          account.accountCode.toLowerCase().includes(query) ||
          account.ownerName.toLowerCase().includes(query)
      );
      setFilteredAccounts(filtered);
    }
  }, [searchQuery, accounts]);

  // Handle sort
  const handleSort = (key: keyof Account) => {
    let direction: "asc" | "desc" = "asc";
    
    if (sortConfig && sortConfig.key === key) {
      direction = sortConfig.direction === "asc" ? "desc" : "asc";
    }
    
    setSortConfig({ key, direction });
    
    const sorted = [...filteredAccounts].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    
    setFilteredAccounts(sorted);
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Банковская система</h1>
          <p className="text-muted-foreground">
            Управление счетами и финансовыми данными
          </p>
        </div>
        <div className="mt-4 md:mt-0 relative w-full md:w-auto">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск по номеру, коду или ФИО..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 w-full"
            />
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Всего счетов
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{accounts.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Общий баланс
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(
                accounts.reduce((sum, account) => sum + account.balance, 0)
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Средний процент
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {accounts.length
                ? (
                    accounts.reduce(
                      (sum, account) => sum + account.interestRate,
                      0
                    ) / accounts.length
                  ).toFixed(2)
                : "0.00"}
              %
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Accounts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Счета клиентов</CardTitle>
        </CardHeader>
        <CardContent>
          {accounts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Загрузка данных...</p>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead 
                      className="w-[180px] cursor-pointer"
                      onClick={() => handleSort("accountNumber")}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Номер счета</span>
                        {sortConfig?.key === "accountNumber" && (
                          <Icon 
                            name={sortConfig.direction === "asc" ? "SortAsc" : "SortDesc"} 
                            size={14} 
                          />
                        )}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSort("accountCode")}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Код счета</span>
                        {sortConfig?.key === "accountCode" && (
                          <Icon 
                            name={sortConfig.direction === "asc" ? "SortAsc" : "SortDesc"} 
                            size={14} 
                          />
                        )}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => handleSort("ownerName")}
                    >
                      <div className="flex items-center space-x-1">
                        <span>ФИО владельца</span>
                        {sortConfig?.key === "ownerName" && (
                          <Icon 
                            name={sortConfig.direction === "asc" ? "SortAsc" : "SortDesc"} 
                            size={14} 
                          />
                        )}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="text-right cursor-pointer"
                      onClick={() => handleSort("balance")}
                    >
                      <div className="flex items-center justify-end space-x-1">
                        <span>Сумма</span>
                        {sortConfig?.key === "balance" && (
                          <Icon 
                            name={sortConfig.direction === "asc" ? "SortAsc" : "SortDesc"} 
                            size={14} 
                          />
                        )}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="hidden md:table-cell cursor-pointer"
                      onClick={() => handleSort("openDate")}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Дата открытия</span>
                        {sortConfig?.key === "openDate" && (
                          <Icon 
                            name={sortConfig.direction === "asc" ? "SortAsc" : "SortDesc"} 
                            size={14} 
                          />
                        )}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="hidden md:table-cell text-center cursor-pointer"
                      onClick={() => handleSort("interestRate")}
                    >
                      <div className="flex items-center justify-center space-x-1">
                        <span>Процент</span>
                        {sortConfig?.key === "interestRate" && (
                          <Icon 
                            name={sortConfig.direction === "asc" ? "SortAsc" : "SortDesc"} 
                            size={14} 
                          />
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="hidden md:table-cell">Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAccounts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center">
                        Счета не найдены
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredAccounts.map((account) => (
                      <TableRow 
                        key={account.id} 
                        className="account-row"
                        onClick={() => setSelectedAccount(account)}
                      >
                        <TableCell className="font-medium">
                          {account.accountNumber}
                        </TableCell>
                        <TableCell>{account.accountCode}</TableCell>
                        <TableCell>{account.ownerName}</TableCell>
                        <TableCell className="text-right">
                          <span className={account.balance > 0 ? "positive" : "neutral"}>
                            {formatCurrency(account.balance)}
                          </span>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {formatDate(account.openDate)}
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-center">
                          {account.interestRate.toFixed(2)}%
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge 
                            variant={account.isActive ? "default" : "secondary"}
                            className={account.isActive ? "bg-[hsl(var(--positive))]" : ""}
                          >
                            {account.isActive ? "Активен" : "Закрыт"}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Account Details Dialog */}
      {selectedAccount && (
        <Dialog open={!!selectedAccount} onOpenChange={() => setSelectedAccount(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Детали счета</DialogTitle>
            </DialogHeader>
            <AccountDetails 
              account={selectedAccount} 
              formatCurrency={formatCurrency}
              formatDate={formatDate}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Dashboard;
