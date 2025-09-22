import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/cd7cd829-418d-458a-8cce-79e1cbe7340b.png" 
                alt="dB Фото"
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`hover:text-primary transition-colors ${activeSection === 'home' ? 'text-primary font-medium' : 'text-gray-600'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`hover:text-primary transition-colors ${activeSection === 'pricing' ? 'text-primary font-medium' : 'text-gray-600'}`}
              >
                Прайс
              </button>
              <button 
                onClick={() => scrollToSection('delivery')}
                className={`hover:text-primary transition-colors ${activeSection === 'delivery' ? 'text-primary font-medium' : 'text-gray-600'}`}
              >
                Доставка
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className={`hover:text-primary transition-colors ${activeSection === 'contacts' ? 'text-primary font-medium' : 'text-gray-600'}`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 text-white drop-shadow-lg">
                Студия фотопечати
                <span className="block text-white">dB Фото</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow">
                Печатаем ваши воспоминания с профессиональным качеством. 
                Фотографии, альбомы, наклейки и открытки — всё для сохранения важных моментов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-lg"
                  onClick={() => scrollToSection('pricing')}
                >
                  <Icon name="Camera" className="mr-2" size={20} />
                  Посмотреть цены
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold shadow-lg"
                  onClick={() => scrollToSection('contacts')}
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/d5201cbb-b484-480b-a081-5c47e8932976.jpg"
                alt="Студия фотопечати dB Фото"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold font-montserrat mb-6 text-gray-900">
                Наши услуги
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Превращаем ваши цифровые воспоминания в осязаемые произведения искусства. 
                Используем только качественные материалы и современное оборудование.
              </p>
            </div>
            <div>
              <img 
                src="/img/aed3c9c3-0d2c-4287-b394-60a173475f11.jpg"
                alt="Образцы нашей продукции"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Image" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-montserrat">Печать фото</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Профессиональная печать фотографий любых размеров на качественной фотобумаге
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Book" size={48} className="mx-auto text-secondary mb-4" />
                <CardTitle className="font-montserrat">Фотоальбомы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Красивые фотоальбомы с персональным дизайном для сохранения ваших воспоминаний
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Sticker" size={48} className="mx-auto text-accent mb-4" />
                <CardTitle className="font-montserrat">Наклейки</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Яркие наклейки с вашими изображениями для декора и персонализации
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Mail" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-montserrat">Открытки</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Персональные открытки для особых случаев и поздравлений
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gradient-to-r from-secondary/20 via-primary/20 to-accent/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-montserrat text-center mb-12 text-gray-900">
            Прайс-лист
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat text-xl">Печать фотографий</CardTitle>
                <CardDescription>Стандартные размеры</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>10x15 см</span>
                  <Badge variant="secondary">25 ₽</Badge>
                </div>
                <div className="flex justify-between">
                  <span>13x18 см</span>
                  <Badge variant="secondary">35 ₽</Badge>
                </div>
                <div className="flex justify-between">
                  <span>15x21 см</span>
                  <Badge variant="secondary">45 ₽</Badge>
                </div>
                <div className="flex justify-between">
                  <span>20x30 см</span>
                  <Badge variant="secondary">85 ₽</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat text-xl">Фотоальбомы</CardTitle>
                <CardDescription>Различные форматы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>20 страниц</span>
                  <Badge variant="secondary">1200 ₽</Badge>
                </div>
                <div className="flex justify-between">
                  <span>40 страниц</span>
                  <Badge variant="secondary">2200 ₽</Badge>
                </div>
                <div className="flex justify-between">
                  <span>60 страниц</span>
                  <Badge variant="secondary">3000 ₽</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Премиум обложка</span>
                  <Badge variant="secondary">+500 ₽</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat text-xl">Наклейки и открытки</CardTitle>
                <CardDescription>Персональные изделия</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Наклейки (лист А4)</span>
                  <Badge variant="secondary">150 ₽</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Открытка одинарная</span>
                  <Badge variant="secondary">80 ₽</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Открытка двойная</span>
                  <Badge variant="secondary">120 ₽</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Магнит на холодильник</span>
                  <Badge variant="secondary">200 ₽</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-montserrat text-center mb-12 text-gray-900">
            Доставка и получение
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Clock" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-montserrat">Быстро</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Печать фотографий готова в течение 1-2 часов. Альбомы и сложные заказы — 1-3 дня.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="MapPin" size={48} className="mx-auto text-secondary mb-4" />
                <CardTitle className="font-montserrat">Самовывоз</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Забирайте заказы в нашей студии по адресу: ул. Фотографов, 25. Работаем ежедневно с 9:00 до 21:00.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Truck" size={48} className="mx-auto text-accent mb-4" />
                <CardTitle className="font-montserrat">Доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Доставка по городу — 200 ₽. При заказе от 1000 ₽ доставка бесплатная. Курьер приедет в удобное время.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-gradient-to-br from-accent/30 via-primary/30 to-secondary/30 relative">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold font-montserrat text-center mb-12 text-white drop-shadow-lg">
            Свяжитесь с нами
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold font-montserrat mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-primary" size={20} />
                  <span className="text-lg">info@dbfoto.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-primary" size={20} />
                  <span className="text-lg">ул. Фотографов, 25, г. Москва</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-primary" size={20} />
                  <span className="text-lg">Ежедневно: 9:00 - 21:00</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat">Оставить заявку</CardTitle>
                <CardDescription>
                  Опишите ваш заказ, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" />
                <Textarea placeholder="Опишите ваш заказ..." rows={4} />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" className="mr-2" size={16} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/cd7cd829-418d-458a-8cce-79e1cbe7340b.png" 
              alt="dB Фото"
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
          <p className="text-gray-400">
            © 2024 dB Фото. Студия профессиональной фотопечати.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;