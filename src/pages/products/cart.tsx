import React, { useState } from 'react';
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from "@/contexts/CartContext";
import { useToast } from '@/hooks/use-toast';
import { Trash2, ChevronLeft } from 'lucide-react';
import ProductLayout from '@/components/layouts/ProductLayout';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { QuoteFormData, ApiResponse } from '@/types/database';

const CartPage = () => {
  const { language } = useLanguage();
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmitQuote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const quoteData: QuoteFormData = {
      fullName: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || undefined,
      company: formData.get('company') as string,
      message: formData.get('message') as string || undefined,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cartItems: cartItems.map((item: any) => ({
        id: item.id,
        name: item.name,
        code: item.code || '',
        quantity: item.quantity,
        image: item.image,
        specifications: item.specifications
      })),
      language: language as 'en' | 'hu' | 'de'
    };

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      });

      const result: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit quote request');
      }

      // Success
      toast({
        title: language === 'en' ? 'Quote Request Submitted' : 'Árajánlatkérés elküldve',
        description: language === 'en' 
          ? 'Thank you for your quote request. We will contact you shortly.'
          : 'Köszönjük árajánlatkérését. Hamarosan felvesszük Önnel a kapcsolatot.',
      });

      setIsDialogOpen(true);
      clearCart(); // Clear cart after successful submission
      
    } catch (error) {
      console.error('Quote submission error:', error);
      toast({
        title: language === 'en' ? 'Submission Failed' : 'Küldés sikertelen',
        description: language === 'en' 
          ? 'There was an error submitting your quote request. Please try again.'
          : 'Hiba történt az árajánlatkérés küldésekor. Kérjük próbálja újra.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <ProductLayout>
      <div className="mb-8">
        <Link 
          href="/products" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          {language === 'en' ? 'Continue Shopping' : 'Vásárlás folytatása'}
        </Link>
      </div>
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-800">
          {language === 'en' ? 'Quote Request' : 'Árajánlatkérés'}
        </h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cartItems.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500 mb-4">
                {language === 'en' ? 'Your quote request is empty' : 'Az árajánlatkérés üres'}
              </p>
              <Button asChild>
                <Link href="/products">
                  {language === 'en' ? 'Browse Products' : 'Termékek böngészése'}
                </Link>
              </Button>
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {language === 'en' ? 'Product' : 'Termék'}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {language === 'en' ? 'Quantity' : 'Mennyiség'}
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {language === 'en' ? 'Actions' : 'Műveletek'}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {cartItems.map((item: any) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-16 w-16 bg-gray-100 rounded">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="h-16 w-16 object-contain p-2"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {typeof item.name === 'string'
                                ? item.name
                                : item.name?.[language] || item.name?.en || 'Unnamed'}
                            </div>
                            <div className="text-sm text-blue-600">{item.code}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center border border-gray-300 rounded w-32">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                            className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="flex-1 text-center py-1">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                            className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button 
                          onClick={() => removeFromCart(item.id)} 
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        
        {/* Quote Request Form */}
        <div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">
              {language === 'en' ? 'Your Information' : 'Adatok'}
            </h2>
            
            <form onSubmit={handleSubmitQuote}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Full Name' : 'Teljes név'} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Email' : 'E-mail'} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Phone' : 'Telefonszám'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Company' : 'Cég'} *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Additional Information' : 'További információk'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={cartItems.length === 0 || isSubmitting}
                  >
                    {isSubmitting 
                      ? (language === 'en' ? 'Submitting...' : 'Küldés...')
                      : (language === 'en' ? 'Request Quote' : 'Árajánlat kérése')
                    }
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Success Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {language === 'en' ? 'Quote Request Submitted' : 'Árajánlatkérés elküldve'}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="mb-6">
              {language === 'en' 
                ? 'Thank you for your quote request. Our team will contact you shortly with pricing and availability information.' 
                : 'Köszönjük árajánlatkérését. Csapatunk hamarosan felveszi Önnel a kapcsolatot az árakkal és rendelkezésre állással kapcsolatos információkkal.'}
            </p>
            <div className="flex justify-end">
              <Button asChild>
                <Link href="/products">
                  {language === 'en' ? 'Back to Products' : 'Vissza a termékekhez'}
                </Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </ProductLayout>
  );
};

export default CartPage;
