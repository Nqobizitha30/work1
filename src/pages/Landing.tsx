import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ParticleBackground from "@/components/ParticleBackground";
import NotificationToast from "@/components/NotificationToast";
import { 
  DollarSign, 
  MousePointer, 
  Trophy, 
  CreditCard,
  Search,
  Play,
  Mail,
  Gamepad2
} from "lucide-react";

const Landing = () => {
  // This redirect URL can be easily customized
  const redirectUrl = "https://afflat3d2.com/trk/lnk/39AB3687-53A7-49BB-BD1E-526A59261A4A/?o=6365&c=918273&a=600801&k=BBE811C74697256B6DDB1CD66F7FD4DA&l=5077&s1=JubaInbox";

  const handleCtaClick = () => {
    window.open(redirectUrl, '_blank');
  };

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <NotificationToast />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section - Hook */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="hero-text text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                Turn Your Online Time
                <br />
                Into Real <span className="text-glow-secondary">CASH</span>
              </h1>
            </div>
            
            <div className="animate-fade-in-delay-1">
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                Join thousands earning substantial income by completing simple online activities. 
                No experience required - start earning today.
              </p>
            </div>

            <div className="animate-fade-in-delay-2">
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center space-x-2 bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-primary/20">
                  <Mail className="w-4 h-4 text-primary-glow" />
                  <span className="text-sm text-glow">Reading Emails</span>
                </div>
                <div className="flex items-center space-x-2 bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-secondary/20">
                  <Search className="w-4 h-4 text-secondary-glow" />
                  <span className="text-sm text-glow">Web Searching</span>
                </div>
                <div className="flex items-center space-x-2 bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-accent/20">
                  <Play className="w-4 h-4 text-accent-glow" />
                  <span className="text-sm text-glow">Watching Videos</span>
                </div>
                <div className="flex items-center space-x-2 bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-primary/20">
                  <Gamepad2 className="w-4 h-4 text-primary-glow" />
                  <span className="text-sm text-glow">Playing Games</span>
                </div>
              </div>
            </div>
            
            {/* Central CTA Button */}
            <div className="animate-fade-in-delay-3">
              <Button 
                variant="hero" 
                size="hero"
                onClick={handleCtaClick}
                className="relative group"
              >
                <span className="relative z-10">Start Earning Now</span>
                <DollarSign className="w-6 h-6 ml-2 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-glow via-accent-glow to-secondary-glow opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
              </Button>
            </div>
          </div>
        </section>

        {/* Three Steps Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-glow-primary px-4">
              Get Started in 3 Simple Steps
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="text-center animate-fade-in-delay-1">
                <Card className="card-glow p-8 h-full flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center mb-6 relative">
                    <span className="text-3xl font-bold text-white relative z-10">1</span>
                    <MousePointer className="w-8 h-8 text-white absolute top-2 right-2" />
                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-lg" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-glow">Sign Up</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Create your account in under 60 seconds. Completely secure and verified platform trusted by thousands.
                  </p>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="text-center animate-fade-in-delay-2">
                <Card className="card-glow p-8 h-full flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-secondary to-secondary-glow flex items-center justify-center mb-6 relative">
                    <span className="text-3xl font-bold text-white relative z-10">2</span>
                    <Trophy className="w-8 h-8 text-white absolute top-2 right-2" />
                    <div className="absolute inset-0 rounded-full bg-secondary/30 blur-lg" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-glow">Complete Activities</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Choose from surveys, videos, games, and more. Work when you want, as much as you want.
                  </p>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="text-center animate-fade-in-delay-3">
                <Card className="card-glow p-8 h-full flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent to-accent-glow flex items-center justify-center mb-6 relative">
                    <span className="text-3xl font-bold text-white relative z-10">3</span>
                    <CreditCard className="w-8 h-8 text-white absolute top-2 right-2" />
                    <div className="absolute inset-0 rounded-full bg-accent/30 blur-lg" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-glow">Get Paid</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Withdraw your earnings instantly to PayPal, bank account, or gift cards. No minimum thresholds.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Earnings Showcase */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="card-glow p-6 rounded-xl">
                <div className="text-3xl font-bold text-glow-primary mb-2">$43M+</div>
                <div className="text-sm text-muted-foreground">Total Paid Out</div>
              </div>
              <div className="card-glow p-6 rounded-xl">
                <div className="text-3xl font-bold text-glow-secondary mb-2">1.5M+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="card-glow p-6 rounded-xl">
                <div className="text-3xl font-bold text-glow-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Earning Opportunities</div>
              </div>
              <div className="card-glow p-6 rounded-xl">
                <div className="text-3xl font-bold text-glow-primary mb-2">$5</div>
                <div className="text-sm text-muted-foreground">Signup Bonus</div>
              </div>
            </div>
          </div>
        </section>

        {/* US Only Notice */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="notice-glow rounded-2xl p-8 text-center backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-glow-secondary px-4">
                🇺🇸 Exclusive to United States Residents
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This premium earning opportunity is currently available exclusively to residents of the United States. 
                Valid ID verification required for payout eligibility.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center border-t border-border/30">
          <p className="text-muted-foreground">
            © 2024 Work Online. Premium earning opportunities for verified members.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Landing;