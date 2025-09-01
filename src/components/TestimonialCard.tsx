import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export function TestimonialCard({ 
  name, 
  role, 
  company, 
  content, 
  rating,
  image 
}: TestimonialCardProps) {
  return (
    <Card className="h-full bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'text-warning fill-current' : 'text-muted-foreground'}`} 
            />
          ))}
        </div>
        
        <blockquote className="text-muted-foreground mb-6 italic">
          "{content}"
        </blockquote>
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            {image ? (
              <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-primary font-semibold text-lg">{name.charAt(0)}</span>
            )}
          </div>
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}