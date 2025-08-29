"use server";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSolution } from "@/ai/flows/advisor";
import type { Solution } from "@/ai/schema/advisor";

const formSchema = z.object({
  requirements: z.string().min(20, {
    message: "Please describe your needs in at least 20 characters.",
  }),
});

export default function SolutionAdvisor() {
  const [solution, setSolution] = useState<Solution | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requirements: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setSolution(null);
    try {
      const result = await getSolution(values);
      setSolution(result);
    } catch (error) {
      console.error("Error getting solution:", error);
      // You might want to show an error toast here
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="advisor" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Your Personal Solution Advisor
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Describe your property and needs, and let our AI craft a custom
            solar and security plan for you.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Describe Your Needs</CardTitle>
              <CardDescription>
                Provide details like property size, average electricity usage,
                security concerns, and specific areas you want to monitor.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="requirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Requirements</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your requirements"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Wand2 className="mr-2 h-4 w-4" />
                    )}
                    Get My Custom Advice
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        {loading && (
          <div className="mt-8 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">
              Analyzing your needs and crafting a solution...
            </p>
          </div>
        )}
        {solution && (
          <div className="mt-8 max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Your Custom Recommendation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    Solar Solution
                  </h3>
                  <p className="text-muted-foreground">
                    {solution.solarRecommendation}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    CCTV Security Solution
                  </h3>
                  <p className="text-muted-foreground">
                    {solution.cctvRecommendation}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
