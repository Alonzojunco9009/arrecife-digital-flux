import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
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
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import arrecifeLogo from "@/assets/arrecife-logo.png";

const contactSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es demasiado largo"),
  email: z.string().trim().email("Email inválido").max(255, "El email es demasiado largo"),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional(),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000, "El mensaje es demasiado largo"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const submissionData = {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        message: data.message,
      };

      const { error } = await supabase
        .from("contact_submissions")
        .insert([submissionData]);

      if (error) throw error;

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 bg-background py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <img
              src={arrecifeLogo}
              alt="Arrecife Consultores"
              className="h-24 mx-auto mb-8 animate-fade-in-up"
            />
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4 animate-fade-in-up">
              Escala tu negocio
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Cuéntanos sobre tu proyecto
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tu nombre"
                        {...field}
                        className="bg-card border-border focus:border-secondary transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        {...field}
                        className="bg-card border-border focus:border-secondary transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+52 123 456 7890"
                        {...field}
                        className="bg-card border-border focus:border-secondary transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nombre de tu empresa"
                        {...field}
                        className="bg-card border-border focus:border-secondary transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cuéntanos sobre tu proyecto..."
                        className="min-h-[150px] bg-card border-border focus:border-secondary transition-colors resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-secondary text-primary-foreground transition-colors"
                size="lg"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </Form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;