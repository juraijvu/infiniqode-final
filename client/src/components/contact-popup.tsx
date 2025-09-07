import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Send, Zap } from "lucide-react";

interface ContactPopupProps {
  trigger: React.ReactNode;
  defaultService?: string;
  title?: string;
  description?: string;
}

const serviceOptions = [
  "Web Development",
  "Digital Marketing", 
  "SaaS Solutions",
  "Brand Strategy",
  "SEO & Analytics",
  "Custom Consultation"
];

const budgetOptions = [
  "$5K - $15K",
  "$15K - $30K", 
  "$30K - $50K",
  "$50K - $100K",
  "$100K+"
];

export function ContactPopup({ trigger, defaultService, title, description }: ContactPopupProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema.extend({
      firstName: insertContactInquirySchema.shape.firstName.min(2, "First name must be at least 2 characters"),
      lastName: insertContactInquirySchema.shape.lastName.min(2, "Last name must be at least 2 characters"),
      email: insertContactInquirySchema.shape.email.email("Please enter a valid email address"),
      message: insertContactInquirySchema.shape.message.min(10, "Please provide more details about your project")
    })),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      service: defaultService || "",
      budget: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: (data: InsertContactInquiry) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
      form.reset();
      setOpen(false);
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    submitMutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="glass-card border-border max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-bold gradient-text flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            {title || "Let's Build Something Amazing Together"}
          </DialogTitle>
          {description && (
            <p className="text-muted-foreground text-base leading-relaxed">
              {description}
            </p>
          )}
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">First Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John" 
                        className="glass-input"
                        data-testid="input-first-name"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">Last Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Doe" 
                        className="glass-input"
                        data-testid="input-last-name"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">Business Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="glass-input"
                      data-testid="input-email"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">Service Interest</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value} data-testid="select-service">
                      <FormControl>
                        <SelectTrigger className="glass-input">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="glass-card border-border">
                        {serviceOptions.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-medium">Project Budget</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value} data-testid="select-budget">
                      <FormControl>
                        <SelectTrigger className="glass-input">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="glass-card border-border">
                        {budgetOptions.map((budget) => (
                          <SelectItem key={budget} value={budget}>
                            {budget}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">Project Details</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project goals, timeline, and specific requirements..."
                      className="glass-input min-h-[120px] resize-none"
                      data-testid="textarea-message"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                type="submit" 
                disabled={submitMutation.isPending}
                variant="glass-3d"
                size="default"
                className="flex-1"
                data-testid="button-submit-inquiry"
              >
                {submitMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Project Inquiry
                  </>
                )}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                size="default"
                onClick={() => setOpen(false)}
                data-testid="button-cancel"
              >
                Cancel
              </Button>
            </div>

            <div className="text-center pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                🔒 Your information is secure and will never be shared
              </p>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}