
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800">БанкИнфо</h1>
            <p className="text-slate-600 mt-2">Информационная банковская система</p>
          </div>
          <Link to="/dashboard">
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Icon name="LayoutDashboard" className="mr-2 h-5 w-5" />
              Перейти к панели управления
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-6xl">
        <section className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-800">
            Управление банковскими данными стало проще
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Система позволяет эффективно управлять информацией о счетах клиентов,
            отслеживать движение средств и анализировать финансовые показатели.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                <Icon name="FileText" className="h-6 w-6 text-blue-700" />
              </div>
              <CardTitle>Учет счетов</CardTitle>
              <CardDescription>
                Храните и управляйте данными о счетах клиентов с полной детализацией
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                  Номер и код счета
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                  ФИО владельца счета
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                  Текущий баланс и история операций
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                <Icon name="LineChart" className="h-6 w-6 text-blue-700" />
              </div>
              <CardTitle>Финансовый анализ</CardTitle>
              <CardDescription>
                Получайте актуальную статистику и аналитику по всем счетам
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                  Суммарный баланс всех счетов
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                  Дата открытия счетов
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                  Годовой процент начисления
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                <Icon name="Shield" className="h-6 w-6 text-blue-700" />
              </div>
              <CardTitle>Безопасность данных</CardTitle>
              <CardDescription>
                Обеспечивайте надежное хранение и защиту банковской информации
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                  Распределенное хранение данных
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                  Контроль доступа к информации
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-green-600 mr-2" />
                  Резервное копирование и восстановление
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Информация о системе</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-blue-700 mb-2">Основные функции:</h3>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li className="flex items-start">
                      <Icon name="ArrowRight" className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Ведение базы данных счетов клиентов банка
                    </li>
                    <li className="flex items-start">
                      <Icon name="ArrowRight" className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Полная информация о счете: номер, код, владелец, сумма, дата открытия, процент
                    </li>
                    <li className="flex items-start">
                      <Icon name="ArrowRight" className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Просмотр детальной информации по каждому счету
                    </li>
                    <li className="flex items-start">
                      <Icon name="ArrowRight" className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Поиск и фильтрация счетов по различным параметрам
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-blue-700 mb-2">Технические характеристики:</h3>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li className="flex items-start">
                      <Icon name="ArrowRight" className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Распределенное хранение данных для повышенной надежности
                    </li>
                    <li className="flex items-start">
                      <Icon name="ArrowRight" className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Современный пользовательский интерфейс на React и TypeScript
                    </li>
                    <li className="flex items-start">
                      <Icon name="ArrowRight" className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Защищенный доступ к данным и разграничение прав пользователей
                    </li>
                    <li className="flex items-start">
                      <Icon name="ArrowRight" className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Возможность масштабирования системы под любые объемы данных
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="text-center">
          <Link to="/dashboard">
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Icon name="DatabaseZap" className="mr-2 h-5 w-5" />
              Начать работу с системой
            </Button>
          </Link>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">БанкИнфо</h2>
              <p className="text-slate-400 text-sm">Информационная банковская система</p>
            </div>
            <div className="text-slate-400 text-sm">
              © 2025 БанкИнфо. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
