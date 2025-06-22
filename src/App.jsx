import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Menu, X, ChevronRight, Users, Heart, Globe, BookOpen, Briefcase, Phone, Mail, MapPin, Calendar, ArrowRight, DollarSign, ShoppingBag, Shirt, Coffee, Star, CreditCard } from 'lucide-react'
import './App.css'

// Import images
import essaPortrait1 from './assets/essa-portrait-1.jpg'
import essaPortrait2 from './assets/essa-portrait-2.jpeg'
import essaPortrait3 from './assets/essa-portrait-3.jpg'
import gambiaFlag from './assets/gambia-flag.png'
import gambiaFlagWaving from './assets/gambia-flag-waving.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [donationAmount, setDonationAmount] = useState('')
  const [selectedAmount, setSelectedAmount] = useState(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleDonationAmount = (amount) => {
    setSelectedAmount(amount)
    setDonationAmount(amount.toString())
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-semibold">
        🇬🇲 SUPPORT ESSA BOKAR SEY FOR PRESIDENT 2026 - THE GAMBIA'S FUTURE! 🇬🇲
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={gambiaFlag} alt="Gambia Flag" className="h-8 w-12 object-cover rounded" />
              <div className="font-bold text-xl text-gray-900">ESSA BOKAR SEY</div>
              <Badge className="bg-red-100 text-red-800 border-red-200 hidden sm:block">2026</Badge>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">HOME</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">ABOUT</button>
              <button onClick={() => scrollToSection('vision')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">VISION</button>
              <button onClick={() => scrollToSection('policies')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">POLICIES</button>
              <button onClick={() => scrollToSection('shop')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">SHOP</button>
              <button onClick={() => scrollToSection('news')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">NEWS</button>
              <Button 
                onClick={() => scrollToSection('donate')} 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6"
              >
                CONTRIBUTE
              </Button>
              <Button 
                onClick={() => scrollToSection('volunteer')} 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6"
              >
                VOLUNTEER
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-red-600 w-full text-left font-medium">HOME</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-red-600 w-full text-left font-medium">ABOUT</button>
              <button onClick={() => scrollToSection('vision')} className="block px-3 py-2 text-gray-700 hover:text-red-600 w-full text-left font-medium">VISION</button>
              <button onClick={() => scrollToSection('policies')} className="block px-3 py-2 text-gray-700 hover:text-red-600 w-full text-left font-medium">POLICIES</button>
              <button onClick={() => scrollToSection('shop')} className="block px-3 py-2 text-gray-700 hover:text-red-600 w-full text-left font-medium">SHOP</button>
              <button onClick={() => scrollToSection('news')} className="block px-3 py-2 text-gray-700 hover:text-red-600 w-full text-left font-medium">NEWS</button>
              <div className="px-3 py-2 space-y-2">
                <Button onClick={() => scrollToSection('donate')} className="bg-red-600 hover:bg-red-700 text-white w-full font-bold">CONTRIBUTE</Button>
                <Button onClick={() => scrollToSection('volunteer')} className="bg-blue-600 hover:bg-blue-700 text-white w-full font-bold">VOLUNTEER</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-red-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-blue-600/5 to-green-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-red-600 text-white border-red-600 text-lg px-4 py-2">PRESIDENTIAL CANDIDATE 2026</Badge>
                <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
                  "THE GOLDEN AGE OF
                  <span className="text-red-600"> THE GAMBIA</span>
                  <span className="text-blue-600"> BEGINS</span>
                  <span className="text-green-600"> NOW!"</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-700 font-bold">
                  ESSA BOKAR SEY, Future President of The Gambia
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  Former Gambian diplomat with over 27 years of experience. Ready to lead The Gambia 
                  into a new era of prosperity, unity, and progress.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xl font-bold"
                  onClick={() => scrollToSection('donate')}
                >
                  CONTRIBUTE NOW
                  <DollarSign className="ml-2 h-6 w-6" />
                </Button>
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-xl font-bold"
                  onClick={() => scrollToSection('volunteer')}
                >
                  VOLUNTEER
                  <Users className="ml-2 h-6 w-6" />
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-red-600">27+</div>
                  <div className="text-sm text-gray-600 font-semibold">YEARS EXPERIENCE</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-600">2026</div>
                  <div className="text-sm text-gray-600 font-semibold">ELECTION YEAR</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600">1</div>
                  <div className="text-sm text-gray-600 font-semibold">UNITED GAMBIA</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={essaPortrait1} 
                  alt="Essa Bokar Sey" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-red-200/30 via-blue-200/30 to-green-200/30 rounded-2xl transform rotate-3"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Movement Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">JOIN OUR MOVEMENT!</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Input 
                  placeholder="Enter your Email" 
                  className="bg-white text-gray-900 border-0 mb-4 text-lg"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Input 
                  placeholder="Phone Number" 
                  className="bg-white text-gray-900 border-0 mb-4 text-lg"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold w-full text-lg py-3">
                  SIGN UP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">CONTRIBUTE TO THE CAMPAIGN</h2>
            <p className="text-xl text-gray-600 font-medium">
              Your support helps us build a better future for The Gambia
            </p>
          </div>

          <Card className="border-2 border-red-200 shadow-2xl">
            <CardHeader className="bg-red-600 text-white text-center">
              <CardTitle className="text-2xl font-bold">Make a Donation</CardTitle>
              <CardDescription className="text-red-100">
                Every contribution makes a difference in our campaign
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="text-lg font-semibold text-gray-900 mb-4 block">Select Amount (GMD)</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {[500, 1000, 2500, 5000].map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        className={`h-16 text-lg font-bold ${
                          selectedAmount === amount 
                            ? "bg-red-600 hover:bg-red-700 text-white" 
                            : "border-red-600 text-red-600 hover:bg-red-50"
                        }`}
                        onClick={() => handleDonationAmount(amount)}
                      >
                        D{amount}
                      </Button>
                    ))}
                  </div>
                  <Input
                    placeholder="Enter custom amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="text-lg p-4 border-2 border-red-200 focus:border-red-600"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" className="text-lg p-4" />
                  <Input placeholder="Email Address" className="text-lg p-4" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Phone Number" className="text-lg p-4" />
                  <Input placeholder="Occupation" className="text-lg p-4" />
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-4">
                  <CreditCard className="mr-2 h-6 w-6" />
                  DONATE NOW - D{donationAmount || '0'}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  [Payment processing details to be added - secure payment gateway integration]
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">VOLUNTEER WITH US</h2>
            <p className="text-xl text-gray-600 font-medium">
              Join our team and help make a difference in The Gambia
            </p>
          </div>

          <Card className="border-2 border-blue-200 shadow-2xl">
            <CardHeader className="bg-blue-600 text-white text-center">
              <CardTitle className="text-2xl font-bold">Become a Volunteer</CardTitle>
              <CardDescription className="text-blue-100">
                Help us spread the message and build our movement
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" className="text-lg p-4" />
                  <Input placeholder="Email Address" className="text-lg p-4" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Phone Number" className="text-lg p-4" />
                  <Input placeholder="Location/Region" className="text-lg p-4" />
                </div>

                <div>
                  <label className="text-lg font-semibold text-gray-900 mb-4 block">How would you like to help?</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Campaign Events",
                      "Social Media",
                      "Door-to-Door Canvassing",
                      "Phone Banking",
                      "Fundraising",
                      "Community Outreach"
                    ].map((activity) => (
                      <label key={activity} className="flex items-center space-x-3 p-3 border border-blue-200 rounded-lg hover:bg-blue-50 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">{activity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Textarea 
                  placeholder="Tell us about your skills and availability..."
                  className="text-lg p-4 border-2 border-blue-200 focus:border-blue-600"
                  rows={4}
                />

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-4">
                  <Users className="mr-2 h-6 w-6" />
                  JOIN THE TEAM
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Merchandise Shop Section */}
      <section id="shop" className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">OFFICIAL CAMPAIGN MERCHANDISE</h2>
            <p className="text-xl text-gray-600 font-medium">
              Show your support and help fund the campaign
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Campaign T-Shirt */}
            <Card className="border-2 border-green-200 hover:shadow-xl transition-shadow">
              <CardHeader className="p-0">
                <div className="bg-gradient-to-br from-red-500 to-red-600 h-48 rounded-t-lg flex items-center justify-center">
                  <Shirt className="h-20 w-20 text-white" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg font-bold mb-2">Campaign T-Shirt</CardTitle>
                <p className="text-gray-600 mb-4">"Essa Bokar Sey 2026" official campaign shirt</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">D250</span>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Campaign Cap */}
            <Card className="border-2 border-green-200 hover:shadow-xl transition-shadow">
              <CardHeader className="p-0">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-48 rounded-t-lg flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">EBS</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg font-bold mb-2">Campaign Cap</CardTitle>
                <p className="text-gray-600 mb-4">Official campaign cap with Gambian flag colors</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">D150</span>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Campaign Mug */}
            <Card className="border-2 border-green-200 hover:shadow-xl transition-shadow">
              <CardHeader className="p-0">
                <div className="bg-gradient-to-br from-green-500 to-green-600 h-48 rounded-t-lg flex items-center justify-center">
                  <Coffee className="h-20 w-20 text-white" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg font-bold mb-2">Campaign Mug</CardTitle>
                <p className="text-gray-600 mb-4">Start your day with hope for The Gambia</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">D100</span>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Campaign Poster */}
            <Card className="border-2 border-green-200 hover:shadow-xl transition-shadow">
              <CardHeader className="p-0">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 h-48 rounded-t-lg flex items-center justify-center">
                  <Star className="h-20 w-20 text-white" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg font-bold mb-2">Campaign Poster</CardTitle>
                <p className="text-gray-600 mb-4">Official campaign poster for your home or office</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">D50</span>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-xl font-bold px-8 py-4">
              VIEW ALL MERCHANDISE
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">ABOUT ESSA BOKAR SEY</h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              A distinguished diplomat and public servant dedicated to the progress and prosperity of The Gambia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Distinguished Career in Public Service</h3>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Ambassador Essa Bokar Sey brings over 27 years of distinguished service to The Gambia, 
                  having served as a seasoned diplomat during both the first and second republics.
                </p>
                <p>
                  His extensive experience includes serving as the former Deputy Chief Executive Officer 
                  of the OIC Banjul Secretariat and as Gambian Ambassador to both China and the United States.
                </p>
                <p>
                  [Additional biographical information to be added - including early life, education, 
                  family background, and key achievements in diplomatic service]
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-6 bg-red-50 rounded-xl border-2 border-red-200">
                  <Globe className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <div className="font-bold text-gray-900 text-lg">International Experience</div>
                  <div className="text-sm text-gray-600">Ambassador to China & USA</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <div className="font-bold text-gray-900 text-lg">OIC Leadership</div>
                  <div className="text-sm text-gray-600">Deputy CEO, Banjul Secretariat</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={essaPortrait2} 
                alt="Essa Bokar Sey - Professional" 
                className="w-full rounded-2xl shadow-2xl border-4 border-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">OUR VISION FOR THE GAMBIA</h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              [Vision statement to be added - A comprehensive vision for The Gambia's future]
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-red-200 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-16 w-16 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gray-900 font-bold">Unity & Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  [Details about plans for national unity and progress to be added]
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gray-900 font-bold">Education & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  [Details about education and development initiatives to be added]
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Heart className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gray-900 font-bold">Healthcare & Welfare</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  [Details about healthcare and social welfare plans to be added]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section id="policies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">POLICY PLATFORM</h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              [Introduction to policy platform to be added]
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center font-bold">
                  <div className="w-4 h-4 bg-red-600 rounded-full mr-4"></div>
                  Economic Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-lg">
                  [Economic development policies and initiatives to be added]
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• [Policy point 1 to be added]</li>
                  <li>• [Policy point 2 to be added]</li>
                  <li>• [Policy point 3 to be added]</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center font-bold">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                  Education Reform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-lg">
                  [Education reform policies and initiatives to be added]
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• [Policy point 1 to be added]</li>
                  <li>• [Policy point 2 to be added]</li>
                  <li>• [Policy point 3 to be added]</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center font-bold">
                  <div className="w-4 h-4 bg-green-600 rounded-full mr-4"></div>
                  Healthcare System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-lg">
                  [Healthcare system improvements and policies to be added]
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• [Policy point 1 to be added]</li>
                  <li>• [Policy point 2 to be added]</li>
                  <li>• [Policy point 3 to be added]</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center font-bold">
                  <div className="w-4 h-4 bg-yellow-600 rounded-full mr-4"></div>
                  Infrastructure & Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-lg">
                  [Infrastructure and technology development plans to be added]
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• [Policy point 1 to be added]</li>
                  <li>• [Policy point 2 to be added]</li>
                  <li>• [Policy point 3 to be added]</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">LATEST NEWS & UPDATES</h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              Stay informed about campaign developments and announcements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>[Date to be added]</span>
                </div>
                <CardTitle className="text-xl text-gray-900 font-bold">
                  [News headline to be added]
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  [News content summary to be added]
                </p>
                <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 font-semibold">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>[Date to be added]</span>
                </div>
                <CardTitle className="text-xl text-gray-900 font-bold">
                  [News headline to be added]
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  [News content summary to be added]
                </p>
                <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 font-semibold">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>[Date to be added]</span>
                </div>
                <CardTitle className="text-xl text-gray-900 font-bold">
                  [News headline to be added]
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  [News content summary to be added]
                </p>
                <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 font-semibold">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-red-50 via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">GET INVOLVED</h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              Join our campaign and help build a better future for The Gambia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-red-600" />
                    <span className="text-gray-600 text-lg">[Phone number to be added]</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-600 text-lg">[Email address to be added]</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-green-600" />
                    <span className="text-gray-600 text-lg">[Campaign office address to be added]</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Ways to Support</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    onClick={() => scrollToSection('donate')}
                    className="bg-red-600 hover:bg-red-700 text-white h-auto py-6 flex-col text-lg font-bold"
                  >
                    <DollarSign className="h-8 w-8 mb-2" />
                    CONTRIBUTE
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('volunteer')}
                    className="bg-blue-600 hover:bg-blue-700 text-white h-auto py-6 flex-col text-lg font-bold"
                  >
                    <Users className="h-8 w-8 mb-2" />
                    VOLUNTEER
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={essaPortrait3} 
                alt="Essa Bokar Sey - Campaign" 
                className="w-full rounded-2xl shadow-2xl border-4 border-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-2xl font-bold">Ready to serve The Gambia</p>
                <p className="text-lg opacity-90">Together, we can build a brighter future</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={gambiaFlag} alt="Gambia Flag" className="h-8 w-12 object-cover rounded" />
                <div className="font-bold text-xl">ESSA BOKAR SEY</div>
              </div>
              <p className="text-gray-400">
                Presidential Candidate 2026 - Building a better future for The Gambia
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About</button>
                <button onClick={() => scrollToSection('vision')} className="block text-gray-400 hover:text-white transition-colors">Vision</button>
                <button onClick={() => scrollToSection('policies')} className="block text-gray-400 hover:text-white transition-colors">Policies</button>
                <button onClick={() => scrollToSection('news')} className="block text-gray-400 hover:text-white transition-colors">News</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Get Involved</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('donate')} className="block text-gray-400 hover:text-white transition-colors">Contribute</button>
                <button onClick={() => scrollToSection('volunteer')} className="block text-gray-400 hover:text-white transition-colors">Volunteer</button>
                <button onClick={() => scrollToSection('shop')} className="block text-gray-400 hover:text-white transition-colors">Shop</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">Contact</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Stay Connected</h4>
              <p className="text-gray-400 mb-4">
                [Social media links and newsletter signup to be added]
              </p>
              <div className="text-sm text-gray-500">
                © 2024 Essa Bokar Sey Campaign. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

