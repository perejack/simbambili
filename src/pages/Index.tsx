import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FeatureCard } from "@/components/FeatureCard";
import { ContactSection } from "@/components/ContactSection";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Award, 
  Truck, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle
} from "lucide-react";

// Import product images

import constructionProject1 from "@/assets/construction-project-1.jpg";
import constructionProject2 from "@/assets/construction-project-2.jpg";
import constructionProject3 from "@/assets/construction-project-3.jpg";
import simbaCement32r from "@/assets/simba-cement-32.5r.png";
import simbaPower42n from "@/assets/simba-power-42.5n.png";
import pavingBlocks from "@/assets/paving-blocks-60mm.jpg";
import factoryImage from "@/assets/simba-cement-factory.jpg";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Simba Cement 32.5R",
      image: simbaCement32r,
      currentPrice: 550,
      originalPrice: 679,
      discountPercentage: 19,
      daysLeft: 14,
      isPremium: true
    },
    {
      id: 2,
      name: "Simba Power 42.5N", 
      image: simbaPower42n,
      currentPrice: 680,
      originalPrice: 819,
      discountPercentage: 17,
      daysLeft: 21,
      isPremium: true
    },
    {
      id: 3,
      name: "Paving Blocks (60mm)",
      image: pavingBlocks,
      currentPrice: 650,
      originalPrice: 774,
      discountPercentage: 16,
      daysLeft: 14,
      isPremium: true
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Superior Quality",
      description: "Premium grade cement meeting international standards for all construction needs"
    },
    {
      icon: Award,
      title: "Trusted Brand",
      description: "Over decades of excellence in the construction industry with proven reliability"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Complimentary nationwide delivery to your construction site"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Professional technical support and construction guidance from our experts"
    }
  ];

  const testimonials = [
    {
      name: "John Kamau",
      role: "Construction Manager",
      company: "BuildRight Ltd",
      content: "Simba Cement has been our go-to choice for over 5 years. The quality is consistently excellent and their delivery is always on time.",
      rating: 5
    },
    {
      name: "Mary Wanjiku",
      role: "Architect",
      company: "Design Pro",
      content: "I recommend Simba Cement to all my clients. The strength and durability of their products ensure long-lasting construction.",
      rating: 5
    },
    {
      name: "Peter Ochieng",
      role: "Contractor",
      company: "Elite Builders",
      content: "The technical support from Simba Cement team is outstanding. They help us achieve the best results in every project.",
      rating: 5
    }
  ];

  const projects = [
    {
      image: constructionProject1,
      title: "Modern Office Complex",
      description: "15-story commercial building using Simba Power 42.5N"
    },
    {
      image: constructionProject2,
      title: "Residential Development",
      description: "200-unit housing project with Simba Cement 32.5R"
    },
    {
      image: constructionProject3,
      title: "Infrastructure Project",
      description: "Highway construction with premium paving blocks"
    }
  ];

  const handleWhatsAppContact = () => {
    const message = "Hi! I'm interested in Simba Cement products. Please provide more information.";
    const whatsappUrl = `https://wa.me/254738276457?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('${factoryImage}')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-accent text-accent-foreground text-lg px-6 py-2">
            Premium Construction Materials
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Build with Confidence,
            <br />
            <span className="text-accent">Build with Simba</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Kenya's leading manufacturer of premium cement and construction materials. 
            Trusted by professionals for over 30 years.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
              <a href="#products">
                Shop Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-white text-lg px-8 py-4"
              onClick={handleWhatsAppContact}
            >
              Contact Us
              <MessageCircle className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              Our Products
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Premium Construction Materials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of high-quality cement and construction materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                currentPrice={product.currentPrice}
                originalPrice={product.originalPrice}
                discountPercentage={product.discountPercentage}
                daysLeft={product.daysLeft}
                isPremium={product.isPremium}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                About Simba Cement
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Kenya's Future Since 1992
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Simba Cement is Kenya's premier manufacturer of high-quality construction materials. 
                For over three decades, we have been at the forefront of Kenya's construction industry, 
                providing superior cement products that have built the nation's most iconic structures.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has made us the 
                preferred choice for contractors, engineers, and builders across East Africa.
              </p>
              
              <div className="flex items-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Learn More About Us
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted/30">
                <img 
                  src={factoryImage}
                  alt="Simba Cement Factory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Simba Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Simba Cement Advantage
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover why thousands of builders trust Simba Cement for their projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              Our Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built with Simba Cement
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how our premium materials have contributed to Kenya's most impressive structures
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from the professionals who trust Simba Cement
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              Technical Specifications
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Detailed Product Information
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical specifications and quality standards for our cement products
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Simba Cement 32.5R</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Compressive Strength (28 days)</span>
                    <span className="font-semibold text-foreground">≥ 32.5 MPa</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Setting Time (Initial)</span>
                    <span className="font-semibold text-foreground">≥ 60 minutes</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Fineness</span>
                    <span className="font-semibold text-foreground">≤ 10% residue</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Soundness</span>
                    <span className="font-semibold text-foreground">≤ 10 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Standards Compliance</span>
                    <span className="font-semibold text-foreground">KS EAS 18-1:2017</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Simba Power 42.5N</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Compressive Strength (28 days)</span>
                    <span className="font-semibold text-foreground">≥ 42.5 MPa</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Setting Time (Initial)</span>
                    <span className="font-semibold text-foreground">≥ 60 minutes</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Fineness</span>
                    <span className="font-semibold text-foreground">≤ 10% residue</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Soundness</span>
                    <span className="font-semibold text-foreground">≤ 10 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Standards Compliance</span>
                    <span className="font-semibold text-foreground">KS EAS 18-1:2017</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold">Simba Cement</span>
              </div>
              <p className="text-background/80 mb-4">
                Kenya's leading manufacturer of premium cement and construction materials since 1992.
              </p>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 text-background/60 hover:text-accent cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-background/60 hover:text-accent cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-background/60 hover:text-accent cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-background/60 hover:text-accent cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-background/80">
                <li>Simba Cement 32.5R</li>
                <li>Simba Power 42.5N</li>
                <li>Paving Blocks</li>
                <li>Construction Materials</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-accent transition-colors">Products</a></li>
                <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-background/80">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+254 738 276 457</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@simbacements.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 Simba Cement. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/60 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-background/80 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-background/80 transition-colors">Terms of Service</Link>
              <span>Quality Certifications</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
