import { Quote, Star, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "أحمد الخالدي",
    role: "مؤسس شركة تقنية",
    content: "عمل احترافي ممتاز! قام ببناء نظام إدارة كامل لشركتنا في وقت قياسي. التعامل معه كان سهلاً والنتيجة فاقت توقعاتنا.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "سارة العمري",
    role: "صاحبة متجر إلكتروني",
    content: "بنى لي منصة تجارة إلكترونية رائعة مع كل الميزات التي احتاجها. المبيعات تضاعفت خلال أشهر قليلة!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "محمد الفيصل",
    role: "مدير عمليات",
    content: "نظام الأتمتة الذي طوره لنا وفّر علينا ساعات من العمل اليومي. حقاً محترف ويفهم احتياجات الشركات.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">آراء العملاء</span>
          </div>
          
          <h2 className="section-title">
            <span className="text-foreground">ماذا يقول </span>
            <span className="gradient-text">عملائي</span>
          </h2>
          
          <p className="section-subtitle">
            آراء حقيقية من عملاء سعداء بالنتائج التي حققناها معاً
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card-hover p-8 rounded-2xl relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
