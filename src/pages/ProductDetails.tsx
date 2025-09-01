import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowLeft, ShoppingCart, MessageCircle, Phone, Truck, Shield, CheckCircle } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import simbaCement32r from "@/assets/simba-cement-32.5r.png";
import simbaPower42n from "@/assets/simba-power-42.5n.png";
import pavingBlocks from "@/assets/paving-blocks-60mm.jpg";

// Mock data - in a real app, you'd fetch this based on the ID

const products = [
    {
        id: 1,
        name: "Simba Cement 32.5R",
        image: simbaCement32r,
        currentPrice: 550,
        originalPrice: 679,
        description: "Simba Cement 32.5R is a general-purpose cement with a lower early strength, ideal for plastering, mortar, and non-structural applications. It provides a smooth finish and excellent workability.",
        features: ["Elegant appearance", "Superior durability", "Heat reflection capabilities", "Easy installation"],
        rating: 4.8,
        reviews: 125
    },
    {
        id: 2,
        name: "Simba Power 42.5N",
        image: simbaPower42n,
        currentPrice: 680,
        originalPrice: 819,
        description: "Simba Power 42.5N is a high-strength cement designed for structural applications, including reinforced concrete, precast elements, and high-rise buildings. It offers rapid strength development and long-term durability.",
        features: ["High early strength", "Enhanced durability", "Suitable for major projects", "Consistent quality"],
        rating: 4.9,
        reviews: 230
    },
    {
        id: 3,
        name: "Paving Blocks (60mm)",
        image: pavingBlocks,
        currentPrice: 650,
        originalPrice: 774,
        description: "Our 60mm paving blocks are perfect for driveways, walkways, and patios. They are manufactured for high durability and can withstand heavy traffic while providing an aesthetic appeal to any outdoor space.",
        features: ["High load-bearing capacity", "Weather-resistant", "Variety of colors and shapes", "Low maintenance"],
        rating: 4.7,
        reviews: 88
    }
];

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id || ''));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Product Image Gallery */}
                    <div className="space-y-4">
                        <Card className="overflow-hidden shadow-lg">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </Card>
                        <div className="grid grid-cols-4 gap-4">
                            {[...Array(4)].map((_, i) => (
                                <Card key={i} className={`overflow-hidden border-2 ${i === 0 ? 'border-primary' : 'border-transparent'} hover:border-primary transition-all cursor-pointer`}>
                                    <img src={product.image} alt={`${product.name} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Product Information */}
                    <div className="space-y-6">
                        <div>
                            <Badge variant="destructive" className="mb-2">SALE</Badge>
                            <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-muted-foreground'}`} fill="currentColor" />
                                    ))}
                                </div>
                                <span className="text-muted-foreground">({product.reviews} reviews)</span>
                            </div>
                        </div>

                        <p className="text-lg text-muted-foreground">{product.description}</p>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">Features:</h2>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                {product.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Pricing:</h2>
                            <Card className="bg-muted/50 border-primary/50 border-l-4">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg">Standard Price</span>
                                        <span className="text-2xl font-bold">KSh {product.currentPrice} / unit</span>
                                    </div>
                                    <div className="bg-primary/10 text-primary p-3 rounded-lg text-center">
                                        <p><span className="font-bold">Special Discount!</span> Order today and get 5% off on orders above 50 units.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            <Button size="lg" variant="outline" className="flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" />
                                Call to Order
                            </Button>
                            <Button size="lg" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white">
                                <MessageCircle className="w-5 h-5" />
                                Order via WhatsApp
                            </Button>
                        </div>

                        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
                            <div className="flex items-center gap-2">
                                <Truck className="w-5 h-5 text-primary" />
                                <span>Free & Fast Delivery</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-primary" />
                                <span>Quality Guaranteed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span>In Stock</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

