import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();

  const cars = [
    {
      id: 1,
      name: 'BMW 3 Series',
      category: 'Бизнес',
      price: '3500',
      image: '/img/c01771e2-520f-4782-847e-505961e63e32.jpg',
      features: ['Автомат', 'Кондиционер', 'GPS']
    },
    {
      id: 2,
      name: 'Range Rover Evoque',
      category: 'SUV',
      price: '5200',
      image: '/img/683942ab-8c0d-4af5-b9b9-6ad78af5aff6.jpg',
      features: ['Полный привод', 'Кожа', 'Премиум']
    },
    {
      id: 3,
      name: 'Ferrari 488',
      category: 'Спорт',
      price: '12000',
      image: '/img/4461fb82-291c-4bc0-96e6-dbc0803a9862.jpg',
      features: ['V8', 'Спортивный', 'Эксклюзив']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={32} className="text-primary" />
              <h1 className="text-2xl font-inter font-bold text-slate-900">AutoRent</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="font-open-sans text-slate-700 hover:text-primary transition-colors">Главная</a>
              <a href="#cars" className="font-open-sans text-slate-700 hover:text-primary transition-colors">Автопарк</a>
              <a href="#booking" className="font-open-sans text-slate-700 hover:text-primary transition-colors">Бронирование</a>
              <a href="#about" className="font-open-sans text-slate-700 hover:text-primary transition-colors">О нас</a>
              <a href="#contact" className="font-open-sans text-slate-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="font-open-sans">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-inter font-bold text-slate-900 mb-6">
              Аренда автомобилей
              <span className="block text-primary">премиум класса</span>
            </h2>
            <p className="text-xl font-open-sans text-slate-600 max-w-2xl mx-auto">
              Широкий выбор автомобилей для любых целей. Быстрое оформление, прозрачные цены, круглосуточная поддержка.
            </p>
          </div>

          {/* Quick Search */}
          <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label className="font-open-sans font-medium">Город получения</Label>
                  <div className="relative">
                    <Icon name="MapPin" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <Input 
                      placeholder="Москва" 
                      className="pl-10 font-open-sans border-slate-200 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-open-sans font-medium">Дата получения</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-open-sans border-slate-200 focus:border-primary"
                      >
                        <Icon name="Calendar" size={18} className="mr-2 text-slate-400" />
                        {pickupDate ? format(pickupDate, 'dd MMM yyyy', { locale: ru }) : 'Выберите дату'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={pickupDate}
                        onSelect={setPickupDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="font-open-sans font-medium">Дата возврата</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-open-sans border-slate-200 focus:border-primary"
                      >
                        <Icon name="Calendar" size={18} className="mr-2 text-slate-400" />
                        {returnDate ? format(returnDate, 'dd MMM yyyy', { locale: ru }) : 'Выберите дату'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <Button size="lg" className="w-full mt-6 text-lg font-open-sans font-medium">
                <Icon name="Search" size={20} className="mr-2" />
                Найти автомобиль
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Cars */}
      <section id="cars" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-inter font-bold text-slate-900 mb-4">
              Популярные автомобили
            </h3>
            <p className="text-lg font-open-sans text-slate-600">
              Выберите идеальный автомобиль для ваших потребностей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <Card key={car.id} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white font-open-sans">
                    {car.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-inter font-bold text-slate-900 mb-2">{car.name}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="font-open-sans text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-inter font-bold text-primary">₽{car.price}</span>
                      <span className="text-slate-500 font-open-sans">/день</span>
                    </div>
                    <Button className="font-open-sans">
                      Забронировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-inter font-bold text-slate-900 mb-4">
              Наши преимущества
            </h3>
            <p className="text-lg font-open-sans text-slate-600">
              Почему выбирают именно нас
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Clock',
                title: '24/7 Поддержка',
                description: 'Круглосуточная техническая поддержка и помощь на дороге'
              },
              {
                icon: 'Shield',
                title: 'Полная страховка',
                description: 'Все автомобили застрахованы по программе КАСКО'
              },
              {
                icon: 'MapPin',
                title: 'Удобные локации',
                description: 'Офисы в центре города и в аэропорту для вашего удобства'
              },
              {
                icon: 'Star',
                title: 'Премиум сервис',
                description: 'Высокое качество обслуживания и чистые автомобили'
              }
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-inter font-bold text-slate-900 mb-2">{service.title}</h4>
                  <p className="font-open-sans text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-inter font-bold mb-4">
            Готовы к поездке?
          </h3>
          <p className="text-xl font-open-sans mb-8 opacity-90">
            Забронируйте автомобиль прямо сейчас и получите скидку 10% на первую аренду
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary font-open-sans font-medium">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary font-open-sans font-medium">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" size={24} className="text-primary" />
                <h4 className="text-xl font-inter font-bold">AutoRent</h4>
              </div>
              <p className="font-open-sans text-slate-400">
                Лидер в сфере аренды автомобилей премиум класса в России
              </p>
            </div>
            
            <div>
              <h5 className="font-inter font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 font-open-sans text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Аренда автомобилей</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Трансферы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Долгосрочная аренда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Корпоративным клиентам</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-inter font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 font-open-sans text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-inter font-semibold mb-4">Контакты</h5>
              <div className="space-y-3 font-open-sans text-slate-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@autorent.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Тверская, 1</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center font-open-sans text-slate-400">
            <p>&copy; 2024 AutoRent. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;