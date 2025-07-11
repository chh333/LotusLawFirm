import { Languages } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as 'en' | 'te')}>
      <SelectTrigger className="w-32 bg-background/10 border-primary/20 text-foreground hover:bg-background/20">
        <div className="flex items-center space-x-2">
          <Languages className="h-4 w-4" />
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-card border-border">
        <SelectItem value="en" className="text-card-foreground hover:bg-accent hover:text-accent-foreground">
          English
        </SelectItem>
        <SelectItem value="te" className="text-card-foreground hover:bg-accent hover:text-accent-foreground">
          తెలుగు
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;