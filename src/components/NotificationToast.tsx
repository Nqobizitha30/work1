import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import profile3 from '../assets/profile3.jpg';
import profile4 from '../assets/profile4.jpg';

const notifications = [
  { text: "@sarah_jones23 just completed her daily tasks", profile: profile1 },
  { text: "@mike_earnings just finished watching videos", profile: profile2 },
  { text: "@jessica_cash just completed 3 surveys", profile: profile3 },
  { text: "@david_rewards just finished reading emails", profile: profile4 },
  { text: "@emma_online just completed her activities", profile: profile1 },
  { text: "@alex_earner just finished playing games", profile: profile2 },
  { text: "@lisa_work just completed taking surveys", profile: profile3 },
  { text: "@john_remote just finished his work session", profile: profile4 }
];

const NotificationToast = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cycle = () => {
      // Show notification
      setIsVisible(true);
      
      // Hide after 7 seconds (increased from 5)
      setTimeout(() => {
        setIsVisible(false);
      }, 7000);
      
      // Wait 10 seconds (3 seconds hidden) then show next
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
      }, 10000);
    };

    // Start first cycle after 3 seconds
    const initialTimeout = setTimeout(cycle, 3000);
    
    // Continue cycling every 17 seconds (7s visible + 10s total cycle)
    const interval = setInterval(cycle, 17000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50">
      <div
        className={`notification rounded-xl p-3 md:p-4 max-w-xs md:max-w-sm transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        }`}
      >
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-4 h-4 text-secondary-glow flex-shrink-0" />
          <div className="flex-shrink-0">
            <img 
              src={notifications[currentIndex].profile} 
              alt="Profile" 
              className="w-8 h-8 rounded-full object-cover border-2 border-primary/30" 
            />
          </div>
          <div className="text-sm text-foreground min-w-0 flex-1">
            <span className="font-medium text-primary-glow">
              {notifications[currentIndex].text.split(' ')[0]}
            </span>
            <span className="text-muted-foreground">
              {notifications[currentIndex].text.substring(notifications[currentIndex].text.indexOf(' '))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationToast;