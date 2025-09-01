import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Eye, MessageCircle, Truck, CheckCircle, Crown } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  discountPercentage: number;
  daysLeft: number;
  isPremium?: boolean;
}

export function ProductCard({
  id,
  name,
  image,
  currentPrice,
  originalPrice,
  discountPercentage,
  daysLeft,
  isPremium = true
}: ProductCardProps) {

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'd like to order ${name} at KSh ${currentPrice}`;
    const whatsappUrl = `https://wa.me/254738276457?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Discount Badge */}
      <div className="absolute top-4 left-4 z-10">
        <Badge variant="destructive" className="text-sm font-bold px-3 py-1">
          {discountPercentage}% OFF
        </Badge>
      </div>

      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="secondary" className="bg-warning text-warning-foreground text-sm font-bold px-3 py-1 flex items-center gap-1">
            <Crown className="w-3 h-3" />
            Premium
          </Badge>
        </div>
      )}

      <CardContent className="p-6">
        {/* Product Image */}
        <div className="aspect-square mb-6 rounded-lg overflow-hidden bg-muted/30">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Pricing */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-primary">
                KSh {currentPrice.toLocaleString()}
              </span>
              <span className="text-lg text-muted-foreground line-through">
                KSh {originalPrice.toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-warning font-medium">
              ⏰ Limited offer ends in {daysLeft} days
            </p>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-success border-success/30 bg-success/10">
              <Truck className="w-3 h-3 mr-1" />
              Free Delivery Countrywide
            </Badge>
            <Badge variant="outline" className="text-success border-success/30 bg-success/10">
              <CheckCircle className="w-3 h-3 mr-1" />
              In Stock
            </Badge>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Link to={`/product/${id}`} className="w-full">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                size="lg"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </Link>
            
            <Button 
              onClick={handleWhatsAppOrder}
              variant="outline"
              className="w-full border-success text-success hover:bg-success hover:text-success-foreground font-semibold py-3"
              size="lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Order via WhatsApp
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}