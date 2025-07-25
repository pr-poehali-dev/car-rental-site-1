import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  const [playerName, setPlayerName] = useState('');
  const [rentalTime, setRentalTime] = useState('');

  const cars = [
    {
      id: 1,
      name: 'Pegassi Zentorno',
      category: 'Суперкар',
      price: '2500',
      deposit: '5000',
      image: '/img/15a7daf7-df86-4e3c-b8e7-7ab3c84be2fd.jpg',
      stats: { speed: '★★★★★', handling: '★★★★☆', acceleration: '★★★★★' }
    },
    {
      id: 2,
      name: 'Shitzu Hakuchou',
      category: 'Мотоцикл',
      price: '800',
      deposit: '1500',
      image: '/img/2c4c66d8-c551-4014-984b-6bdca82d6bc1.jpg',
      stats: { speed: '★★★★☆', handling: '★★★★★', acceleration: '★★★★★' }
    },
    {
      id: 3,
      name: 'Declasse Vigero',
      category: 'Мускулкар',
      price: '1200',
      deposit: '2000',
      image: '/img/3fb6c0eb-f674-4a7d-b7ef-cea8a47d1f37.jpg',
      stats: { speed: '★★★☆☆', handling: '★★★☆☆', acceleration: '★★★★☆' }
    }
  ];

  const handleRent = (carId: number) => {
    setSelectedCar(carId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-green-900">
      {/* Header */}
      <header className="bg-slate-900/90 backdrop-blur-sm border-b border-green-500/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Icon name="Car" size={24} className="text-black" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">GTA V AUTO RENT</h1>
                <p className="text-xs text-green-400">Los Santos Rental Service</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-400 text-sm">Online: 247 игроков</p>
              <p className="text-white text-xs">Server: LS-RP #1</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🚗 АРЕНДА ТРАНСПОРТА
          </h2>
          <p className="text-xl text-gray-300 mb-2">
            Лучшие тачки Los Santos для твоих RP приключений
          </p>
          <div className="flex justify-center items-center space-x-4 text-green-400">
            <span>💰 Низкие цены</span>
            <span>⚡ Быстрая выдача</span>
            <span>🔧 Все авто исправны</span>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            🏁 ДОСТУПНЫЙ ТРАНСПОРТ
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <Card key={car.id} className="bg-slate-800/80 border-slate-700 hover:border-green-500/50 transition-all group">
                <CardHeader className="pb-3">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <Badge className="absolute top-2 left-2 bg-green-600 text-black font-bold">
                      {car.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{car.name}</h4>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span>Скорость:</span>
                      <span className="text-yellow-400">{car.stats.speed}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Управление:</span>
                      <span className="text-yellow-400">{car.stats.handling}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Разгон:</span>
                      <span className="text-yellow-400">{car.stats.acceleration}</span>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 p-3 rounded-lg">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-gray-300">Аренда/час:</span>
                      <span className="text-green-400 font-bold">${car.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-300">Залог:</span>
                      <span className="text-yellow-400 font-bold">${car.deposit}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleRent(car.id)}
                    className="w-full bg-green-600 hover:bg-green-500 text-black font-bold"
                  >
                    🔑 АРЕНДОВАТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Form */}
      {selectedCar && (
        <section className="py-8 bg-slate-900/50">
          <div className="max-w-2xl mx-auto px-4">
            <Card className="bg-slate-800 border-green-500">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  🚗 ФОРМА АРЕНДЫ ТРАНСПОРТА
                </CardTitle>
                <p className="text-center text-gray-300">
                  Выбран: {cars.find(car => car.id === selectedCar)?.name}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-white">Имя персонажа в игре</Label>
                  <Input 
                    placeholder="John_Smith"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Время аренды</Label>
                  <Select value={rentalTime} onValueChange={setRentalTime}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1h">1 час</SelectItem>
                      <SelectItem value="3h">3 часа</SelectItem>
                      <SelectItem value="6h">6 часов</SelectItem>
                      <SelectItem value="12h">12 часов</SelectItem>
                      <SelectItem value="24h">24 часа</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-lg">
                  <h5 className="text-white font-bold mb-2">💰 Стоимость:</h5>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span>Аренда:</span>
                      <span className="text-green-400">${cars.find(car => car.id === selectedCar)?.price}/час</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Залог:</span>
                      <span className="text-yellow-400">${cars.find(car => car.id === selectedCar)?.deposit}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-500 text-black font-bold text-lg py-3">
                  💳 ПОДТВЕРДИТЬ АРЕНДУ
                </Button>

                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCar(null)}
                  className="w-full border-slate-600 text-white hover:bg-slate-700"
                >
                  ❌ Отмена
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Rules */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-slate-800/80 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-center">📋 ПРАВИЛА АРЕНДЫ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h5 className="text-green-400 font-bold mb-2">✅ РАЗРЕШЕНО:</h5>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Использование для RP ситуаций</li>
                    <li>• Участие в легальных гонках</li>
                    <li>• Поездки по городу</li>
                    <li>• Перевозка пассажиров</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-red-400 font-bold mb-2">❌ ЗАПРЕЩЕНО:</h5>
                  <ul className="space-y-1 text-gray-300">
                    <li>• Участие в преступлениях</li>
                    <li>• Передача другим игрокам</li>
                    <li>• Умышленное повреждение</li>
                    <li>• Выезд за пределы карты</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-600 rounded-lg">
                <p className="text-yellow-200 text-sm">
                  ⚠️ <strong>ВНИМАНИЕ:</strong> При нарушении правил залог не возвращается. 
                  Транспорт автоматически возвращается в автопарк через указанное время.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-center py-8 border-t border-green-500/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-6 mb-4">
            <div className="text-center">
              <p className="text-green-400 font-bold">🎮 DISCORD</p>
              <p className="text-white text-sm">discord.gg/lsrp</p>
            </div>
            <div className="text-center">
              <p className="text-green-400 font-bold">🌐 САЙТ</p>
              <p className="text-white text-sm">ls-rp.ru</p>
            </div>
            <div className="text-center">
              <p className="text-green-400 font-bold">📧 ПОДДЕРЖКА</p>
              <p className="text-white text-sm">support@ls-rp.ru</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 LS-RP Server | Все права защищены | Made for GTA V Roleplay
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;