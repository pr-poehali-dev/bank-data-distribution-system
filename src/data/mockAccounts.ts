
import { Account } from "@/types/account";

export const MOCK_ACCOUNTS: Account[] = [
  {
    id: 1,
    accountNumber: "4080 1810 9000 0000 1234",
    accountCode: "RUB-SA-01",
    ownerName: "Иванов Иван Иванович",
    balance: 125000.75,
    openDate: "2021-03-15",
    interestRate: 4.5,
    isActive: true,
    accountType: "Текущий",
    currency: "RUB",
    lastOperationDate: "2023-04-12",
    branchName: "Центральный",
    recentTransactions: [
      {
        date: "2023-04-12",
        amount: 15000,
        type: "credit",
        description: "Зачисление заработной платы"
      },
      {
        date: "2023-04-05",
        amount: 3560.44,
        type: "debit",
        description: "Оплата услуг связи"
      },
      {
        date: "2023-03-29",
        amount: 12500,
        type: "debit",
        description: "Перевод Петрову П.П."
      }
    ]
  },
  {
    id: 2,
    accountNumber: "4080 1810 9000 0000 5678",
    accountCode: "RUB-SA-02",
    ownerName: "Петрова Екатерина Сергеевна",
    balance: 345600.15,
    openDate: "2020-07-22",
    interestRate: 5.0,
    isActive: true,
    accountType: "Сберегательный",
    currency: "RUB",
    lastOperationDate: "2023-04-14",
    branchName: "Восточный",
    recentTransactions: [
      {
        date: "2023-04-14",
        amount: 25000,
        type: "credit",
        description: "Пополнение счета"
      },
      {
        date: "2023-04-02",
        amount: 8700,
        type: "debit",
        description: "Оплата аренды"
      }
    ]
  },
  {
    id: 3,
    accountNumber: "4080 1810 9000 0000 9012",
    accountCode: "USD-CA-01",
    ownerName: "Сидоров Алексей Петрович",
    balance: 5200.00,
    openDate: "2022-01-10",
    interestRate: 1.2,
    isActive: true,
    accountType: "Валютный",
    currency: "USD",
    lastOperationDate: "2023-04-10",
    branchName: "Международный",
    recentTransactions: [
      {
        date: "2023-04-10",
        amount: 1200,
        type: "credit",
        description: "Международный перевод"
      },
      {
        date: "2023-03-25",
        amount: 350,
        type: "debit",
        description: "Оплата подписки"
      }
    ]
  },
  {
    id: 4,
    accountNumber: "4080 1810 9000 0000 3456",
    accountCode: "RUB-DA-01",
    ownerName: "Козлова Мария Владимировна",
    balance: 780000.50,
    openDate: "2019-11-05",
    interestRate: 6.3,
    isActive: true,
    accountType: "Депозитный",
    currency: "RUB",
    lastOperationDate: "2023-03-05",
    branchName: "Центральный",
    recentTransactions: [
      {
        date: "2023-03-05",
        amount: 50000,
        type: "credit",
        description: "Начисление процентов"
      }
    ]
  },
  {
    id: 5,
    accountNumber: "4080 1810 9000 0000 7890",
    accountCode: "RUB-CA-02",
    ownerName: "Смирнов Дмитрий Александрович",
    balance: 0.00,
    openDate: "2020-05-18",
    interestRate: 0.0,
    isActive: false,
    accountType: "Текущий",
    currency: "RUB",
    lastOperationDate: "2022-12-15",
    branchName: "Западный",
    recentTransactions: [
      {
        date: "2022-12-15",
        amount: 75800,
        type: "debit",
        description: "Закрытие счета"
      }
    ]
  },
  {
    id: 6,
    accountNumber: "4080 1810 9000 0000 2468",
    accountCode: "EUR-CA-01",
    ownerName: "Николаев Сергей Игоревич",
    balance: 3500.45,
    openDate: "2021-09-30",
    interestRate: 1.5,
    isActive: true,
    accountType: "Валютный",
    currency: "EUR",
    lastOperationDate: "2023-04-13",
    branchName: "Международный",
    recentTransactions: [
      {
        date: "2023-04-13",
        amount: 500,
        type: "credit",
        description: "Перевод из-за границы"
      },
      {
        date: "2023-03-20",
        amount: 200,
        type: "debit",
        description: "Оплата отеля"
      }
    ]
  },
  {
    id: 7,
    accountNumber: "4080 1810 9000 0000 1357",
    accountCode: "RUB-SA-03",
    ownerName: "Кузнецова Анна Михайловна",
    balance: 450200.00,
    openDate: "2022-03-14",
    interestRate: 5.2,
    isActive: true,
    accountType: "Сберегательный",
    currency: "RUB",
    lastOperationDate: "2023-04-01",
    branchName: "Южный",
    recentTransactions: [
      {
        date: "2023-04-01",
        amount: 30000,
        type: "credit",
        description: "Пополнение счета"
      },
      {
        date: "2023-03-15",
        amount: 15000,
        type: "debit",
        description: "Снятие наличных"
      }
    ]
  }
];
