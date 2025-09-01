import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Terms of Service</CardTitle>
            <p className="text-center text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Products and Services</h2>
              <p className="text-muted-foreground">
                Simba Cement provides high-quality cement products and construction materials. 
                All product specifications, prices, and availability are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Orders and Payment</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>All orders are subject to acceptance and product availability</li>
                <li>Prices are quoted in Kenyan Shillings (KSh) and exclude delivery charges unless stated</li>
                <li>Payment terms will be communicated at the time of order confirmation</li>
                <li>We reserve the right to refuse or cancel orders at our discretion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Delivery</h2>
              <p className="text-muted-foreground">
                Delivery terms, timeframes, and charges will be communicated during order processing. 
                Risk of loss and title pass to the buyer upon delivery.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Simba Cement shall not be liable for any indirect, incidental, special, or consequential 
                damages arising from the use of our products or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
              <p className="text-muted-foreground">
                These terms shall be governed by and construed in accordance with the laws of Kenya.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, contact us at:
              </p>
              <div className="mt-2 text-muted-foreground">
                <p>Phone: +254 738 276 457</p>
                <p>WhatsApp: +254 738 276 457</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
