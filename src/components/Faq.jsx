import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const faqItems = [
  {
    question: "What is ISA and who can join?",
    answer:
      "The Indian Students' Association (ISA) is a student-led organization at ASU that promotes Indian culture, community, and student support. Any ASU student, regardless of nationality, is welcome to join and participate in our events.",
  },
  {
    question: "Do I need to be Indian to attend ISA events?",
    answer:
      "Not at all! ISA events are open to everyone. We encourage students from all backgrounds to join us in celebrating Indian culture, festivals, and community activities.",
  },
  {
    question: "What kind of events does ISA organize?",
    answer:
      "ISA hosts a variety of events including cultural festivals like Diwali and Holi, social mixers, networking events, game nights, and collaborative events with other student organizations.",
  },
  {
    question: "How can I become a member or join the ISA team?",
    answer:
      "You can join ISA by attending our events or signing up through our social media and website. We also have recruitment cycles where you can apply to be part of the core team.",
  },
  {
    question: "How does ISA support new students at ASU?",
    answer:
      "ISA helps new students by providing guidance on housing, academics, campus life, and connecting them with a supportive community to make their transition smoother.",
  },
];

export default function Faq() {
  return (
    <section id="Faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              Everything you need to know about ISA events.
            </p>
          </div>
          <div className="flex justify-center">
            <Accordion
              type="single"
              collapsible
              defaultValue="shipping"
              className="max-w-lg bg"
            >
              {faqItems.map((Item, Index) => {
                return (
                  <>
                    <AccordionItem value={`index${Index}`}>
                      <AccordionTrigger>{Item.question}</AccordionTrigger>
                      <AccordionContent>{Item.answer}</AccordionContent>
                    </AccordionItem>
                  </>
                );
              })}
            </Accordion>
          </div>
          <div className="flex justify-center pt-10">
            <Button variant="indian" size="sm">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
